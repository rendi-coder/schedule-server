import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import ClassRoomService from '../../services/class-room';

export const createClassRoom: RequestHandler = async (req, res, next) => {
  try {
    const { code } = req.body;
    const classRoom = await ClassRoomService.createClassRoom(code);

    res.status(200).json(classRoom);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Discipline hasn't been created"));
  }
};
