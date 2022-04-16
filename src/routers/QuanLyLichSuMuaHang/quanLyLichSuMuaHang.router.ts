import { NextFunction, Request, Response, Router } from 'express';

import { admin } from './../../middleware/admin';
import { auth } from './../../middleware/auth';

import quanLyLichSuMuaHangControleler = require('../../controllers/quanLyLichSuMuaHang.controller');

export const quanLyLichSuMuaHang = Router();

//Thanh Toán
quanLyLichSuMuaHang.post('/DatHang', auth, quanLyLichSuMuaHangControleler.DatHangController);

//Xem lich su mua hang //user
quanLyLichSuMuaHang.get('/LichSuMuaHang/:id', auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);


quanLyLichSuMuaHang.get('/LichSuMuaHang', auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);

//Xem lich su mua hang //admin
quanLyLichSuMuaHang.get('/LayToanBo', auth, admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);

quanLyLichSuMuaHang.get('/LayToanBo/:id', auth, admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);

quanLyLichSuMuaHang.get('/LayToanBoTrangThai', auth, admin, quanLyLichSuMuaHangControleler.XemTatCaTrangThaiController);

quanLyLichSuMuaHang.post('/ThayDoiTrangThai/:id', auth, admin, quanLyLichSuMuaHangControleler.ThayDoiTrangThaiMuaHangContrller);
