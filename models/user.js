
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    gamelist: []
})
module.exports = User;