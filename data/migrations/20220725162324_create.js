/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books", (books) => {
    books.increments("id").primary();
    books.text("name", 255).notNullable();
    books.timestamp("date of borrow").nullable();
    books.timestamp("expected date of return").nullable();
    books.text("author", 255).notNullable();
    books.bigInteger("student id").references("id").inTable("students");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
