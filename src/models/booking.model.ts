import mongoose, { Schema, model } from 'mongoose';
import { bookingType } from '../types/booking.type';

const bookingSchema = new Schema<bookingType>(
  {
    beautyPackage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BeautyPackage',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const BoookingModel = model<bookingType>('Booking', bookingSchema);

export default BoookingModel;
