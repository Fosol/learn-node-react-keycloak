import homeRouter from './homeRouter';
import authRouter from './authRouter';
import testRouter from './testRouter';
import resourceRouter from './resourceRouter';

/**
 * Provides a way to control routes to endpoints.
 * @function router
 * @param {object} options - The configuration options.
 * @param {object} options.app - The express app.
 * @param {object} options.db - The client connection.
 * @param {object} options.keycloak - The keycloak configuration.
 * @return {void}
 */
export default function(options) {
  const app = options.app;
  app.use('/', homeRouter);
  app.use('/auth', authRouter(options));
  app.use('/test', options.keycloak.protect(), testRouter(options));
  app.use('/resource', resourceRouter(options));
}
