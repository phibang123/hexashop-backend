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
    moTa: {
        type: String,
        default: 'New Sản phẩm',
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
                return [2, next()];
            }
            else if (!this.isModified('phanTramSale') && this.isModified('sale') && this.isModified('giaTien')) {
                this.thanhTien = this.giaTien;
                this.sale = false;
                return [2, next()];
            }
            else if (this.isModified('phanTramSale') && !this.isModified('sale') && this.isModified('giaTien')) {
                this.thanhTien = this.giaTien - (this.giaTien / 100) * this.phanTramSale;
                this.sale = true;
                return [2, next()];
            }
            else if (this.isModified('giaTien')) {
                this.thanhTien = this.giaTien;
                return [2, next()];
            }
            else {
                return [2, next()];
            }
            return [2];
        });
    });
});
sanPhamSchema.static('findBeforeSetLike', function (_a, idSanPham) {
    var idNguoiDung = _a.idNguoiDung, tenNguoiDung = _a.tenNguoiDung;
    return __awaiter(this, void 0, void 0, function () {
        var sanPham, idNguoiDungStr, sanPhamLike;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, SanPhamsModel.findOne({ _id: idSanPham })];
                case 1:
                    sanPham = _b.sent();
                    return [4, idNguoiDung.toString()];
                case 2:
                    idNguoiDungStr = _b.sent();
                    if (!(sanPham !== null)) return [3, 7];
                    return [4, SanPhamsModel.findOne({
                            _id: idSanPham,
                            'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
                        })];
                case 3:
                    sanPhamLike = _b.sent();
                    if (!(sanPhamLike === null)) return [3, 5];
                    sanPham.luotThich.idNguoiDungs.push({ idNguoiDung: idNguoiDung, tenNguoiDung: tenNguoiDung });
                    sanPham.luotThich.tongLuotThich = sanPham.luotThich.idNguoiDungs.length;
                    return [4, sanPham.save()];
                case 4:
                    _b.sent();
                    return [3, 6];
                case 5: return [2];
                case 6: return [3, 8];
                case 7: throw new Error('ERROR');
                case 8: return [2];
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
                case 0: return [4, SanPhamsModel.findOne({ _id: idSanPham })];
                case 1:
                    sanPham = _b.sent();
                    return [4, idNguoiDung.toString()];
                case 2:
                    idNguoiDungStr = _b.sent();
                    if (!(sanPham !== null)) return [3, 8];
                    return [4, SanPhamsModel.findOne({
                            _id: idSanPham,
                            'luotThich.idNguoiDungs': { $elemMatch: { idNguoiDung: idNguoiDungStr } },
                        })];
                case 3:
                    sanPhamLike = _b.sent();
                    if (!(sanPhamLike === null)) return [3, 4];
                    return [2];
                case 4: return [4, SanPhamsModel.findByIdAndUpdate(idSanPham, { $pull: { 'luotThich.idNguoiDungs': { idNguoiDung: idNguoiDungStr } } }, { safe: true, upsert: true })];
                case 5:
                    _b.sent();
                    sanPham.luotThich.tongLuotThich--;
                    return [4, sanPham.save()];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [3, 9];
                case 8: throw new Error('ERROR');
                case 9: return [2];
            }
        });
    });
});
var SanPhamsModel = (0, mongoose_1.model)('sanPhamSchema', sanPhamSchema);
exports.default = SanPhamsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuUGhhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvc2FuUGhhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRDtBQW9EaEQsSUFBTSxhQUFhLEdBQUcsSUFBSSxpQkFBTSxDQUM5QjtJQUNFLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDO1FBQ3pDLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQztLQUN0QztJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1YsUUFBUSxFQUFSLFVBQVMsS0FBYTtZQUNwQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQztLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsbUhBQW1IO0tBQzdIO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsd0JBQXdC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