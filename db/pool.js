const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/message_board`,
});
