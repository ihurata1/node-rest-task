const db = require("../config/db");
const mongoose = require("mongoose"); // mongo db'ye bağlanmamızı sağlayan kütüphane
const UserModel = require("../model/user.model")


const { Schema } = mongoose;

const taskSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });



const TaskModel = db.model("task", taskSchema);

module.exports = TaskModel;