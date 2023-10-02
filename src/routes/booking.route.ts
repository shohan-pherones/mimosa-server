import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();

// create a booking
bookingRouter.post('/create', authInstance.isAuthenticated);

// get all boookings for an user
bookingRouter.get('/read', authInstance.isAuthenticated);

// delete a booking
bookingRouter.delete('/:bid', authInstance.isAuthenticated);

// get all bookings
bookingRouter.get('/', authInstance.isAuthenticated, authInstance.isAdmin);

export default bookingRouter;
