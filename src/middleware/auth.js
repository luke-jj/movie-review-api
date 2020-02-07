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

const jwt = require('jsonwebtoken');
const config = require('config');

/**
 * Verify the clients json web token. Terminate the request response cycle if
 * token is invalid, else call the next middleware function. Save the decoded
 * payload the the request object.
 * @public
 */

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const payload = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = payload;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}
