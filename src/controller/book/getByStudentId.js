const handleError = require("../../../handleError");
const db = require("../../start/db");

const getByStudentId = handleError(async (req, res) => {
  const { studentId } = req.body;
  if (!studentId) return res.status(400).send("Student id was not sent");
  const books = await db("books").where("student id", studentId);
  res.status(200).send(books);
});

module.exports = getByStudentId;
