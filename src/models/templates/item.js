const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    id: Number,
    quantity: Number,
    name: String,
    description: String,
    icon: String,
    value: Number,
    consumeable: Boolean 

});
module.exports = mongoose.model("Item", itemSchema);