// item classes: consumeable/ catalyst/ material?
// shop price = value * 10
const itemsList = [// DO NOT CHANGE ORDER!!!!! unless u want to make wood out of gold for example
    {
        id: 0,
        quantity: 1,
        name: 'spider web',
        description: " It's sticky but it seems to be sturdy.",
        icon: '🕸',
        value: 1,
        consumeable: false 

    },

    {
        id: 1,
        quantity: 1,
        name: 'rose',
        description: "Rose flower, it has a deep red color.",
        icon: '🌹',
        value: 60,
        consumeable: false

    },

    {
        id: 2,
        quantity: 1,
        name: 'hibiscus',
        description: "Hibiscus flower, it gives a pleasant smell.",
        icon: '🌺',
        value: 80,
        consumeable: false

    },

    {
        id: 3,
        quantity: 1,
        name: 'herb',
        description: "It probably have some kind of medical use.",
        icon: '🌿',
        value: 80,
        consumeable: false

    },

    {
        id: 4,
        quantity: 1,
        name: 'four leaf clover',
        description: "They say it can bring good luck to the person holding it.",
        icon: '🍀',
        value: 20,
        consumeable: false

    },

    {
        id: 5,
        quantity: 1,
        name: 'grapes',
        description: "Freshly harvested grapes. They have sweet taste, ideal for wine production.",
        icon: '🍇',
        value: 60,
        consumeable: false

    },

    {
        id: 6,
        quantity: 1,
        name: 'perfect apple',
        description: "Big, red, juicy and sweet. Truly a perfect apple.",
        icon: '<:20180725122953MDBag_Perfect_Appl:643547799740481556>',
        value: 500,
        consumeable: false

    },


    {
        id: 7,
        quantity: 1,
        name: 'apple',
        description: "Normal red apple.",
        icon: '🍎',
        value: 20,
        consumeable: false

    },

    {
        id: 8,
        quantity: 1,
        name: 'mushroom',
        description: "Better not to eat it...",
        icon: '🍄',
        value: 1,
        consumeable: false

    },

    {
        id: 9,
        quantity: 1,
        name: 'bread',
        description: "Plain bread.",
        icon: '🍞',
        value: 30,
        consumeable: false

    },

    {
        id: 10,
        quantity: 1,
        name: 'honey pot',
        description: "Pot filled to the brim with honey.",
        icon: '🍯',
        value: 180,
        consumeable: false

    },

    {
        id: 11,
        quantity: 1,
        name: 'milk',
        description: "They say that drinking Milk makes you taller, it's a lie tho.",
        icon: '🥛',
        value: 40,
        consumeable: false

    },


    {
        id: 12,
        quantity: 1,
        name: 'coffee',
        description: "Drink it when you are feeling sleepy or need more energy.",
        icon: '☕',
        value: 100,
        consumeable: false

    },

    {
        id: 13,
        quantity: 1,
        name: 'teacup',
        description: "Aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis.",
        icon: '🍵',
        value: 50,
        consumeable: false

    },

    {
        id: 14,
        quantity: 1,
        name: 'wine',
        description: "Those who drink MODERATE AMOUNTS of red wine, seem to have a lower risk of heart disease.",
        icon: '🍷',
        value: 300,
        consumeable: false

    },

    {
        id: 15,
        quantity: 1,
        name: 'beverage box',
        description: "Contains some kind of juice.",
        icon: '<:juice:676136048018980894>',
        value: 100,
        consumeable: false

    },

    {
        id: 16,
        quantity: 1,
        name: 'knife',
        description: "Can be used to cut some things.",
        icon: '🔪',
        value: 300,
        consumeable: false

    },

    {
        id: 17,
        quantity: 1,
        name: 'brick',
        description: "Regular clay brick.",
        icon: '🧱',
        value: 30,
        consumeable: false

    },

    {
        id: 18,
        quantity: 1,
        name: 'hourglass',
        description: "Device used to measure the passage of time.",
        icon: '⏳',
        value: 300,
        consumeable: false

    },

    {
        id: 19,
        quantity: 1,
        name: 'thermometer',
        description: "Device used to measure the temperature.",
        icon: '🌡',
        value: 500,
        consumeable: false

    },

    {
        id: 20,
        quantity: 1,
        name: 'tnt',
        description: "Explosives, better be careful with that.",
        icon: '🧨',
        value: 1000,
        consumeable: false

    },

    {
        id: 21,
        quantity: 1,
        name: 'crystal ball',
        description: "Some say that proficient magi can use it to see distant places or even the future.",
        icon: '🔮',
        value: 5000,
        consumeable: false

    },

    {
        id: 22,
        quantity: 1,
        name: 'thread',
        description: "Very thin thread, it can easily break.",
        icon: '🧵',
        value: 50,
        consumeable: false

    },

    {
        id: 23,
        quantity: 1,
        name: 'glasses',
        description: "If you have eye problems they may help you to see more clearly.",
        icon: '👓',
        value: 1000,
        consumeable: false

    },

    {
        id: 24,
        quantity: 1,
        name: 'lab coat',
        description: "In some laboratories it's necessary to wear one.",
        icon: '🥼',
        value: 500,
        consumeable: false
    },

    {
        id: 25,
        quantity: 1,
        name: 'battery',
        description: "It's capable of storing electrical energy.",
        icon: '🔋',
        value: 500,
        consumeable: false
    },

    {
        id: 26,
        quantity: 1,
        name: 'magnifying glass',
        description: "If you'll look through it, the objects will appear to be larger than they really are.",
        icon: '🔍',
        value: 300,
        consumeable: false
    },

    {
        id: 27,
        quantity: 1,
        name: 'light bulb',
        description: "It'll start to shine if electricity passes through it.",
        icon: '💡',
        value: 200,
        consumeable: false
    },

    {
        id: 28,
        quantity: 1,
        name: 'flashlight',
        description: "Can be used as a light source in dark places.",
        icon: '🔦',
        value: 840,
        consumeable: false
    },

    {
        id: 29,
        quantity: 1,
        name: 'paper',
        description: "Can be written on.",
        icon: '📃',
        value: 20,
        consumeable: false
    },

    {
        id: 30,
        quantity: 1,
        name: 'notebook',
        description: "You can write your notes here.",
        icon: '📖',
        value: 200,
        consumeable: false
    },

    {
        id: 31,
        quantity: 1,
        name: 'scissors',
        description: "Used for cutting paper etc. .",
        icon: '✂',
        value: 70,
        consumeable: false
    },

    {
        id: 32,
        quantity: 1,
        name: 'old key',
        description: "It must open something...",
        icon: '🗝',
        value: 2000,
        consumeable: false
    },

    {
        id: 33,
        quantity: 1,
        name: 'hammer',
        description: "Very easy to use tool.",
        icon: '🔨',
        value: 260,
        consumeable: false
    },

    {
        id: 34,
        quantity: 1,
        name: 'shield',
        description: "It may protect you from harm.",
        icon: '🛡',
        value: 3000,
        consumeable: false
    },

    {
        id: 35,
        quantity: 1,
        name: 'wrench',
        description: "Tool used to provide grip and mechanical advantage in applying torque to turn objects.",
        icon: '🔧',
        value: 300,
        consumeable: false
    },

    {
        id: 36,
        quantity: 1,
        name: 'gear',
        description: "Part of some machine.",
        icon: '⚙',
        value: 200,
        consumeable: false
    },

    {
        id: 37,
        quantity: 1,
        name: 'link',
        description: "Two metal rings linked together.",
        icon: '🔗',
        value: 100,
        consumeable: false
    },

    {
        id: 38,
        quantity: 1,
        name: 'chain',
        description: "Solid metal chain.",
        icon: '⛓',
        value: 400,
        consumeable: false
    },

    {
        id: 39,
        quantity: 1,
        name: 'magnet',
        description: "Object that produces a magnetic field.",
        icon: '🧲',
        value: 500,
        consumeable: false
    },

    {
        id: 40,
        quantity: 1,
        name: 'test tube',
        description: "Used in laboratories to hold testing samples.",
        icon: '🧪',
        value: 100,
        consumeable: false
    },

    {
        id: 41,
        quantity: 1,
        name: 'telescope',
        description: "Can be used to observe the night sky.",
        icon: '🔭',
        value: 3000,
        consumeable: false
    },

    {
        id: 42,
        quantity: 1,
        name: 'microscope',
        description: "Instrument used to see objects that are too small to be seen by the naked eye.",
        icon: '🔬',
        value: 3000,
        consumeable: false
    },

    {
        id: 43,
        quantity: 1,
        name: 'bacteria',
        description: "Some kind of microorganism.",
        icon: '🦠',
        value: 10,
        consumeable: false
    },

    {
        id: 44,
        quantity: 1,
        name: 'medicine',
        description: "Take one if you are feeling sick.",
        icon: '💊',
        value: 1000,
        consumeable: false
    },

    {
        id: 45,
        quantity: 1,
        name: 'coconut',
        description: "The oil and milk derived from it are commonly used in cooking.",
        icon: '🥥',
        value: 100,
        consumeable: false
    },

    {
        id: 46,
        quantity: 1,
        name: 'cigarette',
        description: "Those are bad for your health, don't smoke them.",
        icon: '🚬',
        value: 200,
        consumeable: false
    },

    {
        id: 47,
        quantity: 1,
        name: 'wood',
        description: "It was a part of tree before.",
        icon: '<:icons8wood:643527652203823116>',
        value: 300,
        consumeable: false
    },

    {
        id: 48,
        quantity: 1,
        name: 'chair',
        description: "Wooden chair, you may sit on it if you want.",
        icon: '<:wooden_chair:676136047545024533>',
        value: 700,
        consumeable: false
    },

    {
        id: 49,
        quantity: 1,
        name: 'candy',
        description: "Children love those.",
        icon: '🍬',
        value: 50,
        consumeable: false
    },

    {
        id: 50,
        quantity: 1,
        name: 'health potion',
        description: "Restores Hp a little bit.",
        icon: '<:orangepotion:643529278088019978>',
        value: 200,
        consumeable: true
    },

    {
        id: 51,
        quantity: 1,
        name: 'trash can',
        description: "Throw your trashes here.",
        icon: '<:icons8trashcan:643527652384178191>',
        value: 250,
        consumeable: false
    },

    {
        id: 52,
        quantity: 1,
        name: 'sugar',
        description: "Cubes made of sugar.",
        icon: '<:icons8sugarcubes:643527652359012413>',
        value: 20,
        consumeable: false
    },

    {
        id: 53,
        quantity: 1,
        name: 'sand',
        description: "Granular material composed of finely divided rock and mineral particles.",
        icon: '<:icons8sandbucket:643527652237639701>',
        value: 30,
        consumeable: false
    },

    {
        id: 54,
        quantity: 1,
        name: 'petrol',
        description: "Naturally occurring, yellowish-black liquid found in geological formations beneath the Earth's surface.",
        icon: '<:icons8petrol:643527652107485195>',
        value: 1000,
        consumeable: false
    },

    {
        id: 55,
        quantity: 1,
        name: 'mercury',
        description: "Mercury is the only metallic element that is liquid at standard conditions for temperature and pressure.",
        icon: '<:icons8mercury:643567286682124299>',
        value: 2500,
        consumeable: false
    },

    {
        id: 56,
        quantity: 1,
        name: 'match',
        description: "Single use, can ignite a fire.",
        icon: '<:icons8matches:643527652119937065>',
        value: 30,
        consumeable: false
    },

    {
        id: 57,
        quantity: 1,
        name: 'iron ore',
        description: "Can be turned into iron after melting it down.",
        icon: '<:icons8ironore:643527652413800459>',
        value: 300,
        consumeable: false
    },

    {
        id: 58,
        quantity: 1,
        name: 'hot iron',
        description: "Hit it hard in order to give it form.",
        icon: '<:icons8ironbars:643527652463869962>',
        value: 10,
        consumeable: false
    },

    {
        id: 59,
        quantity: 1,
        name: 'iron',
        description: "The metal of choice for tools and weapons.",
        icon: '<:icons8ironbars:643527652530978833>',
        value: 500,
        consumeable: false
    },

    {
        id: 60,
        quantity: 1,
        name: 'lighter',
        description: "Can be used multiple times, can ignite a fire.",
        icon: '<:icons8handlighterwithoutflame:643527652656939056>',
        value: 600,
        consumeable: false
    },

    {
        id: 61,
        quantity: 1,
        name: 'hook',
        description: "Iron hook, can be attached to something.",
        icon: '<:icons8fishinghook:643527652723916800>',
        value: 90,
        consumeable: false
    },

    {
        id: 62,
        quantity: 1,
        name: 'fishing rod',
        description: "Try catching some fishes with it.",
        icon: '🎣',
        value: 2000,
        consumeable: false
    },

    {
        id: 63,
        quantity: 1,
        name: 'energy drink',
        description: "Sugar + caffeine = instant power up .",
        icon: '<:icons8energydrink:643527652434640936>',
        value: 150,
        consumeable: false
    },

    {
        id: 64,
        quantity: 1,
        name: 'coffe beans',
        description: "You can brew a delicious coffee out of these.",
        icon: '<:icons8coffeebeans:643527651973136426>',
        value: 30,
        consumeable: false
    },

    {
        id: 65,
        quantity: 1,
        name: 'burnt match',
        description: "This match seems to be useless now.",
        icon: '<:icons8burntmatch:643527652363468839>',
        value: 1,
        consumeable: false
    },

    {
        id: 66,
        quantity: 1,
        name: 'gun powder',
        description: "Keep away from fire!",
        icon: '<:gunpowder:643527652363468833>',
        value: 1000,
        consumeable: false
    },

    {
        id: 67,
        quantity: 1,
        name: 'dust',
        description: "Just a pile of dust.",
        icon: '<:dust:643527652350623764>',
        value: 1,
        consumeable: false
    },

    {
        id: 68,
        quantity: 1,
        name: 'rope',
        description: "Long and sturdy.",
        icon: '<:Dream_Escape_Rope_Sprite:643527652531240982>',
        value: 400,
        consumeable: false
    },

    {
        id: 69,
        quantity: 1,
        name: 'donut',
        description: "Donut with some sprinkles on top.",
        icon: '<:Donut:643527652266868767>',
        value: 80,
        consumeable: false
    },

    {
        id: 70,
        quantity: 1,
        name: 'mana potion',
        description: "Restores mana.",
        icon: '<:bluepotion:643529277899538432>',
        value: 300,
        consumeable: true
    },

    {
        id: 71,
        quantity: 1,
        name: 'fossil',
        description: "Fossil of some ancient animal..",
        icon: '<:Fossil:643528148360888330>',
        value: 3000,
        consumeable: false
    },

    {
        id: 72,
        quantity: 1,
        name: 'gold',
        description: "It's shining...",
        icon: '<:9777_gold:643527652464001024>',
        value: 8000,
        consumeable: false
    },

    {
        id: 73,
        quantity: 1,
        name: 'coal',
        description: "Combustible black rock.",
        icon: '<:9359_MCcoal:643529413979406336>',
        value: 20,
        consumeable: false
    },

    {
        id: 74,
        quantity: 1,
        name: 'rock',
        description: "Just a rock.",
        icon: '<:7937_JustARock:643527652732567563>',
        value: 1,
        consumeable: false
    },

    {
        id: 75,
        quantity: 1,
        name: 'teabag',
        description: "Put it into water.",
        icon: '<:6391_teabag:643527652015210539>',
        value: 20,
        consumeable: false
    },

    {
        id: 76,
        quantity: 1,
        name: 'flour',
        description: "Powder made by grinding raw grains.",
        icon: '<:6289_flour:643530413754679307>',
        value: 20,
        consumeable: false
    },

    {
        id: 77,
        quantity: 1,
        name: 'water bottle',
        description: "Thirsty? Care to have some H2O then?",
        icon: '<:6191_water_water:643527652203954186>',
        value: 10,
        consumeable: false
    },

    {
        id: 78,
        quantity: 1,
        name: 'instant ramen',
        description: "Just add some water and it's ready.",
        icon: '<:6164_Instant_Ramen:643527652803739658>',
        value: 50,
        consumeable: false
    },

    {
        id: 79,
        quantity: 1,
        name: 'ramen',
        description: "Japanese dish.",
        icon: '🍜',
        value: 150,
        consumeable: false
    },

    {
        id: 80,
        quantity: 1,
        name: 'sugarcane',
        description: "You can acquire sugar from it.",
        icon: '<:5903_MCsugarcane:643529471344771102>',
        value: 10,
        consumeable: false
    },

    {
        id: 81,
        quantity: 1,
        name: 'emerald',
        description: "Gemstone and a variety of the mineral beryl colored green by trace amounts of chromium and sometimes vanadium.",
        icon: '<:4933_MCemerald:643529381553111070>',
        value: 5000,
        consumeable: false
    },

    {
        id: 82,
        quantity: 1,
        name: 'silver',
        description: "Soft, white, lustrous transition metal.",
        icon: '<:3679_silver:643527652250222604>',
        value: 2000,
        consumeable: false
    },

    {
        id: 83,
        quantity: 1,
        name: 'diamond',
        description: "You are rich now!",
        icon: '<:3182_diamond:643527652455743490>',
        value: 10000,
        consumeable: false
    },

    {
        id: 84,
        quantity: 1,
        name: 'noodles',
        description: "Type of food made from unleavened dough.",
        icon: '<:2248_noodles:643527653248204803>',
        value: 100,
        consumeable: false
    },

    {
        id: 85,
        quantity: 1,
        name: 'wheat',
        description: "Can be turned into the flour.",
        icon: '<:1886_MCwheat:643529344643235851>',
        value: 10,
        consumeable: false
    },

    {
        id: 86,
        quantity: 1,
        name: 'gun',
        description: "Deadly long-range weapon.",
        icon: '<:1426_pistol:643527652317331472>',
        value: 7000,
        consumeable: false
    },

    {
        id: 87,
        quantity: 1,
        name: 'copper',
        description: "Soft, malleable, and ductile metal with very high thermal and electrical conductivity.",
        icon: '<:1256_copper:643527652166205441>',
        value: 500,
        consumeable: false
    },

    {
        id: 88,
        quantity: 1,
        name: 'bow',
        description: "Weapon that is used to propel an arrow, it's made of a strip of flexible wood.",
        icon: '<:icons8archersbow:644246512926195734>',
        value: 3000,
        consumeable: false
    },

    {
        id: 89,
        quantity: 1,
        name: 'wheel',
        description: "It's round.",
        icon: '<:icons8wheel:644265939441025024>',
        value: 300,
        consumeable: false
    },

    {
        id: 90,
        quantity: 1,
        name: 'wheelchair',
        description: "A chair with wheels.",
        icon: '<:manualwheelchair:676136047972843551>',
        value: 3000,
        consumeable: false
    },

    {
        id: 91,
        quantity: 1,
        name: 'sword',
        description: "Bladed melee weapon intended for slashing or thrusting that is longer than a knife or dagger, consisting of a long blade attached to a hilt.",
        icon: '<:icons8sword:644265939009011723>',
        value: 5000,
        consumeable: false
    },

    {
        id: 92,
        quantity: 1,
        name: 'spear',
        description: "Pole weapon consisting of a shaft with a pointed head.",
        icon: '<:icons8spear:644265939310739476>',
        value: 3000,
        consumeable: false
    },

    {
        id: 93,
        quantity: 1,
        name: 'magic wand',
        description: "Only mages can make use of it.",
        icon: '<:icons8magicwand:644277713216995348>',
        value: 3000,
        consumeable: false
    },

    {
        id: 94,
        quantity: 1,
        name: 'broken sword',
        description: "Can't be used in battle anymore. At least no one who is sane would do that...",
        icon: '<:5958_BrokenHeroSword:644265939126321153>',
        value: 1000,
        consumeable: false
    },

    {
        id: 95,
        quantity: 1,
        name: 'cheese',
        description: "Dairy product derived from milk that is produced in a wide range of flavors.",
        icon: '🧀',
        value: 80,
        consumeable: false
    },

    {
        id: 96,
        quantity: 1,
        name: 'pizza',
        description: "Savory dish of Italian origin.",
        icon: '🍕',
        value: 300,
        consumeable: false
    },

    {
        id: 97,
        quantity: 1,
        name: 'poison',
        description: "Drinking it may result in death.",
        icon: '<:icons8poisonbottle:646074309575573525>',
        value: 2000,
        consumeable: false
    },

    {
        id: 98,
        quantity: 1,
        name: 'glass',
        description: "Inorganic solid material that is usually transparent or translucent as well as hard, brittle, and impervious to the natural elements.",
        icon: '<:glass:646074292068417569>',
        value: 100,
        consumeable: false
    },

    {
        id: 99,
        quantity: 1,
        name: 'mud',
        description: "Mud is soil, loam, silt or clay mixed with water. It usually forms after rainfall or near water sources.",
        icon: '<:mud:702252261539315722>',
        value: 1,
        consumeable: false
    }

]

module.exports = itemsList;