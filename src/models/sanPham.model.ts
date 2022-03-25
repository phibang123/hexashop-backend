import { Model, Schema, model } from 'mongoose';

import { DEFATUL_SANPHAM } from './../configs/index';
import { NextFunction } from 'express';

interface IIdNguoiDung {
  idNguoiDung: string;
  tenNguoiDung: string;
}
interface IComment {
  idNguoiDung: string;
  tenNguoiDung: string;
  avatar: string;
  ngoiDungComment: string;
}

interface ILuotThich {
  tongLuotThich: number;
  idNguoiDungs: IIdNguoiDung[];
}

interface ISize {
  tenSize: string;
  soLuong: number;
}

interface IMauSac {
  tenMauSac: string;
  size: ISize[];
}

interface IHinhAnh {
  hinhAnh: string;
}

interface ISanPham {
  tenSanPham: string;
  giaTien: number;
  listHinhAnh: IHinhAnh[];
  sale: boolean;
  phanTramSale?: number;
  thanhTien?: number;
  categories: string;
  hinhAnh: string;
  luotThich: ILuotThich;

  comment: IComment[];
  mauSac: IMauSac[];
}

interface SanPhamModel extends Model<ISanPham>, Document {
  findBeforeSetLike(objtec: object, idSanPham: string): void;
  findBeforeSetUnLike(objtec: object, idSanPham: string): void;
}

const sanPhamSchema = new Schema<ISanPham, SanPhamModel>(
  {
    tenSanPham: {
      type: String,
      required: [true, 'tên sản phẩm bị trống'],
      trim: true,
    },
    giaTien: {
      type: Number,
      required: [true, 'giá tiền bị trống'],
    },
    listHinhAnh: [
      {
        hinhAnh: {
          type: String,
          default:
            'https://img-cdn.2game.vn/2021/02/28/Hutao-va-nhung-dieu-can-biet-khi-co-nang-ra-mat-game-thu-Genshin-Impact-1.jpg',
        },
      },
    ],
    sale: {
      type: Boolean,
      default: false,
    },
    phanTramSale: {
      type: Number,
      default: 0,
      validate(value: number) {
        if (value < 0 && value > 100) {
          throw new Error('phần trăm sale không phù hợp');
        }
      },
    },
    thanhTien: {
      type: Number,
      default: 0,
    },
    hinhAnh: {
      type: String,
      default:
        'https://img-cdn.2game.vn/2021/02/28/Hutao-va-nhung-dieu-can-biet-khi-co-nang-ra-mat-game-thu-Genshin-Impact-1.jpg',
    },
    categories: {
      type: String,
      required: [true, 'loại sản phẩm bị trống'],
      trim: true,
      ref: 'CategoriModel',
    },
    /**
     * !: sao là object chứa nhiều người dùng
     * TODO: khi thêm 1 sao thì sẽ tính phần trăm dựa theo người dùng
     */
    luotThich: {
      tongLuotThich: {
        type: Number,
        default: 0,
      },
      idNguoiDungs: [
        {
          idNguoiDung: {
            type: String,
            unique: true,
            sparse: true,
          },
          tenNguoiDung: {
            type: String,
            unique: true,
            sparse: true,
          },
        },
      ],
    },
    comment: [
      {
        idNguoiDung: {
          type: String,
          required: true,
          trim: true,
        },
        tenNguoiDung: {
          type: String,
          required: true,
          trim: true,
        },
        avatar: {
          type: String,
          required: true,
          trim: true,
        },
        ngoiDungComment: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    /**
     * !: màu sắc là một mãng chứa size và size chứa số lượng
     * TODO: thêm màu sắc bắt buộc tenMauSac là mã màu, thêm nhiều size và số lượng của tường size
     */
    mauSac: [
      {
        tenMauSac: {
          type: String,
          required: true,
          unique: true,
          sparse: true,
        },
        size: [
          {
            tenSize: {
              required: true,
              type: String,
              unique: true,
              sparse: true,
            },
            soLuong: {
              required: true,
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

sanPhamSchema.pre('save', async function (this, next) {
  if (this.isModified('sale') && this.isModified('phanTramSale') && this.isModified('giaTien')) {
    this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
    return next();
  } else if (this.isModified('giaTien')) {
    this.thanhTien = this.giaTien;
    return next();
  } else {
    return next();
  }
});

sanPhamSchema.static('findBeforeSetLike', async function ({ idNguoiDung, tenNguoiDung }, idSanPham: string) {
  try {
    const sanPham = await SanPhamsModel.findOne({ idSanPham });
    if (sanPham !== null) {
      let idNguoiDungStr = await idNguoiDung.toString();
      const index: number = sanPham.luotThich.idNguoiDungs.findIndex(async (v) => {
        v.idNguoiDung === idNguoiDungStr;
      });
      if (index === -1) {
        sanPham.luotThich.tongLuotThich++;
        sanPham.luotThich.idNguoiDungs.push({ idNguoiDung, tenNguoiDung });
        await sanPham.save();
      } else {
        return;
      }
    } else {
      throw new Error('ERROR');
    }
  } catch (error) {
    throw new Error('ERROR');
  }
});

sanPhamSchema.static('findBeforeSetUnLike', async function ({ idNguoiDung, tenNguoiDung }, idSanPham: string) {
  try {
    const sanPham = await SanPhamsModel.findOne({ idSanPham });

    if (sanPham !== null) {
      let idNguoiDungStr = await idNguoiDung.toString();
      const index: number = sanPham.luotThich.idNguoiDungs.findIndex(async (v) => {
        v.idNguoiDung === idNguoiDungStr;
      });

      if (index === -1) {
        return;
      } else {
        sanPham.luotThich.tongLuotThich--;
        sanPham.luotThich.idNguoiDungs.splice(index, 1);
        await sanPham.save();
      }
    } else {
      throw new Error('ERROR');
    }
  } catch (error) {
    throw new Error('ERROR');
  }
});

const SanPhamsModel = model<ISanPham, SanPhamModel>('sanPhamSchema', sanPhamSchema);

DEFATUL_SANPHAM.forEach(async (n) => {
  await SanPhamsModel.findOneAndUpdate(n, n, { new: true, upsert: true });
});

export default SanPhamsModel;
