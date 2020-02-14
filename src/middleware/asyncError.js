/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * This async function solves the problem of repetetive try-catch blocks around
 * async-await code in the route handler.
 *
 * Pass a route handler to this function to catch errors and exceptions that
 * may occur in any asynchronous code and automaticall ypass those events on to
 * an express error middleware.
 */

module.exports = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (ex) {
      console.log(ex);
      next(ex);
    }
  };
};
