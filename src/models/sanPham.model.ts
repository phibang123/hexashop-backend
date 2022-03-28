import { Model, Schema, model } from 'mongoose';

import { DEFATUL_SANPHAM } from './../configs/index';
import { NextFunction } from 'express';
import mongoose from 'mongoose';

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

export interface ISanPham {
  _id: object;
  tenSanPham: string;
  giaTien: number;
  listHinhAnh: IHinhAnh[];
  sale: boolean;
  phanTramSale: number;
  thanhTien: number;
  categories: string;
  hinhAnh: string;
  luotThich: ILuotThich;

  comment: IComment[];
  soLuong: number;
}

export interface ISanPhamModel extends Model<ISanPham>, Document {
  findBeforeSetLike(objtec: object, idSanPham: string): void;
  findBeforeSetUnLike(objtec: object, idSanPham: string): void;
}

const sanPhamSchema = new Schema<ISanPham, ISanPhamModel>(
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
          },
          tenNguoiDung: {
            type: String,
            // unique: true,
            // sparse: true,
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
    soLuong: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

sanPhamSchema.pre('save', async function (this, next) {
  if (this.isModified('phanTramSale') && this.isModified('giaTien')) {
    this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
    this.sale = true;
    return next();
  } else if (!this.isModified('phanTramSale') && this.isModified('sale') && this.isModified('giaTien')) {
    this.thanhTien = this.giaTien;
    this.sale = false;
    return next();
  } else if (this.isModified('phanTramSale') && !this.isModified('sale') && this.isModified('giaTien')) {
    this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
    this.sale = true;
    return next();
  } else if (this.isModified('giaTien')) {
    this.thanhTien = this.giaTien;
    return next();
  } else {
    return next();
  }
});

sanPhamSchema.static('findBeforeSetLike', async function ({ idNguoiDung, tenNguoiDung }, idSanPham: string) {
  const sanPham = await SanPhamsModel.findOne({ _id: idSanPham });
  const idNguoiDungStr = await idNguoiDung.toString();

  if (sanPham !== null) {
    const sanPhamLike = await SanPhamsModel.findOne({
      _id: idSanPham,
      'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
    });

    if (sanPhamLike === null) {
      sanPham.luotThich.idNguoiDungs.push({ idNguoiDung, tenNguoiDung });
      sanPham.luotThich.tongLuotThich = sanPham.luotThich.idNguoiDungs.length;
      await sanPham.save();
    } else {
      return;
    }
  } else {
    throw new Error('ERROR');
  }
});

sanPhamSchema.static('findBeforeSetUnLike', async function ({ idNguoiDung, tenNguoiDung }, idSanPham: string) {
  const sanPham = await SanPhamsModel.findOne({ _id: idSanPham });
  const idNguoiDungStr = await idNguoiDung.toString();
  if (sanPham !== null) {
    const sanPhamLike = await SanPhamsModel.findOne({
      _id: idSanPham,
      'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
    });

    if (sanPhamLike === null) {
      return;
    } else {
      await SanPhamsModel.findByIdAndUpdate(
        idSanPham,
        { $pull: { 'luotThich.idNguoiDungs': { idNguoiDung: idNguoiDungStr } } },
        { safe: true, upsert: true }
        // { luotThich: { $pull: { idNguoiDungs: { idNguoiDung: idNguoiDungStr } } } },
        // { safe: true, multi: true }
      );
      sanPham.luotThich.tongLuotThich--;
      await sanPham.save();
    }
  } else {
    throw new Error('ERROR');
  }
});

const SanPhamsModel = model<ISanPham, ISanPhamModel>('sanPhamSchema', sanPhamSchema);

//export const SanPhamsModel = model<ISanPham>('sanPhamSchema', sanPhamSchema) as ISanPhamModel;

DEFATUL_SANPHAM.forEach(async (n) => {
  await SanPhamsModel.findOneAndUpdate(n, n, { new: true, upsert: true });
});

export default SanPhamsModel;
