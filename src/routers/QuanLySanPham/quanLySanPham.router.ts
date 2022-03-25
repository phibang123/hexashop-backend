import { NextFunction, Request, Response, Router } from 'express';

import { admin } from './../../middleware/admin';
import { auth } from './../../middleware/auth';

export const quanLySanPham = Router();

import quanLySanPhamController = require('../../controllers/quanLySanPham.controller');

quanLySanPham.get('/LayTatCaSanPham', quanLySanPhamController.LayTatCaSanPhamController);

quanLySanPham.get('/TimSanPhamTheoTen', quanLySanPhamController.TimSanPhamTheoTenController);

quanLySanPham.get('/TimChiTietSanPham/:id', quanLySanPhamController.TimSanPhamTheoIdController);

quanLySanPham.post('/ThemSanPham', quanLySanPhamController.ThemSanPhamController);

quanLySanPham.post('/ThemSizeMauSacSoLuong', auth, admin, quanLySanPhamController.ThemSanPhamController);
