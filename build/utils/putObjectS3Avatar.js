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
exports.putImagAvatar = void 0;
var _a = require('../configs/index'), s3_bucket_name = _a.s3_bucket_name, s3 = _a.s3, s3_domain_name = _a.s3_domain_name;
var sharp_1 = __importDefault(require("sharp"));
var putImagAvatar = function (data, id) { return __awaiter(void 0, void 0, void 0, function () {
    var buffer, originalname, mimetype, size, dst, bufferSharp, params, url, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buffer = data.buffer, originalname = data.originalname, mimetype = data.mimetype, size = data.size;
                if (size >= 3000000) {
                    throw new Error('Ảnh phải nhỏ hơn 3mb');
                }
                if (!originalname.match(/\.(jpg|jpeg|png)$/)) {
                    throw new Error('Please upload a Images');
                }
                dst = "avatar/".concat(id, "/").concat(Date.now(), "_").concat(originalname);
                return [4, (0, sharp_1.default)(buffer).resize({ width: 250, height: 250 }).png().toBuffer()];
            case 1:
                bufferSharp = _a.sent();
                params = {
                    Bucket: s3_bucket_name,
                    Key: dst,
                    Body: bufferSharp,
                    ContentType: mimetype,
                };
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4, s3.putObject(params).promise()];
            case 3:
                _a.sent();
                url = "".concat(s3_domain_name, "/").concat(dst);
                return [2, url];
            case 4:
                error_1 = _a.sent();
                throw error_1;
            case 5: return [2];
        }
    });
}); };
exports.putImagAvatar = putImagAvatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0T2JqZWN0UzNBdmF0YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvcHV0T2JqZWN0UzNBdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF5QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBbEUsY0FBYyxvQkFBQSxFQUFFLEVBQUUsUUFBQSxFQUFFLGNBQWMsb0JBQWdDLENBQUM7QUFFM0UsZ0RBQTBCO0FBRW5CLElBQU0sYUFBYSxHQUFHLFVBQU8sSUFBUyxFQUFFLEVBQVU7Ozs7O2dCQUMvQyxNQUFNLEdBQW1DLElBQUksT0FBdkMsRUFBRSxZQUFZLEdBQXFCLElBQUksYUFBekIsRUFBRSxRQUFRLEdBQVcsSUFBSSxTQUFmLEVBQUUsSUFBSSxHQUFLLElBQUksS0FBVCxDQUFVO2dCQUV0RCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7b0JBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRTtvQkFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUMzQztnQkFFSyxHQUFHLEdBQUcsaUJBQVUsRUFBRSxjQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBSSxZQUFZLENBQUUsQ0FBQztnQkFFckMsV0FBTSxJQUFBLGVBQUssRUFBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFBOztnQkFBdEYsV0FBVyxHQUFHLFNBQXdFO2dCQUV0RixNQUFNLEdBQUc7b0JBQ2IsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLEdBQUcsRUFBRSxHQUFHO29CQUNSLElBQUksRUFBRSxXQUFXO29CQUNqQixXQUFXLEVBQUUsUUFBUTtpQkFDdEIsQ0FBQzs7OztnQkFHQSxXQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUFwQyxTQUFvQyxDQUFDO2dCQUMvQixHQUFHLEdBQVcsVUFBRyxjQUFjLGNBQUksR0FBRyxDQUFFLENBQUM7Z0JBRS9DLFdBQU8sR0FBRyxFQUFDOzs7Z0JBRVgsTUFBTSxPQUFLLENBQUM7Ozs7S0FFZixDQUFDO0FBOUJXLFFBQUEsYUFBYSxpQkE4QnhCIn0=