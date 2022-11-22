import { Request, Response } from 'express';
const { userModel, bookingModel } = require('../models/mongoSchemas');


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


// Create holiday booking for user (user can have multiple bookings) - this is a POST request
const createBooking = async (req: Request, res: Response): Promise<Response> => {
    const { _id, dates } = req.body;
    console.log(dates);
    // Dates is an array that contains an object with dates
    const newBooking = await bookingModel.create(req.body);

    const bookedHours = 0;

    // Take dates loop through dates mon-Thu - 8, Fri 5 sat-sun 0
    let booked = 0

    let day

    for (let i = 0; i < dates.length; i++) {

        let today = dates[i].day

        switch (today) {
            case "Sun":
                booked = (booked + 0)
                day = today
                break;
            case "Mon":
                booked = (booked + 8)
                day = today
                break;
            case "Tue":
                booked = (booked + 8)
                day = today
                break;
            case "Wed":
                booked = (booked + 8)
                day = today
                break;
            case "Thu":
                booked = (booked + 8)
                day = today;
                break;
            case "Fri":
                booked = (booked + 5)
                day = today;
                break;
            case "Sat":
                booked = (booked + 0)
                day = today;
        }

        // console.log(day)
    }
    console.log(booked)

    // Update user available and booked



    return res.status(200).json(newBooking);
};

// Get all bookings for user - this is a GET request
const getBookings = async (req: Request, res: Response): Promise<Response> => {
    const { _id } = req.params;
    const bookings = await bookingModel.find({ _id })
    return res.status(200).json(bookings)
}

//export
module.exports = {
    getBookings,
    createUser,
    createBooking,
    getUser
}

