const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    userID: String,
    apResets: Number,
    VIPCoins: Number,
    FA: Number,
    lastApResets: Number
});
module.exports = mongoose.model("User", userSchema);