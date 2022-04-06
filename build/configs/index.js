"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = exports.send_gird_key = exports.s3_secret_key = exports.s3_access_key = exports.s3_domain_name = exports.s3_bucket_name = exports.mongodb_client = exports.mongodb_server = exports.secret_key = exports.DEFATUL_SANPHAM = exports.DEFATUL_CATEROGIES = exports.DEFATUL_ADMIN = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
require('dotenv').config();
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
        categories: '/nu_gioi/ao/ao_thun',
        sale: false,
        phanTramSale: 0,
        soLuong: 10,
    },
    {
        tenSanPham: 'Disney Memories UT Áo Thun Ngắn Tay',
        giaTien: 400000,
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
exports.send_gird_key = process.env.SENDGRID_API_KEY;
exports.s3 = new aws_sdk_1.default.S3({
    accessKeyId: exports.s3_access_key,
    secretAccessKey: exports.s3_secret_key,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlncy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxvREFBMEI7QUFFMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWQsUUFBQSxhQUFhLEdBQXlCO0lBQ2pELFFBQVEsRUFBRSxTQUFTO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7SUFDN0IsSUFBSSxFQUFFLGNBQWM7SUFDcEIsS0FBSyxFQUFFLFFBQVE7SUFDZixVQUFVLEVBQUUsSUFBSTtJQUNoQixHQUFHLEVBQUUsS0FBSztJQUNWLE1BQU0sRUFBRSxZQUFZO0NBQ3JCLENBQUM7QUFFVyxRQUFBLGtCQUFrQixHQUFnQjtJQUM3QztRQUNFLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsQ0FBQztRQUNYLEtBQUssRUFBRSxDQUFDO1FBQ1IsUUFBUSxFQUFFLFdBQVc7S0FDdEI7SUFDRDtRQUNFLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsQ0FBQztRQUNSLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFFLFdBQVc7UUFDbkIsUUFBUSxFQUFFLGNBQWM7S0FDekI7SUFDRDtRQUNFLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLElBQUk7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