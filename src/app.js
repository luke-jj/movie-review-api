const express = require('express');
require('express-async-errors');
const config = require('../config');

const app = express();
const port = config.PORT;

require('./startup/logging')();
require('./startup/config')();
require('./startup/middleware')(app);
require('./startup/routes')(app);

throw new Error('new error thrown.');

app.listen(port, () => console.log(`Listening on port ${port}...`));
