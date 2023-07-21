const express = require("express"); //import package example
const body_parser = require("body-parser");
const userRoute = require("./routers/user.router")
const taskRouter = require("./routers/task.router")

const app = express(); //import package example

app.use(body_parser.json());

app.use("/", userRoute);
app.use("/", taskRouter);

module.exports = app;  //import package example

