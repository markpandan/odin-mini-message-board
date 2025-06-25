const messages = require("../db/messages.js");
const db = require("../db/queries");

module.exports = {
  get: async (req, res) => {
    const messages = await db.getAllMessages();

    res.render("index", {
      page: "home",
      title: "Message Board",
      messages: messages,
    });
  },
};
