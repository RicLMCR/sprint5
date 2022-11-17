const expressRoutes = require('express');
const { getUser } = require('../controllers/controllers');


const router = expressRoutes.Router();


// Get user
router.get('/users/userName/:userName/userPassword/:userPassword', getUser);

// Create new user

// Create holiday booking for user

// Get all bookings for user

module.exports = router;