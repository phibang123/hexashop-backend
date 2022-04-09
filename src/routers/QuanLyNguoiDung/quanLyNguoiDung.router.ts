import { NextFunction, Request, Response, Router } from 'express';

import { auth } from './../../middleware/auth';
import multer from 'multer';

const storage = multer.memoryStorage();
export const upload = multer({ storage });

import quanLyNguoiDungController = require('../../controllers/quanLyNguoiDung.controller');

export const quanLyNguoiDung = Router();

quanLyNguoiDung.post('/DangKy', quanLyNguoiDungController.DangKyController);

quanLyNguoiDung.post('/DangNhap', quanLyNguoiDungController.DangNhapController);

quanLyNguoiDung.post('/DangNhapAdmin', quanLyNguoiDungController.DangNhapAdminController);

quanLyNguoiDung.get('/ThongTin', auth, quanLyNguoiDungController.LayThongTinProfileController);

quanLyNguoiDung.patch('/Avatar', auth, upload.single('avatar'), quanLyNguoiDungController.UpLoadAvatarController);

quanLyNguoiDung.patch('/ChinhSua', auth, quanLyNguoiDungController.ChinhSuaNguoiDungController);

quanLyNguoiDung.post('/Like/:id', auth, quanLyNguoiDungController.ThichSanPhamController);

quanLyNguoiDung.post('/Comment/:id', auth, quanLyNguoiDungController.CommemtSanPhamController);

//Thêm và tăng số lượng
quanLyNguoiDung.post('/ThemVaoGioTangSoLuong/:id', auth, quanLyNguoiDungController.ThemSanPhamVaoGioHangController);

//Giảm số lượng
quanLyNguoiDung.post('/XoaKhoiGioGiamSoLuong/:id', auth, quanLyNguoiDungController.GiamSoLuongSanPhamTrongGioHangController);

//xoa sản phẩm ra khỏi giỏ
quanLyNguoiDung.post('/XoaKhoiGioHang/:id', auth, quanLyNguoiDungController.XoaSanPhamTrongGioHangController);
