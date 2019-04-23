/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * App dependencies.
 * @private
 */

require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi); // validate MongoDB ObjectId types
const genreRouter = require('./routes/genres');
const customerRouter = require('./routes/customers');
const movieRouter = require('./routes/movies');
const rentalRouter = require('./routes/rentals');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const error = require('./middleware/error');

/**
 * App variables.
 * @private
 */

const port = process.env.PORT || 3000;
const mongodb = config.get('mongodb');
const app = express();

/*
 * Configuration and Settings
 */

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: denki_jwtPrivateKey environment variable not set.');
  process.exit(1);
}

/*
 * Database connection.
 */

mongoose.connect(`mongodb://${mongodb}/awesomedenkivideo`)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

/*
 * Middleware
 */

app.use(express.json());
app.use('/api/genres', genreRouter);
app.use('/api/customers', customerRouter);
app.use('/api/movies', movieRouter);
app.use('/api/rentals', rentalRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use(error); // error handling function

/*
 * HTTP Request Listener
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

