/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using the connection pool insert the specified object
 * into the datasource.
 * @function add
 * @param {object} db - The client connection.
 * @param {object} model - The object to add to the datasource.
 * @return {Promise}
 */
export default function(db, model) {
  return db.connect()
      .then((con) => {
        return con.one('INSERT INTO test (name, description) VALUES (${name}, ${description}) RETURNING *', model);
      });
}
