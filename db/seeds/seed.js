const format = require("pg-format");
const db = require("../connection");
const { convertTimestampToDate } = require("./utils");

const seed = async ({ userData, recipientData }) => {
  await db.query(`DROP TABLE IF EXISTS recipients;`);
  await db.query(`DROP TABLE IF EXISTS users;`);

  const usersTablePromise = db.query(`
  CREATE TABLE users (
    username VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL
  );`);

  await Promise.all([usersTablePromise]);

  await db.query(`
  CREATE TABLE recipients (
    recipient_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    giver VARCHAR NOT NULL REFERENCES users(username),
    created_at TIMESTAMP DEFAULT NOW(),
    gift_ideas JSON
  );`);

  const insertUsersQueryStr = format(
    "INSERT INTO users ( username, name ) VALUES %L RETURNING *;",
    userData.map(({ username, name }) => [username, name])
  );
  const usersPromise = db
    .query(insertUsersQueryStr)
    .then(result => result.rows);

  await Promise.all([usersPromise]);

  const formattedRecipientsData = recipientData.map(convertTimestampToDate);
  const insertRecipientsQueryStr = format(
    "INSERT INTO recipients (recipient_id ,name, giver, created_at, gift_ideas) VALUES %L RETURNING *;",
    formattedRecipientsData.map(
      ({ recipient_id, name, giver, created_at, gift_ideas }) => [
        recipient_id,
        name,
        giver,
        created_at,
        gift_ideas
      ]
    )
  );
};

module.exports = seed;
