import { NextFunction } from 'express';
import ApiError from '../error/ApiError';

/*
 * error handling, express handles callbacks
 * based on their arguments length, so eslint is disabled here
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export default function (err: ApiError, req: any, res: any, next: NextFunction) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Unknown Error' });
}
