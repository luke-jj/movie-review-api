/**
 * Pass a route handler to this function to catch errors and exceptions that
 * may occur in any asynchronous code and automaticall ypass those events on to
 * an express error middleware.
 */

module.exports = asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (ex) {
      console.log(ex);
      next(ex);
    }
  };
}
