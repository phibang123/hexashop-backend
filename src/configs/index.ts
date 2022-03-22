require("dotenv").config();

import aws from "aws-sdk";

export const DEFATUL_ADMIN: Object = {
	taiKhoan: "bangphi",
	matKhau: "1234597s1Ba",
	email: "phibang79s@gmail.com",
	soDt: "512132522222",
	hoTen: "string",
	adminInWeb: true,
	sex: "Nam",
	diaChi: "alalalalal",
};

interface ICategori {
	name: string;
	parent: string;
	category: string;
	slug: string;
}

export const DEFATUL_CATEROGIES: ICategori[] = [
	{
		name: "Nam Giới",
		slug: "nam_gioi",
		parent: "/",
		category: "/nam_gioi",
	},
	{
		name: "Nữ Giới",
		slug: "nu_gioi",
		parent: "/",
		category: "/nu_gioi",
	},
	{
		name: "Áo",
		slug: "ao",
		parent: "/nam_gioi",
		category: "/nam_gioi/ao",
	},
	{
		name: "Áo",
		slug: "ao",
		parent: "/nu_gioi",
		category: "/nu_gioi/ao",
	},
	{
		name: "Quần",
		slug: "quan",
		parent: "/nam_gioi",
		category: "/nam_gioi/quan",
	},
	{
		name: "Quần",
		slug: "quan",
		parent: "/nu_gioi",
		category: "/nu_gioi/quan",
	},
	{
		name: "Tất",
		slug: "tat",
		parent: "/nam_gioi",
		category: "/nam_gioi/tat",
	},
	{
		name: "Tất",
		slug: "tat",
		parent: "/nu_gioi",
		category: "/nu_gioi/tat",
	},
	{
		name: "Áo sơ mi",
		slug: "ao_so_mi",
		parent: "/nu_gioi/ao",
		category: "/nu_gioi/ao/ao_so_mi",
	},
	{
		name: "Áo sơ mi",
		slug: "ao_so_mi",
		parent: "/nam_gioi/ao",
		category: "/nam_gioi/ao/ao_so_mi",
	},
	{
		name: "Áo thun",
		slug: "ao_thun",
		parent: "/nu_gioi/ao",
		category: "/nu_gioi/ao/ao_thun",
	},
	{
		name: "Áo thun",
		slug: "ao_thun",
		parent: "/nam_gioi/ao",
		category: "/nam_gioi/ao/ao_thun",
	},
	{
		name: "Áo khoác",
		slug: "ao_khoac",
		parent: "/nu_gioi/ao",
		category: "/nu_gioi/ao/ao_khoac",
	},
	{
		name: "Áo khoác",
		slug: "ao_khoac",
		parent: "/nam_gioi/ao",
		category: "/nam_gioi/ao/ao_khoac",
	},
	{
		name: "Quần jean",
		slug: "quan_jean",
		parent: "/nam_gioi/quan",
		category: "/nam_gioi/quan/quan_jean",
	},
	{
		name: "Quần jean",
		slug: "quan_jean",
		parent: "/nu_gioi/quan",
		category: "/nu_gioi/quan/quan_jean",
	},
	{
		name: "Quần kaki",
		slug: "quan_kaki",
		parent: "/nu_gioi/quan",
		category: "/nu_gioi/quan/quan_kaki",
	},
	{
		name: "Quần kaki",
		slug: "quan_kaki",
		parent: "/nam_gioi/quan",
		category: "/nam_gioi/quan/quan_kaki",
	},

	{
		name: "Quần thun",
		slug: "quan_thun",
		parent: "/nu_gioi/quan",
		category: "/nu_gioi/quan/quan_thun",
	},
	{
		name: "Quần thun",
		slug: "quan_thun",
		parent: "/nam_gioi/quan",
		category: "/nam_gioi/quan/quan_thun",
	},
	{
		name: "Tất lưới",
		slug: "tat_luoi",
		parent: "/nu_gioi/tat",
		category: "/nu_gioi/tat/tat_luoi",
	},
	{
		name: "Tất tàn hình",
		slug: "tat_tan_hinh",
		parent: "/nam_gioi/tat",
		category: "/nam_gioi/tat/tat_tan_hinh",
	},
];

export const secret_key = process.env.SECRET_KEY || "";

export const mongodb_server = process.env.MONGODB_CONNECT_SERVER;
export const mongodb_client = process.env.MONGODB_CONNECT_CLIENT;

export const s3_bucket_name = process.env.S3_BUCKET_NAME;
export const s3_domain_name = process.env.S3_DOMAIN_NAME;
export const s3_access_key = process.env.S3_ACCESSS_KEY;
export const s3_secret_key = process.env.S3_SECRET_KEY;

export const s3 = new aws.S3({
	accessKeyId: s3_access_key,
	secretAccessKey: s3_secret_key,
});
