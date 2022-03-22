import { NextFunction, Request, Response } from "express";

import { Router } from "express";
import { auth } from "./../../middleware/auth";
import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

import quanLyNguoiDungController = require("../../controllers/quanLyNguoiDung.controller");

export const quanLuongNguoiDung = Router();

quanLuongNguoiDung.post("/DangKy", quanLyNguoiDungController.DangKyController);

quanLuongNguoiDung.post(
	"/DangNhap",
	quanLyNguoiDungController.DangNhapController
);

quanLuongNguoiDung.get(
	"/NguoiDung/ThongTin",
	auth,
	quanLyNguoiDungController.LayThongTinProfile
);

quanLuongNguoiDung.patch(
	"/NguoiDung/avatar",
	auth,
	upload.single("avatar"),
	quanLyNguoiDungController.UpLoadAvatar
);

quanLuongNguoiDung.patch(
	"/NguoiDung/ChinhSua",
	auth,
	quanLyNguoiDungController.ChinhSuaNguoiDung
);

module.exports = {
	quanLuongNguoiDung,
};
