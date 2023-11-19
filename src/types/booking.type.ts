import { Document } from 'mongoose';
import { beautyPackageType } from './beautyPackage.type';
import { userType } from './user.type';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
} & Document;
