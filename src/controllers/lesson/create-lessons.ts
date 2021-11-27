import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import LessonService from '../../services/lesson';

export const createLessons: RequestHandler = async (req, res, next) => {
  try {
    const response = await LessonService.createLessons();

    res.status(200).json(response);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Lessons haven't been created"));
  }
};
