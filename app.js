const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogsRouter = require('./controller/blogs')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const config = require('./utils/config')

//db setup
mongoose.set('strictQuery',false)
//log
logger.info('connecting to ',config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI).
    then(()=> {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB',error.message)
    })



// Middleware setup
app.use(cors());
app.use(express.json());
app.use(middleware.requestlogger)

app.use('/api/blogs',blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
// Define Routes

module.exports = app;
