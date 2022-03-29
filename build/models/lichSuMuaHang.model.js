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
var lichSuMuaHangSchema = new mongoose_1.Schema({
    idNguoiDung: {
        type: String,
        trim: true,
    },
    taiKhoan: {
        type: String,
        trim: true,
        required: [true, 'tài khoản bị trống'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email bị trống'],
    },
    diaChi: {
        type: String,
        trim: true,
        required: [true, 'địa chỉ không được trống'],
    },
    hoTen: {
        type: String,
        trim: true,
        required: [true, 'họ tên bị trống'],
    },
    avatar: {
        type: String,
        trim: true,
    },
    soDt: {
        type: String,
        trim: true,
        required: [true, 'số điện thoại bị trống'],
    },
    sex: {
        type: String,
        trim: true,
        required: [true, 'giới tính bị trống'],
    },
    trangThai: {
        type: String,
        trim: true,
        default: 'chờ xác nhận',
    },
    ngayDat: {
        type: Date,
        default: Date.now,
    },
    tongTien: {
        type: Number,
    },
    soTienGiam: {
        type: Number,
    },
    tongSanPham: [
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
            thanhTien: {
                type: Number,
                require: false,
                trim: true,
            },
            giaTien: {
                type: Number,
                require: false,
                trim: true,
            },
            hinhAnh: {
                type: String,
                require: false,
                trim: true,
            },
        },
    ],
}, {
    timestamps: false,
});
lichSuMuaHangSchema.static('findBeforeByProduct', function (user) {
    return __awaiter(this, void 0, void 0, function () {
        var lucSuMua;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) {
                        throw new Error('Error');
                    }
                    return [4, lichSuMuaHangModel.create({
                            idNguoiDung: user._id.toString(),
                            taiKhoan: user.taiKhoan,
                            email: user.email,
                            diaChi: user.diaChi,
                            hoTen: user.hoTen,
                            avatar: user.avatar,
                            soDt: user.soDt,
                            sex: user.sex,
                            tongSanPham: user.gioHang,
                            tongTien: user.gioHang.reduce(function (a, b) {
                                return a + b.thanhTien;
                            }, 0),
                            soTienGiam: user.gioHang.reduce(function (a, b) {
                                return a + b.giaTien;
                            }, 0) -
                                user.gioHang.reduce(function (a, b) {
                                    return a + b.thanhTien;
                                }, 0),
                        })];
                case 1:
                    lucSuMua = _a.sent();
                    return [2, lucSuMua];
            }
        });
    });
});
var lichSuMuaHangModel = (0, mongoose_1.model)('lichSuMuaHangSchema', lichSuMuaHangSchema);
exports.default = lichSuMuaHangModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGljaFN1TXVhSGFuZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvbGljaFN1TXVhSGFuZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRDtBQXdFaEQsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLGlCQUFNLENBQ3BDO0lBQ0UsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztLQUN2QztJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7S0FDbkM7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLDBCQUEwQixDQUFDO0tBQzdDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQztLQUNwQztJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLENBQUM7S0FDM0M7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtR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