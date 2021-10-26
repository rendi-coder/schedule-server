import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import LessonService from '../../services/lesson';

export const getLessons: RequestHandler = async (req, res, next) => {
  try {
    const lessons = await LessonService.getLessons();
    res.status(200).send(lessons);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getLesson: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest('Id is required');
    }
    const lesson = await LessonService.getLessonById(id.toString());
    res.status(200).send(lesson);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
