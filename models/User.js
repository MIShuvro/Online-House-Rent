const { Schema, model } = require('mongoose'),
  beautifyUnique = require('mongoose-beautiful-unique-validation'),
  { isEmail } = require('validator')
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: `Name is required`
  },
  username: {
    type: String,
    trim: true,
    required: `User Name is required`,
    unique: `{VALUE} is already taken`
  },
  email: {
    type: String,
    trim: true,
    required: `Email is required`,
    unique: `{VALUE} is alrady taken`,
    validate: {
      validator(email) {
        return isEmail(email)
      },
      message: ({ value: email }) => `${email} is not a valid email address`
    }
  },
  password: {
    type: String,
    required: `Password is required`,
    minlength: [6, `Password has to be at least 6 character`]
  },
  profilePicture: String,
  gender: {
    type: String,
    required: 'Gender is required'
  },
  contact: {
    type: String,
    required: `Number is required`
  },
  location: {
    type: String,
    required: `Location is required`
  },
  bookmarks: [String],
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  accountType: {
    type: String
  }
})
userSchema.plugin(beautifyUnique)

module.exports = model('User', userSchema)
