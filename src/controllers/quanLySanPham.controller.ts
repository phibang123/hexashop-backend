import { ReE, ReS } from '../utils/reponse';
import { Request, Response } from 'express';

import SanPhamsModel from '../models/sanPham.model';
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
export const LayTatCaSanPhamController = async (req: Request, res: Response) => {
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
    const allSanPham = await SanPhamsModel.find({ categories: match.categories })
      .sort(sort)
      .skip((req as any).query.skip)
      .limit((req as any).query.limit);
    res.status(200).json(ReS(200, allSanPham));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    return res.status(400).json(ReE(400, error.message));
  }
};

export const TimSanPhamTheoTenController = async (req: Request, res: Response) => {
  try {
    let tenSanPham = (req as any).query.tenSanPham;
    const allSanPham = await SanPhamsModel.find({ tenSanPham: { $regex: '.*' + tenSanPham + '.*' } });
    res.status(200).json(ReS(200, allSanPham));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    return res.status(400).json(ReE(400, error.message));
  }
};

export const TimSanPhamTheoIdController = async (req: Request, res: Response) => {
  try {
    let idSanPham = req.params.id;
    const oneSanPham = await SanPhamsModel.findOne({ _id: idSanPham });
    res.status(200).json(ReS(200, oneSanPham));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    return res.status(400).json(ReE(400, error.message));
  }
};

export const ThemSanPhamController = async (req: Request, res: Response) => {
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
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    return res.status(400).json(ReE(400, error.message));
  }
};
