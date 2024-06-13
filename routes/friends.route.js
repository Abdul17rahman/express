const express = require("express");
const {
  getFriends,
  getOneFriend,
  addFriend,
} = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log("You must be logged in.!");
  next();
});

//Get Friends route
friendRouter.get("/", getFriends);

// Get single friend
friendRouter.get("/:id", getOneFriend);

// Post or add a friend
friendRouter.post("/", addFriend);

module.exports = friendRouter;
