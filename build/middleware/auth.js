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
exports.auth = void 0;
var reponse_1 = require("../utils/reponse");
var nguoiDung_1 = __importDefault(require("../models/nguoiDung"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var index_1 = require("./../configs/index");
var auth = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, decoded, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!req.headers.authorization) {
                    return [2, res.status(401).send((0, reponse_1.ReE)(401, { error: 'Please authenticate!' }))];
                }
                console.log(12);
                token = req.headers.authorization.replace('Bearer ', '');
                return [4, jsonwebtoken_1.default.verify(token, index_1.secret_key)];
            case 1:
                decoded = _a.sent();
                return [4, nguoiDung_1.default.findOne({
                        _id: decoded._id,
                    })];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2, res.status(401).send((0, reponse_1.ReE)(401, { error: 'Please authenticate!' }))];
                }
                req.user = user;
                req.token = token;
                return [2, next()];
            case 3:
                error_1 = _a.sent();
                return [2, res.status(401).send((0, reponse_1.ReE)(401, { error: 'Please authenticate!' }))];
            case 4: return [2];
        }
    });
}); };
exports.auth = auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQTRDO0FBRTVDLGtFQUE0QztBQUM1Qyw4REFBK0I7QUFDL0IsNENBQWdEO0FBRXpDLElBQU0sSUFBSSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7Ozs7O2dCQUV0RSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7b0JBQzlCLFdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxhQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxFQUFDO2lCQUMxRTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNWLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxXQUFNLHNCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxrQkFBVSxDQUFDLEVBQUE7O2dCQUFsRCxPQUFPLEdBQVEsU0FBbUM7Z0JBRTNDLFdBQU0sbUJBQVMsQ0FBQyxPQUFPLENBQUM7d0JBQ25DLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztxQkFDakIsQ0FBQyxFQUFBOztnQkFGSSxJQUFJLEdBQUcsU0FFWDtnQkFFRixJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULFdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxhQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxFQUFDO2lCQUMxRTtnQkFFQSxHQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDeEIsR0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBRTNCLFdBQU8sSUFBSSxFQUFFLEVBQUM7OztnQkFFZCxXQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsYUFBRyxFQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUMsRUFBQzs7OztLQUU1RSxDQUFDO0FBeEJXLFFBQUEsSUFBSSxRQXdCZiJ9