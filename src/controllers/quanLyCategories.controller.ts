import { ReE, ReS } from '../utils/reponse';
import { Request, Response } from 'express';

import CategoriesModel from '../models/categories.model';

interface ICategori {
  ids: number;
  name: string;
  parent: string;
  category: string;
  level: number;
  parentId: number;
  slug: string;
}

interface ICategoryResponse {
  id: number;
  name: string;
  category: string;
  slug: string;
  chilrens: ICategoryResponse[];
}

export const LayToanBoThuocTinhController = async (req: Request, res: Response) => {
  try {
    const categories: ICategoryResponse[] = [];

    const category: ICategori[] = await CategoriesModel.find();

    category?.map((cate) => {
      if (cate.level === 1 && !cate.parentId) {
        const temp: ICategoryResponse = {
          id: cate.ids,
          name: cate.name,
          category: cate.category,
          slug: cate.slug,
          chilrens: [],
        };
        categories.push(temp);
      }
    });

    categories?.map((cate) => {
      category?.map((subCate) => {
        if (subCate.parentId === cate.id) {
          const temp: ICategoryResponse = {
            id: subCate.ids,
            name: subCate.name,
            category: subCate.category,
            slug: subCate.slug,
            chilrens: [],
          };

          category?.map((subCate2) => {
            if (subCate2.parentId === temp.id) {
              const temp2: ICategoryResponse = {
                id: subCate2.ids,
                name: subCate2.name,
                category: subCate2.category,
                slug: subCate2.slug,
                chilrens: [],
              };
              temp.chilrens.push(temp2);
            }
          });
          cate.chilrens.push(temp);
        }
      });
    });

    res.status(201).json(ReS(201, categories));
  } catch (error) {
    res.status(500).json(ReS(500, { error: 'NULL' }));
  }
};
