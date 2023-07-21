const { response } = require("express");
const TaskServices = require("../services/task.services");

exports.createTask = async (req, res, next) => {
    try {
        const { userId, title, description } = req.body;
        let task = await TaskServices.createTask(userId, title, description);
        res.json({ status: true, success: task });
    } catch (error) {
        next(error);
    }
}


exports.getUserTask = async (req, res, next) => {
    try {
        const { userId } = req.body;
        let task = await TaskServices.getUserTask(userId);
        res.json({ status: true, success: task });
    } catch (error) {
        next(error);
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.body;
        let task = await TaskServices.deleteTask(id);
        res.json({ status: true, success: task });
    } catch (error) {
        next(error);
    }
}