const app = require("./app"); //imports the app.js class
const db = require("./config/db");
const UserModel = require("./model/user.model");
const TaskModel = require("./model/task.model");

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on Port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send("Hello Worlds")
});



