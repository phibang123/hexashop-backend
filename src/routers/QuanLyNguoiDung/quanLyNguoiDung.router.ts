import { NextFunction, Request, Response, Router } from 'express';

import { auth } from './../../middleware/auth';
import multer from 'multer';

const storage = multer.memoryStorage();
export const upload = multer({ storage });

import quanLyNguoiDungController = require('../../controllers/quanLyNguoiDung.controller');

export const quanLyNguoiDung = Router();

quanLyNguoiDung.post('/DangKy', quanLyNguoiDungController.DangKyController);

quanLyNguoiDung.post('/DangNhap', quanLyNguoiDungController.DangNhapController);

quanLyNguoiDung.get('/NguoiDung/ThongTin', auth, quanLyNguoiDungController.LayThongTinProfileController);

quanLyNguoiDung.patch(
  '/NguoiDung/avatar',
  auth,
  upload.single('avatar'),
  quanLyNguoiDungController.UpLoadAvatarController
);

quanLyNguoiDung.patch('/NguoiDung/ChinhSua', auth, quanLyNguoiDungController.ChinhSuaNguoiDungController);
