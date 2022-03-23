import { NextFunction, Request, Response, Router } from 'express';

export const quanLySanPham = Router();

import quanLySanPhamController = require('../../controllers/quanLySanPham.controller');

quanLySanPham.get('/LayTatCaSanPham', quanLySanPhamController.LayTatCaSanPhamController);

quanLySanPham.get('/TimSAnPhamTheoTen', quanLySanPhamController.TimSanPhamTheoTenController);
