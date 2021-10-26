import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import GroupService from '../../services/groups';

export const getGroups: RequestHandler = async (req, res, next) => {
  try {
    const groups = await GroupService.getGroups();

    res.status(200).send(groups);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};

export const getGroup: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Id is required'));
    }
    const group = await GroupService.getGroupById(id.toString());
    res.status(200).send(group);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
