import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import ClassRoomService from '../../services/class-room';

export const createClassRoom: RequestHandler = async (req, res, next) => {
  try {
    const { code } = req.body;
    const classRoom = await ClassRoomService.createClassRoom(code);

    res.status(200).json(classRoom);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Class Room hasn't been created"));
  }
};

export const createInitialClassRooms: RequestHandler = async (req, res, next) => {
  try {
    const response = await ClassRoomService.createClassRooms();

    res.status(200).json(response);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Class Rooms haven't been created"));
  }
};