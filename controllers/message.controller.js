function getMessages(req, res) {
  res.json({
    message: "Hello world",
  });
}

module.exports = { getMessages };
