import { NextFunction, Request, Response, Router } from 'express';

import { admin } from './../../middleware/admin';
import { auth } from './../../middleware/auth';

import quanLyLichSuMuaHangControleler = require('../../controllers/quanLyLichSuMuaHang.controller');

export const quanLyLichSuMuaHang = Router();

//Thanh Toán
quanLyLichSuMuaHang.post('/DatHang', auth, quanLyLichSuMuaHangControleler.DatHangController);

//Xem lich su mua hang
quanLyLichSuMuaHang.get('/LichSuMuaHang', auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);

quanLyLichSuMuaHang.get('/LayToanBo', auth, admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);
