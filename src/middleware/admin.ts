import { NextFunction, Request, Response } from 'express';
import { ReE, ReS } from '../utils/reponse';

export const admin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if ((req as any).user.adminInWeb) {
      return next();
    }
    return res.status(401).send(ReE(401, '', { error: 'Forbidden' }));
  } catch (error) {
    return res.status(401).send(ReE(401, '', { error: 'Please authenticate!' }));
  }
};
