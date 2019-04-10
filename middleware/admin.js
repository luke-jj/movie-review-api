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

/*
 * Check whether the user is an admin or not.
 */

module.exports = function(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  if (!req.user.isAdmin) return res.status(403).send('Access denied.');

  next();
}
