const mongoose = require("mongoose");

var serverSchema = new mongoose.Schema({
    serverID: String,
    apResetTime: Number,
    shadowID: Number,
    hgwChannel: String,
    hgwEndDate: Number,
    hgw: Number,
    players2: {
        type: Map,
        of: String
    },
    playersMap: {
        type: Map,
        of: String
    },
    players: [
        {
            playerID: String,
            serverID: String,
            name: String,
            avatar: String,
            ethics: Number,//base 50 (part of alignment; Lawful/ Neutral/ Chaotic)
            morality: Number,//base 50 (part of alignment Good/ Neutral/ Evil)
            wish: String,
            money: Number,
            currentAp: Number,
            maxAp: Number,
            level: Number, // 0-100
            exp: Number,
            servantsLimit: Number, // lv 1-1; 10-2; 20-3; ...90-10; 95-11; 100-12(max); 
            currentMana: Number,
            maxMana: Number, // magic*10
            stats: {
                strength: Number, // base 10; boosts strenght of your servant
                endurance: Number, // base 10; boosts hp of your servant
                agility: Number, // base 10 boosts agility of your servant
                magic: Number, // base 10  boosts magic of your servant / raises your's MP
                luck: Number  // base 10 boosts luck of your servant / rare events more likely to happen
            },
            statsPoints: Number, // +1 per lvl up
            wishesGranted: Array,
            goldenCoins: Number,
            holyGrails: Number,
            commandsLeft: Number,
            commandId: Number,
            points: Number,
            weeklyBP: Number,
            isFighting: Boolean,
            test: Number,
            daily: Number,
            spells: [
                {
                    id: String,
                    name: String,
                    level: Number,
                    exp: Number,
                    description: String,
                    power: Number,
                    manaNeeded: Number,
                    spellType: String,
                    spellDuration: Number,
                    target: String
                }
            ],
            servants: [
                {
                    id: Number,
                    // name: Array, // name and aliases
                    // class: String,
                    // pictures: Array,
                    // alignment: Array,
                    // traits: Array,
                    // about: String,
                    level: Number, // max 100
                    exp: Number,
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
                        burn: {//reduce str -30% and hp-5%ofmaxhp per turn
                            active: false,
                            duration: 0
                        },
                        curse: {//reduce luck -30% and hp-5%ofmaxhp per turn
                            active: false,
                            duration: 0
                        },
                        stun: {// servant can't take action
                            active: false,
                            duration: 0
                        },
                        freeze: {//reduce agility -30% and hp-5%ofmaxhp per turn
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
                        fear: { //reduce magic - 30%
                            active: false,
                            duration: 0
                        },
                        poison: {// hp-10%ofmaxhp per turn
                            active: false,
                            duration: 0
                        }

                    }
                }
            ],
            inventory: [
                {
                    id: Number,
                    quantity: Number,
                    name: String,
                    description: String,
                    icon: String,
                    value: Number,
                    consumeable: Boolean // consumeable/ catalyst/ held item/ upgrade material

                }
            ]

        }
    ],
    serverBoss: [
        {
            id: Number,
            name: Array, // name and aliases
            class: String,
            pictures: Array,
            alignment: Array,
            traits: Array,
            about: String,
            level: Number, // max 100
            exp: Number,
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
            noblePhantasm: {
                name: String,
                power: Number, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
                description: String,
                text: Array,
                image: String,
                canBeUsed: Boolean
            },
            status: {
                burn: {//reduce str -30% and hp-5%ofmaxhp per turn
                    active: false,
                    duration: 0
                },
                curse: {//reduce luck -30% and hp-5%ofmaxhp per turn
                    active: false,
                    duration: 0
                },
                stun: {// servant can't take action
                    active: false,
                    duration: 0
                },
                freeze: {//reduce agility -30% and hp-5%ofmaxhp per turn
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
                fear: { //reduce magic - 30%
                    active: false,
                    duration: 0
                },
                poison: {// hp-10%ofmaxhp per turn
                    active: false,
                    duration: 0
                }

            }
        }
    ]
});
module.exports = mongoose.model("Server", serverSchema);