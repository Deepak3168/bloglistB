const blogsRouter = require('express').Router()
const Blog = require('../models/blog');

// Route handlers
blogsRouter.get('/',(request,response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/',(request,response,next) => {
  const body = request.body 
  const blog =new Note ({
    "title":body.title,
    "author":body.author,
    "url":body.url,
    "likes":body.likes,
  })
  blog.save()
  .then(savedBlog => {
    response.json(savedNote)
  })
  .catch(error => next(error))
})


module.exports = blogsRouter
