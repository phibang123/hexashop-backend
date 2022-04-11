import { NextFunction, Request, Response } from 'express';

import { ISanPhamInput } from './../models/sanPham';
import { ReS } from '../utils/reponse';
import SanPhamsModel from '../models/sanPham';
import { putImagAvatar } from './../utils/putObjectS3Avatar';
import { putImagPicture } from './../utils/putObjectS3Picture';

interface IMath {
  categories?: string;
}

type IColumn = 'giaTien' | 'createdAt';
type ISortBy = 'desc' | 'asc';

interface ISorf {
  giaTien?: number;
  createdAt?: number;
}

//Get /tasks lấy tất cả task của user
//Get /tasks?completed=true lấy task completed true
//Get /tasks?limit=1 lấy task giới hạn 1 task
//Get /tasks?limit=1&skip=1 lấy task giới hạn 1 task ở trang 1, phân trang
//Get /tasks?sortBy=createdAt:desc lấy task sort tăng dần theo ngày hoàn thành
export const LayTatCaSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const match: IMath = {};
  const sort: ISorf = {};

  if (req.query.categories) {
    match.categories = (req as any).query.categories;
  }

  if (req.query.sortBy) {
    const parts: [IColumn, ISortBy] = (req as any).query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }

  try {
    if (match.categories) {
      const allSanPham = await SanPhamsModel.find({ categories: match.categories })
        .sort(sort)
        .skip((req as any).query.skip)
        .limit((req as any).query.limit);
      return res.status(200).json(ReS(200, allSanPham));
    }
    if (req.query.categori) {
      const allSanPham = await SanPhamsModel.find({ categories: { $regex: '.*' + req.query.categori + '.*' } })
        .sort(sort)
        .skip((req as any).query.skip)
        .limit((req as any).query.limit);
      return res.status(200).json(ReS(200, allSanPham));
    }
    const allSanPham = await SanPhamsModel.find()
      .sort(sort)
      .skip((req as any).query.skip)
      .limit((req as any).query.limit);
    return res.status(200).json(ReS(200, allSanPham));
  } catch (error: any) {
    next(error);
  }
};

export const TimSanPhamTheoTenController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let tenSanPham = (req as any).query.tenSanPham;
    const allSanPham = await SanPhamsModel.find({ tenSanPham: { $regex: '.*' + tenSanPham + '.*' } });
    res.status(200).json(ReS(200, allSanPham));
  } catch (error: any) {
    next(error);
  }
};

export const TimSanPhamTheoIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let idSanPham = req.params.id;
    const oneSanPham = await SanPhamsModel.findOne({ _id: idSanPham });
    res.status(200).json(ReS(200, oneSanPham));
  } catch (error: any) {
    next(error);
  }
};

export const ThemSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { picture, ...fromSanPham } = req.body;
    const sanPham = new SanPhamsModel(fromSanPham);
    if ((req as any).file) {
      const urlSanPham = await putImagPicture((req as any).file, req.body.tenSanPham);
      sanPham.hinhAnh = urlSanPham;
    }
    await sanPham.save();
    res.status(201).json(ReS(201, sanPham));
  } catch (error: any) {
    next(error);
  }
};

export const ThemSoLuongSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;
  if (!req.body.soLuong) {
    return next('Bạn chưa thêm số lượng');
  }
  try {
    const sanPham = await SanPhamsModel.findById(_id);
    if (sanPham === null) {
      return next('Không tìm thấy sản phẩm');
    }
    sanPham.soLuong = sanPham.soLuong + req.body.soLuong;
    await sanPham.save();
    return res.status(200).json(ReS(200, sanPham));
  } catch (error) {
    next(error);
  }
};

export const GiamSoLuongSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;
  if (!req.body.soLuong) {
    return next('Bạn chưa thêm số lượng');
  }
  try {
    const sanPham = await SanPhamsModel.findById(_id);
    if (sanPham === null) {
      return next('Không tìm thấy sản phẩm');
    }
    sanPham.soLuong = sanPham.soLuong - req.body.soLuong;
    if (sanPham.soLuong < 0) {
      sanPham.soLuong = 0;
    }
    await sanPham.save();
    return res.status(200).json(ReS(200, sanPham));
  } catch (error) {
    next(error);
  }
};

export const ChinhSuaSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;

  const updates = Object.keys(req.body);
  const allowedUpdates = ['categories', 'giaTien', 'phanTramSale', 'sale', 'soLuong', 'tenSanPham', 'thanhTien'];
  const isValiOperetion = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValiOperetion) {
    return next('hãy sửa những dử liệu yêu cầu');
  }
  try {
    const sanPham: any = await SanPhamsModel.findById({ _id });
    if (sanPham === null) {
      return next('không tìm thấy sản phẩm');
    }
    updates.forEach((update) => (sanPham[update] = req.body[update]));
    if ((req as any).file) {
      const urlSanPham = await putImagPicture((req as any).file, req.body.tenSanPham);
      sanPham.hinhAnh = urlSanPham;
    }

    await sanPham.save();

    return res.status(200).json(ReS(200, sanPham));
  } catch (error) {
    next(error);
  }
};

export const ChinhSuaHinhAnhSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;

  try {
    const sanPham: any = await SanPhamsModel.findById({ _id });
    if (sanPham === null) {
      return next('không tìm thấy sản phẩm');
    }
    if (!(req as any).file) {
      return next('không tìm Picture');
    }
    const urlSanPham = await putImagPicture((req as any).file, req.body.tenSanPham);
    sanPham.hinhAnh = urlSanPham;
    await sanPham.save();

    return res.status(200).json(ReS(200, sanPham));
  } catch (error) {
    next(error);
  }
};

export const XoaSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.id;

  try {
    await SanPhamsModel.findByIdAndDelete({ _id });

    return res.status(200).json(ReS(200, 'xóa sản phẩm thành công'));
  } catch (error) {
    next(error);
  }
};
