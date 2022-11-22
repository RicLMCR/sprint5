import { Request, Response } from 'express';
const { userModel, bookingModel } = require('../models/mongoSchemas');
const mongoose = require('mongoose');

const getUser = async (req: Request, res: Response): Promise<Response> => {
    const { userName, userPassword } = req.params;
    const user = await userModel.findOne({ userName, userPassword });
    return res.status(200).json(user);
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { userName, userPassword } = req.body;
    // Check if user already exists
    const user = await userModel.findOne({ userName, userPassword });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    } else {
        const newUser = await userModel.create(req.body);
        return res.status(201).json(newUser);
    }
};

const testingBensFetch = async (req: Request, res: Response): Promise<Response> => {



    const { _id } = req.body;

    console.log(_id);


    return res.status(201);
}

// Create holiday booking for user (user can have multiple bookings) - this is a POST request
const createBooking = async (req: Request, res: Response): Promise<Response> => {
    const { userId, dates } = req.body;

    const newBooking = await bookingModel.create(req.body);

    const bookedHours = 0;

    // Take dates loop through dates mon-Thu - 8, Fri 5 sat-sun 0

    /* 
        for (let i = 0; i < array.length; i++) {
            if (string.includes("Mon" || "Tue" || "Wed" || "Thu")) {
                bookedHours = (bookedHours + 8);
            }
            else if (string.includes("Fri")) {
                bookedHours = (bookedHours + 5)
            }
            else if (String.includes('Sat' || "Sun")) {
                bookedHours = (bookedHours + 0)
            }
            else {
                res.status(400).json({ error: "There has been an error in calculating the booked hours" })
            }
        }
     */


    // Update user available and booked
    const userUpdate = await userModel.findOneAndUpdate({ userId })

    return res.status(200).json(newBooking);
};


// Update users holiday hours - this is an update request


// const workout = await Workout.findByIdAndUpdate({ _id: id }, {
//     ...req.body
// })
// if (!workout) {
//     return res.status(404).json({ error: 'no such workout' })
// }


// Get all bookings for user - this is a GET request
const getBookings = async (req: Request, res: Response) => {
    const bookings = await bookingModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(bookings)
}

//export
module.exports = {
    getBookings,
    createUser,
    createBooking,
    testingBensFetch,
    getUser
}

