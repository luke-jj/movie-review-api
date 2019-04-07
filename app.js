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

const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
const genreRouter = require('./routes/genres');

/**
 * App variables.
 * @private
 */

const port = process.env.PORT || 3000;
const app = express();

/*
 * Database connection.
 */

mongoose.connect('mongodb://localhost/awesomedenkivideo')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

/*
 * Middleware
 */

app.use(express.json());
app.use('/api/genres', genreRouter);


/*
 * Event listener
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

