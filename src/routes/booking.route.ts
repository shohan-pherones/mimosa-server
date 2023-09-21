import express, { Router } from 'express';

const bookingRouter: Router = express.Router();

// create a booking
bookingRouter.post('/create');

// get all bookings
bookingRouter.get('/');

// get all boookings for an user
bookingRouter.get('/read');

// delete a booking
bookingRouter.delete('/:bid');

export default bookingRouter;
