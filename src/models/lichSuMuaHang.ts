import { Model, Schema, model } from 'mongoose';

export interface IThich {
  _idSanPham: string;
  tenSanPham: string;
  hinhAnh: string;
  giaTien: number;
}

export interface INguoiDungInput {
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

export interface IGioiHang {
  _idSanPham: string;
  tenSanPham: string;
  soLuong: number;
  sale: boolean;
  phanTramSale: number;

  giaTien: number;
  thanhTien: number;
  hinhAnh: string;
  ngayThem?: string;
}

export interface ILicSuMuaHang {
  idNguoiDung: string;
  taiKhoan: string;
  //matKhau: string;
  email: string;
  diaChi?: string;
  hoTen: string;
  avatar: string;
  soDt: string;

  sex: 'Nam' | 'Nữ';
  trangThai: 'chờ xác nhận' | 'đã xác nhận' | 'đang giao' | 'giao thành công';
  ngayDat?: string;
  tongTien: number;
  soTienGiam: number;
  tongSanPham: IGioiHang[];
}

export interface LichSuMuaHangModel extends Model<ILicSuMuaHang> {
  findBeforeByProduct(user: INguoiDung): ILicSuMuaHang;
}

const lichSuMuaHangSchema = new Schema<ILicSuMuaHang, LichSuMuaHangModel>(
  {
    idNguoiDung: {
      type: String,
      trim: true,
    },
    taiKhoan: {
      type: String,
      trim: true,
      required: [true, 'tài khoản bị trống'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'email bị trống'],
    },
    diaChi: {
      type: String,
      trim: true,
      required: [true, 'địa chỉ không được trống'],
    },
    hoTen: {
      type: String,
      trim: true,
      required: [true, 'họ tên bị trống'],
    },
    avatar: {
      type: String,
      trim: true,
    },
    soDt: {
      type: String,
      trim: true,
      required: [true, 'số điện thoại bị trống'],
    },
    sex: {
      type: String,
      trim: true,
      required: [true, 'giới tính bị trống'],
    },
    trangThai: {
      type: String,
      trim: true,
      default: 'chờ xác nhận',
    },
    ngayDat: {
      type: Date,
      default: Date.now,
    },
    tongTien: {
      type: Number,
    },
    soTienGiam: {
      type: Number,
    },

    tongSanPham: [
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
        // ngayThem: {
        //   type: Date,
        //   default: Date.now,
        // },
      },
    ],
  },
  {
    timestamps: false,
  }
);

lichSuMuaHangSchema.static('findBeforeByProduct', async function (user: INguoiDung) {
  if (!user) {
    throw new Error('Error');
  }

  const lucSuMua = await lichSuMuaHangModel.create({
    idNguoiDung: user._id.toString(),
    taiKhoan: user.taiKhoan,
    email: user.email,
    diaChi: user.diaChi,
    hoTen: user.hoTen,
    avatar: user.avatar,
    soDt: user.soDt,
    sex: user.sex,

    tongSanPham: user.gioHang,
    tongTien: user.gioHang.reduce((a: number, b: IGioiHang) => {
      return a + b.thanhTien;
    }, 0),
    soTienGiam:
      user.gioHang.reduce((a: number, b: IGioiHang) => {
        return a + b.giaTien;
      }, 0) -
      user.gioHang.reduce((a: number, b: IGioiHang) => {
        return a + b.thanhTien;
      }, 0),
  });

  return lucSuMua;
});

const lichSuMuaHangModel = model<ILicSuMuaHang, LichSuMuaHangModel>('lichSuMuaHangSchema', lichSuMuaHangSchema);

export default lichSuMuaHangModel;
