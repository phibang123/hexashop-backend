import { ReE, ReS } from "../utils/reponse";
import { Request, Response } from "express";

import NguoiDungModel from "../models/nguoiDung.model";
import { deleteImagAvatar } from "../utils/deleteObjectS3Avatar";
import jwt from "jsonwebtoken";
import { putImagAvatar } from "../utils/putObjectS3Avatar";
import { secret_key } from "../configs/index";

export const DangKyController = async (req: Request, res: Response) => {
	try {
		const userCheck = await NguoiDungModel.findBeforeCreate(req.body);
		const userCreate = new NguoiDungModel(userCheck);
		await userCreate.save();

		res.status(201).json(ReS(201, userCreate));
	} catch (error: any) {
		if (error.errors) {
			let ObecjError: any;
			Object.keys(error.errors).forEach((e: string) => {
				ObecjError[`${e}`] = error.errors[`${e}`].message;
			});
			return res.status(400).json(ReE(400, { ...ObecjError }));
		}
		return res.status(400).json(ReE(400, error.message));
	}
};

export const DangNhapController = async (req: Request, res: Response) => {
	try {
		const user = await NguoiDungModel.findByCredentials(
			req.body.taiKhoan,
			req.body.matKhau
		);
		const token = await jwt.sign({ _id: user._id.toString() }, secret_key);
		return res.status(200).json(ReS(200, { token, user }));
	} catch (error: any) {
		if (error.errors) {
			let ObecjError: any;
			Object.keys(error.errors).forEach((e: string) => {
				ObecjError[`${e}`] = error.errors[`${e}`].message;
			});
			return res.status(400).json(ReE(400, { ...ObecjError }));
		}

		return res.status(400).json(ReE(400, error.message));
	}
};

export const LayThongTinProfile = async (req: Request, res: Response) => {
	try {
		return res.status(200).json(ReS(200, (req as any).user));
	} catch (error: any) {
		if (error.errors) {
			let ObecjError: any;
			Object.keys(error.errors).forEach((e: string) => {
				ObecjError[`${e}`] = error.errors[`${e}`].message;
			});
			return res.status(400).json(ReE(400, { ...ObecjError }));
		}

		return res.status(400).json(ReE(400, error.message));
	}
};

export const UpLoadAvatar = async (req: Request, res: Response) => {
	try {
		(req as any).user.avatar = await putImagAvatar(
			(req as any).file,
			(req as any).user._id
		);
		await (req as any).user.save();
		return res.status(200).json(ReS(200, (req as any).user));
	} catch (error: any) {
		if (error.errors) {
			let ObecjError: any;
			Object.keys(error.errors).forEach((e: string) => {
				ObecjError[`${e}`] = error.errors[`${e}`].message;
			});
			return res.status(400).json(ReE(400, { ...ObecjError }));
		}

		return res.status(400).json(ReE(400, error.message));
	}
};

export const ChinhSuaNguoiDung = async (req: Request, res: Response) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = [
		"diaChi",
		"email",
		"password",
		"hoTen",
		"matKhau",
		"sex",
		"soDt",
	];
	const isValiOperetion = updates.every((update) => {
		return allowedUpdates.includes(update);
	});
	if (!isValiOperetion) {
		return res.status(400).json(ReE(400, "hãy sửa những dử liệu yêu cầu"));
	}
	try {
		updates.forEach((update) => ((req as any).user[update] = req.body[update]));
		await (req as any).user.save();
		return res.status(200).json(ReS(200, (req as any).user));
	} catch (error: any) {
		if (error.errors) {
			let ObecjError: any;
			Object.keys(error.errors).forEach((e: string) => {
				ObecjError[`${e}`] = error.errors[`${e}`].message;
			});
			return res.status(400).json(ReE(400, { ...ObecjError }));
		}
		return res.status(400).json(ReE(400, error.message));
	}
};
