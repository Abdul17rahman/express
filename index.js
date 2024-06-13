const express = require("express");
const friendRouter = require("./routes/friends.route");
const messageRouter = require("./routes/messages.route");

const app = express();

const PORT = 3000;

app.use(express.json());

// Middleware for calculating request time.
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} - ${req.baseUrl}${req.url} ${delta}ms`);
});

// Friends
app.use("/friends", friendRouter);

// Messages
app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my friends API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`);
});
