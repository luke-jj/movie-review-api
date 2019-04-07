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
const genreRouter = require('./routes/genres');

/**
 * App variables.
 * @private
 */

const port = process.env.PORT || 3000;
const app = express();

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

