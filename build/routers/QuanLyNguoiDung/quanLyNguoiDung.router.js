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
exports.quanLyNguoiDung.patch('/Avatar', auth_1.auth, exports.upload.single('avatar'), quanLyNguoiDungController.UpLoadAvatarController);
exports.quanLyNguoiDung.patch('/ChinhSua', auth_1.auth, quanLyNguoiDungController.ChinhSuaNguoiDungController);
exports.quanLyNguoiDung.post('/Like/:id', auth_1.auth, quanLyNguoiDungController.ThichSanPhamController);
exports.quanLyNguoiDung.post('/Comment/:id', auth_1.auth, quanLyNguoiDungController.CommemtSanPhamController);
exports.quanLyNguoiDung.post('/ThemVaoGioTangSoLuong/:id', auth_1.auth, quanLyNguoiDungController.ThemSanPhamVaoGioHangController);
exports.quanLyNguoiDung.post('/XoaKhoiGioGiamSoLuong/:id', auth_1.auth, quanLyNguoiDungController.GiamSoLuongSanPhamTrongGioHangController);
exports.quanLyNguoiDung.post('/XoaKhoiGioHang/:id', auth_1.auth, quanLyNguoiDungController.XoaSanPhamTrongGioHangController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5Tmd1b2lEdW5nLnJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXJzL1F1YW5MeU5ndW9pRHVuZy9xdWFuTHlOZ3VvaUR1bmcucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrRTtBQUVsRSxnREFBK0M7QUFDL0Msa0RBQTRCO0FBRTVCLElBQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDMUIsUUFBQSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0FBRTFDLHdGQUEyRjtBQUU5RSxRQUFBLGVBQWUsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4Qyx1QkFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU1RSx1QkFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVoRix1QkFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBSSxFQUFFLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFL0YsdUJBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFdBQUksRUFBRSxjQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFbEgsdUJBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQUksRUFBRSx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRWhHLHVCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFJLEVBQUUseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRix1QkFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBSSxFQUFFLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFHL0YsdUJBQWUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsV0FBSSxFQUFFLHlCQUF5QixDQUFDLCtCQUErQixDQUFDLENBQUM7QUFHcEgsdUJBQWUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsV0FBSSxFQUFFLHlCQUF5QixDQUFDLHdDQUF3QyxDQUFDLENBQUM7QUFHN0gsdUJBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsV0FBSSxFQUFFLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFDLENBQUMifQ==