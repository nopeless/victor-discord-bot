//spell types: damage,  heal, 
//  buffStrength, buffDefence, buffAgility, buffMagic, buffLuck   
//  debuffStrength, debuffDefence, debuffAgility, debuffMagic, debuffLuck  
//  cureBurn, cureCurse, cureStun, cureFreeze, cureNpSeal, cureConfusion, cureFear, curePoison
//  inflictBurn, inflictCurse, inflictStun, inflictFreeze, inflictNpSeal, inflictConfusion, inflictFear, inflictPoison
// max spell power 300!!! 
// max spell lvl: 30
// str: 💪 ; endurance: ❤ ; agility: 💨 ; magic: ✨ ; luck 🍀 ;
// burn: 🔥 ; curse: ☠ ; stun: ⚡ ; freeze: ❄ ; npSeal: ❌ ; confusion: 💫 ; fear: 😨 ; poison: 🤢 ;
// Deals damage based on master's magic stat.
const spells = [
    // general
    {
        id: 'g1',
        name: "Reinforcement",
        level: 1,
        exp: 0,
        qpCost: 20000,
        description: "Raises the strength of your servant attacks by enhancing their weapons.",
        power: 10,
        manaNeeded: 50,
        spellType: 'buffStrength',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'g2',
        name: "Mana Transfer",
        level: 1,
        exp: 0,
        qpCost: 20000,
        description: "Raises the magic stat of your servant.",
        power: 10,
        manaNeeded: 50,
        spellType: 'buffMagic',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'g3',
        name: "Thunderbolt",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Inflicts stun status to the enemy.",
        power: 0,
        manaNeeded: 220,
        spellType: 'inflictStun',
        spellDuration: 1,
        target: 'enemy'
    },

    {
        id: 'g4',
        name: "Fireball",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Inflicts burn status to the enemy.",
        power: 0,
        manaNeeded: 220,
        spellType: 'inflictBurn',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'g5',
        name: "Sea of Flames",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Inflicts burn status to the enemy.",
        power: 0,
        manaNeeded: 400,
        spellType: 'inflictBurn',
        spellDuration: 5,
        target: 'enemy'
    },

    {
        id: 'g6',
        name: "Frostbite",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Inflicts freeze status to the enemy.",
        power: 0,
        manaNeeded: 220,
        spellType: 'inflictFreeze',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'g7',
        name: "Blizzard",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Inflicts freeze status to the enemy.",
        power: 0,
        manaNeeded: 400,
        spellType: 'inflictFreeze',
        spellDuration: 5,
        target: 'enemy'
    },

    {
        id: 'g8',
        name: "Poisoned Blade",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Inflicts poison status.",
        power: 0,
        manaNeeded: 220,
        spellType: 'inflictPoison',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'g9',
        name: "Dispel Magic",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Removes Np Seal.",
        power: 0,
        manaNeeded: 250,
        spellType: 'cureNpSeal',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'g10',
        name: "Illusion",
        level: 1,
        exp: 0,
        qpCost: 15000,
        description: "Inflicts fear status to the enemy.",
        power: 0,
        manaNeeded: 220,
        spellType: 'inflictFear',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'g11',
        name: "Hypnosis",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Inflicts confusion.",
        power: 0,
        manaNeeded: 250,
        spellType: 'inflictConfusion',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'g12',
        name: "Edict of Binding",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Seals use of NP.",
        power: 0,
        manaNeeded: 300,
        spellType: 'inflictNpSeal',
        spellDuration: 1,
        target: 'enemy'
    },

    
    {
        id: 'g13',
        name: "Thought Acceleration",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Acelerates computing capabilities of the brain - raises servant magic stat. ",
        power: 50,
        manaNeeded: 100,
        spellType: 'buffMagic',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'g14',
        name: "Mana Shoot",
        level: 1,
        exp: 0,
        qpCost: 10000,
        description: "Deals damage",
        power: 10,
        manaNeeded: 50,
        spellType: 'damage',
        spellDuration: 0,
        target: 'enemy'
    },
   
    {
        id: 'g15',
        name: "Heal",
        level: 1,
        exp: 0,
        qpCost: 15000,
        description: "Restores servant's hp",
        power: 10,
        manaNeeded: 50,
        spellType: 'heal',
        spellDuration: 0,
        target: 'self'
    },
    

   
]

const runes = [
    {
        id: 'r1',
        name: "Fehu 🍀",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - increases your servant luck.",
        power: 50,
        manaNeeded: 100,
        spellType: 'buffLuck',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r2',
        name: "Uruz ❤",
        level: 1,
        exp: 0,
        qpCost: 60000,
        description: "Rune - heals your servant",
        power: 50,
        manaNeeded: 120,
        spellType: 'heal',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r3',
        name: "Gandr ☠",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - inflicts curse status to the enemy.",
        power: 0,
        manaNeeded: 400,
        spellType: 'inflictCurse',
        spellDuration: 5,
        target: 'enemy'
    },

    {
        id: 'r4',
        name: "Sowilo 🔥",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - inflicts burn status to the enemy.",
        power: 0,
        manaNeeded: 250,
        spellType: 'inflictBurn',
        spellDuration: 3,
        target: 'enemy'
    },

    {
        id: 'r5',
        name: "Ansuz ✨",
        level: 1,
        exp: 0,
        qpCost: 60000,
        description: "Rune - increases your servant magic stat.",
        power: 100,
        manaNeeded: 150,
        spellType: 'buffMagic',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r6',
        name: "Thurisaz ⚡",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Rune - inflicts stun status to the enemy.",
        power: 0,
        manaNeeded: 250,
        spellType: 'inflictStun',
        spellDuration: 2,
        target: 'enemy'
    },

    {
        id: 'r7',
        name: "Isa ❄",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - inflicts freeze status to the enemy.",
        power: 0,
        manaNeeded: 320,
        spellType: 'inflictFreeze',
        spellDuration: 4,
        target: 'enemy'
    },

    {
        id: 'r8',
        name: "Nauthiz 🔥=>❄",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - removes freeze status.",
        power: 0,
        manaNeeded: 300,
        spellType: 'cureFreeze',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r9',
        name: "Perthro ⬇🍀",
        level: 1,
        exp: 0,
        qpCost: 20000,
        description: "Rune - decrease enemy luck.",
        power: 10,
        manaNeeded: 100,
        spellType: 'debuffLuck',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'r10',
        name: "Algiz 🙂",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Rune - removes fear status.",
        power: 0,
        manaNeeded: 250,
        spellType: 'cureFear',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r11',
        name: "Tiwaz 💫=>✔",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - removes confusion status.",
        power: 0,
        manaNeeded: 200,
        spellType: 'cureConfusion',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r12',
        name: "Laguz 💧",
        level: 1,
        exp: 0,
        qpCost: 35000,
        description: "Rune - removes burn status.",
        power: 0,
        manaNeeded: 250,
        spellType: 'cureBurn',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r13',
        name: "Raidho 💨",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - increases your servant agility stat.",
        power: 50,
        manaNeeded: 100,
        spellType: 'buffAgility',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r14',
        name: "Hagalaz 😨",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Rune - inflicts fear.",
        power: 0,
        manaNeeded: 300,
        spellType: 'inflictFear',
        spellDuration: 3,
        target: 'enemy'
    },

    {
        id: 'r15',
        name: "Inguz ❌",
        level: 1,
        exp: 0,
        qpCost: 35000,
        description: "Rune - inflicts NP seal.",
        power: 0,
        manaNeeded: 400,
        spellType: 'inflictNpSeal',
        spellDuration: 1,
        target: 'enemy'
    },

    {
        id: 'r16',
        name: "Ihwaz ❌=>✔",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Rune - removes NP seal.",
        power: 0,
        manaNeeded: 300,
        spellType: 'cureNpSeal',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'r17',
        name: "Kenaz  ⬇🛡",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Rune - decrease enemy defence.",
        power: 10,
        manaNeeded: 50,
        spellType: 'debuffDefence',
        spellDuration: 0,
        target: 'enemy'
    },

]

const sacraments = [
    // holy church
    {
        id: 'h1',
        name: "Healing light",
        level: 1,
        exp: 0,
        qpCost: 70000,
        description: "Greatly restores servant's hp",
        power: 100,
        manaNeeded: 150,
        spellType: 'heal',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h2',
        name: "Purification Incantation",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Curse curing incantation taught by the Holy Church",
        power: 0,
        manaNeeded: 200,
        spellType: 'cureCurse',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h3',
        name: "God's Blessing Incantation",
        level: 1,
        exp: 0,
        qpCost: 20000,
        description: "Incantation taught by the Holy Church that increases luck.",
        power: 50,
        manaNeeded: 100,
        spellType: 'buffLuck',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h4',
        name: "Black Key Throw",
        level: 1,
        exp: 0,
        qpCost: 70000,
        description: "Master throws Black Key at the enemy dealing damage",
        power: 50,
        manaNeeded: 120,
        spellType: 'damage',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'h5',
        name: "Protection",
        level: 1,
        exp: 0,
        qpCost: 45000,
        description: "Envelopes your servant body in bright light which acts as armor making it more resistant to enemy attacks. Raises your servant's defence.",
        power: 50,
        manaNeeded: 50,
        spellType: 'buffDefence',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h6',
        name: "Guiding Light",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Light which shows a rightful path. Cures confusion.",
        power: 0,
        manaNeeded: 250,
        spellType: 'cureConfusion',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h7',
        name: "Poison Removal",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Cures poison.",
        power: 0,
        manaNeeded: 250,
        spellType: 'curePoison',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h8',
        name: "Exorcism",
        level: 1,
        exp: 0,
        qpCost: 20000,
        description: "Decrease magic stat.",
        power: 10,
        manaNeeded: 50,
        spellType: 'debuffMagic',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'h9',
        name: "Courage of Faith",
        level: 1,
        exp: 0,
        qpCost: 35000,
        description: "Removes fear status.",
        power: 0,
        manaNeeded: 200,
        spellType: 'cureFear',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'h10',
        name: "Remove Restraints",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Removes stun.",
        power: 0,
        manaNeeded: 200,
        spellType: 'cureStun',
        spellDuration: 0,
        target: 'self'
    },
]

const darkSpells = [
    // matou magic

    {
        id: 'd1',
        name: "Toxic Mist",
        level: 1,
        exp: 0,
        qpCost: 70000,
        description: "Spreads poison in the air, inflicts poison status.",
        power: 0,
        manaNeeded: 380,
        spellType: 'inflictPoison',
        spellDuration: 5,
        target: 'enemy'
    },

    {
        id: 'd2',
        name: "Crest Worms",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Worms that are capable of raising servant's magic stat.",
        power: 50,
        manaNeeded: 120,
        spellType: 'buffMagic',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 'd3',
        name: "Shadow Control",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Inflicts fear status to the enemy.",
        power: 0,
        manaNeeded: 250,
        spellType: 'inflictFear',
        spellDuration: 3,
        target: 'enemy'
    },

    {
        id: 'd4',
        name: "Cursed Worm",
        level: 1,
        exp: 0,
        qpCost: 30000,
        description: "Inflicts curse status to the enemy.",
        power: 0,
        manaNeeded: 300,
        spellType: 'inflictCurse',
        spellDuration: 5,
        target: 'enemy'
    },

    {
        id: 'd5',
        name: "Worms Possesion",
        level: 1,
        exp: 0,
        qpCost: 50000,
        description: "Worm which is used to control enemy body, inflicts confusion on the enemy.",
        power: 0,
        manaNeeded: 300,
        spellType: 'inflictConfusion',
        spellDuration: 3,
        target: 'enemy'
    },

    {
        id: 'd6',
        name: "Paralyzing Stench",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Inflicts stun status.",
        power: 0,
        manaNeeded: 200,
        spellType: 'inflictStun',
        spellDuration: 1,
        target: 'enemy'
    },

    {
        id: 'd7',
        name: "Cursed Mud",
        level: 1,
        exp: 0,
        qpCost: 25000,
        description: "Decreases enemy agility.",
        power: 10,
        manaNeeded: 50,
        spellType: 'debuffAgility',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'd8',
        name: "Weakening",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Decreases enemy strength.",
        power: 10,
        manaNeeded: 80,
        spellType: 'debuffStrength',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'd9',
        name: "Luck Drain",
        level: 1,
        exp: 0,
        qpCost: 15000,
        description: "Decreases enemy luck.",
        power: 10,
        manaNeeded: 50,
        spellType: 'debuffLuck',
        spellDuration: 0,
        target: 'enemy'
    },

    {
        id: 'd10',
        name: "Poison Absorption",
        level: 1,
        exp: 0,
        qpCost: 40000,
        description: "Absorbs and nullifies effect of poison.",
        power: 0,
        manaNeeded: 200,
        spellType: 'curePoison',
        spellDuration: 0,
        target: 'self'
    },
]

const specialSpells = [
    //special
    {
        id: 's1',
        name: "Projection",
        level: 1,
        exp: 0,
        qpCost: 10000,
        description: "Raises the strength of your servant's attack.",
        power: 100,
        manaNeeded: 120,
        spellType: 'buffStrength',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 's2',
        name: "Time Alter",
        level: 1,
        exp: 0,
        qpCost: 10000,
        description: "Creates Bounded Field capable of manipulating the time limited to your servant's body raising their agility.",
        power: 100,
        manaNeeded: 120,
        spellType: 'buffAgility',
        spellDuration: 0,
        target: 'self'
    },

    {
        id: 's3',
        name: "Volumen Hydrargyrum",
        level: 1,
        exp: 0,
        qpCost: 10000,
        description: "Raises your servant defence.",
        power: 100,
        manaNeeded: 120,
        spellType: 'buffDefence',
        spellDuration: 0,
        target: 'self'
    },

    // add reality marble different scenery and effect based on alignment
]

module.exports = {
    spells: spells,
    runes: runes,
    darkSpells: darkSpells,
    specialSpells: specialSpells,
    sacraments: sacraments
}