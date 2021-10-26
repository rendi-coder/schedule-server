import { RequestHandler } from 'express';
import ApiError from '../../error/ApiError';
import GroupService from '../../services/groups';

export const createGroup: RequestHandler = async (req, res, next) => {
  try {
    const { name } = req.body;
    const group = await GroupService.createGroup(name);

    res.status(200).json(group);
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || "Group hasn't been created"));
  }
};
