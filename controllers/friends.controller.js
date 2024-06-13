const friends = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friends);
}

function getOneFriend(req, res) {
  const { id } = req.params;
  const friend = friends.find((f) => f.id === Number(id));
  if (!friend) {
    return res.status(404).json({
      Error: "Friend doesnt exit",
    });
  }
  res.json(friend);
}

function addFriend(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({
      Error: "Coundn't find friend to add",
    });
  }
  const newFriend = {
    id: friends.length + 1,
    name,
  };
  friends.push(newFriend);
  res.json(newFriend);
}

module.exports = { getFriends, getOneFriend, addFriend };
