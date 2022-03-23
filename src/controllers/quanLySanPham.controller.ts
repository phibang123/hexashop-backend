import { ReE, ReS } from '../utils/reponse';
import { Request, Response } from 'express';

import SanPhamsModel from '../models/sanPham.model';

export const LayTatCaSanPhamController = async (req: Request, res: Response) => {
  try {
    const allSanPham = await SanPhamsModel.find();
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
