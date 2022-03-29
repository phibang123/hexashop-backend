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
                    return [4, NguoiDungModel.findOne({
                            taiKhoan: taiKhoan,
                        })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error('tài khoản và mật khẩu không chính sác');
                    }
                    return [4, bcrypt_1.default.compare(matKhau, user.matKhau)];
                case 2:
                    isMatch = _a.sent();
                    if (!isMatch) {
                        throw new Error('tài khoản và mật khẩu không chính sác');
                    }
                    return [2, user];
                case 3:
                    error_1 = _a.sent();
                    throw new Error('tài khoản và mật khẩu không chính sác');
                case 4: return [2];
            }
        });
    });
});
nguoiDungSchema.static('findBeforeCreate', function (body) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, NguoiDungModel.findOne({
                        $or: [{ taiKhoan: body.taiKhoan }, { email: body.email }, { soDt: body.soDt }],
                    })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        body.avatar = "https://i.pravatar.cc/150?img=".concat(Math.floor(Math.random() * 50));
                        return [2, body];
                    }
                    else {
                        throw new Error(body.taiKhoan === user.taiKhoan ? 'Tài khoản đã tồn tại' : body.email === user.email ? 'email đã tồn tại' : 'số điện thoại đã tồn tại');
                    }
                    return [2];
            }
        });
    });
});
nguoiDungSchema.static('findBeforeLike', function (_id, sanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var idSanPham, user, sanPhamLike, userMul;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, sanPham._id.toString()];
                case 1:
                    idSanPham = _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id })];
                case 2:
                    user = _a.sent();
                    return [4, NguoiDungModel.findOne({
                            _id: _id,
                            thich: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 3:
                    sanPhamLike = _a.sent();
                    if (!(user !== null)) return [3, 11];
                    if (!(sanPhamLike === null)) return [3, 6];
                    user.thich.push({
                        _idSanPham: sanPham._id.toString(),
                        giaTien: sanPham.giaTien,
                        hinhAnh: sanPham.hinhAnh,
                        tenSanPham: sanPham.tenSanPham,
                    });
                    return [4, sanPham_model_1.default.findBeforeSetLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 4:
                    _a.sent();
                    return [4, user.save()];
                case 5:
                    _a.sent();
                    return [2, user];
                case 6: return [4, NguoiDungModel.updateOne({ _id: _id }, { $pull: { thich: { _idSanPham: idSanPham } } }, { safe: true, multi: true })];
                case 7:
                    _a.sent();
                    return [4, sanPham_model_1.default.findBeforeSetUnLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 8:
                    _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id })];
                case 9:
                    userMul = _a.sent();
                    return [2, userMul];
                case 10: return [3, 12];
                case 11: throw new Error('Không tìm thấy tài khoản');
                case 12: return [2];
            }
        });
    });
});
nguoiDungSchema.static('findByUserAddDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var user, sanPhamTrongGioHang, sanPham, userUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, NguoiDungModel.findOne({ _id: _id })];
                case 1:
                    user = _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 2:
                    sanPhamTrongGioHang = _a.sent();
                    return [4, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(user && sanPham)) return [3, 13];
                    if (!(sanPhamTrongGioHang === null)) return [3, 8];
                    if (!(sanPham.soLuong <= 0)) return [3, 4];
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
                    return [4, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4, user.save()];
                case 6:
                    _a.sent();
                    return [2, user];
                case 7: return [3, 12];
                case 8:
                    if (!(sanPham.soLuong <= 0)) return [3, 9];
                    throw new Error('Sản phẩm đã hết');
                case 9: return [4, NguoiDungModel.findOneAndUpdate({ _id: _id }, {
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
                    return [4, sanPham.save()];
                case 11:
                    _a.sent();
                    return [2, userUpdate];
                case 12: return [3, 14];
                case 13: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 14: return [2];
            }
        });
    });
});
nguoiDungSchema.static('findByUserreductionDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var sanPhamTrongGioHang, userTest, sanPham, user, userUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 1:
                    sanPhamTrongGioHang = _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id }).select({
                            gioHang: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 2:
                    userTest = _a.sent();
                    return [4, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(sanPham && sanPhamTrongGioHang)) return [3, 11];
                    if (!((userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0].soLuong) === 1)) return [3, 7];
                    return [4, NguoiDungModel.findByIdAndUpdate(_id, { $pull: { gioHang: { _idSanPham: idSanPham } } }, { safe: true, upsert: true })];
                case 4:
                    _a.sent();
                    sanPham.soLuong++;
                    return [4, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id })];
                case 6:
                    user = _a.sent();
                    return [2, user];
                case 7: return [4, NguoiDungModel.findOneAndUpdate({ _id: _id }, {
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
                    return [4, sanPham.save()];
                case 9:
                    _a.sent();
                    return [2, userUpdate];
                case 10: return [3, 12];
                case 11: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 12: return [2];
            }
        });
    });
});
nguoiDungSchema.static('findByUserDeleteProductDelivery', function (_id, idSanPham) {
    return __awaiter(this, void 0, void 0, function () {
        var sanPhamTrongGioHang, userTest, sanPham, soLuong, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, NguoiDungModel.findOne({ _id: _id, 'gioHang._idSanPham': idSanPham })];
                case 1:
                    sanPhamTrongGioHang = _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id }).select({
                            gioHang: { $elemMatch: { _idSanPham: idSanPham } },
                        })];
                case 2:
                    userTest = _a.sent();
                    return [4, sanPham_model_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(sanPham && sanPhamTrongGioHang)) return [3, 9];
                    if (!(userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0])) return [3, 7];
                    soLuong = userTest === null || userTest === void 0 ? void 0 : userTest.gioHang[0].soLuong;
                    return [4, NguoiDungModel.findByIdAndUpdate(_id, { $pull: { gioHang: { _idSanPham: idSanPham } } }, { safe: true, upsert: true })];
                case 4:
                    _a.sent();
                    sanPham.soLuong = sanPham.soLuong + soLuong;
                    console.log(sanPham.soLuong);
                    return [4, sanPham.save()];
                case 5:
                    _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id })];
                case 6:
                    user = _a.sent();
                    return [2, user];
                case 7: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 8: return [3, 10];
                case 9: throw new Error('Lỗi không thể tìm thấy Sản Phẩm');
                case 10: return [2];
            }
        });
    });
});
nguoiDungSchema.methods.toJSON = function () {
    var nguoiDung = this;
    var nguoiDungObject = nguoiDung.toObject();
    delete nguoiDungObject.matKhau;
    return nguoiDungObject;
};
var NguoiDungModel = (0, mongoose_1.model)('nguoiDungSchema', nguoiDungSchema);
exports.default = NguoiDungModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1b2lEdW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9uZ3VvaUR1bmcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0Q7QUFDaEQsa0VBQXlFO0FBSXpFLGtEQUE0QjtBQUM1Qix3REFBa0M7QUF5RGxDLElBQU0sZUFBZSxHQUFHLElBQUksaUJBQU0sQ0FDaEM7SUFDRSxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztRQUN0QyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFSLFVBQVMsS0FBYTtZQUNwQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDM0Q7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLDBCQUEwQixDQUFDO0tBQzdDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUM7UUFDckMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1FBQzdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztRQUM3QixJQUFJLEVBQUUsSUFBSTtRQUNWLEdBQUcsRUFBRSxVQUFDLEtBQWE7WUFDakIsSUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxD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