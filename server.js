const express = require('express'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  app = express()
/*
 * ## Body parser & others
 */
require('./config/passport')(passport)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(require('morgan')('dev'))
require('dotenv').config()
app.use(require('connect-flash')())
app.use(session({ secret: 'Ilovescotch', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

// Mongodb Connection
mongoose
  .connect(process.env.DBPATH, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB is connected'))

/*
 * ## Api Routes
 */
app.use('/api/auth', require('./routes/auth'))
app.use('/api/posts', require('./routes/posts'))
app.use('/api/comments', require('./routes/comments'))
app.use((req, res, next) => {
  res.status(403).json({
    message: 'Invalid api request'
  })
  next()
})

/*
 * PORT
 */
const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port is ${PORT}`)
})
