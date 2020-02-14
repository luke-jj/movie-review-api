const winston = require('winston');

module.exports = (err, req, res, next) => {
  // Log the error
  winston.log('error', err.message, err);

  // Send user friendly message
  res.status(500).send('An unexpected error occured on the server');
};
