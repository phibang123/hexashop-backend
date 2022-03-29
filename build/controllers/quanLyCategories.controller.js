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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayToanBoThuocTinhController = void 0;
var reponse_1 = require("../utils/reponse");
var CategoriesModel = require('../models/categories.model');
var LayToanBoThuocTinhController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var categories_1, category_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                categories_1 = [];
                return [4, CategoriesModel.find()];
            case 1:
                category_1 = _a.sent();
                category_1 === null || category_1 === void 0 ? void 0 : category_1.map(function (cate) {
                    if (cate.level === 1 && !cate.parentId) {
                        var temp = {
                            id: cate.ids,
                            name: cate.name,
                            category: cate.category,
                            slug: cate.slug,
                            chilrens: [],
                        };
                        categories_1.push(temp);
                    }
                });
                categories_1 === null || categories_1 === void 0 ? void 0 : categories_1.map(function (cate) {
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
                res.status(201).json((0, reponse_1.ReS)(201, categories_1));
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                next({ error: 'NULL' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.LayToanBoThuocTinhController = LayToanBoThuocTinhController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbkx5Q2F0ZWdvcmllcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3F1YW5MeUNhdGVnb3JpZXMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBNEM7QUFFNUMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFvQnZELElBQU0sNEJBQTRCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7Z0JBRXhGLGVBQWtDLEVBQUUsQ0FBQztnQkFFYixXQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXBELGFBQXdCLFNBQTRCO2dCQUUxRCxVQUFRLGFBQVIsVUFBUSx1QkFBUixVQUFRLENBQUUsR0FBRyxDQUFDLFVBQUMsSUFBSTtvQkFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ3RDLElBQU0sSUFBSSxHQUFzQjs0QkFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHOzRCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs0QkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7NEJBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs0QkFDZixRQUFRLEVBQUUsRUFBRTt5QkFDYixDQUFDO3dCQUNGLFlBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILFlBQVUsYUFBVixZQUFVLHVCQUFWLFlBQVUsQ0FBRSxHQUFHLENBQUMsVUFBQyxJQUFJO29CQUNuQixVQUFRLGFBQVIsVUFBUSx1QkFBUixVQUFRLENBQUUsR0FBRyxDQUFDLFVBQUMsT0FBTzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7NEJBQ2hDLElBQU0sTUFBSSxHQUFzQjtnQ0FDOUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dDQUNmLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtnQ0FDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dDQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0NBQ2xCLFFBQVEsRUFBRSxFQUFFOzZCQUNiLENBQUM7NEJBRUYsVUFBUSxhQUFSLFVBQVEsdUJBQVIsVUFBUSxDQUFFLEdBQUcsQ0FBQyxVQUFDLFFBQVE7Z0NBQ3JCLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxNQUFJLENBQUMsRUFBRSxFQUFFO29DQUNqQyxJQUFNLEtBQUssR0FBc0I7d0NBQy9CLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRzt3Q0FDaEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO3dDQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7d0NBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTt3Q0FDbkIsUUFBUSxFQUFFLEVBQUU7cUNBQ2IsQ0FBQztvQ0FDRixNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQ0FDM0I7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7eUJBQzFCO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsYUFBRyxFQUFDLEdBQUcsRUFBRSxZQUFVLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUUzQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs7Ozs7S0FFM0IsQ0FBQztBQW5EVyxRQUFBLDRCQUE0QixnQ0FtRHZDIn0=