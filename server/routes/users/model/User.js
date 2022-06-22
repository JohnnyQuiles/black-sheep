const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    joinedGroups: [{ type: mongoose.Schema.ObjectId, ref: 'groups'}]
}, { timestamps: true });

//error code 11000
module.exports = mongoose.model("user", userSchema);