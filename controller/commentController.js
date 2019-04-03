const Comment = require('../models/Comment')
const Post = require('../models/Post')

module.exports.storeComment = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })
    if (post) {
      const comment = new Comment({
        post: post._id,
        body: req.body.body,
        author: req.user._id
      })
      comment.save()
      res.json(comment)
    } else {
      res.status(400).json({ message: 'Post not found. Cannot Comment of Undefined Post' })
    }
  } catch (e) {
    let errors = {}
    Object.keys(e).errors.forEach(key => (errors[key] = e.errors[key].message))
    res.json(errors)
  }
}

module.exports.updateComment = async (req, res) => {
  try {
    const newComment = await Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { body: req.body },
      { new: true }
    )
    res.status(200).json(newComment)
  } catch (error) {
    res.json(error)
  }
}

module.exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({ _id: req.params.commentId })
    res.json({ message: `Comment deleted` })
  } catch (error) {
    res.json(error)
  }
}
