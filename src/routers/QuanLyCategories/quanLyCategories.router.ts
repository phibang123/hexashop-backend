import { NextFunction, Request, Response, Router } from 'express';

const quanLyCategoriesController = require('../../controllers/quanLyCategories.controller');
export const quanLyCategories = Router();

quanLyCategories.get('/LayToanBo', quanLyCategoriesController.LayToanBoThuocTinhController);
