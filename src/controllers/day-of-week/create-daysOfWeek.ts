import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import DayOfWeekService from '../../services/day-of-week';

export const createDaysOfWeek: RequestHandler = async (req, res, next) => {
  try {
    const response = await DayOfWeekService.createDaysOfWeek();

    res.status(200).json(response);
  } catch (e) {
    return next(
      ApiError.badRequest((e as ApiError).message || "Days of week haven't been created")
    );
  }
};
