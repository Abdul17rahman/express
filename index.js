const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Abdul Rahman",
  },
  {
    id: 1,
    name: "Hamza Semmanda",
  },
];

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} - /${req.baseUrl}${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my friends API");
});

//Get Friends route
app.get("/friends", (req, res) => {
  res.json(friends);
});

// Get single friend
app.get("/friends/:id", (req, res) => {
  const { id } = req.params;
  const friend = friends.find((f) => f.id === Number(id));
  if (!friend) {
    return res.status(404).json({
      Error: "Friend doesnt exit",
    });
  }
  res.json(friend);
});

// Post or add a friend
app.post("/friends", (req, res) => {
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
});

// Get messages
app.get("/messages", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`);
});
