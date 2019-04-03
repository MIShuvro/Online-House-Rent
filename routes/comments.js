const Router = require('express').Router(),
  { isAdminOrAuthorForComments, ensureAuthenticated } = require('../config/auth'),
  { storeComment, updateComment, deleteComment } = require('../controller/commentController')

Router.post('/:slug/comment', ensureAuthenticated, storeComment)

Router.put('/:commentId', ensureAuthenticated, isAdminOrAuthorForComments, updateComment)

Router.delete('/:commentId', ensureAuthenticated, isAdminOrAuthorForComments, deleteComment)

module.exports = Router
