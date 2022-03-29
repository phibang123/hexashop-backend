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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9yZXBvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBVzFCLElBQU0sR0FBRyxHQUFHLFVBQUMsSUFBWSxFQUFFLElBQVMsRUFBRSxPQUFnQjtJQUMzRCxJQUFNLElBQUksR0FBVTtRQUNsQixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDaEQsVUFBVSxFQUFFLElBQUk7UUFDaEIsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUMzQixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3ZCLENBQUM7SUFFRixvQkFBWSxJQUFJLEVBQUc7QUFDckIsQ0FBQyxDQUFDO0FBWFcsUUFBQSxHQUFHLE9BV2Q7QUFHSyxJQUFNLEdBQUcsR0FBRyxVQUFDLElBQVksRUFBRSxHQUFRLEVBQUUsT0FBZ0I7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFNLElBQUksR0FBVTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUNqRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO0tBQzlGLENBQUM7SUFFRixvQkFBWSxJQUFJLEVBQUc7QUFDckIsQ0FBQyxDQUFDO0FBWlcsUUFBQSxHQUFHLE9BWWQifQ==