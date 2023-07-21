const db = require("../config/db");
const mongoose = require("mongoose"); // mongo db'ye bağlanmamızı sağlayan kütüphane
const bcrypt = require("bcrypt");



const { Schema } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }
});

userSchema.pre("save", async function () { // whenever user saves in data base automatically decrypt.
    try {
        var user = this;
        const hashpass = await bcrypt.hash(user.password, 10);

        user.password = hashpass;
    } catch (error) {
        throw error;
    }
});

//used while signIn decrypt
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        //console.log('----------------password', candidatePassword);
        //console.log('----------------hash password', this.password);
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const UserModel = db.model("user", userSchema);


module.exports = UserModel;

