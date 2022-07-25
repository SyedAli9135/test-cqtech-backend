const handleError = require("../../../handleError");
const db = require("../../start/db");

const updateBook = handleError(async (req, res) => {
  const { bookId, name, author } = req.body;
  if (!bookId) return res.status(400).send("Book id not provided");
  await db("books").where("id", bookId).update({ name, author });
  res.status(200).send("success");
});

module.exports = updateBook;
