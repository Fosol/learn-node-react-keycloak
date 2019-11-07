import data from './data';
import role from './role';

/**
 *
 * @export
 * @class Controller
 */
export default class Controller {
  /**
      *Creates an instance of Controller.
      * @param {*} db
      * @memberof Controller
      */
  constructor(db) {
    this.db = db;
    this.data = data.bind(this);
    this.role = role.bind(this);
  }
}
