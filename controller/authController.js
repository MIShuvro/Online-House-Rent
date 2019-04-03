const User = require('../models/User'),
  bcrypt = require('bcryptjs'),
  passport = require('passport')

// Registration
module.exports.register = async (req, res) => {
  const {
    name,
    username,
    email,
    password,
    confirmPassword,
    profilePicture,
    gender,
    contact,
    location,
    accountType
  } = req.body
  errors = {}
  if (!password) {
    errors.password = 'Password is required'
    return res.json(errors)
  } else if (password !== confirmPassword) {
    errors.password = `Password didn't matched`
    return res.json(errors)
  } else if (password.length < 6) {
    errors.password = `Password must be more than 6 characters`
    return res.json(errors)
  }

  const user = new User({
    name,
    username,
    contact,
    profilePicture,
    email,
    gender,
    contact,
    location,
    accountType,
    password: bcrypt.hashSync(password, 10)
  })

  try {
    const newUser = await user.save()
    res.json(newUser)
  } catch (e) {
    Object.keys(e.errors).forEach(key => {
      errors[key] = e.errors[key].message
    })
    res.status(400).json(errors)
  }
}

// login

module.exports.login = (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) {
      console.log(err)
    }
    if (!user) {
      info !== undefined ? res.json({ message: info.message }) : null
    }
    req.logIn(user, err => {
      if (err) {
        return next(err)
      }
      info !== undefined ? res.json({ message: info.message, user }) : null
    })
  })(req, res, next)
}

// Logout

module.exports.logout = (req, res) => {
  req.logout()
  res.json({ message: 'Successfully logged out' })
}
