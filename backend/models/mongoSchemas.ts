const mongooseSchema = require("mongoose");

const Schema = mongooseSchema.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: false,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
  },
  timeOff: {
    PTO: {
      allowance: {
        type: Number,
        required: false,
      },
      available: {
        type: Number,
        required: false,
      },
      booked: {
        type: Number,
        required: false,
      },
    },
    sickDays: {
      type: Number,
      required: false,
    },
  },
});

const bookingSchema = new Schema({
  bookingID: Number,
  userId: {
    type: Number,
    required: true,
  },
  dates: [
    {
      date: {
        type: Date,
        required: true,
      },
      id: {
        type: Number,
        required: false,
      },
      day: {
        type: String,
        required: true,
      },
      hours: {
        type: Number,
        required: true,
      },
    },
  ],
});

const userModel = mongooseSchema.model("User", userSchema);
const bookingModel = mongooseSchema.model("Booking", bookingSchema);

module.exports = {
  userModel,
  bookingModel,
};
