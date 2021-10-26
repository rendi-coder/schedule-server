import { registerHandler } from './register';
import { loginHandler } from './login';
import { authHandler } from './auth';

const contentController = {
  authHandler,
  loginHandler,
  registerHandler,
};

export default contentController;
