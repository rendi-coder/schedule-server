import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import TimeTableService from '../../services/timetable';

export const getTimeTable: RequestHandler = async (req, res, next) => {
  try {
    const rawTimeTable = await TimeTableService.getTimeTable();

    res.status(200).send(rawTimeTable);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getTimeTableByGroup: RequestHandler = async (req, res, next) => {
  try {
    const { id: groupId } = req.params;
    const timeTable = await TimeTableService.getTimeTableByGroupId(groupId);

    res.status(200).send(timeTable);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getTimeTableById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const timeTable = await TimeTableService.getTimeTableById(id);

    res.status(200).send(timeTable);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
