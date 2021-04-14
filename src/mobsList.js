const mobsList = [

    {//0
        id: 0,
        name: ['creeper'],
        class: 'Enemy',
        pictures: ["https://i.imgur.com/U1fr5Rw.png", "https://i.imgur.com/U1fr5Rw.png", "https://i.imgur.com/U1fr5Rw.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Creeper",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 35,
            magic: 40,
            luck: 35
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Explode',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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

    },

    {
        id: 1,
        name: ['skeleton'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/ZcgZvhO.png", "https://i.imgur.com/dYkmIV9.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Skeleton",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 35,
            endurance: 30,
            agility: 30,
            magic: 30,
            luck: 30
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Weapon Swing',
            power: 50,
            description: 'Swing',
            text: [''],
            image: "",
            canBeUsed: false
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

    },

    {
        id: 2,
        name: ['golem'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/T4ar43h.png", "https://i.imgur.com/T4ar43h.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 15,
            magic: 30,
            luck: 30
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Sand Coffin',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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

    },

    {
        id: 3,
        name: ['ghost'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/vniB4lP.png", "https://i.imgur.com/vniB4lP.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 40,
            magic: 40,
            luck: 45
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Shock',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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

    },

    {
        id: 4,
        name: ['wyvern'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/5mYs1aI.png", "https://i.imgur.com/5mYs1aI.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["dragon"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 45,
            magic: 40,
            luck: 30
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Flame Charge',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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
    },

    {
        id: 5,
        name: ['crix'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/RgSmBTe.png", "https://i.imgur.com/RgSmBTe.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["program"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 25,
            endurance: 20,
            agility: 50,
            magic: 30,
            luck: 45
        },
        statsPoints: 0,
        NPLevel: 1,
        noblePhantasm: {
            name: 'Poisonous Needle',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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

    },
]

module.exports = mobsList;