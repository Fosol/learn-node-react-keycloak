/* eslint-disable new-cap */

import express from 'express';
import Controller from '../controllers/resource';

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
  const controller = new Controller(options.db);
  const keycloak = options.keycloak;
  router.get('/data', keycloak.enforcer('demo:user'), controller.data);
  router.get('/role', keycloak.protect('demo:user'), controller.role);

  return router;
};
