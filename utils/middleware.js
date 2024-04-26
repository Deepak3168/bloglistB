const logger = require ('./logger')

const requestlogger  = (request,response,next) => {
    logger.info('Method',request.method)
    logger.info('path: ',request.path)
    logger.info('Body: ',request.body)
    logger.info('----')
    next()
}

const unknownEndpoint = (request,response) => {
    response.status(404).send({error:'unknown endpoint'})
}

const errorHandler = (error,response,request,next) => {
    logger.error(error.message)

    if (error.name === 'CastError'){
        return response.status(400).send({error:"mal formatted id"})
    } else if (error.name == 'ValidationError') {
        return response.status(400).json({error:error.message})
    }

    next(error)
}


module.exports = {
    requestlogger,
    unknownEndpoint,
    errorHandler

}

