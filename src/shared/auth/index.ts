import jwt from 'jsonwebtoken';
import moment from 'moment';

import { UserInstance } from '../../db/models/user';

export const signToken = (user: UserInstance) =>
  jwt.sign(
    {
      iss: 'Schedule App',
      sub: user.id,
      iat: new Date().getTime(),
      exp: moment().add(7, 'days').toDate().getTime(),
    },
    process.env.JWT_SECRET as string
  );
