const mongoose = require("mongoose"); // mongo db'ye bağlanmamızı sağlayan kütüphane

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/ToDo").on("open", () => {  // if connection successful
    console.log("MongoDb Connected");
}).on("error", () => {
    console.log("MongoDb connection error");
});

module.exports = connection;