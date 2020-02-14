const express = require('express');
const config = require('../../config');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

module.exports = (app) => {
  if (config.LOG_ENABLED || config.ENVIRONMENT === 'development') {
    app.use(morgan('tiny'));
  }

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
