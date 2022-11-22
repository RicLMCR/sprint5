const expressRoutes = require('express');
const { getUser, createUser } = require('../controllers/controllers');

const router = expressRoutes.Router();

// Get user
router.get('/users/userName/:userName/userPassword/:userPassword', getUser);

// Create new user
router.post('/users', createUser);

// Create holiday booking for user
router.post('/users/:userId/booking',);

// Get all bookings for user
router.get('/:userId/booking');

// Update booked holiday

module.exports = router;