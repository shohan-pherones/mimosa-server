import { bookingType } from './../types/booking.type';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import BookingModel from '../models/booking.model';
import { handleError } from '../errors/handle.error';
import BeautyPackageModel from '../models/beautyPackage.model';
import UserModel from '../models/user.model';

export default class BookingController {
  constructor() {}

  public async createABooking(req: Request, res: Response): Promise<void> {
    try {
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty package not found' });
      }

      const user = await UserModel.findById(req.user?._id).populate('bookings');

      const alreadyBooked = user?.bookings.find(
        (booking: bookingType) => bid === booking.beautyPackage._id.toString()
      );

      if (alreadyBooked) {
        res.status(403).json({ message: 'Beauty package already booked' });
        return;
      }

      await Promise.resolve().then(async () => {
        const booking = await BookingModel.create({
          beautyPackage: bid,
          user: req.user?._id,
        });

        await BeautyPackageModel.findByIdAndUpdate(bid, {
          $addToSet: {
            bookings: booking._id,
          },
        });

        await UserModel.findByIdAndUpdate(req.user?._id, {
          $addToSet: {
            bookings: booking._id,
          },
        });

        res.status(200).json(booking);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async deleteABooking(req: Request, res: Response): Promise<void> {
    try {
      const { bid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Booking not found' });
      }

      const existedBooking = await BookingModel.findById(bid);

      if (!existedBooking) {
        res.status(403).json({ message: "Booking doesn't exist" });
        return;
      }

      const user = await UserModel.findById(req.user?._id);

      const matchedBooking = user?.bookings.find(
        (booking: bookingType) => bid === booking._id.toString()
      );

      if (!matchedBooking) {
        res.status(403).json({ message: "Booking doesn't exist" });
        return;
      }

      await Promise.resolve().then(async () => {
        const booking = await BookingModel.findByIdAndDelete(bid);

        res.status(200).json(booking);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async getAllBookings(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const bookings = await BookingModel.find({}).populate(
          'beautyPackage user'
        );

        res.status(200).json(bookings);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
