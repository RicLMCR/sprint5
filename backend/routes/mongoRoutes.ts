const expressRoutes = require('express');
const { getUser, createUser, createBooking, getBookings } = require('../controllers/controllers');

const router = expressRoutes.Router();

// Get user
router.get('/users/userName/:userName/userPassword/:userPassword', getUser);

// Create new user
router.post('/users', createUser);

// Create holiday booking for user
router.post('/bookings', createBooking);

// Get all bookings for user
//router.get('/:userId/booking', getBookings);

// Update booked holiday

module.exports = router;