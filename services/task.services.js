const TaskModel = require("../model/task.model");


class TaskServices {

    static async createTask(userId, title, description) {
        const createTask = new TaskModel({ userId, title, description });
        return await createTask.save();
    }

    static async getUserTask(userId) {
        const task = await TaskModel.find({ userId })
        return task;
    }

    static async deleteTask(id) {
        const task = await TaskModel.findOneAndDelete({ _id: id })
        return task;
    }

}

module.exports = TaskServices;