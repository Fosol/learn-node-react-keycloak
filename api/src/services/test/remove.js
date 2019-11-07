/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using the client connection pool, connect to the datasource
 * and delete the specified object.
 * @function remove
 * @param  {object} db - The datasource client.
 * @param  {object} model - The object to delete.
 * @return {Promise}
 */
export default function(db, model) {
  return db.connect()
      .then((con) => {
        return con.result('DELETE FROM test WHERE id=${id} AND rowversion=${rowversion}', model);
      });
}
