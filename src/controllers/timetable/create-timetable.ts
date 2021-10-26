import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import TimeTableService from '../../services/timetable';

export const createTimeTable: RequestHandler = async (req, res, next) => {
  try {
    const { dayOfWeekId, lessonId, groupId, disciplineId, teacherId, classRoomId } = req.body;
    const creationProps = {
      dayOfWeekId,
      lessonId,
      groupId,
      disciplineId,
      teacherId,
      classRoomId,
    };
    if (Object.values(creationProps).some((v) => !v)) {
      throw ApiError.badRequest('Invalid input parameters');
    }
    const timeTable = await TimeTableService.createTimeTable(creationProps);
    res.status(200).json(timeTable);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "TimeTable hasn't been created"));
  }
};
