const handleError = require("../../../handleError");
const db = require("../../start/db");

const createBook = handleError(async (req, res) => {
  const { name, author } = req.body;
  if (!name || !author)
    return res.status(400).send("name or author not provided");
  await db("books").insert({
    name,
    author,
  });
  res.status(200).send("Success");
});

module.exports = createBook;
