import express, { Router } from 'express';

const beautyPackageRouter: Router = express.Router();

// get all beauty packages
beautyPackageRouter.get('/');

// get a beauty package
beautyPackageRouter.get('/:bid');

// create a beauty package
beautyPackageRouter.post('/');

// update a beauty package
beautyPackageRouter.put('/:bid');

// delete a beauty package
beautyPackageRouter.delete('/:bid');

export default beautyPackageRouter;
