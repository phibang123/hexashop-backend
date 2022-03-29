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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReE = exports.ReS = void 0;
// hàm format kết quả trả về của API khi thành công cho client
var moment = require('moment');
var ReS = function (code, data, message) {
    var resp = {
        success: true,
        content: data,
        message: message ? message : 'Xử lý thành công!',
        statusCode: code,
        dateTime: moment().format(),
        messageConstants: null,
    };
    return __assign({}, resp);
};
exports.ReS = ReS;
// hàm format kết quả trả về của API khi thất bại cho client
var ReE = function (code, err, message) {
    console.log(err);
    var resp = {
        success: false,
        dateTime: moment().format(),
        messageConstants: null,
        statusCode: code,
        message: message ? message : 'Có gì đó đang lỗi!',
        content: Array.isArray(err) ? err.map(function (e) { return e.message; }) : typeof err === 'object' ? err : err,
    };
    return __assign({}, resp);
};
exports.ReE = ReE;
