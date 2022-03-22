import { Model, Schema, model } from "mongoose";

import { DEFATUL_SANPHAM } from "./../configs/index";

interface IIdNguoiDung {
	idNduoiDung: string;
	tenNguoiDung: string;
	soSaoNguoiDung: number;
}
interface IComment {
	idNguoiDung: string;
	tenNguoiDung: string;
	ngoiDungComment: string;
}

interface ISao {
	saoTrungBinh: number;
	idNguoiDung: IIdNguoiDung[];
}

interface ISize {
	tenSize: string;
	soLuong: number;
}

interface IMauSac {
	tenMauSac: string;
	size: ISize[];
}

interface IHinhAnh {
	hinhAnh: string;
}

interface ISanPham {
	tenSanPham: string;
	giaTien: number;
	listHinhAnh: IHinhAnh[];
	sale: boolean;
	phanTranTramSale?: number;
	thanhTien?: number;
	categories: string;

	sao: ISao;
	comment: IComment[];
	mauSac: IMauSac[];
}

interface SanPhamModel extends Model<ISanPham> {}

const sanPhamSchema = new Schema<ISanPham, SanPhamModel>(
	{
		tenSanPham: {
			type: String,
			required: [true, "tên sản phẩm bị trống"],
			trim: true,
			unique: true,
		},
		giaTien: {
			type: Number,
			required: [true, "giá tiền bị trống"],
		},
		listHinhAnh: [
			{
				hinhAnh: {
					type: String,
					default:
						"https://img-cdn.2game.vn/2021/02/28/Hutao-va-nhung-dieu-can-biet-khi-co-nang-ra-mat-game-thu-Genshin-Impact-1.jpg",
				},
			},
		],
		sale: {
			type: Boolean,
			default: false,
		},
		phanTranTramSale: {
			type: Number,
			default: 0,
		},
		thanhTien: {
			type: Number,
			default: 0,
		},
		categories: {
			type: String,
			required: [true, "loại sản phẩm bị trống"],
			trim: true,
			ref: "CategoriModel",
		},
		/**
		 * !: sao là object chứa nhiều người dùng
		 * TODO: khi thêm 1 sao thì sẽ tính phần trăm dựa theo người dùng
		 */
		sao: {
			saoTrungBinh: {
				type: Number,
				default: 0,
			},
			idNguoiDung: [
				{
					idNduoiDung: {
						type: String,
						unique: true,
					},
					tenNguoiDung: {
						type: String,
						unique: true,
					},
					soSaoNguoiDung: {
						type: Number,
						validate(value: number) {
							if (value <= 0 && value <= 5) {
								throw new Error("Số sao không hợp");
							}
						},
					},
				},
			],
		},
		comment: [
			{
				idNguoiDung: {
					type: String,
					required: true,
					trim: true,
				},
				tenNguoiDung: {
					type: String,
					required: true,
					trim: true,
				},
				ngoiDungComment: {
					type: String,
					required: true,
					trim: true,
				},
			},
		],

		/**
		 * !: màu sắc là một mãng chứa size và size chứa số lượng
		 * TODO: thêm màu sắc bắt buộc tenMauSac là mã màu, thêm nhiều size và số lượng của tường size
		 */
		mauSac: [
			{
				tenMauSac: {
					type: String,
					required: true,
				},
				size: [
					{
						tenSize: {
							required: true,
							type: String,
						},
						soLuong: {
							required: true,
							type: Number,
							default: 0,
						},
					},
				],
			},
		],
	},
	{
		timestamps: true,
	}
);

const SanPhamsModel = model<ISanPham, SanPhamModel>(
	"sanPhamSchema",
	sanPhamSchema
);

SanPhamsModel.findOneAndUpdate(
	DEFATUL_SANPHAM,
	DEFATUL_SANPHAM,
	{ new: true, upsert: true },
	function () {}
);

export default SanPhamsModel;
