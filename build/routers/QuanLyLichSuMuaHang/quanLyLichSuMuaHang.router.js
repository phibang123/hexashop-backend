"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quanLyLichSuMuaHang = void 0;
var express_1 = require("express");
var admin_1 = require("./../../middleware/admin");
var auth_1 = require("./../../middleware/auth");
var quanLyLichSuMuaHangControleler = require("../../controllers/quanLyLichSuMuaHang.controller");
exports.quanLyLichSuMuaHang = (0, express_1.Router)();
//Thanh Toán
exports.quanLyLichSuMuaHang.post('/DatHang', auth_1.auth, quanLyLichSuMuaHangControleler.DatHangController);
//Xem lich su mua hang //user
exports.quanLyLichSuMuaHang.get('/LichSuMuaHang/:id', auth_1.auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);
exports.quanLyLichSuMuaHang.get('/LichSuMuaHang', auth_1.auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);
//Xem lich su mua hang //admin
exports.quanLyLichSuMuaHang.get('/LayToanBo', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);
exports.quanLyLichSuMuaHang.get('/LayToanBo/:id', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);
exports.quanLyLichSuMuaHang.get('/LayToanBoTrangThai', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemTatCaTrangThaiController);
exports.quanLyLichSuMuaHang.post('/ThayDoiTrangThai/:id', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.ThayDoiTrangThaiMuaHangContrller);
