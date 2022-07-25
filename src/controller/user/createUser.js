const handleError = require("../../../handleError");
const db = require("../../start/db");

const createUser = handleError(async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName)
    return res.status(400).send("firstName or lastName not provided");
  await db("students").insert({
    "first name": firstName,
    "last name": lastName,
  });
  res.status(200).send("Success");
});

module.exports = createUser;
