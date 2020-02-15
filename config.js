module.exports = {
  CONFIG_NAME: process.env.API_CONFIG_NAME || 'default-config',
  PORT: parseInt(process.env.API_PORT) || parseInt(process.env.PORT) || 5000,
  ENVIRONMENT: process.env.NODE_ENV,
  JWTPRIVATEKEY: process.env.API_JWTPRIVATEKEY,
  DATABASE: process.env.API_DATABASE,
  LOG_ENABLED: process.env.API_LOG_ENABLED === 'true',
};
