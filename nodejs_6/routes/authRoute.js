const authController = require("../controllers/authController")
const express = require('express')
const route = express.Router();
const authMiddelware = require("../middelware/authMiddelware")
const authorizeMiddelware = require("../middelware/authorizeMiddelware")

route.post('/register', authController.register)
route.post('/login', authController.login)
route.get('/dashboard', authMiddelware, authorizeMiddelware('admin', 'user'), authController.dashBoard)

module.exports = route
