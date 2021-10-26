import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import ClassRoomService from '../../services/class-room';

export const getClassRooms: RequestHandler = async (req, res, next) => {
  try {
    const classRooms = await ClassRoomService.getClassRooms();
    res.status(200).send(classRooms);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getClassRoom: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest('Id is required');
    }
    const classRoom = await ClassRoomService.getClassRoomById(id.toString());
    res.status(200).send(classRoom);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
