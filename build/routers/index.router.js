"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var quanLyNguoiDung = require('./QuanLyNguoiDung/quanLyNguoiDung.router').quanLyNguoiDung;
var quanLyCategories = require('./QuanLyCategories/quanLyCategories.router').quanLyCategories;
var quanLySanPham = require('./QuanLySanPham/quanLySanPham.router').quanLySanPham;
var quanLyLichSuMuaHang = require('./QuanLyLichSuMuaHang/quanLyLichSuMuaHang.router').quanLyLichSuMuaHang;
var rootRouter = (0, express_1.Router)();
rootRouter.use('/QuanLyNguoiDung', quanLyNguoiDung);
rootRouter.use('/QuanLyCategoreis', quanLyCategories);
rootRouter.use('/QuanLySanPham', quanLySanPham);
rootRouter.use('/QuanLyLichSuMuaHang', quanLyLichSuMuaHang);
exports.default = rootRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvaW5kZXgucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQStDO0FBQ3ZDLElBQUEsZUFBZSxHQUFLLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQyxnQkFBeEQsQ0FBeUQ7QUFFeEUsSUFBQSxnQkFBZ0IsR0FBSyxPQUFPLENBQUMsNENBQTRDLENBQUMsaUJBQTFELENBQTJEO0FBRTNFLElBQUEsYUFBYSxHQUFLLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxjQUFwRCxDQUFxRDtBQUVsRSxJQUFBLG1CQUFtQixHQUFLLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxvQkFBaEUsQ0FBaUU7QUFFNUYsSUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFNUIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUVwRCxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFdEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUVoRCxVQUFVLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFNUQsa0JBQWUsVUFBVSxDQUFDIn0=