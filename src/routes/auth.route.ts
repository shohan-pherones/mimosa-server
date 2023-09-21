import express, { Router } from 'express';

const authRouter: Router = express.Router();

// register
authRouter.post('/register');

// login
authRouter.post('/login');

export default authRouter;
