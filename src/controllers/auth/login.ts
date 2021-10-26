import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../../db/models/user';
import ApiError from '../../error/ApiError';
import { signToken } from '../../shared/auth';

export const loginHandler: RequestHandler = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) throw ApiError.badRequest('Please provide login and password');

    const existingUser = await UserModel.findOne({ where: { login } });
    if (!existingUser) throw ApiError.badRequest('User does not exist');

    const isValid = await bcrypt.compare(password, existingUser.password);

    if (!isValid) throw ApiError.unauthorized('Invalid password');

    const token = signToken(existingUser);

    return res.status(200).send({
      token,
      id: existingUser.id,
      login: existingUser.login,
    });
  } catch (e) {
    return next((e as ApiError)?.message || 'Bad request');
  }
};
