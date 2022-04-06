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
categoriSchema.virtual('sanphamschmas', {
    ref: 'SanPhamsModel',
    localField: 'category',
    foreignField: 'categories',
});
var categoryModel = (0, mongoose_1.model)('categoriSchema', categoriSchema);
exports.default = categoryModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY2F0ZWdvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFnRDtBQXdCaEQsSUFBTSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUMvQjtJQUNFLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsS0FBSztDQUNsQixDQUNGLENBQUM7QUFHRixjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUN0QyxHQUFHLEVBQUUsZUFBZTtJQUNwQixVQUFVLEVBQUUsVUFBVTtJQUN0QixZQUFZLEVBQUUsWUFBWTtDQUMzQixDQUFDLENBQUM7QUFFSCxJQUFNLGFBQWEsR0FBRyxJQUFBLGdCQUFLLEVBQTJCLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXhGLGtCQUFlLGFBQWEsQ0FBQyJ9