const messages = require("../db/messages.js");
const db = require("../db/queries.js");

module.exports = {
  get: (req, res) => {
    res.render("index", {
      page: "new",
      title: "Add More",
      messages: messages,
    });
  },
  post: async (req, res) => {
    await db.insertMessage({
      username: req.body.user,
      message: req.body.message,
    });

    res.redirect("/");
  },
};
