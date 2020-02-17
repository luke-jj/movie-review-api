/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

const express = require('express');
const Joi = require('@hapi/joi');
const validate = require('../middleware/validation');
const { Rental, schema } = require('../models/rental');
const { Movie } = require('../models/movie');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @public
 */

module.exports = router;

/*
 * Route handler.
 * @private
 */

router.post('/', [auth, admin, validate(schema)], async (req, res) => {
  const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

  if (!rental) {
    return res.status(404).send('Rental not found.');
  }

  if (rental.dateReturned) {
    return res.status(400).send('Return already processed.');
  }

  try {
    rental.return();
    await rental.save();
    await Movie.update(
      { _id: rental.movie._id },
      {
        $inc: { numberInStock: 1 }
      }
    );

    return res.send(rental);
  } catch (err) {
    res.status(500).send('An error occured on the server.');
  }
});
