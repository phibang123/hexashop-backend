"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var categoriSchema = new mongoose_1.Schema({
    ids: {
        type: Number,
    },
    name: {
        type: String,
        trim: true,
    },
    slug: {
        type: String,
        trim: true,
    },
    parent: {
        type: String,
        trim: true,
    },
    level: {
        type: Number,
    },
    category: {
        type: String,
        trim: true,
    },
    parentId: {
        type: Number,
    },
}, {
    timestamps: false,
});
//relati/. mmmmon
categoriSchema.virtual('sanphamschmas', {
    ref: 'SanPhamsModel',
    localField: 'category',
    foreignField: 'categories',
});
var CategoriesModel = (0, mongoose_1.model)('categoriSchema', categoriSchema);
// DEFATUL_CATEROGIES.forEach(async (n) => {
//   await CategoriesModel.findOneAndUpdate(n, n, { new: true, upsert: true });
// });
exports.default = CategoriesModel;
