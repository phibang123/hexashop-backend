import { Model, Schema, model } from 'mongoose';

import { DEFATUL_CATEROGIES } from './../configs/index';

interface ICategori {
  ids: number;
  name: string;
  parent: string;
  category: string;
  level: number;
  parentId: number;
  slug: string;
}

interface CategoriModel extends Model<ICategori> {}

const categoriSchema = new Schema<ICategori, CategoriModel>(
  {
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
  },
  {
    timestamps: false,
  }
);

//relati/. mmmmon
categoriSchema.virtual('sanphamschmas', {
  ref: 'SanPhamsModel',
  localField: 'category',
  foreignField: 'categories',
});

const CategoriesModel = model<ICategori, CategoriModel>('categoriSchema', categoriSchema);

// DEFATUL_CATEROGIES.forEach(async (n) => {
//   await CategoriesModel.findOneAndUpdate(n, n, { new: true, upsert: true });
// });

export default CategoriesModel;
