const router = require("express").Router();
const TaskController = require("../controller/task.controller");

router.post("/createTask", TaskController.createTask);

router.get("/getUserTasks", TaskController.getUserTask);

router.post("/deleteTask", TaskController.deleteTask);

//router.post("/login", UserController.login);

module.exports = router;