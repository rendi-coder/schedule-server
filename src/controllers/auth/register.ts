import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../../db/models/user';
import ApiError from '../../error/ApiError';
import { signToken } from '../../shared/auth';

export const registerHandler: RequestHandler = async (req, res, next) => {
  try {
    const { login, password, confirmPassword } = req.body;

    if (!login || !password || !confirmPassword) throw 'Please provide login and password';

    if (confirmPassword !== password) throw "Confirm password and password don't match";

    const existingUser = await UserModel.findOne({ where: { login } });
    if (existingUser) throw 'User with this login already exists';

    const hash = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      login,
      password: hash,
    });

    const token = signToken(user);

    return res.status(200).send({
      token,
      id: user.id,
      login: user.login,
    });
  } catch (e) {
    return next(ApiError.badRequest((e as ApiError).message || 'Bad request'));
  }
};
