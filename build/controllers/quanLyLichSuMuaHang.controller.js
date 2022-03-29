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
exports.ThayDoiTrangThaiMuaHangContrller = exports.XemTatCaTrangThaiController = exports.XemLichSuMuaHangAllUserController = exports.XemLichSuMuaHangUserController = exports.DatHangController = void 0;
var reponse_1 = require("./../utils/reponse");
var lichSuMuaHang_model_1 = __importDefault(require("../models/lichSuMuaHang.model"));
var DatHangController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var lichSuMuaHang, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (req.user.gioHang.length < 1) {
                    return [2, res.status(400).json((0, reponse_1.ReE)(400, 'Không tìm thấy giỏ hàng'))];
                }
                if (!req.user.soDt && !req.user.diaChi) {
                    return [2, res.status(400).json((0, reponse_1.ReE)(400, 'Bạn chưa nhập đầy dủ thông tin'))];
                }
                return [4, lichSuMuaHang_model_1.default.findBeforeByProduct(req.user)];
            case 1:
                lichSuMuaHang = _a.sent();
                req.user.gioHang = [];
                return [4, req.user.save()];
            case 2:
                _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang))];
            case 3:
                error_1 = _a.sent();
                next(error_1);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.DatHangController = DatHangController;
var XemLichSuMuaHangUserController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, lichSuMuaHang_1, lichSuMuaHang, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                if (!_id) return [3, 3];
                return [4, lichSuMuaHang_model_1.default.findOne({ _id: _id, idNguoiDung: req.user._id.toString() })];
            case 2:
                lichSuMuaHang_1 = _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang_1))];
            case 3: return [4, lichSuMuaHang_model_1.default
                    .find({ idNguoiDung: req.user._id.toString() })
                    .skip(req.query.skip)
                    .limit(req.query.limit)];
            case 4:
                lichSuMuaHang = _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang))];
            case 5:
                error_2 = _a.sent();
                next(error_2);
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
exports.XemLichSuMuaHangUserController = XemLichSuMuaHangUserController;
var XemLichSuMuaHangAllUserController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, trangThai, lichSuMuaHang_2, lichSuMuaHang_3, lichSuMuaHang, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                trangThai = req.query.trangThai;
                console.log(trangThai);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                if (!_id) return [3, 3];
                return [4, lichSuMuaHang_model_1.default.findById({ _id: _id })];
            case 2:
                lichSuMuaHang_2 = _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang_2))];
            case 3:
                if (!(trangThai !== undefined)) return [3, 5];
                return [4, lichSuMuaHang_model_1.default
                        .find({ trangThai: trangThai })
                        .skip(req.query.skip)
                        .limit(req.query.limit)
                        .sort({ ngayDat: 'desc' })];
            case 4:
                lichSuMuaHang_3 = _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang_3))];
            case 5: return [4, lichSuMuaHang_model_1.default
                    .find()
                    .skip(req.query.skip)
                    .limit(req.query.limit)
                    .sort({ ngayDat: 'desc' })];
            case 6:
                lichSuMuaHang = _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang))];
            case 7:
                error_3 = _a.sent();
                next(error_3);
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
exports.XemLichSuMuaHangAllUserController = XemLichSuMuaHangAllUserController;
var XemTatCaTrangThaiController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var trangThaiArray;
    return __generator(this, function (_a) {
        try {
            trangThaiArray = ['chờ xác nhận', 'đã xác nhận', 'đang giao', 'giao thành công'];
            return [2, res.status(200).json((0, reponse_1.ReS)(200, trangThaiArray))];
        }
        catch (error) {
            next(error);
        }
        return [2];
    });
}); };
exports.XemTatCaTrangThaiController = XemTatCaTrangThaiController;
var ThayDoiTrangThaiMuaHangContrller = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, lichSuMuaHang, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                if (!req.body.trangThai) {
                    return [2, res.status(400).json((0, reponse_1.ReE)(400, 'không tìm thấy trạng thái'))];
                }
                return [4, lichSuMuaHang_model_1.default.findById({ _id: _id })];
            case 2:
                lichSuMuaHang = _a.sent();
                if (lichSuMuaHang === null) {
                    return [2, res.status(400).json((0, reponse_1.ReE)(400, 'không tìm thấy sản phẩm'))];
                }
                lichSuMuaHang.trangThai = req.body.trangThai;
                return [4, lichSuMuaHang.save()];
            case 3:
                _a.sent();
                return [2, res.status(200).json((0, reponse_1.ReS)(200, lichSuMuaHang))];
            case 4:
                error_4 = _a.sent();
                next(error_4);
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
exports.ThayDoiTrangThaiMuaHangContrller = ThayDoiTrangThaiMuaHangContrller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5TGljaFN1TXVhSGFuZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3F1YW5MeUxpY2hTdU11YUhhbmcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBOEM7QUFFOUMsc0ZBQStEO0FBRXhELElBQU0saUJBQWlCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7Z0JBRW5GLElBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDeEMsV0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLGFBQUcsRUFBQyxHQUFHLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxFQUFDO2lCQUNsRTtnQkFDRCxJQUFJLENBQUUsR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBRSxHQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsV0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLGFBQUcsRUFBQyxHQUFHLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQyxFQUFDO2lCQUN6RTtnQkFDcUIsV0FBTSw2QkFBa0IsQ0FBQyxtQkFBbUIsQ0FBRSxHQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUEvRSxhQUFhLEdBQUcsU0FBK0Q7Z0JBQ3BGLEdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDL0IsV0FBTyxHQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBOUIsU0FBOEIsQ0FBQztnQkFDL0IsV0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFD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