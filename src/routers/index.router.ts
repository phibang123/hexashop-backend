import { NextFunction, Router } from "express";
const {
	quanLuongNguoiDung,
} = require("./QuanLyNguoiDung/quanLyNguoiDung.router");

const rootRouter = Router();

rootRouter.use("/QuanLyNguoiDung", quanLuongNguoiDung);

export default rootRouter;
