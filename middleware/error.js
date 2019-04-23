/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/*
 * General error handling function.
 */

module.exports = function (err, req, res, next) {
  res.status(500).send('Something failed.');
}

