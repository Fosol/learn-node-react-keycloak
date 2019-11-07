/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using the connection pool get one object
 * from the datasource that matches the specified 'id'.
 * @function get
 * @param {object} db - The client conneection.
 * @param {int} id - The id of the object.
 * @return {Promise}
 */
export default function(db, id) {
  return db.connect()
      .then((con) => {
        return con.oneOrNone('SELECT * FROM test WHERE id = $1', id);
      });
}
