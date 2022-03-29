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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5U2FuUGhhbS5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVycy9RdWFuTHlTYW5QaGFtL3F1YW5MeVNhblBoYW0ucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrRTtBQUVsRSxrREFBaUQ7QUFDakQsZ0RBQStDO0FBQy9DLGtEQUE0QjtBQUU1QixJQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzFCLFFBQUEsTUFBTSxHQUFHLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztBQUM3QixRQUFBLGFBQWEsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV0QyxvRkFBdUY7QUFFdkYscUJBQWEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUV6RixxQkFBYSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRTdGLHFCQUFhLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFaEcscUJBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUU1RyxxQkFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxXQUFJLEVBQUUsYUFBSyxFQUFFLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFMUcscUJBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsV0FBSSxFQUFFLGFBQUssRUFBRSx1QkFBdUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRTFHLHFCQUFhLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGNBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBSSxFQUFFLGFBQUssRUFBRSx1QkFBdUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRXRJLHFCQUFhLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGNBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBSSxFQUFFLGFBQUssRUFBRSx1QkFBdUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBRTdJLHFCQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFdBQUksRUFBRSxhQUFLLEVBQUUsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyJ9