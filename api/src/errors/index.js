import log from 'npmlog';
import Problem from 'api-problem';

/**
 * Configure error handling for express.
 * @export errorHandler
 * @param {*} app - The express app
 * @return {void}
 */
export default function(app) {
  app.use(logErrors);

  // Handle 500
  app.use((err, _req, res, _next) => {
    if (err instanceof Problem) {
      err.send(res);
    } else {
      new Problem(500, 'Unhandled Exception', {
        error: (err.message) ? err.message : err,
      }).send(res);
    }
  });

  // Handle 404
  app.use((_req, res) => {
    new Problem(404).send(res);
  });
}

/**
 * Log error messages.
 * @function logErrors
 * @param {*} err - The express error.
 * @param {*} req - The express request.
 * @param {*} res - The express response.
 * @param {*} next - The express next.
 * @return {void}
 */
function logErrors(err, req, res, next) {
  log.error(err.stack || err);

  next(err);
}
