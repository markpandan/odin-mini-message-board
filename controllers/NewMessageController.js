const messages = require("../models/messages.js");

module.exports = {
  get: (req, res) => {
    res.render("index", {
      page: "new",
      title: "Add More",
      messages: messages,
    });
  },
  post: (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: new Date(),
    });

    res.redirect("/");
  },
};
