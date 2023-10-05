# Mimosa Beauty Parlor and Spa

## Introduction

Mimosa is your premier destination for beauty and relaxation. Our parlor and spa offer a range of luxurious beauty packages and spa treatments to help you look and feel your best. Whether you're looking to pamper yourself with a rejuvenating spa day or enhance your beauty with our expert services, Mimosa has you covered.

## Features

1. Browse Beauty Packages: Users can explore a variety of beauty packages tailored to their needs.
2. Book Packages: Users can easily book their preferred beauty packages.
3. Manage Bookings: Users have the option to manage their booked packages.
4. Admin Control: Admins can manage both users and beauty packages effortlessly.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript

## Models

### User

| Field       | Type               |
| ----------- | ------------------ |
| Name        | String             |
| Email       | String             |
| Password    | String             |
| PhotoUrl    | String             |
| Address     | String (Optional)  |
| PhoneNumber | String (Optional)  |
| Role        | Enum [user, admin] |
| Bookings    | Booking[]          |

### BeautyPackage

| Field       | Type         |
| ----------- | ------------ |
| Title       | String       |
| Description | String       |
| Category    | String       |
| Images      | String[]     |
| Price       | Number       |
| Specialists | Specialist[] |
| Bookings    | Booking[]    |

### Specialist

| Field          | Type            |
| -------------- | --------------- |
| Name           | String          |
| Designation    | String          |
| Bio            | String          |
| PhotoUrl       | String          |
| DateOfBirth    | String          |
| BeautyPackages | BeautyPackage[] |

### Booking

| Field         | Type |
| ------------- | ---- |
| User          | {}   |
| BeautyPackage | {}   |

## API Routes

| SL No. | HTTP Verb | Endpoint                               | Description             | Permission |
| ------ | --------- | -------------------------------------- | ----------------------- | ---------- |
| 1      | POST      | /api/auth/register                     | Register a user         | All        |
| 2      | POST      | /api/auth/login                        | Login a user            | All        |
| 3      | GET       | /api/users                             | Get all users           | Admin      |
| 4      | GET       | /api/users/{userId}                    | Get an user             | User/Admin |
| 5      | DELETE    | /api/users/{userId}                    | Delete an user          | User/Admin |
| 6      | PUT       | /api/users/{userId}                    | Update an user          | User/Admin |
| 7      | GET       | /api/beauty_packages                   | Get all beauty packages | All        |
| 8      | GET       | /api/beauty_packages/{beautyPackageId} | Get a beauty package    | All        |
| 9      | POST      | /api/beauty_packages                   | Create a beauty package | Admin      |
| 10     | PUT       | /api/beauty_packages/{beautyPackageId} | Update a beauty package | Admin      |
| 11     | DELETE    | /api/beauty_packages/{beautyPackageId} | Delete a beauty package | Admin      |
| 12     | GET       | /api/specialists                       | Get all specialists     | All        |
| 13     | GET       | /api/specialists/{specialistId}        | Get a specialist        | All        |
| 14     | POST      | /api/specialists/{beautyPackageId}     | Create a specialist     | Admin      |
| 15     | PUT       | /api/specialists/{specialistId}        | Update a specialist     | Admin      |
| 16     | DELETE    | /api/specialists/{specialistId}        | Delete a specialist     | Admin      |
| 17     | POST      | /api/bookings/create/{beautyPackageId} | Create a booking        | User       |
| 18     | GET       | /api/bookings                          | Get all bookings        | Admin      |
| 19     | DELETE    | /api/bookings/{bookingId}              | Delete a booking        | User       |

## Installation

1. Clone this repository.
2. Create an `.env` file with the following variables:
   - `MONGO_URI` (Your MongoDB connection URI)
   - `JWT_SECRET` (A secret key for JWT token generation)
3. Run `yarn` to install project dependencies.
4. Start the development server with `yarn dev`.

## Conclusion

Mimosa Beauty Parlor and Spa is your one-stop destination for beauty and relaxation. Whether you're looking to unwind with our spa treatments or enhance your beauty with our expert services, Mimosa has everything you need. Book your beauty package today and experience the ultimate pampering.
