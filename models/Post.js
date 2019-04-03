const { Schema, model } = require('mongoose'),
  beautifyUnique = require('mongoose-beautiful-unique-validation')

const Post = new Schema({
  title: {
    type: String,
    required: `You have to type a title`,
    trim: true
  },
  slug: {
    type: String,
    trim: true,
    required: 'Slug is required',
    unique: `{VALUE} is already taken`
  },
  description: {
    type: String,
    trim: true,
    required: `You have to write at least 25 Characters`,
    minlength: [25, `You have to write at least 25 Characters`]
  },
  price: {
    type: String,
    required: `You have write down the price of the rental apartment/house`
  },
  gallery: {
    type: [String],
    validate: {
      validator: v => v == null || v.length > 0,
      message: `You have to upload at least 1 picture`
    }
  },
  location: {
    type: String,
    required: `Location is required`,
    trim: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

Post.plugin(beautifyUnique)

module.exports = model('Post', Post)
