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
exports.LayToanBoThuocTinhController = void 0;
var reponse_1 = require("../utils/reponse");
var categories_1 = __importDefault(require("../models/categories"));
var LayToanBoThuocTinhController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, categoriesName, customCategories, category_1, categories_2, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query.categoriesName, categoriesName = _a === void 0 ? '' : _a;
                customCategories = categoriesName.includes('/') ? categoriesName.split('/')[1] : categoriesName;
                return [4, categories_1.default.find({
                        category: { $regex: '.*' + customCategories + '.*' },
                    })];
            case 1:
                category_1 = _b.sent();
                categories_2 = [];
                category_1 === null || category_1 === void 0 ? void 0 : category_1.map(function (cate) {
                    if (cate.level === 1 && !cate.parentId) {
                        var temp = {
                            id: cate.ids,
                            name: cate.name,
                            category: cate.category,
                            slug: cate.slug,
                            chilrens: [],
                        };
                        categories_2.push(temp);
                    }
                });
                categories_2 === null || categories_2 === void 0 ? void 0 : categories_2.map(function (cate) {
                    category_1 === null || category_1 === void 0 ? void 0 : category_1.map(function (subCate) {
                        if (subCate.parentId === cate.id) {
                            var temp_1 = {
                                id: subCate.ids,
                                name: subCate.name,
                                category: subCate.category,
                                slug: subCate.slug,
                                chilrens: [],
                            };
                            category_1 === null || category_1 === void 0 ? void 0 : category_1.map(function (subCate2) {
                                if (subCate2.parentId === temp_1.id) {
                                    var temp2 = {
                                        id: subCate2.ids,
                                        name: subCate2.name,
                                        category: subCate2.category,
                                        slug: subCate2.slug,
                                        chilrens: [],
                                    };
                                    temp_1.chilrens.push(temp2);
                                }
                            });
                            cate.chilrens.push(temp_1);
                        }
                    });
                });
                res.status(200).json((0, reponse_1.ReS)(200, categories_2));
                return [3, 3];
            case 2:
                error_1 = _b.sent();
                next({ error: 'NULL' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.LayToanBoThuocTinhController = LayToanBoThuocTinhController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5Q2F0ZWdvcmllcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3F1YW5MeUNhdGVnb3JpZXMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0Q0FBNEM7QUFFNUMsb0VBQW1EO0FBRTVDLElBQU0sNEJBQTRCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7Z0JBRXRGLEtBQXlCLEdBQVcsQ0FBQyxLQUFLLGVBQXZCLEVBQW5CLGNBQWMsbUJBQUcsRUFBRSxLQUFBLENBQXdCO2dCQUMvQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQ3RFLFdBQU0sb0JBQWUsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZELFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFO3FCQUNyRCxDQUFDLEVBQUE7O2dCQUZJLGFBQXdCLFNBRTVCO2dCQUVJLGVBQWtDLEVBQUUsQ0FBQztnQkFFM0MsVUFBUSxhQUFSLFVBQVEsdUJBQVIsVUFBUSxDQUFFLEdBQUcsQ0FBQyxVQUFDLElBQUk7b0JBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxJQUFNLElBQUksR0FBc0I7NEJBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRzs0QkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFROzRCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsUUFBUSxFQUFFLEVBQUU7eUJBQ2IsQ0FBQzt3QkFDRixZQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN2QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxZQUFVLGFBQVYsWUFBVSx1QkFBVixZQUFVLENBQUUsR0FBRyxDQUFDLFVBQUMsSUFBSTtvQkFDbkIsVUFBUSxhQUFSLFVBQVEsdUJBQVIsVUFBUSxDQUFFLEdBQUcsQ0FBQyxVQUFDLE9BQU87d0JBQ3BCLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFOzRCQUNoQyxJQUFNLE1BQUksR0FBc0I7Z0NBQzlCLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztnQ0FDZixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0NBQ2xCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtnQ0FDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dDQUNsQixRQUFRLEVBQUUsRUFBRTs2QkFDYixDQUFDOzRCQUVGLFVBQVEsYUFBUixVQUFRLHVCQUFSLFVBQVEsQ0FBRSxHQUFHLENBQUMsVUFBQyxRQUFRO2dDQUNyQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssTUFBSSxDQUFDLEVBQUUsRUFBRTtvQ0FDakMsSUFBTSxLQUFLLEdBQXNCO3dDQUMvQixFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUc7d0NBQ2hCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTt3Q0FDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO3dDQUMzQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7d0NBQ25CLFFBQVEsRUFBRSxFQUFFO3FDQUNiLENBQUM7b0NBQ0YsTUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUNBQzNCOzRCQUNILENBQUMsQ0FBQyxDQUFDOzRCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUksQ0FBQyxDQUFDO3lCQUMxQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLGFBQUcsRUFBQyxHQUFHLEVBQUUsWUFBVSxDQUFDLENBQUMsQ0FBQzs7OztnQkFFM0MsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Ozs7O0tBRTNCLENBQUM7QUF2RFcsUUFBQSw0QkFBNEIsZ0NBdUR2QyJ9