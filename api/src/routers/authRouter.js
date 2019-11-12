/* eslint-disable new-cap */
import express from 'express';
import redirectToLogin from '../utils/redirectToLogin';
import authenticate from '../utils/authenticate';

const router = express.Router();

/**
 * Adds controller endpoint routes.
 * @export route
 * @param {object} options - The configuration options.
 * @param {object} options.db - The client connection.
 * @param {object} options.keycloak - The keycloak configuration.
 * @return {Router}
 */
export default function route(options) {
  const keycloak = options.keycloak;

  router.get('/login', (req, res, _next) =>
    redirectToLogin({keycloak, request: req, response: res}),
  );

  router.post('/auto', (req, res, next) =>
    authenticate({keycloak, request: req, response: res, next}),
  );

  router.get('/unauthorized', (req, res, next) =>
    res.sendStatus(403).json({error: 'Unauthorized'}),
  );

  return router;
}
