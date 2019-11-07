/**
 * ResourceController.data endpoint.
 * @export data
 * @param {*} req - The express request.
 * @param {*} res - The express response.
 * @param {*} next - The express next.
 * @return {void}
 */
export default function(req, res, next) {
  res.status(200)
      .json({data: 'secret'});
};
