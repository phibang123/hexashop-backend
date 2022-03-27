import express, { Application, NextFunction, Request, RequestHandler, Response } from 'express';

import { ReE } from './utils/reponse';
import rootRouter from './routers/index.router';

require('./db/mongooseConnect.ts');
require('./models/categories.model');
require('./models/nguoiDung.model');
require('./models/sanPham.model');

const port = process.env.PORT || 3000;

const app: Application = express();
app.use(express.json());
app.use('/api', rootRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.errors) {
    let ObecjError: any;
    Object.keys(error.errors).forEach((e: string) => {
      ObecjError[`${e}`] = error.errors[`${e}`].message;
    });
    return res.status(400).json(ReE(400, { ...ObecjError }));
  }
  return res.status(400).json(ReE(400, error.message));
});

app.listen(port, function () {
  console.log('Express server listening on port', port);
});
