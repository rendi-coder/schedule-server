import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import DisciplineService from '../../services/discipline';

export const getDisciplines: RequestHandler = async (req, res, next) => {
  try {
    const disciplines = await DisciplineService.getDisciplines();
    res.status(200).send(disciplines);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getDiscipline: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest('Id is required');
    }
    const discipline = await DisciplineService.getDesciplineById(id.toString());
    res.status(200).send(discipline);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
