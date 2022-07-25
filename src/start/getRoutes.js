const express = require("express");
const cors = require("cors");
const { userRouter } = require("../routes/user");
const { bookRouter } = require("../routes/book");

const getRoutes = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use("/api/user", userRouter);
  app.use("/api/book", bookRouter);
};

module.exports = getRoutes;
