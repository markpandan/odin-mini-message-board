const express = require("express");
const router = express.Router();
const controller = require("../controllers/MessageInfoController");

router.get("/:messageId", controller.get);
// router.post("/", controller.post);

module.exports = router;
