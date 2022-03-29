import express, { Application, NextFunction, Request, RequestHandler, Response } from 'express';

import { ReE } from './utils/reponse';
import rootRouter from './routers/index.router';

require('./db/mongooseConnect');
require('./models/categories');
require('./models/nguoiDung');
require('./models/sanPham');
require('./models/lichSuMuaHang');

const port = process.env.PORT || 3000;

const app: Application = express();
app.use(express.json());
app.use('/api', rootRouter);
app.use('*', (req, res, next: NextFunction) => {
  next('404');
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.errors) {
    let ObecjError: any;
    Object.keys(error.errors).forEach((e: string) => {
      ObecjError[`${e}`] = error.errors[`${e}`].message;
    });
    return res.status(400).json(ReE(400, { ...ObecjError }));
  }
  if (error.message) {
    return res.status(400).json(ReE(400, error.message));
  }
  if (typeof error === 'string') {
    res.status(400).json(ReE(400, error));
  }
  res.status(500).json(ReE(500, 'ERROR'));
});

app.listen(port, function () {
  console.log('Express server listening on port', port);
});
