const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [ id ]);
  return rows[0];
}

async function insertMessage({ username, message }) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

// async function searchMessage(username) {
//   const { rows } = await pool.query(
//     "SELECT * FROM messages WHERE username LIKE $1",
//     [`%${username}%`]
//   );
//   return rows;
// }

// async function deleteMessage() {
//   await pool.query("DELETE FROM messages");
// }

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
//   searchMessage,
//   deleteMessage,
};
