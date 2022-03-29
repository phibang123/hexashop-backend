"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quanLySanPham = exports.upload = void 0;
var express_1 = require("express");
var admin_1 = require("./../../middleware/admin");
var auth_1 = require("./../../middleware/auth");
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage: storage });
exports.quanLySanPham = (0, express_1.Router)();
var quanLySanPhamController = require("../../controllers/quanLySanPham.controller");
exports.quanLySanPham.get('/LayTatCaSanPham', quanLySanPhamController.LayTatCaSanPhamController);
exports.quanLySanPham.get('/TimSanPhamTheoTen', quanLySanPhamController.TimSanPhamTheoTenController);
exports.quanLySanPham.get('/TimChiTietSanPham/:id', quanLySanPhamController.TimSanPhamTheoIdController);
exports.quanLySanPham.post('/ThemSanPham', exports.upload.single('picture'), quanLySanPhamController.ThemSanPhamController);
exports.quanLySanPham.post('/ThemSoLuong/:id', auth_1.auth, admin_1.admin, quanLySanPhamController.ThemSoLuongSanPhamController);
exports.quanLySanPham.post('/GiamSoLuong/:id', auth_1.auth, admin_1.admin, quanLySanPhamController.GiamSoLuongSanPhamController);
exports.quanLySanPham.patch('/ChinhSuaSanPham/:id', exports.upload.single('picture'), auth_1.auth, admin_1.admin, quanLySanPhamController.ChinhSuaSanPhamController);
exports.quanLySanPham.patch('/ChinhSuaHinhAnh/:id', exports.upload.single('picture'), auth_1.auth, admin_1.admin, quanLySanPhamController.ChinhSuaHinhAnhSanPhamController);
exports.quanLySanPham.delete('/XoaSanPham/:id', auth_1.auth, admin_1.admin, quanLySanPhamController.XoaSanPhamController);