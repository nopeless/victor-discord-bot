const mongoose = require("mongoose");

var servantSchema = new mongoose.Schema({
    id: Number,
    // name: Array, // name and aliases
    // class: String,
    // pictures: Array,
    // alignment: Array,
    // traits: Array,
    // about: String,
    // level: Number, // max 100
    // exp: Number, 
    currentHp: Number,
    maxHp: Number, // endurance * 10
    stats: {
        strength: Number, //increase base dmg
        endurance: Number, // increase health / decrease dmg ()
        agility: Number, // raises chances to land a hit / evade
        magic: Number, // raises NP power
        luck: Number // raises chances to land a crit
    },
    statsPoints: Number, // +1 per lvl up
    NPLevel: Number,
    // noblePhantasm: {
    //     name: String,
    //     power: Number, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
    //     description: String,
    //     text: Array,
    //     image: String,
    //     canBeUsed: Boolean
    // },
    status: {
        burn: {//reduce str -10% and hp-5%ofmaxhp per turn
            active: false,
            duration: 0
         }, 
        curse: {//reduce luck -10% and hp-5%ofmaxhp per turn
            active: false,
            duration: 0
         }, 
        stun: {// servant can't attack but can use NP
            active: false,
            duration: 0
         }, 
        freeze: {//reduce agility -10% and hp-5%ofmaxhp per turn
            active: false,
            duration: 0
         }, 
        npSeal: {// servant can't use theirs NP
            active: false,
            duration: 0
         }, 
        confusion: {// 50%chance of dealing 50% of your str stat to yourself
            active: false,
            duration: 0
        },
        fear: { //reduce magic - 20% per turn
            active: false,
            duration: 0
         },
        poison: {// hp-10%ofmaxhp per turn
            active: false,
            duration: 0
        }
        
    }
});
module.exports = mongoose.model("Servant", servantSchema);