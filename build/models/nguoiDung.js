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
var sanPham_1 = __importDefault(require("./sanPham"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var validator_1 = __importDefault(require("validator"));
var nguoiDungSchema = new mongoose_1.Schema({
    taiKhoan: {
        type: String,
        required: [true, 't??i kho???n b??? tr???ng'],
        trim: true,
        unique: true,
        validate: function (value) {
            if (value.length <= 6 && value.length >= 15) {
                throw new Error('T??i kho???n ph???i l???n h??n 6 v?? nh??? h??n 15');
            }
        },
    },
    sex: {
        type: String,
        trim: true,
        required: [true, 'kh??ng t??m th???y gi???i t??nh'],
    },
    matKhau: {
        type: String,
        required: [true, 'm???t kh???u b??? tr???ng'],
        min: [6, 'm???t kh???u qu?? ng???n'],
        max: [32, 'm???t kh???u qu?? d??i'],
        trim: true,
        set: function (value) {
            var salt = bcrypt_1.default.genSaltSync(10);
            var hash = bcrypt_1.default.hashSync(value, salt);
            return hash;
        },
    },
    email: {
        type: String,
        required: [true, 'email b??? tr???ng'],
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
        required: [true, 'h??? t??n b??? tr???ng'],
        trim: true,
    },
    soDt: {
        type: String,
        required: [true, 's??? ??i???n tho???i b??? tr???ng'],
        trim: true,
        validate: function (value) {
            if (value.length <= 6 && value.length >= 15) {
                throw new Error('S??? ??i???n tho???i ph???i l???n h??n 6 v?? nh??? h??n 15');
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
        var user, isMatch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, NguoiDungModel.findOne({
                        taiKhoan: taiKhoan,
                    })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error('t??i kho???n v?? m???t kh???u kh??ng ch??nh s??c');
                    }
                    return [4, bcrypt_1.default.compare(matKhau, user.matKhau)];
                case 2:
                    isMatch = _a.sent();
                    if (!isMatch) {
                        throw new Error('t??i kho???n v?? m???t kh???u kh??ng ch??nh s??c');
                    }
                    return [2, user];
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
                        throw new Error(body.taiKhoan === user.taiKhoan ? 'T??i kho???n ???? t???n t???i' : body.email === user.email ? 'email ???? t???n t???i' : 's??? ??i???n tho???i ???? t???n t???i');
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
                    return [4, sanPham_1.default.findBeforeSetLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 4:
                    _a.sent();
                    return [4, user.save()];
                case 5:
                    _a.sent();
                    return [2, user];
                case 6: return [4, NguoiDungModel.updateOne({ _id: _id }, { $pull: { thich: { _idSanPham: idSanPham } } }, { safe: true, multi: true })];
                case 7:
                    _a.sent();
                    return [4, sanPham_1.default.findBeforeSetUnLike({ idNguoiDung: user._id, tenNguoiDung: user.hoTen }, sanPham._id.toString())];
                case 8:
                    _a.sent();
                    return [4, NguoiDungModel.findOne({ _id: _id })];
                case 9:
                    userMul = _a.sent();
                    return [2, userMul];
                case 10: return [3, 12];
                case 11: throw new Error('Kh??ng t??m th???y t??i kho???n');
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
                    return [4, sanPham_1.default.findOne({ _id: idSanPham })];
                case 3:
                    sanPham = _a.sent();
                    if (!(user && sanPham)) return [3, 13];
                    if (!(sanPhamTrongGioHang === null)) return [3, 8];
                    if (!(sanPham.soLuong <= 0)) return [3, 4];
                    throw new Error('S???n ph???m ???? h???t');
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
                    throw new Error('S???n ph???m ???? h???t');
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
                case 13: throw new Error('L???i kh??ng th??? t??m th???y S???n Ph???m');
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
                    return [4, sanPham_1.default.findOne({ _id: idSanPham })];
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
                case 11: throw new Error('L???i kh??ng th??? t??m th???y S???n Ph???m');
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
                    return [4, sanPham_1.default.findOne({ _id: idSanPham })];
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
                case 7: throw new Error('L???i kh??ng th??? t??m th???y S???n Ph???m');
                case 8: return [3, 10];
                case 9: throw new Error('L???i kh??ng th??? t??m th???y S???n Ph???m');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1b2lEdW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9uZ3VvaUR1bmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0Q7QUFDaEQsc0RBQW1FO0FBSW5FLGtEQUE0QjtBQUM1Qix3REFBa0M7QUFtRGxDLElBQU0sZUFBZSxHQUFHLElBQUksaUJBQU0sQ0FDaEM7SUFDRSxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztRQUN0QyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFSLFVBQVMsS0FBYTtZQUNwQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDM0Q7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLDBCQUEwQixDQUFDO0tBQzdDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUM7UUFDckMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1FBQzdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztRQUM3QixJQUFJLEVBQUUsSUFBSTtRQUNWLEdBQUcsRUFBRSxVQUFDLEtBQWE7WUFDakIsSUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFD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