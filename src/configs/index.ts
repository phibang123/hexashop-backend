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
