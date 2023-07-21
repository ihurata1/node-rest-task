const { response } = require("express");
const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.json({ status: true, success: "user successfuly registered" });
    } catch (error) {
        throw error;
    }
}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log('Controller----------------email', email);
        console.log('Controller----------------password', password);

        const user = await UserService.checkUser(email);
        console.log('USER----------------user', user);
        if (!user) {
            throw new Error("User do not exist");
        }

        const isMatch = await user.comparePassword(password);

        if (isMatch === false) {
            throw new Error("Password Invalid");
        }

        let tokenData = { _id: user._id, email: user.email };

        const token = await UserService.generateAccessToken(tokenData, "12345", "1h");

        res.status(200).json({ status: true, token: token });



    } catch (error) {
        throw error;
    }
}