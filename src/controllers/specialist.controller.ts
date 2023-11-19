import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleError } from '../errors/handle.error';
import BeautyPackageModel from '../models/beautyPackage.model';
import SpecialistModel from '../models/specialist.model';

export default class SpecialistController {
  constructor() {}

  public async getAllSpecialists(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const specialists = await SpecialistModel.find({});

        res.status(200).json(specialists);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async getASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findById(sid);

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async createASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty package not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.create({
          name,
          designation,
          bio,
          photoUrl,
          dateOfBirth,
        });

        await BeautyPackageModel.findByIdAndUpdate(bid, {
          $addToSet: {
            specialists: specialist._id,
          },
        });

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async updateASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { name, designation, bio, photoUrl, dateOfBirth } = req.body;
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndUpdate(
          sid,
          {
            name,
            designation,
            bio,
            photoUrl,
            dateOfBirth,
          },
          { new: true }
        );

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async deleteASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist not found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndDelete(sid);

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
