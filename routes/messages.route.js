const express = require("express");
const { getMessages } = require("../controllers/message.controller");

const messageRouter = express.Router();

// Get messages
messageRouter.get("/", getMessages);

module.exports = messageRouter;
