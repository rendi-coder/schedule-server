import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import ArticleService from '../../services/article';

export const createArticle: RequestHandler = async (req, res, next) => {
  try {
    const { title, date, description, timeTableId } = req.body;
    const classRoom = await ArticleService.createArticle({ title, date, description, timeTableId });

    res.status(200).json(classRoom);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Article hasn't been created"));
  }
};
