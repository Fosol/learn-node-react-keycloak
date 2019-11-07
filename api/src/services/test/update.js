/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using a pool connection it will update the specified object
 * in the datasource.
 * This will also update the 'updatedOn' column.
 * @function update
 * @param {object} db - The datasource client object.
 * @param {object} model - The object to update in the datasource.
 * @return {Promise}
 */
export default function(db, model) {
  return db
      .connect()
      .then((con) => {
        return con.tx((t) => {
          return t.batch([
            t.one('SELECT * FROM test WHERE id=${id}', model),
            t.one('UPDATE test SET name=${name}, description=${description} WHERE id=${id} AND rowversion=${rowversion} RETURNING *', model),
          ]);
        })
            .then((data) => {
              return data[1];
            });
      });
}
