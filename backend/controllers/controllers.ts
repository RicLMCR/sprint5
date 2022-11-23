import { Request, Response } from 'express';
const { getHours } = require('./utils/utils');
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
    const { userId, dates } = req.body;
    // Get if dates array is empty
    if (dates.length === 0 || dates === undefined) {
        return res.status(400).json({ message: 'No dates selected' });
    } else {
        const newBooking = await bookingModel.create({ userId, dates });

        const hours = getHours(dates);


        // Get the users current hours
        // Check if user already exists
        const getUser = await userModel.findOne({ userId });
        const getUserHours = getUser.timeOff.PTO;




        if (getUserHours.available - hours <= 0) {
            console.log("You do not have enough hours :(");
        } else if (getUserHours.available > 0) {
            console.log("Update completed :)");

            await userModel.findOneAndUpdate({ userId, "timeOff.PTO.available": getUserHours.available - hours });
        }
        await userModel.findOneAndUpdate({ userId, "timeOff.PTO.booked": hours });

        // let updatedBookings = await userModel.findOne("timeOff.PTO.available")
        // console.log(updatedBookings);

        return res.status(201).json(newBooking);
    }
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

