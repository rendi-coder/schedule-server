import express from 'express';

import authController from '../../controllers/auth';

import authMiddleware from '../../middleware/authMiddleware';

const authRouter = express.Router();

authRouter.get('/', authMiddleware, authController.authHandler);
authRouter.post('/register', authController.registerHandler);
authRouter.post('/login', authController.loginHandler);

export default authRouter;
