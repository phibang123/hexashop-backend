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
require('./models/categories.model');
require('./models/nguoiDung.model');
require('./models/sanPham.model');
require('./models/lichSuMuaHang.model');
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', index_router_1.default);
app.use('*', function (req, res, next) {
    next('404');
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
    res.status(400).json((0, reponse_1.ReE)(500, 'ERROR'));
});
app.listen(port, function () {
    console.log('Express server listening on port', port);
});
