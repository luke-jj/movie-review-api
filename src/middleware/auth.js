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
const config = require('../../config');

/**
 * Verify the clients json web token. Terminate the request response cycle if
 * token is invalid. Save the decoded payload the the request object.
 * @public
 */

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, config.JWTPRIVATEKEY);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(401).send('Access denied. Invalid token.');
  }
};
