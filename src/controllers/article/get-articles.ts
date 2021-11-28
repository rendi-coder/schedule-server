import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import ArticleService from '../../services/article';

export const getArticlesByTimeTableId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest('id is required');
    }
    const classRoom = await ArticleService.getArticlesByTimeTableId(+id);
    res.status(200).send(classRoom);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
