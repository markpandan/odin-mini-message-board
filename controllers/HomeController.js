const messages = require("../models/messages.js");

module.exports = {
  get: (req, res) => {
    res.render("index", {
      page: "home",
      title: "Message Board",
      messages: messages,
    });
  },
};
