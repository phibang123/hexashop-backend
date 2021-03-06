import { NextFunction, Request, Response } from 'express';

import NguoiDungModel from '../models/nguoiDung';
import { ReS } from '../utils/reponse';
import SanPhamsModel from '../models/sanPham';
import jwt from 'jsonwebtoken';
import lichSuMuaHangModel from '../models/lichSuMuaHang';
import { putImagAvatar } from '../utils/putObjectS3Avatar';
import { secret_key } from '../configs/index';
import { sendWellcomeEmail } from '../email/account';

export const DangKyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userCheck = await NguoiDungModel.findBeforeCreate((req as any).body);
    const userCreate = new NguoiDungModel(userCheck);
    await userCreate.save();
    await sendWellcomeEmail(userCreate.email, userCreate.hoTen);
    res.status(201).json(ReS(201, userCreate));
  } catch (error: any) {
    next(error);
  }
};

export const DangNhapController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await NguoiDungModel.findByCredentials((req as any).body.taiKhoan, (req as any).body.matKhau);
    const token = await jwt.sign({ _id: user._id.toString() }, secret_key);
    return res.status(200).json(ReS(200, { token, user }, 'Đăng nhập thành công'));
  } catch (error: any) {
    next(error);
  }
};
  
export const DangNhapAdminController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await NguoiDungModel.findByCredentialsAdmin((req as any).body.taiKhoan, (req as any).body.matKhau);
    const token = await jwt.sign({ _id: user._id.toString() }, secret_key);
    return res.status(200).json(ReS(200, { token, user }, 'Đăng nhập thành công'));
  } catch (error: any) {
    next(error);
  }
};

export const LayThongTinProfileController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    next(error);
  }
};

export const UpLoadAvatarController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    (req as any).user.avatar = await putImagAvatar((req as any).file, (req as any).user._id);
    await (req as any).user.save();
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    next(error);
  }
};

export const ChinhSuaNguoiDungController = async (req: Request, res: Response, next: NextFunction) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['diaChi', 'email', 'password', 'hoTen', 'matKhau', 'sex', 'soDt'];
  const isValiOperetion = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValiOperetion) {
    return next('hãy sửa những dử liệu yêu cầu');
  }
  try {
    updates.forEach((update) => ((req as any).user[update] = req.body[update]));
    await (req as any).user.save();
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    next(error);
  }
};

export const ThichSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;

    const oneSanPham = await SanPhamsModel.findById(_id);

    if (oneSanPham === null) {
      return next({ error: 'Không tìm thấy sản phẩm' });
    }

    const user = await NguoiDungModel.findBeforeLike((req as any).user._id, oneSanPham);

    return res.status(200).json(ReS(200, user));
  } catch (error: any) {
    next(error);
  }
};

export const CommemtSanPhamController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let _id = req.params.id;

    if (req.body.comment === null) {
      return next('Comment rỗng');
    }
    const userComment: string = req.body.comment;

    const sanPham = await SanPhamsModel.findOne({ _id });

    if (sanPham === null) {
      return next('Không tìm thấy sản phẩm');
    }
    sanPham.comment.push({
      idNguoiDung: (req as any).user._id.toString(),
      tenNguoiDung: (req as any).user.hoTen,
      avatar: (req as any).user.avatar,
      ngoiDungComment: userComment,
    });

    await sanPham.save();

    return res.status(200).json(ReS(200, sanPham, 'Comment thành công'));
  } catch (error: any) {
    next(error);
  }
};

export const ThemSanPhamVaoGioHangController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let _id = req.params.id;
    const user = await NguoiDungModel.findByUserAddDelivery((req as any).user._id.toString(), _id);
    return res.status(200).json(ReS(200, user));
  } catch (error: any) {
    next(error);
  }
};

export const GiamSoLuongSanPhamTrongGioHangController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let _id = req.params.id;
    const user = await NguoiDungModel.findByUserreductionDelivery((req as any).user._id.toString(), _id);
    //const user = await NguoiDungModel.findOne({ _id: (req as any).user._id.toString() });
    return res.status(200).json(ReS(200, user));
  } catch (error: any) {
    next(error);
  }
};

export const XoaSanPhamTrongGioHangController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let _id = req.params.id;
    const user = await NguoiDungModel.findByUserDeleteProductDelivery((req as any).user._id.toString(), _id);
    //const user = await NguoiDungModel.findOne({ _id: (req as any).user._id.toString() });
    return res.status(200).json(ReS(200, user));
  } catch (error: any) {
    next(error);
  }
};
