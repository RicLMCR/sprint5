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
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
});

const userModel = mongooseSchema.model('User', userSchema);


module.exports = {
    userModel
}