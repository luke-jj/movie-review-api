/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module exports.
 * @private
 */

module.exports = function (req, res, next) {

  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied.');
  }

  next();
}
