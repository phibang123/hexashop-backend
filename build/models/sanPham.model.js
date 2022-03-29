"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var index_1 = require("./../configs/index");
var sanPhamSchema = new mongoose_1.Schema({
    tenSanPham: {
        type: String,
        required: [true, 'tên sản phẩm bị trống'],
        trim: true,
    },
    giaTien: {
        type: Number,
        required: [true, 'giá tiền bị trống'],
    },
    sale: {
        type: Boolean,
        default: false,
    },
    phanTramSale: {
        type: Number,
        default: 0,
        validate: function (value) {
            if (value < 0 && value > 100) {
                throw new Error('phần trăm sale không phù hợp');
            }
        },
    },
    thanhTien: {
        type: Number,
        default: 0,
    },
    hinhAnh: {
        type: String,
        default: 'https://img-cdn.2game.vn/2021/02/28/Hutao-va-nhung-dieu-can-biet-khi-co-nang-ra-mat-game-thu-Genshin-Impact-1.jpg',
    },
    categories: {
        type: String,
        required: [true, 'loại sản phẩm bị trống'],
        trim: true,
        ref: 'CategoriModel',
    },
    /**
     * !: sao là object chứa nhiều người dùng
     * TODO: khi thêm 1 sao thì sẽ tính phần trăm dựa theo người dùng
     */
    luotThich: {
        tongLuotThich: {
            type: Number,
            default: 0,
        },
        idNguoiDungs: [
            {
                idNguoiDung: {
                    type: String,
                },
                tenNguoiDung: {
                    type: String,
                    // unique: true,
                    // sparse: true,
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
            avatar: {
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
    soLuong: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
sanPhamSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (this.isModified('phanTramSale') && this.isModified('giaTien')) {
                this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
                this.sale = true;
                return [2 /*return*/, next()];
            }
            else if (!this.isModified('phanTramSale') && this.isModified('sale') && this.isModified('giaTien')) {
                this.thanhTien = this.giaTien;
                this.sale = false;
                return [2 /*return*/, next()];
            }
            else if (this.isModified('phanTramSale') && !this.isModified('sale') && this.isModified('giaTien')) {
                this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
                this.sale = true;
                return [2 /*return*/, next()];
            }
            else if (this.isModified('giaTien')) {
                this.thanhTien = this.giaTien;
                return [2 /*return*/, next()];
            }
            else {
                return [2 /*return*/, next()];
            }
            return [2 /*return*/];
        });
    });
});
sanPhamSchema.static('findBeforeSetLike', function (_a, idSanPham) {
    var idNguoiDung = _a.idNguoiDung, tenNguoiDung = _a.tenNguoiDung;
    return __awaiter(this, void 0, void 0, function () {
        var sanPham, idNguoiDungStr, sanPhamLike;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, SanPhamsModel.findOne({ _id: idSanPham })];
                case 1:
                    sanPham = _b.sent();
                    return [4 /*yield*/, idNguoiDung.toString()];
                case 2:
                    idNguoiDungStr = _b.sent();
                    if (!(sanPham !== null)) return [3 /*break*/, 7];
                    return [4 /*yield*/, SanPhamsModel.findOne({
                            _id: idSanPham,
                            'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
                        })];
                case 3:
                    sanPhamLike = _b.sent();
                    if (!(sanPhamLike === null)) return [3 /*break*/, 5];
                    sanPham.luotThich.idNguoiDungs.push({ idNguoiDung: idNguoiDung, tenNguoiDung: tenNguoiDung });
                    sanPham.luotThich.tongLuotThich = sanPham.luotThich.idNguoiDungs.length;
                    return [4 /*yield*/, sanPham.save()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 5: return [2 /*return*/];
                case 6: return [3 /*break*/, 8];
                case 7: throw new Error('ERROR');
                case 8: return [2 /*return*/];
            }
        });
    });
});
sanPhamSchema.static('findBeforeSetUnLike', function (_a, idSanPham) {
    var idNguoiDung = _a.idNguoiDung, tenNguoiDung = _a.tenNguoiDung;
    return __awaiter(this, void 0, void 0, function () {
        var sanPham, idNguoiDungStr, sanPhamLike;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, SanPhamsModel.findOne({ _id: idSanPham })];
                case 1:
                    sanPham = _b.sent();
                    return [4 /*yield*/, idNguoiDung.toString()];
                case 2:
                    idNguoiDungStr = _b.sent();
                    if (!(sanPham !== null)) return [3 /*break*/, 8];
                    return [4 /*yield*/, SanPhamsModel.findOne({
                            _id: idSanPham,
                            'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
                        })];
                case 3:
                    sanPhamLike = _b.sent();
                    if (!(sanPhamLike === null)) return [3 /*break*/, 4];
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, SanPhamsModel.findByIdAndUpdate(idSanPham, { $pull: { 'luotThich.idNguoiDungs': { idNguoiDung: idNguoiDungStr } } }, { safe: true, upsert: true }
                    // { luotThich: { $pull: { idNguoiDungs: { idNguoiDung: idNguoiDungStr } } } },
                    // { safe: true, multi: true }
                    )];
                case 5:
                    _b.sent();
                    sanPham.luotThich.tongLuotThich--;
                    return [4 /*yield*/, sanPham.save()];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8: throw new Error('ERROR');
                case 9: return [2 /*return*/];
            }
        });
    });
});
var SanPhamsModel = (0, mongoose_1.model)('sanPhamSchema', sanPhamSchema);
//export const SanPhamsModel = model<ISanPham>('sanPhamSchema', sanPhamSchema) as ISanPhamModel;
index_1.DEFATUL_SANPHAM.forEach(function (n) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SanPhamsModel.findOneAndUpdate(n, n, { new: true, upsert: true })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.default = SanPhamsModel;
