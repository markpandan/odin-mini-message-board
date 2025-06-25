const messages = require("../db/messages.js");
const db = require("../db/queries.js");

module.exports = {
  get: async (req, res) => {
    const message = await db.getMessage(req.params.messageId);

    res.render("index", {
      page: "message",
      title: "Message",
      message: message,
    });
  },
  post: (req, res) => {},
};
