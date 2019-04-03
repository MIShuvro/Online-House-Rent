const Post = require('../models/Post')
const Comment = require('../models/Comment')

/**
 * Creating a Single Post
 */
module.exports.create = async (req, res) => {
  const errors = {}

  try {
    const newPost = new Post({ ...req.body, author: req.user._id })
    const response = await newPost.save()

    res.json({
      message: `Post Create Successfully`,
      id: response._id,
      ...response._doc
    })
  } catch (e) {
    if (e && e.errors) {
      Object.keys(e.errors).forEach(key => {
        errors[key] = e.errors[key].message
      })
      res.status(400).json(errors)
    }
  }
}
/*
 * View all posts
 */
module.exports.index = async (req, res) => {
  try {
    const posts = await Post.find().populate({ path: 'author', select: 'name username contact' })
    const allPosts = posts.map(async post => {
      const AllComments = await Comment.find({
        post: post._id
      }).populate('author', 'name username email')

      const comments = {
        count: AllComments.length,
        comments: AllComments
      }
      return { ...post._doc, comments }
    })
    const response = await Promise.all(allPosts)
    res.json(response)
  } catch (error) {
    res.json(error)
  }
}

/*
 * Get a Single post
 */
module.exports.show = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })
    res.json(post)
  } catch (e) {
    res.json(error)
  }
}

/*
 * Update Post
 */
module.exports.update = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
      { ...req.body },
      { new: true }
    )
    res.json({
      ...post._doc,
      message: 'Update Successfully'
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports.remove = async (req, res) => {
  try {
    const deletePost = await Post.findOneAndDelete({ slug: req.params.slug })
    res.json({ message: 'Deleted Successfully', post: deletePost })
  } catch (error) {
    res.json(error)
  }
}
