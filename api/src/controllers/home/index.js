/**
 * HomeController endpoints.
 * @export home
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function home(req, res, next) {
  res.json({name: 'home'});
};
