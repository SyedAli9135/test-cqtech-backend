const handleError = require("../../../handleError");
const db = require("../../start/db");

const updateUser = handleError(async (req, res) => {
  const { studentId, firstName, lastName } = req.body;
  if (!studentId) return res.status(400).send("studentId not provided");
  await db("students").where("id", studentId).update({
    "first name": firstName,
    "last name": lastName,
  });
  res.status(200).send("Success");
});

module.exports = updateUser;
