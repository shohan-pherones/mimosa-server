import express, { Router } from 'express';

const specialistRouter: Router = express.Router();

// get all specialists
specialistRouter.get('/');

// get a specialist
specialistRouter.get('/:sid');

// create a specialist
specialistRouter.post('/');

// update a specialist
specialistRouter.put('/:sid');

// delete a specialist
specialistRouter.delete('/:sid');

export default specialistRouter;
