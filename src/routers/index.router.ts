import { NextFunction, Router } from "express";
const { quanLyNguoiDung } = require("./QuanLyNguoiDung/quanLyNguoiDung.router");

const {
	quanLyCategories,
} = require("./QuanLyCategories/quanLyCategories.router");

const { quanLySanPham } = require("./QuanLySanPham/quanLySanPham.router");
const rootRouter = Router();

rootRouter.use("/QuanLyNguoiDung", quanLyNguoiDung);

rootRouter.use("/QuanLyCategoreis", quanLyCategories);

rootRouter.use("/QuanLySanPham", quanLySanPham);

export default rootRouter;
