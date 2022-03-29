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
NguoiDungModel.findOneAndUpdate(index_1.DEFATUL_ADMIN, index_1.DEFATUL_ADMIN, { new: true, upsert: true }, function () { });
exports.default = NguoiDungModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1b2lEdW5nLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9uZ3VvaUR1bmcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0Q7QUFDaEQsa0VBQXlFO0FBRXpFLDBDQUFpRDtBQUVqRCxrREFBNEI7QUFDNUIsd0RBQWtDO0FBeURsQyxJQUFNLGVBQWUsR0FBRyxJQUFJLGlCQUFNLENBQ2hDO0lBQ0UsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUM7UUFDdEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFFBQVEsRUFBUixVQUFTLEtBQWE7WUFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2FBQzNEO1FBQ0gsQ0FBQztLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSwwQkFBMEIsQ0FBQztLQUM3QztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztRQUM3QixHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLENBQUM7UUFDN0IsSUFBSSxFQUFFLElBQUk7UUFDVixHQUFHLEVBQUUsVUFBQyxLQUFhO1lBQ2pCLElBQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsV0FB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