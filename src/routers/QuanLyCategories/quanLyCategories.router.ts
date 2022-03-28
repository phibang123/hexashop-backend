import { NextFunction, Request, Response, Router } from 'express';

import quanLyCategoriesController = require('../../controllers/quanLyCategories.controller');
export const quanLyCategories = Router();

quanLyCategories.get('/LayToanBo', quanLyCategoriesController.LayToanBoThuocTinhController);
