import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter: Router = express.Router();

const authInstance = new AuthController();

// register
authRouter.post('/register', authInstance.register);

// login
authRouter.post('/login', authInstance.login);

export default authRouter;
