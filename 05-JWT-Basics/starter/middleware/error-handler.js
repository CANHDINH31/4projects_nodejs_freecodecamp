const {CustomAPIError} = require('../errors')
const {StatusCode} = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
