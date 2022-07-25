const express = require("express");
const getRoutes = require("./start/getRoutes");
require("./start/env");

const app = express();
getRoutes(app);

const PORT = process.env.PORT || 3500;
app.listen(3500, () => console.log("Listening at port: " + PORT));
