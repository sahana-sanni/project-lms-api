const authRoute = require('express').Router()
const { registerUser, loginUser, logoutUser, verifyUser } = require('../controller/authController')
const auth = require('../middleware/auth')

//post route
authRoute.post(`/register`, registerUser)
authRoute.post(`/login`, loginUser)

//get route
authRoute.get(`/logout`, logoutUser)
authRoute.get(`/verify/user`, auth , verifyUser)

module.exports = authRoute