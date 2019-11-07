/* eslint-disable new-cap */

import express from 'express';
import Controller from '../controllers/test';

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

  router.get('/all', controller.getTests);
  router.get('/:id', controller.getTest);
  router.post('/', controller.addTest);
  router.put('/', controller.updateTest);
  router.delete('/', controller.removeTest);

  return router;
}
