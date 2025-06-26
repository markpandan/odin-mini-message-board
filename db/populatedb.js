const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message) 
VALUES
  ('Bryan', 'Hello world!'),
  ('Odin', 'Amazing!'),
  ('Damon', 'Have a nice day!');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/message_board`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
