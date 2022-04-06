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
        data: data,
        message: message ? message : 'Xử lý thành công!',
        status: code,
        statusText: code.toString(),
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
        status: code,
        statusText: code.toString(),
        message: message ? message : 'Có gì đó đang lỗi!',
        data: Array.isArray(err) ? err.map(function (e) { return e.message; }) : typeof err === 'object' ? err : err,
    };
    return __assign({}, resp);
};
exports.ReE = ReE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9yZXBvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBWTFCLElBQU0sR0FBRyxHQUFHLFVBQUMsSUFBWSxFQUFFLElBQVMsRUFBRSxPQUFnQjtJQUMzRCxJQUFNLElBQUksR0FBVTtRQUNsQixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDaEQsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMzQixRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQzNCLGdCQUFnQixFQUFFLElBQUk7S0FDdkIsQ0FBQztJQUVGLG9CQUFZLElBQUksRUFBRztBQUNyQixDQUFDLENBQUM7QUFaVyxRQUFBLEdBQUcsT0FZZDtBQUdLLElBQU0sR0FBRyxHQUFHLFVBQUMsSUFBWSxFQUFFLEdBQVEsRUFBRSxPQUFnQjtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQU0sSUFBSSxHQUFVO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUMzQixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztLQUMzRixDQUFDO0lBRUYsb0JBQVksSUFBSSxFQUFHO0FBQ3JCLENBQUMsQ0FBQztBQWJXLFFBQUEsR0FBRyxPQWFkIn0=