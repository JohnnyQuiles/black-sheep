const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
    groupName: { type: String },
    groupOwner: { type: mongoose.Schema.ObjectId, ref: "user" }

}, { timestamps: true, });
module.exports = mongoose.model("group", groupsSchema);