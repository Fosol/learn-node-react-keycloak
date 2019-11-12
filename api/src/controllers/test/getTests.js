/* eslint-disable no-invalid-this */
import * as service from '../../services/test';

/**
 * TestController.getTests endpoint.
 * Makes a request to the datasource to retrieve all models.
 * @export getTests
 * @param {object} req - The express request.
 * @param {object} res - The express response.
 * @param {object} next - The express next.
 */
export default function(req, res, next) {
  service.all(this.db)
      .then((data) => {
        res.status(200)
            .json({
              status: 'success',
              data: data,
            });
      })
      .catch((err) => {
        return next(err);
      });
};
