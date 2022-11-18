const expressRoutes = require('express');
const { getUser, createUser } = require('../controllers/controllers');

const router = expressRoutes.Router();

// Get user
router.get('/users/userName/:userName/userPassword/:userPassword', getUser);

// Create new user
router.post('/users', createUser);

// Create holiday booking for user

// Get all bookings for user

module.exports = router;