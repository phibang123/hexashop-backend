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
exports.XoaSanPhamTrongGioHangController = exports.GiamSoLuongSanPhamTrongGioHangController = exports.ThemSanPhamVaoGioHangController = exports.CommemtSanPhamController = exports.ThichSanPhamController = exports.ChinhSuaNguoiDungController = exports.UpLoadAvatarController = exports.LayThongTinProfileController = exports.DangNhapController = exports.DangKyController = void 0;
var reponse_1 = require("../utils/reponse");
var nguoiDung_model_1 = __importDefault(require("../models/nguoiDung.model"));
var sanPham_model_1 = __importDefault(require("../models/sanPham.model"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var putObjectS3Avatar_1 = require("../utils/putObjectS3Avatar");
var index_1 = require("../configs/index");
var DangKyController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userCheck, userCreate, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, nguoiDung_model_1.default.findBeforeCreate(req.body)];
            case 1:
                userCheck = _a.sent();
                userCreate = new nguoiDung_model_1.default(userCheck);
                return [4 /*yield*/, userCreate.save()];
            case 2:
                _a.sent();
                res.status(201).json((0, reponse_1.ReS)(201, userCreate));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.DangKyController = DangKyController;
var DangNhapController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, token, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, nguoiDung_model_1.default.findByCredentials(req.body.taiKhoan, req.body.matKhau)];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, jsonwebtoken_1.default.sign({ _id: user._id.toString() }, index_1.secret_key)];
            case 2:
                token = _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, { token: token, user: user }))];
            case 3:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.DangNhapController = DangNhapController;
var LayThongTinProfileController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, req.user))];
        }
        catch (error) {
            next(error);
        }
        return [2 /*return*/];
    });
}); };
exports.LayThongTinProfileController = LayThongTinProfileController;
var UpLoadAvatarController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.user;
                return [4 /*yield*/, (0, putObjectS3Avatar_1.putImagAvatar)(req.file, req.user._id)];
            case 1:
                _a.avatar = _b.sent();
                return [4 /*yield*/, req.user.save()];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, req.user))];
            case 3:
                error_3 = _b.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.UpLoadAvatarController = UpLoadAvatarController;
var ChinhSuaNguoiDungController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updates, allowedUpdates, isValiOperetion, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updates = Object.keys(req.body);
                allowedUpdates = ['diaChi', 'email', 'password', 'hoTen', 'matKhau', 'sex', 'soDt'];
                isValiOperetion = updates.every(function (update) {
                    return allowedUpdates.includes(update);
                });
                if (!isValiOperetion) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'hãy sửa những dử liệu yêu cầu'))];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                updates.forEach(function (update) { return (req.user[update] = req.body[update]); });
                return [4 /*yield*/, req.user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, req.user))];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ChinhSuaNguoiDungController = ChinhSuaNguoiDungController;
var ThichSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, oneSanPham, user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.params.id;
                return [4 /*yield*/, sanPham_model_1.default.findById(_id)];
            case 1:
                oneSanPham = _a.sent();
                if (oneSanPham === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, { error: 'Không tìm thấy sản phẩm' }))];
                }
                return [4 /*yield*/, nguoiDung_model_1.default.findBeforeLike(req.user._id, oneSanPham)];
            case 2:
                user = _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, user))];
            case 3:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ThichSanPhamController = ThichSanPhamController;
var CommemtSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, userComment, sanPham, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.params.id;
                if (req.body.comment === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Comment rỗng'))];
                }
                userComment = req.body.comment;
                return [4 /*yield*/, sanPham_model_1.default.findOne({ _id: _id })];
            case 1:
                sanPham = _a.sent();
                if (sanPham === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Không tìm thấy sản phẩm'))];
                }
                sanPham.comment.push({
                    idNguoiDung: req.user._id.toString(),
                    tenNguoiDung: req.user.hoTen,
                    avatar: req.user.avatar,
                    ngoiDungComment: userComment,
                });
                return [4 /*yield*/, sanPham.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, sanPham, 'Comment thành công'))];
            case 3:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.CommemtSanPhamController = CommemtSanPhamController;
var ThemSanPhamVaoGioHangController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, user, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, nguoiDung_model_1.default.findByUserAddDelivery(req.user._id.toString(), _id)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, user))];
            case 2:
                error_7 = _a.sent();
                console.log(error_7, 'error');
                next(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.ThemSanPhamVaoGioHangController = ThemSanPhamVaoGioHangController;
var GiamSoLuongSanPhamTrongGioHangController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, user, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, nguoiDung_model_1.default.findByUserreductionDelivery(req.user._id.toString(), _id)];
            case 1:
                user = _a.sent();
                //const user = await NguoiDungModel.findOne({ _id: (req as any).user._id.toString() });
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, user))];
            case 2:
                error_8 = _a.sent();
                console.log(error_8);
                next(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GiamSoLuongSanPhamTrongGioHangController = GiamSoLuongSanPhamTrongGioHangController;
var XoaSanPhamTrongGioHangController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, user, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, nguoiDung_model_1.default.findByUserDeleteProductDelivery(req.user._id.toString(), _id)];
            case 1:
                user = _a.sent();
                //const user = await NguoiDungModel.findOne({ _id: (req as any).user._id.toString() });
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, user))];
            case 2:
                error_9 = _a.sent();
                console.log(error_9);
                next(error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.XoaSanPhamTrongGioHangController = XoaSanPhamTrongGioHangController;
