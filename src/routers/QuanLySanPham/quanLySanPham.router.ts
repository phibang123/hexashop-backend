import { NextFunction, Request, Response, Router } from 'express';

import { admin } from './../../middleware/admin';
import { auth } from './../../middleware/auth';
import multer from 'multer';

const storage = multer.memoryStorage();
export const upload = multer({ storage });
export const quanLySanPham = Router();

import quanLySanPhamController = require('../../controllers/quanLySanPham.controller');

quanLySanPham.get('/LayTatCaSanPham', quanLySanPhamController.LayTatCaSanPhamController);

quanLySanPham.get('/TimSanPhamTheoTen', quanLySanPhamController.TimSanPhamTheoTenController);

quanLySanPham.get('/TimChiTietSanPham/:id', quanLySanPhamController.TimSanPhamTheoIdController);

quanLySanPham.post('/ThemSanPham', upload.single('picture'), quanLySanPhamController.ThemSanPhamController);

quanLySanPham.post('/ThemSoLuong/:id', auth, admin, quanLySanPhamController.ThemSoLuongSanPhamController);

quanLySanPham.post('/GiamSoLuong/:id', auth, admin, quanLySanPhamController.GiamSoLuongSanPhamController);

quanLySanPham.patch('/ChinhSuaSanPham/:id', auth, admin, quanLySanPhamController.ChinhSuaSanPhamController);
