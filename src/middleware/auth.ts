import { NextFunction, Request, Response } from 'express';
import { ReE, ReS } from '../utils/reponse';

import NguoiDung from '../models/nguoiDung.model';
import jwt from 'jsonwebtoken';
import { secret_key } from './../configs/index';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).send(ReE(401, { error: 'Please authenticate!' }));
    //throw new Error('Please authenticate!');
  }
  const token: string = req.headers.authorization.replace('Bearer ', '');
  //const token = req.headers.Authorization.replace("Bearer ", "");
  const decoded: any = await jwt.verify(token, secret_key);

  const user = await NguoiDung.findOne({
    _id: decoded._id,
    'tokens.token': token,
  });

  if (!user) {
    console.log(123);
    //throw new Error('Please authenticate!');
    return res.status(401).send(ReE(401, { error: 'Please authenticate!' }));
  }

  (req as any).user = user;
  (req as any).token = token;
  next();
};
