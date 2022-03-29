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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var sanPham_model_1 = __importDefault(require("./sanPham.model"));
var index_1 = require("../configs/index");
var bcrypt_1 = __importDefault(require("bcrypt"));
var validator_1 = __importDefault(require("validator"));
var nguoiDungSchema = new mongoose_1.Schema({
    taiKhoan: {
        type: String,
        required: [true, 'tài khoản bị trống'],
        trim: true,
        unique: true,
        validate: function (value) {
            if (value.length <= 6 && value.length >= 15) {
                throw new Error('Tài khoản phải lớn hơn 6 và nhỏ hơn 15');
            }
        },
    },
    sex: {
        type: String,
        trim: true,
        required: [true, 'không tìm thấy giới tính'],
    },
    matKhau: {
        type: String,
        required: [true, 'mật khẩu bị trống'],
        min: [6, 'mật khẩu quá ngắn'],
        max: [32, 'mật khẩu quá dài'],
        trim: true,
        set: function (value) {
            var salt = bcrypt_1.default.genSaltSync(10);
            var hash = bcrypt_1.default.hashSync(value, salt);
            return hash;
        },
    },
    email: {
        type: String,
        required: [true, 'email bị trống'],
        trim: true,
        unique: true,
        validate: function (value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error('email invalid');
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
        required: [true, 'hộ tên bị trống'],
        trim: true,
    },
    soDt: {
        type: String,
        required: [true, 'số điện thoại bị trống'],
        trim: true,
        validate: function (value) {
            if (value.length <= 6 && value.length >= 15) {
                throw new Error('Số điện thoại phải lớn hơn 6 và nhỏ hơn 15');
            }
        },
    },
    avatar: {
        type: String,
        default: 'https://media.gettyimages.com/photos/businesswoman-icon-as-avatar-profile-picture-picture-id517322299?b=1&k=20&m=517322299&s=170667a&w=0&h=4J0qt00mt4jvEn8uKQ3203RiyVcOUOcF01DalYLRmbg=',
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
            giaTien: {
                type: Number,
                require: true,
                trim: true,
            },
        },
    ],
}, {
    timestamps: true,
});
nguoiDungSchema.static('myStaticMethod', function myStaticMethod() {
    return 42;
});
//collection
nguoiDungSchema.virtual('lichSuMuaHangs', {
    ref: 'LichSuMuaHang',
    localField: '_id',
    foreignField: 'ownerLichSuMua',
});
nguoiDungSchema.virtual('hoTroNguoiDungs', {
    ref: 'HoTroNguoiDung',
    localField: '_id',
    foreignField: 'ownerNoiDung',
});
nguoiDungSchema.static('findByCredentials', function (taiKhoan, matKhau) {
    return __awaiter(this, void 0, void 0, function () {
        var user, isMatch, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, NguoiDungModel.findOne({
                            taiKhoan: taiKhoan,
                        })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error('tài khoản và mật khẩu không chính sác');
                    }
                    return [4 /*yield*/, bcrypt_1.default.compare(matKhau, user.matKhau)];
                case 2:
                    isMatch = _a.sent();
                    if (!isMatch) {
                        throw new Error('tài khoản và mật khẩu không chính sác');
                    }
                    return [2 /*return*/, user];
                case 3:
                    error_1 = _a.sent();
                    throw new Error('tài khoản và mật khẩu không chính sác');
                case 4: return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.static('findBeforeCreate', function (body) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NguoiDungModel.findOne({
                        $or: [{ taiKhoan: body.taiKhoan }, { email: body.email }, { soDt: body.soDt }],
                    })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        body.avatar = "https://i.pravatar.cc/150?img=".concat(Math.floor(Math.random() * 50));
                        return [2 /*return*/, body];
                    }
                    else {
                        throw new Error(body.taiKhoan === user.taiKhoan ? 'Tài khoản đã tồn tại' : body.email === user.email ? 'email đã tồn tại' : 'số điện thoại đã tồn tại');
                    }
                    return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.static('findBeforeLike', function (_id, sanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var idSanPham, user, sanPhamLike, userMul;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sanPham._id.toString()];
                case 1:
                    idSanPham = _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id })];
                case 2:
                    user = _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({
                            _id: _id,
                            thich: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 3:
                    sanPhamLike = _a.sent();
                    if (!(user !== null)) return [3 /*break*/, 11];
                    if (!(sanPhamLike === null)) return [3 /*break*/, 6];
                    user.thich.push({
                        _idSanPham: sanPham._id.toString(),
                        giaTien: sanPham.giaTien,
                        hinhAnh: sanPham.hinhAnh,
                        tenSanPham: sanPham.tenSanPham,
                    });
                    return [4 /*yield*/, sanPham_model_1.default.findBeforeSetLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, user.save()];
                case 5:
                    _a.sent();
                    return [2 /*return*/, user];
                case 6: return [4 /*yield*/, NguoiDungModel.updateOne({ _id: _id }, { $pull: { thich: { _idSanPham: idSanPham } } }, { safe: true, multi: true })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, sanPham_model_1.default.findBeforeSetUnLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id })];
                case 9:
                    userMul = _a.sent();
                    return [2 /*return*/, userMul];
                case 10: return [3 /*break*/, 12];
                case 11: throw new Error('Không tìm thấy tài khoản');
                case 12: return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.static('findByUserAddDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sanPhamTrongGioHang, sanPham, userUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 2:
                    sanPhamTrongGioHang = _a.sent();
                    return [4 /*yield*/, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(user && sanPham)) return [3 /*break*/, 13];
                    if (!(sanPhamTrongGioHang === null)) return [3 /*break*/, 8];
                    if (!(sanPham.soLuong <= 0)) return [3 /*break*/, 4];
                    throw new Error('Sản phẩm đã hết');
                case 4:
                    user.gioHang.push({
                        _idSanPham: idSanPham,
                        giaTien: sanPham.giaTien,
                        thanhTien: sanPham.thanhTien,
                        hinhAnh: sanPham.hinhAnh,
                        ngayThem: new Date().toString(),
                        phanTramSale: sanPham.phanTramSale,
                        sale: sanPham.sale,
                        soLuong: 1,
                        tenSanPham: sanPham.tenSanPham,
                    });
                    sanPham.soLuong--;
                    return [4 /*yield*/, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, user.save()];
                case 6:
                    _a.sent();
                    return [2 /*return*/, user];
                case 7: return [3 /*break*/, 12];
                case 8:
                    if (!(sanPham.soLuong <= 0)) return [3 /*break*/, 9];
                    throw new Error('Sản phẩm đã hết');
                case 9: return [4 /*yield*/, NguoiDungModel.findOneAndUpdate({ _id: _id }, {
                        $inc: {
                            'gioHang.$[el].soLuong': +1,
                            'gioHang.$[el].giaTien': +sanPham.giaTien,
                            'gioHang.$[el].thanhTien': +sanPham.thanhTien,
                        },
                    }, {
                        arrayFilters: [{ 'el._idSanPham': idSanPham }],
                        new: true,
                    })];
                case 10:
                    userUpdate = _a.sent();
                    sanPham.soLuong--;
                    return [4 /*yield*/, sanPham.save()];
                case 11:
                    _a.sent();
                    return [2 /*return*/, userUpdate];
                case 12: return [3 /*break*/, 14];
                case 13: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 14: return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.static('findByUserreductionDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var sanPhamTrongGioHang, userTest, sanPham, user, userUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 1:
                    sanPhamTrongGioHang = _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id }).select({
                            gioHang: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 2:
                    userTest = _a.sent();
                    return [4 /*yield*/, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(sanPham && sanPhamTrongGioHang)) return [3 /*break*/, 11];
                    if (!((userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0].soLuong) === 1)) return [3 /*break*/, 7];
                    return [4 /*yield*/, NguoiDungModel.findByIdAndUpdate(_id, { $pull: { gioHang: { _idSanPham: idSanPham } } }, { safe: true, upsert: true }
                        // { luotThich: { $pull: { idNguoiDungs: { idNguoiDung: idNguoiDungStr } } } },
                        // { safe: true, multi: true }
                        )];
                case 4:
                    _a.sent();
                    sanPham.soLuong++;
                    return [4 /*yield*/, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id })];
                case 6:
                    user = _a.sent();
                    return [2 /*return*/, user];
                case 7: return [4 /*yield*/, NguoiDungModel.findOneAndUpdate({ _id: _id }, {
                        $inc: {
                            'gioHang.$[el].soLuong': -1,
                            'gioHang.$[el].giaTien': -sanPham.giaTien,
                            'gioHang.$[el].thanhTien': -sanPham.thanhTien,
                        },
                    }, {
                        arrayFilters: [{ 'el._idSanPham': idSanPham }],
                        new: true,
                    })];
                case 8:
                    userUpdate = _a.sent();
                    sanPham.soLuong++;
                    return [4 /*yield*/, sanPham.save()];
                case 9:
                    _a.sent();
                    return [2 /*return*/, userUpdate];
                case 10: return [3 /*break*/, 12];
                case 11: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 12: return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.static('findByUserDeleteProductDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var sanPhamTrongGioHang, userTest, sanPham, soLuong, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 1:
                    sanPhamTrongGioHang = _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id }).select({
                            gioHang: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 2:
                    userTest = _a.sent();
                    return [4 /*yield*/, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(sanPham && sanPhamTrongGioHang)) return [3 /*break*/, 9];
                    if (!(userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0])) return [3 /*break*/, 7];
                    soLuong = userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0].soLuong;
                    return [4 /*yield*/, NguoiDungModel.findByIdAndUpdate(_id, { $pull: { gioHang: { _idSanPham: idSanPham } } }, { safe: true, upsert: true })];
                case 4:
                    _a.sent();
                    sanPham.soLuong = sanPham.soLuong + soLuong;
                    console.log(sanPham.soLuong);
                    return [4 /*yield*/, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, NguoiDungModel.findOne({ _id: _id })];
                case 6:
                    user = _a.sent();
                    return [2 /*return*/, user];
                case 7: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 8: return [3 /*break*/, 10];
                case 9: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 10: return [2 /*return*/];
            }
        });
    });
});
nguoiDungSchema.methods.toJSON = function () {
    var nguoiDung = this;
    //chuyển nó về toObject để có thể xóa key trong object
    var nguoiDungObject = nguoiDung.toObject();
    delete nguoiDungObject.matKhau;
    return nguoiDungObject;
};
var NguoiDungModel = (0, mongoose_1.model)('nguoiDungSchema', nguoiDungSchema);
//export const NguoiDungModel = model<INguoiDung>('nguoiDungSchema', nguoiDungSchema) as INguoiDungModel;
NguoiDungModel.findOneAndUpdate(index_1.DEFATUL_ADMIN, index_1.DEFATUL_ADMIN, { new: true, upsert: true }, function () { });
exports.default = NguoiDungModel;
