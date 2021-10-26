import { RequestHandler } from 'express';
import { signToken } from '../../shared/auth';

export const authHandler: RequestHandler = async (req, res, next) => {
  const token = signToken((req as any)?.user);
  return res.json({ token });
};
