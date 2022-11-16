const mongooseSchema = require('mongoose');

const Schema = mongooseSchema.Schema;

const userSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: false
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: false
    },
    timeOff: {
        PTO: {
            allowance: {
                type: Number,
                required: true
            },
            available: {
                type: Number,
                required: true
            },
            booked: {
                type: Number,
                required: true
            }
        },
        sickDays: {
            type: Number,
            required: false
        }
    }
});

const userModel = mongooseSchema.model('User', userSchema);


module.exports = {
    userModel
}