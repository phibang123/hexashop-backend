import { NextFunction, Request, Response } from 'express';
import { ReE, ReS } from './../utils/reponse';

import lichSuMuaHangModel from '../models/lichSuMuaHang.model';

export const DatHangController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if ((req as any).user.gioHang.length < 1) {
      return res.status(400).json(ReE(400, 'Không tìm thấy giỏ hàng'));
    }
    if (!(req as any).user.soDt && !(req as any).user.diaChi) {
      return res.status(400).json(ReE(400, 'Bạn chưa nhập đầy dủ thông tin'));
    }
    const lichSuMuaHang = await lichSuMuaHangModel.findBeforeByProduct((req as any).user);
    (req as any).user.gioHang = [];
    await (req as any).user.save();
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};

//user
export const XemLichSuMuaHangUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log((req as any).user._id.toString());
    const lichSuMuaHang = await lichSuMuaHangModel.find({ idNguoiDung: (req as any).user._id.toString() });
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};

export const XemLichSuMuaHangAllUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const lichSuMuaHang = await lichSuMuaHangModel.find();
    return res.status(200).json(ReS(200, lichSuMuaHang));
  } catch (error) {
    next(error);
  }
};
