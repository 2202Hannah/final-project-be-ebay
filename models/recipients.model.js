const db = require(`../db/connection`);

exports.deleteRecipient = recipient_id => {
  console.log(recipient_id);
  return db
    .query(`DELETE FROM recipients WHERE recipient_id = $1 RETURNING *`, [
      recipient_id
    ])
    .then(({ rows }) => {
      console.log(rows);
      if (rows.length === 1) {
        return rows;
      } else {
        return Promise.reject({
          status: 404,
          msg: "recipient_id not found in the database"
        });
      }
    });
};
