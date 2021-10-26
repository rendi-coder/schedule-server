import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import TeachersService from '../../services/teachers';

export const getTeachers: RequestHandler = async (req, res, next) => {
  try {
    const teachers = await TeachersService.getTeachers();

    res.status(200).send(teachers);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getTeacher: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await TeachersService.getTeacherById(id);

    res.status(200).send(teacher);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
