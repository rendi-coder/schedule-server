import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import DisciplineService from '../../services/discipline';

export const createDiscipline: RequestHandler = async (req, res, next) => {
  try {
    const { name } = req.body;
    const discipline = await DisciplineService.createDescipline(name);

    res.status(200).json(discipline);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Discipline hasn't been created"));
  }
};
