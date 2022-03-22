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
		},
		slug: {
			type: String,
		},
		parent: {
			type: String,
		},
		category: {
			type: String,
		},
	},
	{
		timestamps: false,
	}
);

const CategoriesModel = model<ICategori, CategoriModel>(
	"Categories",
	categoriSchema
);

DEFATUL_CATEROGIES.forEach(async (n) => {
	await CategoriesModel.findOneAndUpdate(n, n, { new: true, upsert: true });
});

export default CategoriesModel;
