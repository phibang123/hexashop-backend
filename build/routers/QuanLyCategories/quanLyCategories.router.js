"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quanLyCategories = void 0;
var express_1 = require("express");
var quanLyCategoriesController = require("../../controllers/quanLyCategories.controller");
exports.quanLyCategories = (0, express_1.Router)();
exports.quanLyCategories.get('/LayToanBo', quanLyCategoriesController.LayToanBoThuocTinhController);
