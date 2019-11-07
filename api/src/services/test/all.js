/**
 * Using the datasource connection pool
 * make a request for all the objects.
 * @export all
 * @param {object} db - The datasource client.
 * @return {Promise}
 */
export default function(db) {
  return db.connect()
      .then((con) => {
        return con.any('SELECT * FROM test');
      });
}
