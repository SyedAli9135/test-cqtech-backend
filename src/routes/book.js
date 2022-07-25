const express = require("express");
const createBook = require("../controller/book/createBook");
const getBook = require("../controller/book/getBook");
const getBooks = require("../controller/book/getBooks");
const getByStudentId = require("../controller/book/getByStudentId");
const updateBook = require("../controller/book/updateBook");

const book = express.Router();

book.get("/", getBooks);
book.post("/getBook", getBook);
book.post("/update", updateBook);
book.post("/create", createBook);
book.post("/getByStudentId", getByStudentId);

exports.bookRouter = book;
