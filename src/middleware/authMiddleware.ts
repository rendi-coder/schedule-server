import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function (req: any, res: any, next: NextFunction) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const decoded = verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Not authorized' });
  }
}
