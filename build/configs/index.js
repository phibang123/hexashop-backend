"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = exports.gird_key = exports.s3_secret_key = exports.s3_access_key = exports.s3_domain_name = exports.s3_bucket_name = exports.mongodb_client = exports.mongodb_server = exports.secret_key = exports.DEFATUL_SANPHAM = exports.DEFATUL_CATEROGIES = exports.DEFATUL_ADMIN = void 0;
require('dotenv').config();
var aws_sdk_1 = __importDefault(require("aws-sdk"));
exports.DEFATUL_ADMIN = {
    taiKhoan: 'bangphi',
    matKhau: '1234597s1Ba',
    email: 'phibang79s@gmail.com',
    soDt: '512132522222',
    hoTen: 'string',
    adminInWeb: true,
    sex: 'Nam',
    diaChi: 'alalalalal',
};
exports.DEFATUL_CATEROGIES = [
    {
        ids: 1,
        name: 'Nam Giới',
        slug: 'nam_gioi',
        parent: '/',
        parentId: 0,
        level: 1,
        category: '/nam_gioi',
    },
    {
        ids: 2,
        name: 'Nữ Giới',
        slug: 'nu_gioi',
        parent: '/',
        parentId: 0,
        level: 1,
        category: '/nu_gioi',
    },
    {
        ids: 3,
        name: 'Áo',
        slug: 'ao',
        level: 2,
        parentId: 1,
        parent: '/nam_gioi',
        category: '/nam_gioi/ao',
    },
    {
        ids: 4,
        name: 'Áo',
        slug: 'ao',
        level: 2,
        parentId: 2,
        parent: '/nu_gioi',
        category: '/nu_gioi/ao',
    },
    {
        ids: 5,
        name: 'Quần',
        slug: 'quan',
        level: 2,
        parentId: 1,
        parent: '/nam_gioi',
        category: '/nam_gioi/quan',
    },
    {
        ids: 6,
        name: 'Quần',
        slug: 'quan',
        level: 2,
        parentId: 2,
        parent: '/nu_gioi',
        category: '/nu_gioi/quan',
    },
    {
        ids: 7,
        name: 'Tất',
        slug: 'tat',
        level: 2,
        parentId: 1,
        parent: '/nam_gioi',
        category: '/nam_gioi/tat',
    },
    {
        ids: 8,
        name: 'Tất',
        slug: 'tat',
        level: 2,
        parentId: 2,
        parent: '/nu_gioi',
        category: '/nu_gioi/tat',
    },
    {
        ids: 9,
        name: 'Áo sơ mi',
        slug: 'ao_so_mi',
        level: 3,
        parentId: 4,
        parent: '/nu_gioi/ao',
        category: '/nu_gioi/ao/ao_so_mi',
    },
    {
        ids: 10,
        name: 'Áo sơ mi',
        slug: 'ao_so_mi',
        level: 3,
        parentId: 3,
        parent: '/nam_gioi/ao',
        category: '/nam_gioi/ao/ao_so_mi',
    },
    {
        ids: 11,
        name: 'Áo thun',
        slug: 'ao_thun',
        level: 3,
        parentId: 4,
        parent: '/nu_gioi/ao',
        category: '/nu_gioi/ao/ao_thun',
    },
    {
        ids: 12,
        name: 'Áo thun',
        slug: 'ao_thun',
        level: 3,
        parentId: 3,
        parent: '/nam_gioi/ao',
        category: '/nam_gioi/ao/ao_thun',
    },
    {
        ids: 13,
        name: 'Áo khoác',
        slug: 'ao_khoac',
        level: 3,
        parentId: 4,
        parent: '/nu_gioi/ao',
        category: '/nu_gioi/ao/ao_khoac',
    },
    {
        ids: 14,
        name: 'Áo khoác',
        slug: 'ao_khoac',
        level: 3,
        parentId: 3,
        parent: '/nam_gioi/ao',
        category: '/nam_gioi/ao/ao_khoac',
    },
    {
        ids: 15,
        name: 'Quần jean',
        slug: 'quan_jean',
        level: 3,
        parentId: 5,
        parent: '/nam_gioi/quan',
        category: '/nam_gioi/quan/quan_jean',
    },
    {
        ids: 16,
        name: 'Quần jean',
        slug: 'quan_jean',
        level: 3,
        parentId: 6,
        parent: '/nu_gioi/quan',
        category: '/nu_gioi/quan/quan_jean',
    },
    {
        ids: 17,
        name: 'Quần kaki',
        slug: 'quan_kaki',
        level: 3,
        parentId: 6,
        parent: '/nu_gioi/quan',
        category: '/nu_gioi/quan/quan_kaki',
    },
    {
        ids: 18,
        name: 'Quần kaki',
        slug: 'quan_kaki',
        level: 3,
        parentId: 5,
        parent: '/nam_gioi/quan',
        category: '/nam_gioi/quan/quan_kaki',
    },
    {
        ids: 19,
        name: 'Quần thun',
        slug: 'quan_thun',
        level: 3,
        parentId: 6,
        parent: '/nu_gioi/quan',
        category: '/nu_gioi/quan/quan_thun',
    },
    {
        ids: 20,
        name: 'Quần thun',
        slug: 'quan_thun',
        level: 3,
        parentId: 5,
        parent: '/nam_gioi/quan',
        category: '/nam_gioi/quan/quan_thun',
    },
    {
        ids: 21,
        name: 'Tất lưới',
        slug: 'tat_luoi',
        level: 3,
        parentId: 8,
        parent: '/nu_gioi/tat',
        category: '/nu_gioi/tat/tat_luoi',
    },
    {
        ids: 22,
        name: 'Tất tàn hình',
        slug: 'tat_tan_hinh',
        level: 3,
        parentId: 7,
        parent: '/nam_gioi/tat',
        category: '/nam_gioi/tat/tat_tan_hinh',
    },
];
exports.DEFATUL_SANPHAM = [
    {
        tenSanPham: 'Áo Thun Chống UV Dài Tay Xẻ Tà',
        giaTien: 400000,
        thanhTien: 400000,
        categories: '/nu_gioi/ao/ao_thun',
        sale: false,
        phanTramSale: 0,
        soLuong: 10,
    },
    {
        tenSanPham: 'Disney Memories UT Áo Thun Ngắn Tay',
        giaTien: 400000,
        thanhTien: 400000,
        categories: '/nu_gioi/ao/ao_thun',
        sale: false,
        phanTramSale: 0,
        soLuong: 10,
    },
];
exports.secret_key = process.env.SECRET_KEY || '';
exports.mongodb_server = process.env.MONGODB_CONNECT_SERVER;
exports.mongodb_client = process.env.MONGODB_CONNECT_CLIENT;
exports.s3_bucket_name = process.env.S3_BUCKET_NAME;
exports.s3_domain_name = process.env.S3_DOMAIN_NAME;
exports.s3_access_key = process.env.S3_ACCESSS_KEY;
exports.s3_secret_key = process.env.S3_SECRET_KEY;
exports.gird_key = process.env.SENDGRID_API_KEY;
exports.s3 = new aws_sdk_1.default.S3({
    accessKeyId: exports.s3_access_key,
    secretAccessKey: exports.s3_secret_key,
});