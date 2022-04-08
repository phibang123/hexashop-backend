import { NextFunction, Request, Response } from 'express';
import { ReE, ReS } from '../utils/reponse';

import NguoiDung from '../models/nguoiDung';
import jwt from 'jsonwebtoken';
import { secret_key } from './../configs/index';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.headers;
    if (!req.headers.authorization) {
      console.log(123);
      return res.status(401).send(ReE(401, '', { error: 'Please authenticate!' }));
    }

    const token: string = req.headers.authorization.replace('Bearer ', '');
    const decoded: any = await jwt.verify(token, secret_key);

    const user = await NguoiDung.findOne({
      _id: decoded._id,
    });

    if (!user) {
      console.log(456);
      return res.status(401).send(ReE(401, '', { error: 'Please authenticate!' }));
    }
    (req as any).user = user;
    (req as any).token = token;

    return next();
  } catch (error) {
    console.log(789);
    return res.status(401).send(ReE(401, '', { error: 'Please authenticate!' }));
  }
};
