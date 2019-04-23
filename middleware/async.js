/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Function returns a route handler and abstracts away general error handling.
 * This async function solves the problem of repetetive try-catch blocks in the
 * route handler.
 */

module.exports = function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
}

