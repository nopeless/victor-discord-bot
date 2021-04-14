const mongoose = require("mongoose");

var spellSchema = new mongoose.Schema({
    id: String,
    name: String,
    level: Number,
    exp: Number,
    qpCost: Number,
    description: String,
    power: Number,
    manaNeeded: Number,
    spellType: String,
    spellDuration: Number,
    target: String
    
});
module.exports = mongoose.model("Spell", spellSchema);