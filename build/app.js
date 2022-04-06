"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var reponse_1 = require("./utils/reponse");
var index_router_1 = __importDefault(require("./routers/index.router"));
require('./db/mongooseConnect');
require('./models/categories');
require('./models/nguoiDung');
require('./models/sanPham');
require('./models/lichSuMuaHang');
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', index_router_1.default);
app.use('*', function (req, res, next) {
    res.status(404).json((0, reponse_1.ReE)(404, '404'));
});
app.use(function (error, req, res, next) {
    if (error.errors) {
        var ObecjError_1;
        Object.keys(error.errors).forEach(function (e) {
            ObecjError_1["".concat(e)] = error.errors["".concat(e)].message;
        });
        return res.status(400).json((0, reponse_1.ReE)(400, __assign({}, ObecjError_1)));
    }
    if (error.message) {
        return res.status(400).json((0, reponse_1.ReE)(400, error.message));
    }
    if (typeof error === 'string') {
        res.status(400).json((0, reponse_1.ReE)(400, error));
    }
    res.status(500).json((0, reponse_1.ReE)(500, 'ERROR'));
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQWdHO0FBRWhHLDJDQUFzQztBQUN0Qyx3RUFBZ0Q7QUFFaEQsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFbEMsSUFBTSxHQUFHLEdBQWdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFVLENBQUMsQ0FBQztBQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBa0I7SUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxhQUFHLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVSxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDbEUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLElBQUksWUFBZSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVM7WUFDMUMsWUFBVSxDQUFDLFVBQUcsQ0FBQyxDQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUEsYUFBRyxFQUFDLEdBQUcsZUFBTyxZQUFVLEVBQUcsQ0FBQyxDQUFDO0tBQzFEO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxhQUFHLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3REO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxhQUFHLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLGFBQUcsRUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQyJ9