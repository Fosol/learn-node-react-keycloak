/* eslint-disable no-invalid-this */
import * as service from '../../services/test';
import Problem from 'api-problem';

/**
 * TestController.addTest endpoint.
 * Adds the specified model to the datasource.
 * @export addTest
 * @param {*} req - The express request.
 * @param {*} res - The express response.
 * @param {*} next - The express next.
 * @return {void}
 */
export default function(req, res, next) {
  const body = req.body;
  service.add(this.db, body)
      .then((data) => {
        res.status(201)
            .json({
              status: 'success',
              data: data,
            });
      })
      .catch((err) => {
        if (err.code === '23505') {
          return next(new Problem(400, 'Insert Failed', {
            error: err.detail,
          }));
        }
        return next(err);
      });
};
