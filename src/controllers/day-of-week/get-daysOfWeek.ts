import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import DayOfWeekService from '../../services/day-of-week';

export const getDaysOfWeek: RequestHandler = async (req, res, next) => {
  try {
    const daysOfWeek = await DayOfWeekService.getDaysOfWeek();
    res.status(200).send(daysOfWeek);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getDayOfWeek: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest('Id is required');
    }
    const dayOfWeek = await DayOfWeekService.getDayOfWeekById(id.toString());
    res.status(200).send(dayOfWeek);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
