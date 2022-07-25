/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // await knex("students").insert([
  //   {
  //     "first name": "Syed Muhammad",
  //     "last name": "Ali Akhtar",
  //   },
  // ]);
  await knex("books").insert([
    {
      author: "Regex",
      name: "Mogli",
    },
  ]);
};
