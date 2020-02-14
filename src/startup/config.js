const config = require('../../config');

module.exports = () => {
  if (!config.JWTPRIVATEKEY) {
    throw new Error('API_JWTPRIVATEKEY must be set.');
  }

  if (!config.ENVIRONMENT) {
    throw new Error('The application environment must be set with NODE_ENV.');
  }
}
