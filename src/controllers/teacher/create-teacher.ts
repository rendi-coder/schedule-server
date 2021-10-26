import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import TeachersService from '../../services/teachers';

export const createTeacher: RequestHandler = async (req, res, next) => {
  try {
    const { name, surname, email } = req.body;
    const teacher = await TeachersService.createTeacher(name, surname, email);

    res.status(200).json(teacher);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Teacher hasn't been created"));
  }
};
