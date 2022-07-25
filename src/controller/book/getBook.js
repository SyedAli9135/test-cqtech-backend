const handleError = require("../../../handleError");
const db = require("../../start/db");

const getBook = handleError(async (req, res) => {
  const { studentId, bookId, dateOfReturn } = req.body;
  if (!studentId || !bookId || !dateOfReturn)
    return res.status(400).send("StudentId or bookId or dateOfReturn missing");
  const book = await db("books").where("id", bookId);
  if (book[0]["student id"]) return res.status(400).send("Book already issued");
  await db("books")
    .where("id", bookId)
    .update("student id", studentId)
    .update("date of borrow", new Date())
    .update("expected date of return", new Date(dateOfReturn));
  res.status(200).send("Success");
});

module.exports = getBook;
