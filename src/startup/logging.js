const winston = require('winston');

module.exports = () => {
  winston.add(new winston.transports.File({ filename: 'logfile.log' }));

  process.on('uncaughtException', err => {
    winston.log('error', err.message, err);
  });

  process.on('unhandledRejection', err => {
    throw err;
  });
};
