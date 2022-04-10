import { NextFunction, Request, Response } from 'express';

import NguoiDungModel from '../models/nguoiDung';
import { ReS } from './../utils/reponse';
import lichSuMuaHangModel from '../models/lichSuMuaHang';

export const DatHangController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if ((req as any).user.gioHang.length < 1) {
      return next('Không tìm thấy giỏ hàng');
    }
    if (!(req as any).user.soDt && !(req as any).user.diaChi) {
      return next('Bạn chưa nhập đầy dủ thông tin');
    }
    lichSuMuaHangModel.findBeforeByProduct((req as any).user);
    (req as any).user.gioHang = [];
    await (req as any).user.save();
    const lichSuMuaHangUser = await lichSuMuaHangModel.find({ idNguoiDung: (req as any).user._id.toString() });
    return res.status(200).json(ReS(200, lichSuMuaHangUser));
  } catch (error) {
    next(error);
  }
};
//user
export const XemLichSuMuaHangUserController = async (req: Request, res: Response, next: NextFunction) => {
  let _id = (req as any).params.id;
  try {
    if (_id) {
      const lichSuMuaHang = await lichSuMuaHangModel.findOne({ _id, idNguoiDung: (req as any).user._id.toString() });
      return res.status(200).json(ReS(200, lichSuMuaHang));
    }
    const lichSuMuaHang = await lichSuMuaHangModel
      .find({ idNguoiDung: (req as any).user._id.toString() })
      .skip((req as any).query.skip)
      .limit((req as any).query.limit);
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};

export const XemLichSuMuaHangAllUserController = async (req: Request, res: Response, next: NextFunction) => {
  let _id = (req as any).params.id;
  let trangThai = req.query.trangThai;
  try {
    if (_id) {
      const lichSuMuaHang = await lichSuMuaHangModel.findById({ _id });
      return res.status(200).json(ReS(200, lichSuMuaHang));
    }
    if (trangThai !== undefined) {
      const lichSuMuaHang = await lichSuMuaHangModel
        .find({ trangThai })
        .skip((req as any).query.skip)
        .limit((req as any).query.limit)
        .sort({ ngayDat: 'desc' });
      return res.status(200).json(ReS(200, lichSuMuaHang));
    }
    const lichSuMuaHang = await lichSuMuaHangModel
      .find()
      .skip((req as any).query.skip)
      .limit((req as any).query.limit)
      .sort({ ngayDat: 'desc' });
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};

export const XemTatCaTrangThaiController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const trangThaiArray = ['chờ xác nhận', 'đã xác nhận', 'đang giao', 'giao thành công'];
    return res.status(200).json(ReS(200, trangThaiArray));
  } catch (error) {
    next(error);
  }
};

export const ThayDoiTrangThaiMuaHangContrller = async (req: Request, res: Response, next: NextFunction) => {
  let _id = (req as any).params.id;
  try {
    if (!req.body.trangThai) {
      return next('không tìm thấy trạng thái');
    }
    const lichSuMuaHang = await lichSuMuaHangModel.findById({ _id });
    if (lichSuMuaHang === null) {
      return next('không tìm thấy sản phẩm');
    }
    lichSuMuaHang.trangThai = req.body.trangThai;
    await lichSuMuaHang.save();
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};
