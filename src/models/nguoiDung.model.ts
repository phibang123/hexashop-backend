import { Model, Schema, model } from 'mongoose';
import SanPhamsModel, { ISanPham, ISanPhamModel } from './sanPham.model';

import { DEFATUL_ADMIN } from '../configs/index';
import { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import validator from 'validator';

export type IGioiHang = {
  _idSanPham: string;
  tenSanPham: string;
  soLuong: number;
  sale: boolean;
  phanTramSale: number;
  giaTien: number;
  thanhTien: number;
  hinhAnh: string;
  ngayThem?: string;
};

export interface IThich {
  _idSanPham: string;
  tenSanPham: string;
  hinhAnh: string;
  giaTien: number;
}

export interface IComment {
  _idSanPham: string;
  tenSanPham: string;
  hinhAnh: string;
  giaTien: number;
  noiDungComment: string;
}

interface INguoiDungInput {
  taiKhoan: string;
  matKhau: string;
  email: string;
  diaChi?: string;
  hoTen: string;
  avatar: string;
  soDt: string;
  sex: 'Nam' | 'Nữ';
}

export interface INguoiDung extends INguoiDungInput {
  _id: object;
  adminInWeb: boolean;
  gioHang: IGioiHang[];
  thich: IThich[];
}

export interface INguoiDungModel extends Model<INguoiDung> {
  myStaticMethod(): number;
  findByCredentials(taiKhoan: string, matKhau: string): INguoiDung;
  findBeforeCreate(body: INguoiDungInput): INguoiDung;
  findBeforeLike(_id: string, sanPham: any): INguoiDung;
  findByUserAddDelivery(_id: string, idSanPham: string): INguoiDung;
  findByUserreductionDelivery(_id: string, idSanPham: string): INguoiDung;
  findByUserDeleteProductDelivery(_id: string, idSanPham: string): INguoiDung;
}

const nguoiDungSchema = new Schema<INguoiDung, INguoiDungModel>(
  {
    taiKhoan: {
      type: String,
      required: [true, 'tài khoản bị trống'],
      trim: true,
      unique: true,
      validate(value: string) {
        if (value.length <= 6 && value.length >= 15) {
          throw new Error('Tài khoản phải lớn hơn 6 và nhỏ hơn 15');
        }
      },
    },
    sex: {
      type: String,
      trim: true,
      required: [true, 'không tìm thấy giới tính'],
    },
    matKhau: {
      type: String,
      required: [true, 'mật khẩu bị trống'],
      min: [6, 'mật khẩu quá ngắn'],
      max: [32, 'mật khẩu quá dài'],
      trim: true,
      set: (value: string) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        return hash;
      },
    },
    email: {
      type: String,
      required: [true, 'email bị trống'],
      trim: true,
      unique: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error('email invalid');
        }
      },
    },
    diaChi: {
      type: String,
      require: false,
      trim: true,
    },
    hoTen: {
      type: String,
      required: [true, 'hộ tên bị trống'],
      trim: true,
    },
    soDt: {
      type: String,
      required: [true, 'số điện thoại bị trống'],
      trim: true,
      validate(value: string) {
        if (value.length <= 6 && value.length >= 15) {
          throw new Error('Số điện thoại phải lớn hơn 6 và nhỏ hơn 15');
        }
      },
    },
    avatar: {
      type: String,
      default:
        'https://media.gettyimages.com/photos/businesswoman-icon-as-avatar-profile-picture-picture-id517322299?b=1&k=20&m=517322299&s=170667a&w=0&h=4J0qt00mt4jvEn8uKQ3203RiyVcOUOcF01DalYLRmbg=',
      trim: true,
    },
    adminInWeb: {
      type: Boolean,
      require: true,
      default: false,
    },
    gioHang: [
      {
        _idSanPham: {
          type: String,
          require: true,
          trim: true,
        },
        tenSanPham: {
          type: String,
          require: true,
          trim: true,
        },
        soLuong: {
          type: Number,
          require: true,
          trim: true,
        },
        sale: {
          type: Boolean,
          require: true,
        },
        phanTramSale: {
          type: Number,
          require: true,
        },
        thanhTien: {
          type: Number,
          require: false,
          trim: true,
        },
        giaTien: {
          type: Number,
          require: false,
          trim: true,
        },

        hinhAnh: {
          type: String,
          require: false,
          trim: true,
        },
        ngayThem: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    thich: [
      {
        _idSanPham: {
          type: String,
          require: true,
          trim: true,
        },
        tenSanPham: {
          type: String,
          require: true,
          trim: true,
        },
        hinhAnh: {
          type: String,
          require: true,
          trim: true,
        },
        giaTien: {
          type: Number,
          require: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
nguoiDungSchema.static('myStaticMethod', function myStaticMethod() {
  return 42;
});

//collection
nguoiDungSchema.virtual('lichSuMuaHangs', {
  ref: 'LichSuMuaHang',
  localField: '_id',
  foreignField: 'ownerLichSuMua',
});

nguoiDungSchema.virtual('hoTroNguoiDungs', {
  ref: 'HoTroNguoiDung',
  localField: '_id',
  foreignField: 'ownerNoiDung',
});

nguoiDungSchema.static('findByCredentials', async function (taiKhoan: string, matKhau: string) {
  try {
    const user: INguoiDung | null = await NguoiDungModel.findOne({
      taiKhoan,
    });
    if (!user) {
      throw new Error('tài khoản và mật khẩu không chính sác');
    }
    const isMatch = await bcrypt.compare(matKhau, user.matKhau);
    if (!isMatch) {
      throw new Error('tài khoản và mật khẩu không chính sác');
    }

    return user;
  } catch (error) {
    throw new Error('tài khoản và mật khẩu không chính sác');
  }
});

nguoiDungSchema.static('findBeforeCreate', async function (body: INguoiDungInput) {
  const user: INguoiDung | null = await NguoiDungModel.findOne({
    $or: [{ taiKhoan: body.taiKhoan }, { email: body.email }, { soDt: body.soDt }],
  });
  if (!user) {
    body.avatar = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`;
    return body;
  } else {
    throw new Error(
      body.taiKhoan === user.taiKhoan ? 'Tài khoản đã tồn tại' : body.email === user.email ? 'email đã tồn tại' : 'số điện thoại đã tồn tại'
    );
  }
});

nguoiDungSchema.static('findBeforeLike', async function (_id, sanPham: any) {
  const idSanPham = await sanPham._id.toString();
  const user = await NguoiDungModel.findOne({ _id });
  const sanPhamLike = await NguoiDungModel.findOne({
    _id,
    thich: { $elemMatch: { _idSanPham: idSanPham } },
  });
  //const sanPhamLike: IThich | null = await NguoiDungModel.findOne({ _id, 'thich._idSanPham': idSanPham });
  if (user !== null) {
    if (sanPhamLike === null) {
      user.thich.push({
        _idSanPham: sanPham._id.toString(),
        giaTien: sanPham.giaTien,
        hinhAnh: sanPham.hinhAnh,
        tenSanPham: sanPham.tenSanPham,
      });
      await SanPhamsModel.findBeforeSetLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString());
      await user.save();
      return user;
    } else {
      await NguoiDungModel.updateOne({ _id }, { $pull: { thich: { _idSanPham: idSanPham } } }, { safe: true, multi: true });
      await SanPhamsModel.findBeforeSetUnLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString());
      const userMul = await NguoiDungModel.findOne({ _id });
      return userMul;
    }
  } else {
    throw new Error('Không tìm thấy tài khoản');
  }
});

nguoiDungSchema.static('findByUserAddDelivery', async function (_id: string, idSanPham: string) {
  const user = await NguoiDungModel.findOne({ _id });
  const sanPhamTrongGioHang = await NguoiDungModel.findOne({ _id, 'gioHang._idSanPham': idSanPham });
  const sanPham = await SanPhamsModel.findOne({ _id: idSanPham });
  if (user && sanPham) {
    if (sanPhamTrongGioHang === null) {
      //let pushGioiHang: Omit<IGioiHang, keyof ISanPhamModel> = sanPham;

      if (sanPham.soLuong <= 0) {
        throw new Error('Sản phẩm đã hết');
      } else {
        user.gioHang.push({
          _idSanPham: idSanPham,
          giaTien: sanPham.giaTien,
          thanhTien: sanPham.thanhTien,
          hinhAnh: sanPham.hinhAnh,
          ngayThem: new Date().toString(),
          phanTramSale: sanPham.phanTramSale,
          sale: sanPham.sale,
          soLuong: 1,
          tenSanPham: sanPham.tenSanPham,
        });
        sanPham.soLuong--;
        await sanPham.save();
        await user.save();
        return user;
      }
    } else {
      if (sanPham.soLuong <= 0) {
        throw new Error('Sản phẩm đã hết');
      } else {
        const userUpdate = await NguoiDungModel.findOneAndUpdate(
          { _id },
          {
            $inc: {
              'gioHang.$[el].soLuong': +1,
              'gioHang.$[el].giaTien': +sanPham.giaTien,
              'gioHang.$[el].thanhTien': +sanPham.thanhTien,
            },
          },
          {
            arrayFilters: [{ 'el._idSanPham': idSanPham }],
            new: true,
          }
        );
        sanPham.soLuong--;

        await sanPham.save();
        return userUpdate;
      }
    }
  } else {
    throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
  }
});

nguoiDungSchema.static('findByUserreductionDelivery', async function (_id: string, idSanPham: string) {
  const sanPhamTrongGioHang = await NguoiDungModel.findOne({ _id, 'gioHang._idSanPham': idSanPham });
  const userTest = await NguoiDungModel.findOne({ _id }).select({
    gioHang: { $elemMatch: { _idSanPham: idSanPham } },
  });
  const sanPham = await SanPhamsModel.findOne({ _id: idSanPham });

  if (sanPham && sanPhamTrongGioHang) {
    if (userTest?.gioHang[0].soLuong === 1) {
      await NguoiDungModel.findByIdAndUpdate(
        _id,
        { $pull: { gioHang: { _idSanPham: idSanPham } } },
        { safe: true, upsert: true }
        // { luotThich: { $pull: { idNguoiDungs: { idNguoiDung: idNguoiDungStr } } } },
        // { safe: true, multi: true }
      );
      sanPham.soLuong++;
      await sanPham.save();
      const user = await NguoiDungModel.findOne({ _id });
      return user;
    } else {
      const userUpdate = await NguoiDungModel.findOneAndUpdate(
        { _id },
        {
          $inc: {
            'gioHang.$[el].soLuong': -1,
            'gioHang.$[el].giaTien': -sanPham.giaTien,
            'gioHang.$[el].thanhTien': -sanPham.thanhTien,
          },
        },
        {
          arrayFilters: [{ 'el._idSanPham': idSanPham }],
          new: true,
        }
      );

      sanPham.soLuong++;
      await sanPham.save();
      return userUpdate;
    }
  } else {
    throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
  }
});

nguoiDungSchema.static('findByUserDeleteProductDelivery', async function (_id: string, idSanPham: string) {
  const sanPhamTrongGioHang = await NguoiDungModel.findOne({ _id, 'gioHang._idSanPham': idSanPham });
  const userTest = await NguoiDungModel.findOne({ _id }).select({
    gioHang: { $elemMatch: { _idSanPham: idSanPham } },
  });
  const sanPham = await SanPhamsModel.findOne({ _id: idSanPham });

  if (sanPham && sanPhamTrongGioHang) {
    if (userTest?.gioHang[0]) {
      const soLuong = userTest?.gioHang[0].soLuong;
      await NguoiDungModel.findByIdAndUpdate(_id, { $pull: { gioHang: { _idSanPham: idSanPham } } }, { safe: true, upsert: true });
      sanPham.soLuong = sanPham.soLuong + soLuong;
      console.log(sanPham.soLuong);
      await sanPham.save();
      const user = await NguoiDungModel.findOne({ _id });
      return user;
    } else {
      throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
    }
  } else {
    throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
  }
});

nguoiDungSchema.methods.toJSON = function () {
  const nguoiDung = this;

  //chuyển nó về toObject để có thể xóa key trong object
  const nguoiDungObject = nguoiDung.toObject();
  delete nguoiDungObject.matKhau;
  return nguoiDungObject;
};

const NguoiDungModel = model<INguoiDung, INguoiDungModel>('nguoiDungSchema', nguoiDungSchema);

// NguoiDungModel.findOneAndUpdate(DEFATUL_ADMIN, DEFATUL_ADMIN, { new: true, upsert: true }, function () {});

export default NguoiDungModel;
