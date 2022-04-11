import { Model, Schema, model } from 'mongoose';

import { DEFATUL_CATEROGIES } from '../configs/index';

export interface ICategori {
  ids: number;
  name: string;
  parent: string;
  category: string;
  level: number;
  parentId: number;
  slug: string;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  category: string;
  slug: string;
  chilrens: ICategoryResponse[];
}

export interface CategoriModel extends Model<ICategori> {}

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

const categoryModel = model<ICategori, CategoriModel>('categoriSchema', categoriSchema);

export default categoryModel;

//Không được xóa
DEFATUL_CATEROGIES.forEach(async (n) => {
  await categoryModel.findOneAndUpdate(n, n, { new: true, upsert: true });
});
