const Router = require('express').Router(),
  { register, logout, login } = require('../controller/authController'),
  { ensureAuthenticated } = require('../config/auth')

Router.post('/register', register)
Router.post('/login', login)
Router.get('/logout', ensureAuthenticated, logout)

module.exports = Router
