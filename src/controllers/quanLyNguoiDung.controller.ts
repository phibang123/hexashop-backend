import { ReE, ReS } from '../utils/reponse';
import { Request, Response } from 'express';

import NguoiDungModel from '../models/nguoiDung.model';
import SanPhamsModel from '../models/sanPham.model';
import jwt from 'jsonwebtoken';
import { putImagAvatar } from '../utils/putObjectS3Avatar';
import { secret_key } from '../configs/index';

export const DangKyController = async (req: Request, res: Response) => {
  try {
    const userCheck = await NguoiDungModel.findBeforeCreate((req as any).body);
    const userCreate = new NguoiDungModel(userCheck);
    await userCreate.save();

    res.status(201).json(ReS(201, userCreate));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const DangNhapController = async (req: Request, res: Response) => {
  try {
    const user = await NguoiDungModel.findByCredentials((req as any).body.taiKhoan, (req as any).body.matKhau);
    const token = await jwt.sign({ _id: user._id.toString() }, secret_key);
    return res.status(200).json(ReS(200, { token, user }));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });

      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const LayThongTinProfileController = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }

    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const UpLoadAvatarController = async (req: Request, res: Response) => {
  try {
    (req as any).user.avatar = await putImagAvatar((req as any).file, (req as any).user._id);
    await (req as any).user.save();
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }

    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const ChinhSuaNguoiDungController = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['diaChi', 'email', 'password', 'hoTen', 'matKhau', 'sex', 'soDt'];
  const isValiOperetion = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValiOperetion) {
    return res.status(400).json(ReE(400, 'hãy sửa những dử liệu yêu cầu'));
  }
  try {
    updates.forEach((update) => ((req as any).user[update] = req.body[update]));
    await (req as any).user.save();
    return res.status(200).json(ReS(200, (req as any).user));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const ThichSanPhamController = async (req: Request, res: Response) => {
  try {
    let _id = req.params.id;
    const oneSanPham = await SanPhamsModel.findOne({ _id });

    if (oneSanPham === null) {
      return res.status(400).json(ReE(400, { error: 'Không tìm thấy sản phẩm' }));
    }

    const user = await NguoiDungModel.findBeforeLike((req as any).user._id, oneSanPham);

    return res.status(200).json(ReS(200, user));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }
    return res.status(500).json(ReE(500, error));
  }
};

export const CommemtSanPhamController = async (req: Request, res: Response) => {
  try {
    let _id = req.params.id;

    if (req.body.comment === null) {
      return res.status(400).json(ReE(400, 'Comment rỗng'));
    }
    const userComment: string = req.body.comment;

    const sanPham = await SanPhamsModel.findOne({ _id });

    if (sanPham === null) {
      return res.status(400).json(ReE(400, 'Không tìm thấy sản phẩm'));
    }
    sanPham.comment.push({
      idNguoiDung: (req as any).user._id.toString(),
      tenNguoiDung: (req as any).user.hoTen,
      avatar: (req as any).user.avatar,
      ngoiDungComment: userComment,
    });

    await sanPham.save();

    return res.status(200).json(ReS(200, sanPham));
  } catch (error: any) {
    if (error.errors) {
      let ObecjError: any;
      Object.keys(error.errors).forEach((e: string) => {
        ObecjError[`${e}`] = error.errors[`${e}`].message;
      });
      return res.status(400).json(ReE(400, { ...ObecjError }));
    }
    if (error.mesaage) {
      return res.status(400).json(ReE(400, error.message));
    }

    return res.status(500).json(ReE(500, error));
  }
};
