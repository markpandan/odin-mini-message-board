const messages = require("../models/messages.js");

module.exports = {
  get: (req, res) => {
    res.render("index", {page: "message", title: "Message", messages: messages, index: req.params.messageId })
  },
  post: (req, res) => {},
};
