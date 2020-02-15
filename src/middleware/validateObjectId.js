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

const mongoose = require('mongoose');

/**
 * Validate a MongoDB id given as a route parameter to the route handler that
 * uses this middleware.
 */

module.exports = function(req, res, next) {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send('Invalid id.');
  }

  next();
};
