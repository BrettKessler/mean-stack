const express = require('express');

const UserController = require('../controllers/user')

const router = express.Router();

// Signup route
router.post('/signup', UserController.createUser);

// Login router
router.post('/login', UserController.userLogin);

module.exports = router;
