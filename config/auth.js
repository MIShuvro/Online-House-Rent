const Post = require('../models/Post'),
  User = require('../models/User'),
  Comment = require('../models/Comment')

module.exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(400).json({ message: 'Access denied' })
}

module.exports.isAdminOrAuthorForPosts = async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })
    if (!post) return res.json({ message: 'Post not found' })
    const { _id, accountType } = await User.findById(req.user._id)
    const { author } = post

    if (author.equals(_id) || accountType === 'admin') {
      next()
    } else {
      res.status(401).json({ message: `Access Denied` })
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` })
  }
}
/*
 * Check comment Author
 */
module.exports.isAdminOrAuthorForComments = async (req, res, next) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.commentId })
    if (!comment) return res.json({ message: 'Comment not found' })
    const { _id, accountType } = await User.findById(req.user._id)
    const { author } = comment

    if (author.equals(_id) || accountType === 'admin') {
      next()
    } else {
      res.status(401).json({ message: `You are not authorized to change or delete this comment.` })
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` })
  }
}
