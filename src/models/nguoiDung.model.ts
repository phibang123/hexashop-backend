import { Model, Schema, model } from "mongoose";

import { DEFATUL_ADMIN } from "../configs/index";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import validator from "validator";

export interface IGioiHang {
	_idSanPham: string;
	tenSanPham: string;
	soLuong: number;
	sale: number;
	phanTramSale: number;
	giaSale: number;
	giaDonVi: number;
	mauSac: string;
	size: number;
	hinhAnh: string;
	ngayThem: string;
}

export interface IThich {
	_idSanPham: string;
	tenSanPham: string;
	hinhAnh: string;
	giaDonVi: number;
}

export interface IComment {
	_idSanPham: string;
	tenSanPham: string;
	hinhAnh: string;
	giaDonVi: number;
	noiDungComment: string;
}

interface INguoiDungInput {
	taiKhoan: string;
	matKhau: string;
	email: string;
	diaChi?: string;
	hoTen: string;
	avatar: string;
	soDt: string;
	sex: "Nam" | "Nữ";
}

interface INguoiDung extends INguoiDungInput {
	_id: object;
	adminInWeb: boolean;
	gioHang: IGioiHang[];
	thich: IThich[];
	comment: IComment[];
}

interface INguoiDungModel extends Model<INguoiDung> {
	myStaticMethod(): number;
	findByCredentials(taiKhoan: string, matKhau: string): INguoiDung;
	findBeforeCreate(body: INguoiDungInput): INguoiDung;
}

const nguoiDungSchema = new Schema<INguoiDung, INguoiDungModel>(
	{
		taiKhoan: {
			type: String,
			required: [true, "tài khoản bị trống"],
			trim: true,
			unique: true,
			validate(value: string) {
				if (value.length <= 6 && value.length >= 15) {
					throw new Error("Tài khoản phải lớn hơn 6 và nhỏ hơn 15");
				}
			},
		},
		sex: {
			type: String,
			trim: true,
		},
		matKhau: {
			type: String,
			required: [true, "mật khẩu bị trống"],
			min: [6, "mật khẩu quá ngắn"],
			max: [32, "mật khẩu quá dài"],
			trim: true,
			set: (value: string) => {
				const salt = bcrypt.genSaltSync(10);
				const hash = bcrypt.hashSync(value, salt);
				return hash;
			},
		},
		email: {
			type: String,
			required: [true, "email bị trống"],
			trim: true,
			unique: true,
			validate(value: string) {
				if (!validator.isEmail(value)) {
					throw new Error("email invalid");
				}
			},
		},
		diaChi: {
			type: String,
			require: false,
			trim: true,
		},
		hoTen: {
			type: String,
			required: [true, "hộ tên bị trống"],
			trim: true,
		},
		soDt: {
			type: String,
			required: [true, "số điện thoại bị trống"],
			trim: true,
			validate(value: string) {
				if (value.length <= 6 && value.length >= 15) {
					throw new Error("Số điện thoại phải lớn hơn 6 và nhỏ hơn 15");
				}
			},
		},
		avatar: {
			type: String,
			default:
				"https://media.gettyimages.com/photos/businesswoman-icon-as-avatar-profile-picture-picture-id517322299?b=1&k=20&m=517322299&s=170667a&w=0&h=4J0qt00mt4jvEn8uKQ3203RiyVcOUOcF01DalYLRmbg=",
			trim: true,
		},
		adminInWeb: {
			type: Boolean,
			require: true,
			default: false,
		},
		gioHang: [
			{
				_idSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				tenSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				soLuong: {
					type: Number,
					require: true,
					trim: true,
				},
				sale: {
					type: Boolean,
					require: true,
				},
				phanTramSale: {
					type: Number,
					require: true,
				},
				giaSale: {
					type: Number,
					require: false,
					trim: true,
				},
				giaDonVi: {
					type: Number,
					require: false,
					trim: true,
				},
				mauSac: {
					type: String,
					require: false,
					trim: true,
				},
				size: {
					type: Number,
					require: false,
					trim: true,
				},
				hinhAnh: {
					type: String,
					require: false,
					trim: true,
				},
				ngayThem: {
					type: Date,
					default: Date.now,
				},
			},
		],
		thich: [
			{
				_idSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				tenSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				hinhAnh: {
					type: String,
					require: true,
					trim: true,
				},
				giaDonVi: {
					type: Number,
					require: true,
					trim: true,
				},
			},
		],
		comment: [
			{
				_idSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				tenSanPham: {
					type: String,
					require: true,
					trim: true,
				},
				giaDonVi: {
					type: Number,
					require: false,
					trim: true,
				},
				hinhAnh: {
					type: String,
					require: false,
					trim: true,
				},
				noiDungComment: {
					type: String,
					require: false,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);
nguoiDungSchema.static("myStaticMethod", function myStaticMethod() {
	return 42;
});

//collection
nguoiDungSchema.virtual("lichSuMuaHangs", {
	ref: "LichSuMuaHang",
	localField: "_id",
	foreignField: "ownerLichSuMua",
});
nguoiDungSchema.virtual("hoTroNguoiDungs", {
	ref: "HoTroNguoiDung",
	localField: "_id",
	foreignField: "ownerNoiDung",
});

// nguoiDungSchema.statics.findByCredentials = async function (
// 	taiKhoan: string,
// 	matKhau: string
// ) {
// 	try {
// 		const user = await NguoiDungModel.findOne({ taiKhoan });
// 		if (!user) {
// 			throw new Error("tài khoản và mật khẩu không chính sác");
// 		}
// 		const isMatch = await bcrypt.compare(matKhau, user.matKhau);
// 		if (!isMatch) {
// 			throw new Error("tài khoản và mật khẩu không chính sác");
// 		}

// 		return user;
// 	} catch (error) {
// 		throw new Error("tài khoản và mật khẩu không chính sác");
// 	}
// };

nguoiDungSchema.static(
	"findByCredentials",
	async function (taiKhoan: string, matKhau: string) {
		try {
			const user: INguoiDung | null = await NguoiDungModel.findOne({
				taiKhoan,
			});
			if (!user) {
				throw new Error("tài khoản và mật khẩu không chính sác");
			}
			const isMatch = await bcrypt.compare(matKhau, user.matKhau);
			if (!isMatch) {
				throw new Error("tài khoản và mật khẩu không chính sác");
			}

			return user;
		} catch (error) {
			throw new Error("tài khoản và mật khẩu không chính sác");
		}
	}
);

nguoiDungSchema.static(
	"findBeforeCreate",
	async function (body: INguoiDungInput) {
		const user: INguoiDung | null = await NguoiDungModel.findOne({
			$or: [
				{ taiKhoan: body.taiKhoan },
				{ email: body.email },
				{ soDt: body.soDt },
			],
		});
		if (!user) {
			body.avatar = `https://i.pravatar.cc/150?img=${Math.floor(
				Math.random() * 50
			)}`;
			return body;
		} else {
			throw new Error(
				body.taiKhoan === user.taiKhoan
					? "Tài khoản đã tồn tại"
					: body.email === user.email
					? "email đã tồn tại"
					: "số điện thoại đã tồn tại"
			);
		}
	}
);

nguoiDungSchema.methods.toJSON = function () {
	const nguoiDung = this;

	//chuyển nó về toObject để có thể xóa key trong object
	const nguoiDungObject = nguoiDung.toObject();
	delete nguoiDungObject.matKhau;
	return nguoiDungObject;
};

// nguoiDungSchema.pre("save", async function (this: INguoiDung, next) {
// 	const seft = this;

// 	const user: INguoiDung | null = await NguoiDungModel.findOne({
// 		$or: [
// 			{ taiKhoan: seft.taiKhoan },
// 			{ email: seft.email },
// 			{ soDt: seft.soDt },
// 		],
// 	});

// 	if (!user) {
// 		seft.avatar = `https://i.pravatar.cc/150?img=${Math.floor(
// 			Math.random() * 50
// 		)}`;
// 		next();
// 	} else {
// 		throw new Error(
// 			seft.taiKhoan === user.taiKhoan
// 				? "Tài khoản đã tồn tại"
// 				: seft.email === user.email
// 				? "email đã tồn tại"
// 				: "số điện thoại đã tồn tại"
// 		);
// 	}
// });

const NguoiDungModel = model<INguoiDung, INguoiDungModel>(
	"nguoiDungSchema",
	nguoiDungSchema
);

NguoiDungModel.findOneAndUpdate(
	DEFATUL_ADMIN,
	DEFATUL_ADMIN,
	{ new: true, upsert: true },
	function () {}
);

export default NguoiDungModel;