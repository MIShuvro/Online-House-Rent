const Router = require('express').Router()
const { create, update, index, show, remove } = require('../controller/postController'),
  { ensureAuthenticated, isAdminOrAuthorForPosts } = require('../config/auth')

Router.post('/create', ensureAuthenticated, create)
Router.get('/', ensureAuthenticated, index)
Router.get('/:slug', ensureAuthenticated, show)
Router.put('/:slug', ensureAuthenticated, isAdminOrAuthorForPosts, update)
Router.delete('/:slug', ensureAuthenticated, isAdminOrAuthorForPosts, remove)

module.exports = Router
