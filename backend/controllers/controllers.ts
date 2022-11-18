import { Request, Response } from 'express';
const { userModel } = require('../models/mongoSchemas');

function convert(dates: any) {
    var date = new Date(dates),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    console.log([day, mnth, date.getFullYear()].join("-"));
    return ([day, mnth, date.getFullYear()].join("-"));
}
convert('Wed Nov 02 2022 15:56:51 GMT+0000');


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

// Update 

// Get all bookings for user - this is a GET request

//export
module.exports = {
    getUser,
    createUser
}

