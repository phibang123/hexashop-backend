"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quanLyNguoiDung = exports.upload = void 0;
var express_1 = require("express");
var auth_1 = require("./../../middleware/auth");
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage: storage });
var quanLyNguoiDungController = require("../../controllers/quanLyNguoiDung.controller");
exports.quanLyNguoiDung = (0, express_1.Router)();
exports.quanLyNguoiDung.post('/DangKy', quanLyNguoiDungController.DangKyController);
exports.quanLyNguoiDung.post('/DangNhap', quanLyNguoiDungController.DangNhapController);
exports.quanLyNguoiDung.get('/ThongTin', auth_1.auth, quanLyNguoiDungController.LayThongTinProfileController);
exports.quanLyNguoiDung.patch('/avatar', auth_1.auth, exports.upload.single('avatar'), quanLyNguoiDungController.UpLoadAvatarController);
exports.quanLyNguoiDung.patch('/ChinhSua', auth_1.auth, quanLyNguoiDungController.ChinhSuaNguoiDungController);
exports.quanLyNguoiDung.post('/Like/:id', auth_1.auth, quanLyNguoiDungController.ThichSanPhamController);
exports.quanLyNguoiDung.post('/Comment/:id', auth_1.auth, quanLyNguoiDungController.CommemtSanPhamController);
//Thêm và tăng số lượng
exports.quanLyNguoiDung.post('/ThemVaoGioTangSoLuong/:id', auth_1.auth, quanLyNguoiDungController.ThemSanPhamVaoGioHangController);
//Giảm số lượng
exports.quanLyNguoiDung.post('/XoaKhoiGioGiamSoLuong/:id', auth_1.auth, quanLyNguoiDungController.GiamSoLuongSanPhamTrongGioHangController);
//xoa sản phẩm ra khỏi giỏ
exports.quanLyNguoiDung.post('/XoaKhoiGioHang/:id', auth_1.auth, quanLyNguoiDungController.XoaSanPhamTrongGioHangController);
