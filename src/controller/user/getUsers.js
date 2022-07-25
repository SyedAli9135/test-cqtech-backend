const handleError = require("../../../handleError");
const db = require("../../start/db");

const getUsers = handleError(async (req, res) => {
  const students = await db("students");
  res.status(200).send(students);
});

module.exports = getUsers;
