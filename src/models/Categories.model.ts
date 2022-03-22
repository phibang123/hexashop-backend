import { Model, Schema, model } from "mongoose";

import { DEFATUL_CATEROGIES } from "./../configs/index";

interface ICategori {
	name: string;
	parent: string;
	category: string;
	slug: string;
}

interface CategoriModel extends Model<ICategori> {}

const categoriSchema = new Schema<ICategori, CategoriModel>(
	{
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
		category: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: false,
	}
);

//relation
categoriSchema.virtual("sanphamschmas", {
	ref: "SanPhamsModel",
	localField: "category",
	foreignField: "categories",
});

const CategoriesModel = model<ICategori, CategoriModel>(
	"categoriSchema",
	categoriSchema
);

DEFATUL_CATEROGIES.forEach(async (n) => {
	await CategoriesModel.findOneAndUpdate(n, n, { new: true, upsert: true });
});

export default CategoriesModel;
