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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Explode',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Weapon Swing',
            power: 50,
            description: 'Swing',
            text: [''],
            image: "",
            canBeUsed: false
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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Sand Coffin',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Shock',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Flame Charge',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
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
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Poisonous Needle',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 6,
        name: ['kuwagamon'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/7qzyRWJ.png", "https://i.imgur.com/7qzyRWJ.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 25,
            endurance: 30,
            agility: 40,
            magic: 20,
            luck: 15
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Power Guillotine',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 7,
        name: ['golbat'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/ycNOzTL.png", "https://i.imgur.com/ycNOzTL.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 20,
            endurance: 15,
            agility: 45,
            magic: 20,
            luck: 50
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Wing Attack',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 8,
        name: ['hollow', 'fishbone d', 'fishbone'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/V6KTJeO.png", "https://i.imgur.com/V6KTJeO.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 40,
            endurance: 45,
            agility: 15,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Cero',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 9,
        name: ['kuriboh'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/0yx1DqX.png", "https://i.imgur.com/0yx1DqX.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 20,
            magic: 25,
            luck: 50
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Lucky Roll',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 10,
        name: ['goomba'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/P1ZZdqy.png", "https://i.imgur.com/P1ZZdqy.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 20,
            endurance: 10,
            agility: 40,
            magic: 25,
            luck: 10
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Charge Forward',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 11,
        name: ['oni'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/AkVAxAK.png", "https://i.imgur.com/AkVAxAK.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 20,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Axe Slash',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

    {
        id: 12,
        name: ['misaka', 'misaka clone', 'sister', 'misaka sister', 'mikoto'],
        class: 'Enemy',
        pictures: ["", "https://i.imgur.com/034GY02.png", "https://i.imgur.com/034GY02.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 30,
            magic: 30,
            luck: 10
        },
        statsPoints: 0,
        passive: ["-", "-"],
        drops: [],
        NPLevel: 1,
        noblePhantasm: {
            name: 'Electric Charge',
            power: 50,
            description: '',
            text: [''],
            image: "",
            canBeUsed: false
        }
    },

]

module.exports = mobsList;