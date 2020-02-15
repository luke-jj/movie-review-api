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

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @private
 */

module.exports = router;

/**
 * Route Handler.
 * @private
 */

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../public' });
});
