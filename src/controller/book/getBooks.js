const handleError = require("../../../handleError");
const db = require("../../start/db");

const getBooks = handleError(async (req, res) => {
  const books = await db("books");
  res.status(200).send(books);
});

module.exports = getBooks;
