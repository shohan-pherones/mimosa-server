import express, { Router } from 'express';
import SpecialistController from '../controllers/specialist.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const specialistRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const specialistInstance = new SpecialistController();

// get all specialists
specialistRouter.get('/', specialistInstance.getAllSpecialists);

// get a specialist
specialistRouter.get('/:sid', specialistInstance.getASpecialist);

// create a specialist
specialistRouter.post(
  '/:bid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.createASpecialist
);

// update a specialist
specialistRouter.put(
  '/:sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.updateASpecialist
);

// delete a specialist
specialistRouter.delete(
  '/:sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.deleteASpecialist
);

export default specialistRouter;
