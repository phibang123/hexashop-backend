import { ICategori, ICategoryResponse } from './../models/categories';
import { NextFunction, Request, Response } from 'express';
import { ReE, ReS } from '../utils/reponse';

import categoriesModel from '../models/categories';

export const LayToanBoThuocTinhController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { categoriesName = '' } = (req as any).query;
    let customCategories = categoriesName.includes('/') ? categoriesName.split('/')[1] : categoriesName;
    const category: ICategori[] = await categoriesModel.find({
      category: { $regex: '.*' + customCategories + '.*' },
    });

    const categories: ICategoryResponse[] = [];

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
    next({ error: 'NULL' });
  }
};
