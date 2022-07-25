const express = require("express");
const createUser = require("../controller/user/createUser");
const getUsers = require("../controller/user/getUsers");
const updateUser = require("../controller/user/updateUser");

const user = express.Router();

user.get("/", getUsers);
user.post("/create", createUser);
user.post("/update", updateUser);

exports.userRouter = user;
