const rootRouter = require('../routes/root');
const moviesRouter = require('../routes/movies');
const userRouter = require('../routes/users');
const authRouter = require('../routes/auth');
const error = require('../middleware/error');

module.exports = (app) => {
  app.use('/', rootRouter);
  app.use('/api/v1/movies/', moviesRouter);
  app.use('/api/v1/users/', userRouter);
  app.use('/api/v1/auth/', authRouter);
  app.use(error);
};
