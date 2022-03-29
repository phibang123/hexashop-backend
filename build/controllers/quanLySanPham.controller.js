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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XoaSanPhamController = exports.ChinhSuaHinhAnhSanPhamController = exports.ChinhSuaSanPhamController = exports.GiamSoLuongSanPhamController = exports.ThemSoLuongSanPhamController = exports.ThemSanPhamController = exports.TimSanPhamTheoIdController = exports.TimSanPhamTheoTenController = exports.LayTatCaSanPhamController = void 0;
var reponse_1 = require("../utils/reponse");
var sanPham_model_1 = __importDefault(require("../models/sanPham.model"));
var putObjectS3Picture_1 = require("./../utils/putObjectS3Picture");
//Get /tasks lấy tất cả task của user
//Get /tasks?completed=true lấy task completed true
//Get /tasks?limit=1 lấy task giới hạn 1 task
//Get /tasks?limit=1&skip=1 lấy task giới hạn 1 task ở trang 1, phân trang
//Get /tasks?sortBy=createdAt:desc lấy task sort tăng dần theo ngày hoàn thành
var LayTatCaSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var match, sort, parts, allSanPham_1, allSanPham, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                match = {};
                sort = {};
                if (req.query.categories) {
                    match.categories = req.query.categories;
                }
                if (req.query.sortBy) {
                    parts = req.query.sortBy.split(':');
                    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                if (!match.categories) return [3 /*break*/, 3];
                return [4 /*yield*/, sanPham_model_1.default.find({ categories: match.categories })
                        .sort(sort)
                        .skip(req.query.skip)
                        .limit(req.query.limit)];
            case 2:
                allSanPham_1 = _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, allSanPham_1))];
            case 3: return [4 /*yield*/, sanPham_model_1.default.find()
                    .sort(sort)
                    .skip(req.query.skip)
                    .limit(req.query.limit)];
            case 4:
                allSanPham = _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, allSanPham))];
            case 5:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.LayTatCaSanPhamController = LayTatCaSanPhamController;
var TimSanPhamTheoTenController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tenSanPham, allSanPham, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                tenSanPham = req.query.tenSanPham;
                return [4 /*yield*/, sanPham_model_1.default.find({ tenSanPham: { $regex: '.*' + tenSanPham + '.*' } })];
            case 1:
                allSanPham = _a.sent();
                res.status(200).json((0, reponse_1.ReS)(200, allSanPham));
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.TimSanPhamTheoTenController = TimSanPhamTheoTenController;
var TimSanPhamTheoIdController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var idSanPham, oneSanPham, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                idSanPham = req.params.id;
                return [4 /*yield*/, sanPham_model_1.default.findOne({ _id: idSanPham })];
            case 1:
                oneSanPham = _a.sent();
                res.status(200).json((0, reponse_1.ReS)(200, oneSanPham));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.TimSanPhamTheoIdController = TimSanPhamTheoIdController;
var ThemSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, picture, fromSanPham, sanPham, urlSanPham, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, picture = _a.picture, fromSanPham = __rest(_a, ["picture"]);
                sanPham = new sanPham_model_1.default(fromSanPham);
                if (!req.file) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, putObjectS3Picture_1.putImagPicture)(req.file, req.body.tenSanPham)];
            case 1:
                urlSanPham = _b.sent();
                sanPham.hinhAnh = urlSanPham;
                _b.label = 2;
            case 2: return [4 /*yield*/, sanPham.save()];
            case 3:
                _b.sent();
                res.status(201).json((0, reponse_1.ReS)(201, sanPham));
                return [3 /*break*/, 5];
            case 4:
                error_4 = _b.sent();
                next(error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.ThemSanPhamController = ThemSanPhamController;
var ThemSoLuongSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, sanPham, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                if (!req.body.soLuong) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Bạn chưa thêm số lượng'))];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, sanPham_model_1.default.findById(_id)];
            case 2:
                sanPham = _a.sent();
                if (sanPham === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Không tìm thấy sản phẩm'))];
                }
                sanPham.soLuong = sanPham.soLuong + req.body.soLuong;
                return [4 /*yield*/, sanPham.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, sanPham))];
            case 4:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.ThemSoLuongSanPhamController = ThemSoLuongSanPhamController;
var GiamSoLuongSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, sanPham, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                if (!req.body.soLuong) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Bạn chưa thêm số lượng'))];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, sanPham_model_1.default.findById(_id)];
            case 2:
                sanPham = _a.sent();
                if (sanPham === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'Không tìm thấy sản phẩm'))];
                }
                sanPham.soLuong = sanPham.soLuong - req.body.soLuong;
                if (sanPham.soLuong < 0) {
                    sanPham.soLuong = 0;
                }
                return [4 /*yield*/, sanPham.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, sanPham))];
            case 4:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.GiamSoLuongSanPhamController = GiamSoLuongSanPhamController;
var ChinhSuaSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, updates, allowedUpdates, isValiOperetion, sanPham_1, urlSanPham, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                updates = Object.keys(req.body);
                allowedUpdates = ['categories', 'giaTien', 'phanTramSale', 'sale', 'soLuong', 'tenSanPham', 'thanhTien'];
                isValiOperetion = updates.every(function (update) {
                    return allowedUpdates.includes(update);
                });
                if (!isValiOperetion) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'hãy sửa những dử liệu yêu cầu'))];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, sanPham_model_1.default.findById({ _id: _id })];
            case 2:
                sanPham_1 = _a.sent();
                if (sanPham_1 === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'không tìm thấy sản phẩm'))];
                }
                updates.forEach(function (update) { return (sanPham_1[update] = req.body[update]); });
                if (!req.file) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, putObjectS3Picture_1.putImagPicture)(req.file, req.body.tenSanPham)];
            case 3:
                urlSanPham = _a.sent();
                sanPham_1.hinhAnh = urlSanPham;
                _a.label = 4;
            case 4: return [4 /*yield*/, sanPham_1.save()];
            case 5:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, sanPham_1))];
            case 6:
                error_7 = _a.sent();
                next(error_7);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.ChinhSuaSanPhamController = ChinhSuaSanPhamController;
var ChinhSuaHinhAnhSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, sanPham, urlSanPham, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, sanPham_model_1.default.findById({ _id: _id })];
            case 2:
                sanPham = _a.sent();
                if (sanPham === null) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'không tìm thấy sản phẩm'))];
                }
                if (!req.file) {
                    return [2 /*return*/, res.status(400).json((0, reponse_1.ReE)(400, 'không tìm Picture'))];
                }
                return [4 /*yield*/, (0, putObjectS3Picture_1.putImagPicture)(req.file, req.body.tenSanPham)];
            case 3:
                urlSanPham = _a.sent();
                sanPham.hinhAnh = urlSanPham;
                return [4 /*yield*/, sanPham.save()];
            case 4:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, sanPham))];
            case 5:
                error_8 = _a.sent();
                next(error_8);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.ChinhSuaHinhAnhSanPhamController = ChinhSuaHinhAnhSanPhamController;
var XoaSanPhamController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, sanPham_model_1.default.findByIdAndDelete({ _id: _id })];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).json((0, reponse_1.ReS)(200, 'xóa sản phẩm thành công'))];
            case 3:
                error_9 = _a.sent();
                next(error_9);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.XoaSanPhamController = XoaSanPhamController;
