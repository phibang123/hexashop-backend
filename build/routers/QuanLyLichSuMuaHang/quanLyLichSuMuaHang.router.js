"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quanLyLichSuMuaHang = void 0;
var express_1 = require("express");
var admin_1 = require("./../../middleware/admin");
var auth_1 = require("./../../middleware/auth");
var quanLyLichSuMuaHangControleler = require("../../controllers/quanLyLichSuMuaHang.controller");
exports.quanLyLichSuMuaHang = (0, express_1.Router)();
exports.quanLyLichSuMuaHang.post('/DatHang', auth_1.auth, quanLyLichSuMuaHangControleler.DatHangController);
exports.quanLyLichSuMuaHang.get('/LichSuMuaHang/:id', auth_1.auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);
exports.quanLyLichSuMuaHang.get('/LichSuMuaHang', auth_1.auth, quanLyLichSuMuaHangControleler.XemLichSuMuaHangUserController);
exports.quanLyLichSuMuaHang.get('/LayToanBo', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);
exports.quanLyLichSuMuaHang.get('/LayToanBo/:id', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemLichSuMuaHangAllUserController);
exports.quanLyLichSuMuaHang.get('/LayToanBoTrangThai', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.XemTatCaTrangThaiController);
exports.quanLyLichSuMuaHang.post('/ThayDoiTrangThai/:id', auth_1.auth, admin_1.admin, quanLyLichSuMuaHangControleler.ThayDoiTrangThaiMuaHangContrller);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5TGljaFN1TXVhSGFuZy5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVycy9RdWFuTHlMaWNoU3VNdWFIYW5nL3F1YW5MeUxpY2hTdU11YUhhbmcucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFrRTtBQUVsRSxrREFBaUQ7QUFDakQsZ0RBQStDO0FBRS9DLGlHQUFvRztBQUV2RixRQUFBLG1CQUFtQixHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRzVDLDJCQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBSSxFQUFFLDhCQUE4QixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFHN0YsMkJBQW1CLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQUksRUFBRSw4QkFBOEIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRW5ILDJCQUFtQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFJLEVBQUUsOEJBQThCLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUcvRywyQkFBbUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQUksRUFBRSxhQUFLLEVBQUUsOEJBQThCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUVySCwyQkFBbUIsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsV0FBSSxFQUFFLGFBQUssRUFBRSw4QkFBOEIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBRXpILDJCQUFtQixDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxXQUFJLEVBQUUsYUFBSyxFQUFFLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFeEgsMkJBQW1CLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFdBQUksRUFBRSxhQUFLLEVBQUUsOEJBQThCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyJ9