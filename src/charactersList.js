const characters = [

    {//0
        id: 0,
        name: ["heroic spirit emiya", "shirou emiya","emiya shirou" ,"shirou", "emiya", "hero of justice", "nameless", "red archer", "faker"],
        class: "Archer",
        pictures: ["https://i.imgur.com/5K8H79u.png", "https://i.imgur.com/q4dxJAD.png", "https://i.imgur.com/12HtOUV.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Archer  made a contract with the World (Alaya) and became the Heroic Spirit. He acts as a Counter Guardian for the world as payment for the contract. He makes use of projection magecraft to counterfeit many famous magic swords.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 30,
            magic: 40,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Mind's Eye", "Increases own evasion by 30%"],
        quotes: ["Master. I will not let you down."],
        summonableWith: '<:icons8archersbow:644246512926195734> ⚙',
        origin: 'Fate/ Stay Night',
        code: '839266',
        NPLevel: 1,
        noblePhantasm: {
            name: "Unlimited Blade Works",
            power: 50,
            description: "Creates a Reality Marble. (Slightly raises agility, raises magic stat, apply normal attack damage dealt based on magic.)",// agility & magic =+  (np.power + magic stat)/2 dmg based on magic
            text: [" I am the bone of my sword",
                    "Steel is my body and fire is my blood",
                    "I have created over a thousand blades",
                    "Unknown to Death, nor known to Life",
                    "Have withstood pain to create many weapons",
                    "Yet, those hands will never hold anything ",
                    "So as I pray,  "
                ],
            image: "https://i.imgur.com/Xl16gWd.gif",
            canBeUsed: false
        }
    },

    {//1
        id: 1,
        name: ["heracles", "hercules", "berser-car"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/CaGWHnj.jpg", "https://i.imgur.com/lllK4TQ.png", "https://i.imgur.com/BgvrjgP.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "insane", "divine"],
        about: "He once was the greatest of the Greek heroes, a paragon of masculinity, famous for his strength and for his numerous far-ranging adventures.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 60,
            endurance: 50,
            agility: 50,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Battle Continuation", "Starts the battle with active guts status."],
        quotes: ["!!!"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153>',
        origin: 'Fate/ Stay Night',
        code: '388222',
        NPLevel: 1,
        noblePhantasm: {
            name: "Twelve labors",
            power: 50,
            description: "Revives berserker upon his death once and slightly raises own endurance. (Ancient gods are not so generous nowadays, they don't give out free extra lives that easily as they used to...)", //revives with Hp = np.power + magic stat
            text: [""],
            image: "https://i.imgur.com/6XwsDML.gif",
            canBeUsed: false
        }
    },

    {//2
        id: 2,
        name: ["gilles de rais", "bluebeard", "gilles", "demon marshal", "the greatest cool!"], // name and aliases
        class: "Caster",
        pictures: ["https://i.imgur.com/sDrKCLc.jpg", "https://i.imgur.com/dT6MjBH.png", "https://i.imgur.com/nSH3Gu6.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: "Caster was a French nobleman, ranked as a baron, and member of the military during the 15th century. He loves to offer his victims with brief moments of respite, or even the hope of release or escape, before causing them death through whatever horrific and gruesome means possible. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 100,
        maxHp: 100, // endurance * 10
        stats: {
            strength: 20, //increase base dmg
            endurance: 10, // increase health / decrease dmg ()
            agility: 20, // raises chances to land a hit / evade
            magic: 30, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Mental Pollution", "Immunity to confusion."],
        quotes: ["COOOOOL!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 📖',
        origin: 'Fate/ Zero',
        code: '162964',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Prelati's Spellbook",
            power: 50, // how strong / efficient NP is 50 - 300
            description: "Summons familiars that attack the enemy (deals damage)", 
            text: [" Let me show you the greatest Coooooool! Fufufuhahahahaha!! Ahahahahahahahahahaha!! "],
            image: "https://imgur.com/e5bthSs.jpg",
            canBeUsed: false
        }
    },

    {//3
        id: 3,
        name: ["medusa"], // name and aliases
        class: "Rider",
        pictures: ["https://i.imgur.com/9yZYTEU.jpg", "https://i.imgur.com/yo6KDkq.png", "https://i.imgur.com/t8udGSs.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "divine"],
        about: "The youngest of the Gorgon Sisters that appear in Greek Mythology. Once described as a snake monster that turns everything she sees into stone. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 200,
        maxHp: 200, // endurance * 10
        stats: {
            strength: 40, //increase base dmg
            endurance: 20, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 40, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Mystic Eyes of Petrification", "Inflict 3 turn stun to the enemy and reduce their agility by 25% at the start of battle"],
        quotes: ["I'll fight with you for long as you let me"],
        summonableWith: '<:icons8wheel:644265939441025024> ⛓ <:7937_JustARock:643527652732567563>',
        origin: 'Fate/ Stay Night',
        code: '566558',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Bellerophon",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Enemy gets stunned for 2 turns, deals damage, sure hit.", //dmg = NPpower + magic
            text: [""],
            image: "https://i.imgur.com/iim4S2q.gif",
            canBeUsed: false
        }
    },

    {//4
        id: 4,
        name: ["sasaki kojiro", "sasaki kojirou",  "kojirou sasaki", "nameless samurai", "saviour of france", "kojirou", "sasaki", "sasaki kojirō"], // name and aliases
        class: "Assassin",
        pictures: ["https://i.imgur.com/RfpbPsz.jpg", "https://i.imgur.com/IuxtjK5.png", "https://i.imgur.com/FovJr6N.png"],
        alignment: ["Neutral","Evil"],
        traits: ["male"],
        about: "Assassin was a prominent Japanese swordsman widely considered a master of his craft, born in Fukui Prefecture. He lived during the Azuchi–Momoyama and early Edo periods and is most remembered for his death while battling Miyamoto Musashi in 1612. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 100,
        maxHp: 100, // endurance * 10
        stats: {
            strength: 30, //increase base dmg
            endurance: 10, // increase health / decrease dmg ()
            agility: 60, // raises chances to land a hit / evade
            magic: 10, // raises NP power
            luck: 50 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Knowledge of the Sowa", "Prevents the reduction of agility stat."],
        quotes: ["Use my blade however you see fit!"],
        summonableWith: '<:icons8sword:644265939009011723> 🍜',
        origin: 'Fate/ Stay Night',
        code: '963801',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Swallow Reversal",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "A move that simultaneously cuts apart an enemy with three circles. (deals damage, high crit chance)",
            text: ["I'll show you my ultimate sword technique!"],
            image: "https://i.imgur.com/Y0fYwR4.gif",
            canBeUsed: false
        }
    },

    {//5
        id: 5,
        name: ["robin hood", "hunter of the woods", "green archer", "robin of locksley", "king of thieves", "prince of thieves"], // name and aliases
        class: "Archer",
        pictures: ["https://i.imgur.com/iioJpAP.jpg", "https://i.imgur.com/qkRlMLR.png", "https://i.imgur.com/U1fZGf6.png"],
        alignment: ["Neutral","Good"],
        traits: ["male"],
        about: "Archer is a legendary heroic outlaw originally depicted in English folklore. According to legend, he was a highly skilled archer and swordsman. Traditionally depicted dressed in Lincoln green, he is said to have robbed from the rich and given to the poor. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 30, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 40, // raises chances to land a hit / evade
            magic: 40, // raises NP power
            luck: 40 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Sabotage", "Reduces enemy Strength and Magic stats by 50% at the beginning of battle."],
        quotes: ["Mapping one's way to victory is much like flirting with the village maid."],
        summonableWith: '<:icons8archersbow:644246512926195734> <:icons8poisonbottle:646074309575573525> 🚬',
        origin: 'Fate/ Extra',
        code: '743990',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Yew Bow",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Deals damage. (heavy dammage on poisoned enemy)",
            text: "",
            image: "https://i.imgur.com/pGD7jcm.gif",
            canBeUsed: false
        }
    },

    {//6
        id: 6,
        name: ["hassan of the cursed arm", "true assassin", "cursed arm hassan", "hassan"], // name and aliases
        class: "Assassin",
        pictures: ["https://i.imgur.com/pp2YL5h.jpg", "https://i.imgur.com/dtdNY4d.png", "https://i.imgur.com/HkO9ZvU.png"],
        alignment: ["Lawful","Evil"],
        traits: ["male"],
        about: "The assassin of the white skull. The leader of the assassination cult that had its origins in the Middle East.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 40, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 30, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Protection from Wind", "Applies evade(2 times) at the start of battle."],
        quotes: ["Master and Servant is a relationship built on trust, Leave the fighting to me."],
        summonableWith: '🔪',
        origin: 'Fate/ Stay Night',
        code: '190962',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Zabaniya",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Deals damage. (chance to instant-kill 5%)",
            text: "My work sculpted with mysterious souls. Overflow with anguish――",
            image: "https://i.imgur.com/3Va4MJS.gif",
            canBeUsed: false
        }
    },

    {//7
        id: 7,
        name: ["cu chulainn", "cú chulainn", "child of light", "hound of ulster", "coo hullan", "cu", "setanta", "cuchulainn"], // name and aliases
        class: "Lancer",
        pictures: ["https://i.imgur.com/XcLpDY4.png", "https://i.imgur.com/T7bbjLx.png", "https://i.imgur.com/OhjYp5s.png"],
        alignment: ["Lawful","Neutral"],
        traits: ["male", "divine"],
        about: "Lancer is an Irish mythological hero who appears in the stories of the Ulster Cycle, as well as in Scottish and Manx folklore. A spearman who does not like ornaments and prefers to fight as his wild nature dictates.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 40, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 35, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Ath nGabla", "Prevents enemy from fleeing."],
        quotes: ["Let's take this easy Master!"],
        summonableWith: '<:icons8spear:644265939310739476> 🎣',
        origin: 'Fate/ Stay Night',
        code: '135885',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Gáe Bolg",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "A cursed spear with an ominous design It is descended from Gungnir, which belongs to Odin in Norse Mythology (Deals damage, sure hit, chance to instant-kill (3%))",// always hits the target
            text: "",
            image: "https://i.imgur.com/Imsm6Qu.gif",
            canBeUsed: false
        }
    },

    {//8
        id: 8,
        name: ["gawain", "knight of the sun", "white knight of the round table"], // name and aliases
        class: "Saber",
        pictures: ["https://i.imgur.com/xMK1xxc.jpg", "https://i.imgur.com/zrb92lx.png", "https://i.imgur.com/DAUMwT4.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male"],
        about: "Hero of Arthurian legend and romance. A nephew and loyal supporter of King Arthur, appeared in the earliest Arthurian literature as a model of knightly perfection, against whom all other knights were measured.",
        level: 1, // max 100
        exp: 0,
        currentHp: 500,
        maxHp: 500, // endurance * 10
        stats: {
            strength: 50, //increase base dmg
            endurance: 50, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 50, // raises NP power
            luck: 50 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Numeral of the Saint", "Deals triple damage every 3 turns"],
        quotes: ["Now, expose yourself under the sun."],
        summonableWith: '<:icons8sword:644265939009011723> <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Fate/ Extra',
        code: '102999',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Excalibur Galatine",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Deals damage, inflicts burn for 3 turns.",
            text: "",
            image: "https://i.imgur.com/tSH2oot.gif",
            canBeUsed: false
        }
    },

    {//9
        id: 9,
        name: ["magikarp", "koiking", "red devil"], // name and aliases
        class: "Berserker",
        pictures: ["https://i.imgur.com/SpofbzY.jpg", "https://i.imgur.com/ZQOcAEk.png", "https://i.imgur.com/RGX5Mnb.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "dragon", "divine"],
        about: "Berserker is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 100,
        maxHp: 100, // endurance * 10
        stats: {
            strength: 5, //increase base dmg
            endurance: 10, // increase health / decrease dmg ()
            agility: 40, // raises chances to land a hit / evade
            magic: 5, // raises NP power
            luck: 90 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["High Jump", "Well it can jump high sometimes... not that it really matters..."],
        quotes: ["splash... splash..."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 🎣 <:6191_water_water:643527652203954186>',
        origin: 'Pokemon',
        code: '686868',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Splash",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Well.. it does nothing...",
            text: ["Berserker used splash... But nothing happened!"],
            image: "https://i.imgur.com/r0UUMlq.gif",
            canBeUsed: false
        }
    },

    {//10
        id: 10,
        name: ["illyasviel von einzbern (kaleid)", "illyasviel von einzbern", "illya"], // name and aliases
        class: "Caster",
        pictures: ["https://i.imgur.com/HEjS9ik.png", "https://i.imgur.com/dXPeJKc.png", "https://i.imgur.com/mzdPFkn.png", "https://i.imgur.com/IcRK4fz.png", "https://i.imgur.com/12m7syU.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female"],
        about: " Young girl who made a contract with Magical Ruby to collect all the class cards becoming a magical girl in the process.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 10, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 20, // raises chances to land a hit / evade
            magic: 40, // raises NP power
            luck: 60 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Infinite Mana Supply", "Prevents the reduction of Magic stat."],
        quotes: ["I won’t give up on anything, anymore!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🍬 <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Fate/ kaleid liner Prisma Illya',
        code: '123402',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Magical Girl Zwei",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "By combining powers of Ruby and Sapphire Illya is able to transform to even more powerful form, but it puts huge stress on her body. (Raises magic stat drastically, dmg dealt based on magic, Np charge +2 inflict curse on yourself for 7 turns[demerit]. 2nd use - deals damage)", // 
            text: ["Ruby, Sapphire! Grant me your powers."],
            image: "https://i.imgur.com/TXQf4r7.gif",
            canBeUsed: false
        }
    },

    {
        id: 11,
        name: ["lelouch vi britania", "zero", "lelouch", "lelouch lamperouge", "lulu"], // name and aliases
        class: "Assassin",
        pictures: ["https://i.imgur.com/8NAlAGp.jpg", "https://i.imgur.com/ozeUplB.png", "https://i.imgur.com/Tek692e.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "king"],
        about: "The Eleventh Prince of the Holy Britannian Empire and the son of the 98th Emperor of Britannia, Charles zi Britannia. He was also the leader of the Black Knights.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 10, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 20, // raises chances to land a hit / evade
            magic: 60, // raises NP power
            luck: 40 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Strategic Thinking", "Each turn reduce the highest stat of the enemy by 3%. Each time when HP falls below 25% apply evade (2 times) to self."],
        quotes: ["If the king doesn't move, then his subjects won't follow."],
        summonableWith: '🔪 <:1426_pistol:643527652317331472>',
        origin: 'Code Geass: Hangyaku no Lelouch',
        code: '000000',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Geass",
            power: 50, // how strong / efficient NP is 50 - 100 (+50 for 1 grail; )
            description: `Assassin's Geass manifests itself as "the power of absolute obedience," which allows him to plant commands within a person's mind upon direct eye contact. (Reduce enemy strength, agility and luck, inflicts confusion - 5 turns, 8% chance to instantly kill the enemy.)`,
            text: ["I Assassin, commands you..."],
            image: "https://i.imgur.com/6acgDxp.gif",
            canBeUsed: false
        }
    },

    {
        id: 12,
        name: ["suzaku kururugi", "suzaku", "kururugi suzaku", "knight of zero", "white knight", "white grim reaper"], // name and aliases
        class: "Rider",
        pictures: ["https://i.imgur.com/zx3JbZ6.png", "https://i.imgur.com/z7p2wOB.png", "https://i.imgur.com/6xIiacb.png", "https://i.imgur.com/6c0TLrE.png", "https://i.imgur.com/jaoWKi9.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: "Son of Japan's last prime minister. One of the Knights of the Round.",
        level: 1, // max 100
        exp: 0,
        currentHp: 600,
        maxHp: 600, // endurance * 10
        stats: {
            strength: 50, //increase base dmg
            endurance: 60, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 10, // raises NP power
            luck: 30 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Geass Command", "When HP drops below 25%: each turn there is 30% chance that guts effect will be inflicted on self."],
        quotes: ["A victory won through dishonesty means it's no victory at all. Please, remember about that Master."],
        summonableWith: '<:icons8wheel:644265939441025024> ⚙ <:1426_pistol:643527652317331472> <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Code Geass: Hangyaku no Lelouch',
        code: '772526',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Lancelot Albion",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Developed by Camelot, this newly built Lancelot delivers 9th generation performance. (raises rider's agility, defense and slightly strength)",
            text: [],
            image: "https://i.imgur.com/6PKgAwC.gif",
            canBeUsed: false
        }
    },

    {
        id: 13,
        name: ["kallen kozuki", "kallen", "kozuki kallen", "kallen stadtfeld", "kallen kōzuki", "q-1"], // name and aliases
        class: "Rider",
        pictures: ["https://i.imgur.com/q9TbPdd.png", "https://i.imgur.com/eVVRM9m.png", "https://i.imgur.com/y3j69qJ.png", "https://i.imgur.com/5b9rW4H.png", "https://i.imgur.com/yU2QHyC.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: "Young Britannian-Japanese woman, a member of Black Knights and pilot of Guren.",
        level: 1, // max 100
        exp: 0,
        currentHp: 500,
        maxHp: 500, // endurance * 10
        stats: {
            strength: 60, //increase base dmg
            endurance: 50, // increase health / decrease dmg ()
            agility: 50, // raises chances to land a hit / evade
            magic: 10, // raises NP power
            luck: 30 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Close Range", "Deals 50% more damage to lancers"],
        quotes: ["Master, you cover the rear."],
        summonableWith: '<:icons8wheel:644265939441025024> ⚙ <:1426_pistol:643527652317331472>',
        origin: 'Code Geass: Hangyaku no Lelouch',
        code: '583380',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Guren S.E.I.T.E.N.",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "The greatest feature of the Guren, equipped as its right arm, has had its radiation wave convergence further increased in power.(Raises agility, absorbs 1 NP Charge and % HP from the enemy current HP, inflicts stun - 2 turns.)",
            text: [],
            image: "https://i.imgur.com/HGdzf0F.gif",
            canBeUsed: false
        }
    },

    {
        id: 14,
        name: ["c.c.", "immortal witch", "c c", "see two", "pizza girl", "zero's mistress"], // name and aliases
        class: "Caster",
        pictures: ["https://i.imgur.com/xhEDc8i.png", "https://i.imgur.com/JYsRkxi.png", "https://i.imgur.com/sr4Jz81.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "An immortal witch, neither suffering from age nor capable of being killed by conventional means.",
        level: 1, // max 100
        exp: 0,
        currentHp: 600,
        maxHp: 600, // endurance * 10
        stats: {
            strength: 10, //increase base dmg
            endurance: 60, // increase health / decrease dmg ()
            agility: 20, // raises chances to land a hit / evade
            magic: 50, // raises NP power
            luck: 20 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Mind over Matter", "Deals 50% more damage to Berserker Class enemies"],
        quotes: ["In this world, evil can arise from the best of intentions. And there is good which can come from evil intentions."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🍕 🔮',
        origin: 'Code Geass: Hangyaku no Lelouch',
        code: '225069',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Code of Immortality",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: `Caster is is an immortal "witch", neither suffering from age nor capable of being killed by conventional means. (Revives Caster once upon activation, slightly raises own magic, inflicts confusion - 3 turns.)`,
            text: [],
            image: "https://i.imgur.com/tU2JTv7.gif",
            canBeUsed: false
        }
    },

    {
        id: 15,
        name: ["ikki kurogane", "ikki", "worst one", "another one", "kurogane ikki"], // name and aliases
        class: "Saber",
        pictures: ["https://i.imgur.com/WmSkUyN.png", "https://i.imgur.com/VKk7dGB.png", "https://i.imgur.com/CqiJT9q.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male"],
        about: "Saber is considered to be a failure even for an F-Rank Blazer and known as the worst one of all the studets. He studies in Hagun Academy as a repeat student, as a result of the previous staff ensuring that he couldn't attend classes. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 500,
        maxHp: 500, // endurance * 10
        stats: {
            strength: 20, //increase base dmg
            endurance: 50, // increase health / decrease dmg ()
            agility: 20, // raises chances to land a hit / evade
            magic: 10, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Played Steel", "Copies passive skill of the enemy with exception of passives that affect master spell casting"],
        quotes: ["I seek power, power inexorable."],
        summonableWith: '<:icons8sword:644265939009011723> <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Rakudai Kishi no Cavalry',
        code: '013340',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Ittou Shura",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Drastically increases Saber's strength, agility and luck. Decrease current hp by 50% after it's use[demerit].",
            text: ["Here, with my greatest weakness, I'll defeat your greatest strength!"],
            image: "https://i.imgur.com/Pyo6xno.gif",
            canBeUsed: false
        }
    },

    {
        id: 16,
        name: ["esdeath", "empire's strongest general", "ice queen"], // name and aliases
        class: "Berserker",
        pictures: ["https://i.imgur.com/WcUgghM.jpg", "https://i.imgur.com/41tQDkg.png", "https://i.imgur.com/pRFqLlp.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: "Berserker was a high-ranking general of the Empire. Eventually, due to Night Raid's effectiveness as an assassination unit, she becomes the leader of the Jaegers under the orders of the Prime Minister.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 40, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 25, // raises chances to land a hit / evade
            magic: 55, // raises NP power
            luck: 30 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Sadist", "Everytime you inflict normal attack damage to the enemy increase own strength by 15% of damage dealt."],
        quotes: ["The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits Master."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 🌡',
        origin: 'Akame ga Kill!',
        code: '211190',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Demon's Extract",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "Allows Berserker to control the ice. (Deals damage, inflicts freeze 6 turns, raises magic stat)",
            text: [],
            image: "https://i.imgur.com/PaIHBdR.gif",
            canBeUsed: false
        }
    },

    {
        id: 17,
        name: ["emiya kiritsugu", "emiya", "kiritsugu emiya", "kiritsugu"], // name and aliases
        class: "Assassin",
        pictures: ["https://i.imgur.com/b1XwunV.png", "https://i.imgur.com/olGElOv.png", "https://i.imgur.com/LqkBO41.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: "An assassin who manifested as a proxy of the Counter Force. ",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 20, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 60, // raises chances to land a hit / evade
            magic: 30, // raises NP power
            luck: 10 // raises chances to land a crit/ decides who goes first
        },
        statsPoints: 0,
        passive: ["Affection of the Holy Grail", "Starts with NP charge = 3, Critical Strength + 50%"],
        quotes: ["The result is the most important thing Master."],
        summonableWith: '🔪 <:1426_pistol:643527652317331472> 🚬 ⏳ <:icons8poisonbottle:646074309575573525> 🧨',
        origin: 'Fate/ Zero',
        code: '071583',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Origin Bullet",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: `Special Conceptual Weapon that utilize Assassin's Origin to its fullest extent by actualizing it within a target. (Deals damage, reduces enemy magic, inflicts NP Seal - 4 turns.)`,
            text: [],
            image: "https://i.imgur.com/GYSsn3q.gif",
            canBeUsed: false
        }
    },

    {
        id: 18,
        name: ["medea", "witch", "witch of perfidies"], 
        class: "Caster",
        pictures: ["https://i.imgur.com/Equ9tL8.jpg", "https://i.imgur.com/ckCJNwi.png", "https://i.imgur.com/KwbUSXe.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: "The daughter of King Aeetes, possessor of the Golden Fleece, she was taught magecraft by the moon goddess Hecate.",
        level: 1, 
        exp: 0,
        currentHp: 200,
        maxHp: 200, 
        stats: {
            strength: 10, 
            endurance: 20, 
            agility: 30, 
            magic: 60, 
            luck: 40 
        },
        statsPoints: 0,
        passive: ["Rapid Casting", "Charge gained each turn +1"],
        quotes: ["Wait. Do not panic. I am here with you. now prepare yourself."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🔮',
        origin: 'Fate/ Stay Night',
        code: '292184',
        NPLevel: 1, 
        noblePhantasm: {
            name: "Rule Breaker",
            power: 50, 
            description: "Deals damage, removes buffs and debuffs[demerit] from the enemy",
            text: [],
            image: "https://i.imgur.com/mbIJLn8.gif",
            canBeUsed: false
        }
    },

    {
        id: 19,
        name: ["sinon", "asada shino", "shinon", "sinonon", "asada", "shino asada"],
        class: "Archer",
        pictures: ["https://i.imgur.com/cSYj6JB.jpg", "https://i.imgur.com/QOVtJRY.png", "https://i.imgur.com/6FWWwOk.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "She is a skilled Virtual Reality game player, who began playing Gun Gale Online based on the suggestion from her friend, Shinkawa Kyouji, in an attempt to overcome her trauma concerning guns.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 50,
            magic: 30,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Hawk Eye", "Own attacks will never miss"],
        quotes: ["“I want to become stronger Master"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:1426_pistol:643527652317331472> <:6164_Instant_Ramen:643527652803739658> 👓',
        origin: 'Sword Art Online',
        code: '487819',
        NPLevel: 1,
        noblePhantasm: {
            name: "PGM Ultima Ratio Hecate II",
            power: 50,
            description: "Snipes enemy from the distance with high accuracy (Raises own critical strength and luck first, then deals damage, sure hit.)",
            text: [],
            image: "https://i.imgur.com/9JQhFA7.gif",
            canBeUsed: false
        }
    },

    {
        id: 20,
        name: ["kirito", "kazuto", "kirigaya kazuto", "beater", "blackie", "the black swordsman"],
        class: "Saber",
        pictures: ["https://i.imgur.com/ON7nWK0.png", "https://i.imgur.com/OWU3sxg.png", "https://i.imgur.com/JxSB1V8.png", "https://i.imgur.com/OrQaUvk.png", "https://i.imgur.com/dDI6muN.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: "One of the strongest and best players in Sword Art Online, he saved thousands of lives by beating that game. ",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 60,
            endurance: 40,
            agility: 40,
            magic: 20,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Dual Wielding", "+50% to strength stat"],
        quotes: ["Everybody can fight. It’s just a choice of whether you should. How about you Master?"],
        summonableWith: '<:icons8sword:644265939009011723> <:6164_Instant_Ramen:643527652803739658> 🍞',
        origin: 'Sword Art Online',
        code: '293112',
        NPLevel: 1,
        noblePhantasm: {
            name: "Starburst Stream",
            power: 50,
            description: "16-hit Dual Blades category Sword Skill in Sword Art Online and a signature skill of Saber (deals damage, raises own strength)",
            text: [],
            image: "https://i.imgur.com/SfD7ba8.gif",
            canBeUsed: false
        }
    },

    {
        id: 21,
        name: ["priestess", "onna shinkan"],
        class: "Caster",
        pictures: ["https://i.imgur.com/SLuFxme.jpg", "https://i.imgur.com/jDmJ78w.png", "https://i.imgur.com/rcdjmtt.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: "After Goblin Slayer saved her life during her first adventure, she became the first member of his party and frequently accompanies him during adventures. ",
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 10,
            endurance: 25,
            agility: 30,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Purity", "Immunity to poison and curse"],
        quotes: ["Maybe we should go back and prepare a bit more..."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🌿 🍬',
        origin: 'Goblin Slayer',
        code: '519045',
        NPLevel: 1,
        noblePhantasm: {
            name: "Double Protection",
            power: 50,
            description: "Magical barrier that shields her and traps her opponents within (drastically raises caster's defense, inflicts stun - 2 turns , slightly recovers HP)",
            text: [],
            image: "https://i.imgur.com/TsYZyo7.gif",
            canBeUsed: false
        }
    },

    {
        id: 22,
        name: ["goblin slayer", "orcbolg", "beard cutter", "goburin sureiyā"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/GiLnPn2.jpg", "https://i.imgur.com/MCe3VH9.png", "https://i.imgur.com/0O4ZAkW.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["male"],
        about: "He is an experienced silver-ranked adventurer who only concerns himself with hunting goblins. He's a stoic and calm person who seems interested in learning new ideas from people of all walks of life. He is always looking for new knowledge to absorb, mostly to find more efficient ways of tracking, trapping, and killing goblins.",
        level: 1,
        exp: 0,
        currentHp: 600,
        maxHp: 600,
        stats: {
            strength: 40,
            endurance: 60,
            agility: 40,
            magic: 20,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Strategic Thinking", "Each turn reduce the highest stat of the enemy by 3%. Each time, when HP falls below 25% apply evade (2times) to self."],
        quotes: ["Don’t overfill your stomach before battle Master. It’ll slow your blood flow, dulling your movements."],
        summonableWith: '<:3679_silver:643527652250222604>',
        origin: 'Goblin Slayer',
        code: '807461',
        NPLevel: 1,
        noblePhantasm: {
            name: "Desire to kill goblins",
            power: 50,
            description: "His immense hatred towards goblins and his homicidal obsession with killing them all can temporalily grant him enhanced physical strength and endurance (raises attack and slightly endurance)",
            text: ["I am to goblins what goblins are to us."],
            image: "https://i.imgur.com/KaKTmLK.gif",
            canBeUsed: false
        }
    },

    {
        id: 23,
        name: ["high elf archer", "high elf", "yousei yunde", "long-ears", "anvil"],
        class: "Archer",
        pictures: ["https://i.imgur.com/0iM74mE.jpg", "https://i.imgur.com/O2gPxGe.png", "https://i.imgur.com/cVsDb9K.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: "Archer is an adventurer who is a member of Goblin Slayer's party. She is a 2,000 year old elf, which is considered young by elven standards. ",
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 20,
            endurance: 25,
            agility: 50,
            magic: 20,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Hawk Eye", "Own attacks will never miss"],
        quotes: ["Let's go on the adventure Master!"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:3679_silver:643527652250222604>',
        origin: 'Goblin Slayer',
        code: '564445',
        NPLevel: 1,
        noblePhantasm: {
            name: "Archery",
            power: 50,
            description: "They say that an elf’s arrows hit their mark, even when their eyes are closed. (Deals damage, sure hit)",
            text: [],
            image: "https://i.imgur.com/pcuxPIS.gif",
            canBeUsed: false
        }
    },

    {
        id: 24,
        name: ["motoyasu kitamura", "motoyasu", "spear hero", "moronyasu", "love hunter", "spearguy", 'moomoo', "kitamura motoyasu"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/BondRxr.jpg", "https://i.imgur.com/xkwRMgn.png", "https://i.imgur.com/QOO3VFJ.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male", "divine"],
        about: "Lancer is one of the four Holy Heroes summoned in Melromarc in order to fight the Waves of Calamity.",
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 40,
            endurance: 25,
            agility: 50,
            magic: 30,
            luck: 30
        },
        statsPoints: 0,
        passive: ["-", "-"],
        quotes: [""],
        summonableWith: '<:icons8spear:644265939310739476> <:6164_Instant_Ramen:643527652803739658> ⏳',
        origin: 'The Rising of the Shield Hero',
        code: '821857',
        NPLevel: 1,
        noblePhantasm: {
            name: "Legendary Spear",
            power: 50,
            description: "Deals damage.",
            text: [""],
            image: "https://i.imgur.com/3FvAx0w.gif",
            canBeUsed: false
        }
    },

    {
        id: 25,
        name: ["sagittarius seiya", "seiya", "sagittarius", "pegasus seiya", "pegasus"],
        class: "Archer",
        pictures: ["https://i.imgur.com/j8b6NHs.jpg", "https://i.imgur.com/9ECE7el.png", "https://i.imgur.com/4tdRDlT.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: "The former wearer of the Pegasus Bronze Cloth, Archer is revered as a Legendary Saint in the millieu of Omega. Having defended Athena in the past from powerful enemies, Archer once again takes flight in his mission to protect Athena assisted by the Sagittarius Gold Cloth. ",
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 45,
            endurance: 45,
            agility: 50,
            magic: 60,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Seventh Sense", "Each turn raise own magic by 5%"],
        quotes: ["In order to protect this world I'll burn my Cosmo as many times as I have to."],
        summonableWith: '<:icons8archersbow:644246512926195734> <:9777_gold:643527652464001024> 🔭',
        origin: 'Saint Seiya',
        code: '949440',
        NPLevel: 1,
        noblePhantasm: {
            name: "Cosmic Star Arrow",
            power: 50,
            description: "Archer aims the Bow of Sagittarius at his foe, focusing cosmo at the tip of the arrow and unleashes volleys of energy. When the technique ends, Archer draws the energy into the tip and releases the arrow with amazing force (first slightly raises own magic then deals significant damage, inflicts NP Seal on self - 3 turns and reduces current HP by 5% of Max HP [demerit])",
            text: ["Burn, my Cosmo!"],
            image: "https://i.imgur.com/xBR8Zyb.gif",
            canBeUsed: false
        }
    },

    {
        id: 26,
        name: ["ye xiu", "ye qiu", "glory textbook", "master tactician", "god of glory", "glory's number one", "lord grim", "jun mo xiao"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/HjzqOeL.jpg", "https://i.imgur.com/QwEGjvy.png", "https://i.imgur.com/0TFK02L.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: "As one of the first players of Glory, he has created many of the tactics for the game and league, and a part of the first generation of players in the professional league.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 50,
            endurance: 50,
            agility: 50,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["All Classes Proficiency", "All 7 base classes bonuses are applied"],
        quotes: ["I'll show you the difference between an expert and a noob"],
        summonableWith: '<:icons8spear:644265939310739476> 🚬',
        origin: `The King's Avatar`,
        code: '366587',
        NPLevel: 1,
        noblePhantasm: {
            name: "Myriad Manifestation Umbrella",
            power: 50,
            description: "Myriad Manifestation Umbrella bypassed the cooldown on switching weapons, a critical weakness. It has 12 forms which can be switched at will (Increases defense, inflics poison (3turns), deals damage)",
            text: [""],
            image: "https://i.imgur.com/ePmaRET.gif",
            canBeUsed: false
        }
    },

    {
        id: 27,
        name: ["stella vermillion", "crimson princess", "stella", "sutera vāmirion "],
        class: "Saber",
        pictures: ["https://i.imgur.com/onrWdpk.jpg", "https://i.imgur.com/wIladFS.png", "https://i.imgur.com/Mm4C3iI.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "dragon"],
        about: "She is an A-Rank Blazer and second imperial princess from the Vermillion Empire. Saber was born with 30 times the magic power of a normal Blazer viewed as a prodigy appearing once a decade.",
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 50,
            endurance: 45,
            agility: 50,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Fire Manipulation", "While burned, raise own magic and deffence by 10% each turn, negative effects of burn does not apply"],
        quotes: ["I'll show you results of my training Master"],
        summonableWith: '<:icons8sword:644265939009011723> <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Rakudai Kishi no Cavalry',
        code: '683464',
        NPLevel: 1,
        noblePhantasm: {
            name: "Lævateinn",
            power: 50,
            description: "Deals damage, inflicts burn (6 turns) on enemy and self.",
            text: ["Pierce the blue sky, blaze of purgatory."],
            image: "https://i.imgur.com/rAfD0Sp.gif",
            canBeUsed: false
        }
    },

    {
        id: 28,
        name: ["hououin kyouma", "rintarou okabe", "okabe rintarou", "okabe", "mad scientist", "lab mem 001", "lintahlo", "alpaca man", "sad scientist", "uncle okarin", "hououin pervert-kyouma"],
        class: "Alter Ego",
        pictures: ["https://i.imgur.com/nCjblWL.jpg", "https://i.imgur.com/bmUyeeB.png", "https://i.imgur.com/eXqH8zD.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male"],
        about: 'Alter Ego is a self-proclaimed mad scientist and the founder of Future Gadget Lab, he likes to pose as an agent working against a certain "Organization" which he thinks is always after him, as he believes this kind of image gives him a cool and mysterious aura.',
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 10,
            endurance: 20,
            agility: 20,
            magic: 70,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Knowledge of the Future", "If evade is active, Critical Strength +100%"],
        quotes: ["Theories are nothing more than words. Accept what you have seen!"],
        summonableWith: '🥼 <:6164_Instant_Ramen:643527652803739658> 💊',
        origin: 'Steins;Gate',
        code: '001001',
        NPLevel: 1,
        noblePhantasm: {
            name: "Reading Steiner",
            power: 50,
            description: "Allows Alter Ego to alter the current timeline (significantly restores hp, drastically raises luck, raises own critical strength, applies evade to self - 3 times), although this leaves some side efects on his mental health (inflict fear on self for 7 turns inflict confusion on self for 2 turns [demerit])",
            text: ["It's the choice of Steins Gate."],
            image: "https://i.imgur.com/U9T26uX.gif",
            canBeUsed: false
        }
    },

    {
        id: 29,
        name: ["semiramis", "empress of assyria"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/A76EJip.png", "https://i.imgur.com/DSf6Wch.png", "https://i.imgur.com/FgbLe9g.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: "The oldest known poisoner in the world, by poisoning her husband Ninus, she rose her name in one stroke. ",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 10,
            endurance: 20,
            agility: 20,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Double Summon (Caster)", "Apply Caster Class bonus"],
        quotes: ["Honestly, I cannot stand a face-to-face fight like this. Come, let's get this over with."],
        summonableWith: '🔪 <:icons8poisonbottle:646074309575573525> ⛓ 🍷',
        origin: 'Fate/ Apocrypha',
        code: '865427',
        NPLevel: 1,
        noblePhantasm: {
            name: "Arrogant King's Alcohol",
            power: 50,
            description: "Upon activation, its effects turns the surrounding environment into poison, deals damage, inflics poison (10 turns)",
            text: [""],
            image: "https://i.imgur.com/L6iX1RY.gif",
            canBeUsed: false
        }
    },

    {
        id: 30,
        name: ["artoria pendragon", "arturia pendragon", "king of knights of the holy sword", "king of knights", "altria pendragon", "king arthur", "artoria", "altria", "arturia"],
        class: "Saber",
        pictures: ["https://i.imgur.com/BsBlgcL.png", "https://i.imgur.com/9O0APLj.png", "https://i.imgur.com/SYDoXb0.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "dragon", "king"],
        about: "Legendary hero of Britain, she wielded the sword from the stone, Caliburn, but it was eventually destroyed. She later obtained Excalibur and Avalon from the Lady of the Lake. ",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 40,
            magic: 65,
            luck: 60
        },
        statsPoints: 0,
        passive: ["Instinct", "Increases own evasion by 30%"],
        quotes: ["Heading into battle? Then allow me to join you."],
        summonableWith: '<:icons8sword:644265939009011723> ',
        origin: 'Fate/ Stay Night',
        code: '012447',
        NPLevel: 1,
        noblePhantasm: {
            name: "Excalibur",
            power: 50,
            description: "A Noble Phantasm that stands at the top of all holy swords (first slightly raises own magic then deals significant damage, inflicts NP Seal on self - 13 turns [demerit])",
            text: ["The gathering breath of the star. The shining torrent of life. Take this!"],
            image: "https://i.imgur.com/8C58bzZ.gif",
            canBeUsed: false
        }
    },

    {
        id: 31,
        name: ["nero claudius", "emperor of roses", "nero claudius caesar augustus germanicus", "nero"],
        class: "Saber",
        pictures: ["https://i.imgur.com/qzBdYFU.jpg", "https://i.imgur.com/RV0mksK.png", "https://i.imgur.com/kUqC9NQ.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "king"],
        about: "The Emperor who, in the Rome of 50~60 AD, oppressed the Roman Senate and all religious factions.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 50,
            magic: 40,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Invictus Spiritus", "Starts the battle with active guts status; each time, when HP falls below 25% apply evade (1 time)"],
        quotes: ["Umu! Put me to good use!"],
        summonableWith: '<:icons8sword:644265939009011723> 🌹 <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Fate/ Extra',
        code: '843142',
        NPLevel: 1,
        noblePhantasm: {
            name: "Aestus Domus Aurea",
            power: 50,
            description: 'Manifests The Golden Theater on top of the current World. It is an "Absolute Imperial Zone" which allows the owner to achieve their aspirations. (slightly raises magic, luck and agility stats, damage based on magic, inflicts NP seal on self (7turns) [demerit], inflicts burn on enemy (7turns))',
            text: ["Behold my glory...",
                    "Hear the thunderous applause...",
                    "Sit down and praise...",
                    "My Golden Theater! Kingdom of Heaven and Hell...",
                    "My heaven, reconstructed! This is where the limelight shines!"
                ],
            image: "https://i.imgur.com/yijC7Lb.gif",
            canBeUsed: false
        }
    },

    {
        id: 32,
        name: ["ryogi shiki","shiki ryogi", "shiki", "ryougi shiki", "ryōgi shiki"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/MpWYqpt.jpg", "https://i.imgur.com/f5dnoie.png", "https://i.imgur.com/r50JYxt.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: "Her family were members of the Demon Hunter Organization, she assists the Garan no Dou agency in handling paranormal cases when combat is required.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 10,
            endurance: 20,
            agility: 60,
            magic: 60,
            luck: 60
        },
        statsPoints: 0,
        passive: ["Mystic Eyes of Death Perception", "Normal attacks have 1% chance to instantly kill the target"],
        quotes: ["Let's kill some enemies Master."],
        summonableWith: '🔪 <:6191_water_water:643527652203954186>',
        origin: 'Kara no Kyoukai',
        code: '438990',
        NPLevel: 1,
        noblePhantasm: {
            name: "Mystic Eyes of Death Perception",
            power: 50,
            description: 'Supernatural ability that allows the user to see the inherent mortality of everything (both living and non-living) in the form of lines. (deals damage, reduces enemy defense, 8% chance to instantly kill the target, raises own critical strength)',
            text: [""],
            image: "https://i.imgur.com/5BZ2yXZ.gif",
            canBeUsed: false
        }
    },

    {
        id: 33,
        name: ["attila", "great king of destruction", "altera", "destroyer of civilization", "etzel", "king of combat", "attila the hun"],
        class: "Saber",
        pictures: ["https://i.imgur.com/wn1tbWB.png", "https://i.imgur.com/eAeqh0D.png", "https://i.imgur.com/SHVsNow.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "divine", "king"],
        about: "She was a warrior and king of the Huns, it can be said that she invited the eventual collapse of the Roman Empire.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 50,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Crest of the Star", "Raises own strength by 30%, magic by 20% and evasion rate by 10%"],
        quotes: ["Should I destroy this civilization as well?"],
        summonableWith: '<:icons8sword:644265939009011723> 🔭',
        origin: 'Fate/ Extella',
        code: '772427',
        NPLevel: 1,
        noblePhantasm: {
            name: "Teardrop Photon Ray",
            power: 50,
            description: "Teardrop Photon Ray is a virtual manifestation of Mars himself in upper orbit who proceeds to swing a giant sword of light. (deals damage, reduces enemy defense, slightly raises magic)",
            text: ["I won't take life. Only destroy your civilization."],
            image: "https://i.imgur.com/0bLZMeP.gif",
            canBeUsed: false
        }
    },

    {
        id: 34,
        name: ["cu chulainn (prototype)", "cú chulainn (prototype)", "child of light", "cu chulainn", "hound of ulster", "coo hullan", "cu", "setanta", "cuchulainn", "proto lancer", "proto cu", "child of the sun", "coo hullan (prototype)"], // name and aliases
        class: "Lancer",
        pictures: ["https://i.imgur.com/LXvVowQ.jpg", "https://i.imgur.com/kQS1Nar.png", "https://i.imgur.com/DYI3kTi.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male", "divine"],
        about: "Lancer is an Irish mythological hero who appears in the stories of the Ulster Cycle, as well as in Scottish and Manx folklore. A spearman who does not like ornaments and prefers to fight as his wild nature dictates.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 50, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 60, // raises chances to land a hit / evade
            magic: 40, // raises NP power
            luck: 20 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Protection from Arrows", "starts the battle with evade applied to self (3 times)"],
        quotes: ["I'll show you the skill of Ulster!"],
        summonableWith: '<:icons8spear:644265939310739476> 🎣 ',
        origin: 'Fate/ Prototype',
        code: '856083',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Gáe Bolg",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "A cursed spear with an ominous design It is descended from Gungnir, which belongs to Odin in Norse Mythology (Deals damage, chance to instant-kill (2%), slightly increases luck.)",// always hits the target
            text: [""],
            image: "https://i.imgur.com/BbZqtbL.gif",
            canBeUsed: false
        }
    },

    {
        id: 35,
        name: ["cu chulainn (caster)", "cú chulainn (caster)", "cú chulainn", "child of light", "cu chulainn", "hound of ulster", "coo hullan", "cu", "setanta", "cuchulainn", "child of the sun"], // name and aliases
        class: "Caster",
        pictures: ["https://i.imgur.com/hEb56pK.png", "https://i.imgur.com/FjQOBjT.png", "https://i.imgur.com/r2Tf8le.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male", "divine"],
        about: "Caster is an Irish mythological hero who appears in the stories of the Ulster Cycle, he is said to be a practitioner of runes - the magecraft of Northern Europe that was inherited from his mentor ",
        level: 1, // max 100
        exp: 0,
        currentHp: 200,
        maxHp: 200, // endurance * 10
        stats: {
            strength: 10, //increase base dmg
            endurance: 20, // increase health / decrease dmg ()
            agility: 30, // raises chances to land a hit / evade
            magic: 40, // raises NP power
            luck: 20 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Protection from Arrows", "starts the battle with evade applied to self (3 times)"],
        quotes: ["Taste the truth of the rune spells I learned from Scáthach"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🎣 <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Fate/ Grand Order',
        code: '843863',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Wicker Man",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "When used, Caster summons a sacrifice-seeking flame giant. (deals damage, inflicts burn for 6 turns )",// always hits the target
            text: ["Burn them completely, giant of all trees"],
            image: "https://i.imgur.com/TBD9Lzs.gif",
            canBeUsed: false
        }
    },

    {
        id: 36,
        name: ["diarmuid ua duibhne", "diarmuid", "beautiful young warrior", "diarmuid o'dyna", "diarmuid of the love spot"], 
        class: "Lancer",
        pictures: ["https://i.imgur.com/gUSKzyF.png", "https://i.imgur.com/UPTqTn3.png", "https://i.imgur.com/Ezt6Jzl.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: "Under the command of the leader Fionn, he was a prominent Knight of the Knights of Fianna and the owner of a beautiful face.",
        level: 1, // max 100
        exp: 0,
        currentHp: 300,
        maxHp: 300, // endurance * 10
        stats: {
            strength: 40, //increase base dmg
            endurance: 30, // increase health / decrease dmg ()
            agility: 60, // raises chances to land a hit / evade
            magic: 30, // raises NP power
            luck: 10 // raises chances to land a crit
        },
        statsPoints: 0,
        passive: ["Love Spot", "If the enemy is female and is not a part of the 3 kight classes reduce all their stats by 20%"],
        quotes: ["I am probably wishing for too much. However, I still want to sacrifice myself for my honor as a knight."],
        summonableWith: '<:icons8spear:644265939310739476> ',
        origin: 'Fate/ Zero',
        code: '591741',
        NPLevel: 1, // +1 per lvl up
        noblePhantasm: {
            name: "Gáe Dearg & Gáe Buidhe",
            power: 50, // how strong / efficient NP is 50 - 300 (+50 for 1 grail; 5max)
            description: "demonic scarlet spear two meter long that renders magical enhancements and projections useless and a yellow cursed spear that inflicts wounds that cannot be healed (Deals damage, removes buffs and debuffs[demerit] from the enemy, inflicts curse (3 turns))",// always hits the target
            text: ["A little display of my special move, Drill!"],
            image: "https://i.imgur.com/hmbm444.gif",
            canBeUsed: false
        }
    },

    {
        id: 37,
        name: ["achilles", "the swift hero", "achilleus"],
        class: "Rider",
        pictures: ["https://i.imgur.com/oj6lyG8.png", "https://i.imgur.com/6anHZsN.png", "https://i.imgur.com/0XUDjmZ.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male", "divine"],
        about: "One of the most prominent heroes in Greek mythology. According to the legends, the only weak point of Rider, who possessed an invulnerable body, was his heel.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 45,
            endurance: 50,
            agility: 55,
            magic: 40,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Andreias Amarantos", "As long as his name is not revealed, negates all normal attacks damage recevied except for enemies with divine trait"],
        quotes: ["Master, what's up? You need something from me?"],
        summonableWith: '<:icons8wheel:644265939441025024>',
        origin: 'Fate/ Apocrypha',
        code: '974759',
        NPLevel: 1,
        noblePhantasm: {
            name: "Dromeus Komētēs",
            power: 50,
            description: "The embodiment of Riders' legend that he is the fastest among all the heroes of all eras (drastically raises agility)",
            text: [""],
            image: "https://i.imgur.com/dL43RCE.gif",
            canBeUsed: false
        }
    },

    {
        id: 38,
        name: ["enkidu", "chains of heaven"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/YMyR42F.jpg", "https://i.imgur.com/dQkyBTk.png", "https://i.imgur.com/AmWNy7R.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["divine"],
        about: "A tragic weapon that underwent many adventures as the sole friend of the King of Heroes and, after acquiring a human heart, returned to dirt as a doll. ",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 25,
            endurance: 30,
            agility: 40,
            magic: 60,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Presence Detection", "Deals 50% more damage to Assassin Class enemies; prevents opponent from applying evade status to themselves"],
        quotes: ["You can use me as much as you want. I won't wear out that easily, you know."],
        summonableWith: '<:icons8spear:644265939310739476> ⛓',
        origin: 'Fate/ Strange Fake',
        code: '516354',
        NPLevel: 1,
        noblePhantasm: {
            name: "Enuma Elish",
            power: 50,
            description: "It's the Noble Phantasm of Lancer, where they transforms their own body into a Divine Construct. (inflicts damage, inflics stun for 3 turns on the enemy)",
            text: ["The evocation is the breath of the planet. I will walk together with the humans."],
            image: "https://i.imgur.com/uDZvaDo.gif",
            canBeUsed: false
        }
    },

    {
        id: 39,
        name: ["william shakespeare", "the greatest writer", "shakespeare"],
        class: "Caster",
        pictures: ["https://i.imgur.com/0pZ7lg4.png", "https://i.imgur.com/ZpMwAbQ.png", "https://i.imgur.com/gU30Co4.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Undoubtedly the most famous author in the world, and also an actor. His name shines most brilliantly in the history of English literature; as befitting one of the most famous Englishmen. He himself is the audience, spectating the battle, irritating his Master by inquiring about the Master's every state of mind.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 20,
            magic: 35,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Enchant", "Doubles the power of master spells that deal damage"],
        quotes: ["Oh well, let me write you a story! I will fill the story of your life with many adventures!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 📖',
        origin: 'Fate/ Apocrypha',
        code: '272074',
        NPLevel: 1,
        noblePhantasm: {
            name: "First Folio",
            power: 50,
            description: "Regardless of friend or foe, he institutes the target group as characters in a drama of his making. Then on top of that, he confronts the target with a difficult challenge. (deals damage, inflicts stun(1turn), confusion(4turns) and fear(7turns) on the enemy)",
            text: ["Now, it is time to raise the curtains!",
                "The title of my Noble Phantasm is, First Folio! Start the play!"
                ],
            image: "https://i.imgur.com/NbCMy6J.gif",
            canBeUsed: false
        }
    },

    {
        id: 40,
        name: ["spartacus", "gladiator of thrace"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/lgswnTe.png", "https://i.imgur.com/7HYQOlJ.png", "https://i.imgur.com/H3rnAD7.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Gladiator of ancient Rome and the ringleader of the slave uprising. Although the uprising was suppressed, his name was carved in history as a hope of the oppressed humans.",
        level: 1,
        exp: 0,
        currentHp: 700,
        maxHp: 700,
        stats: {
            strength: 50,
            endurance: 70,
            agility: 20,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Honor of Suffering", "Reduce the cost of healing spells by 50%"],
        quotes: ["You will free the oppressed with me! Let's go!"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> ⛓',
        origin: 'Fate/ Apocrypha',
        code: '532849',
        NPLevel: 1,
        noblePhantasm: {
            name: "Crying Warmonger",
            power: 50,
            description: `Ability that increases Spartacus's power with the more damage he receives, symbolizing him having been a hero who "always won by reversal. (deals damage, slightly increases strength and endurance)"`,
            text: ["Nuoh! It is time for rebellion..."],
            image: "https://i.imgur.com/WUWxrgW.gif",
            canBeUsed: false
        }
    },

    {
        id: 41,
        name: ["ozymandias", "king of gods", "ramesses ii", "king of kings", "meryamen", "ozy", "sun king", "god-king"],
        class: "Rider",
        pictures: ["https://i.imgur.com/koMQfRn.jpg", "https://i.imgur.com/AyofXpl.png", "https://i.imgur.com/UPUKWXq.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "divine"],
        about: "A pharaoh from ancient Egypt who governed over a vast empire. Like Osiris, he loved the masses, and was also greatly loved by the people.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 40,
            magic: 65,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Protection from Ra", "starts battle with NP charge = 5"],
        quotes: ["Hmm... You have piqued my interest. For a mere mage to interest me so... Why is that?"],
        summonableWith: '<:icons8wheel:644265939441025024> <:9777_gold:643527652464001024> <:icons8sandbucket:643527652237639701>',
        origin: 'Fate/ Prototype',
        code: '992442',
        NPLevel: 1,
        noblePhantasm: {
            name: "The Sphinx of Abu el-Hol",
            power: 50,
            description: "Allows Rider to summon forth a number of Divine Beast sphinxes which attack the enemy. (deals damage, inflicts curse (7turns) on the enemy)",
            text: [""],
            image: "https://i.imgur.com/wclVFXw.gif",
            canBeUsed: false
        }
    },

    {
        id: 42,
        name: ["frankenstein", "innocent bride", "fran", "frankenstein's monster"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/5WR5Fzs.jpg", "https://i.imgur.com/NHh0tYS.png", "https://i.imgur.com/mk1LXkQ.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "Built as the Eve that forms a pair with Adam, because her expressing of human emotions does not function well, she was branded a failed work.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 30,
            endurance: 40,
            agility: 20,
            magic: 20,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Overload", "NP charge +1 at the cost of 3% of Max HP per turn"],
        quotes: ["Nghuu..."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 🔋',
        origin: 'Fate/ Apocrypha',
        code: '555439',
        NPLevel: 1,
        noblePhantasm: {
            name: "Blasted Tree",
            power: 50,
            description: `The electricity is discharged into the surrounding environment as an area of effect attack, taking on the silhouette of a towering tree that "rains down like a waterfall" (deals significant damage, inflicts stun on self for 3 turns [demerit])`,
            text: ["With me, together, come..."],
            image: "https://i.imgur.com/2HdANnO.gif",
            canBeUsed: false
        }
    },

    {
        id: 43,
        name: ["artoria pendragon alter", "saber alter", "salter", "artoria alter", "artoria pendragon (alter)"],
        class: "Saber",
        pictures: ["https://i.imgur.com/WmDMpDt.png", "https://i.imgur.com/q0rgbUy.png", "https://i.imgur.com/mWjJoZM.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female", "dragon", "king"],
        about: "She is a changed version of her original self after being consumed and blackened by the mud from the Shadow.",
        level: 1,
        exp: 0,
        currentHp: 600,
        maxHp: 600,
        stats: {
            strength: 50,
            endurance: 60,
            agility: 20,
            magic: 65,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Mana Burst", "Increase own defense  by 30%"],
        quotes: ["Get up. We have some flies to swat."],
        summonableWith: '<:icons8sword:644265939009011723>',
        origin: 'Fate/ Stay Night',
        code: '616714',
        NPLevel: 1,
        noblePhantasm: {
            name: "Excalibur Morgan",
            power: 50,
            description: "The form Excalibur takes after being corrupted by evil. (first slightly raises own magic then deals significant damage, inflicts NP Seal on self - 13 turns [demerit])",
            text: ["Cry out. It is time to fall to the ground.",
                "Hammer of the Vile King. Overturn the aurora. Swallow the light!"
                ],
            image: "https://i.imgur.com/aLa3u0l.gif",
            canBeUsed: false
        }
    },

    {
        id: 44,
        name: ["hassan of the hundred faces", "leader of hashasheen", "hundred-faced hassan", "hassan of the hundred personas", " hassan-i-sabbah"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/Fp8wCPS.png", "https://i.imgur.com/MzBJ0rq.png", "https://i.imgur.com/lcsLHdw.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: "She is unique in that she has the capability to manifest as multiple entities at once.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 30,
            endurance: 20,
            agility: 60,
            magic: 35,
            luck: 10
        },
        statsPoints: 0,
        passive: ["All Kinds of Specializations", "Raises all stats by 10% and apllies evasion to self (1 time) at the start of battle."],
        quotes: ["We are pleased to serve you Master. And we speak unanimously to this."],
        summonableWith: '🔪',
        origin: 'Fate/ Zero',
        code: '522797',
        NPLevel: 1,
        noblePhantasm: {
            name: "Zabaniya: Delusional Illusion",
            power: 50,
            description: "Noble Phantasm that targets Assassin himself rather than an opponent. Assassin is a single entity, but he possesses a compartmentalized soul and multiple personalities that allow him to divide his spiritual potential to materialize up to eighty different Servants (raises endurance)",
            text: ["We as a group is an individual, and the individual, a group. The group's innumerable shadows possesses a hundred faces. Now..."],
            image: "https://i.imgur.com/pk3uBCY.gif",
            canBeUsed: false
        }
    },

    {
        id: 45,
        name: ["asagami fujino", "fujinon", "fujino asagami"],
        class: "Archer",
        pictures: ["https://i.imgur.com/G42NdCs.png", "https://i.imgur.com/dBOhsIU.png", "https://i.imgur.com/RnsUXlQ.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: `The holder of the "Mystic Eyes of Distortion", capable of twisting anything that is reflected in her eyes, regardless of solidity, structure or scale.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 10,
            endurance: 40,
            agility: 20,
            magic: 60,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Clairvoyance", "Own attacks will never miss, + 5% to crit chance"],
        quotes: ["Did you eat a proper meal? Did you pack nice warm tea in your canteen? What about means of communication in case of emergency? You have it all? Good. I am relieved. Shall we head out, then, Master? No matter what lies ahead, please do not worry. As long as I am with you, I will not allow any kind of danger to get close to you."],
        summonableWith: '<:icons8archersbow:644246512926195734> 🔮 💊',
        origin: 'Kara no Kyoukai',
        code: '558879',
        NPLevel: 1,
        noblePhantasm: {
            name: "Mystic Eyes of Distortion",
            power: 50,
            description: "She can create an axis of rotation anywhere within sight and warps them telekinetically, which causes gruesome dismemberments and deaths. (first slightly increases own luck, then deals damage, decreases enemy defense, sure hit)",
            text: [""],
            image: "https://i.imgur.com/N0qyUvy.gif",
            canBeUsed: false
        }
    },

    {
        id: 46,
        name: ["atalanta", "atalante", "hunter of chastity"],
        class: "Archer",
        pictures: ["https://i.imgur.com/yp0mIB4.jpg", "https://i.imgur.com/xyI9Xiq.png", "https://i.imgur.com/OYbgKXG.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: "She is a huntress who is famous for her swift feet in Ancient Greek legend. She became famous after being the first one to drive an arrow into the Calydonian Boar during its extermination. Also, she is included as a member of the Argonauts, which assembled brave heroes from all over Greece.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 20,
            endurance: 10,
            agility: 50,
            magic: 40,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Aesthetics of the Last Spurt", "start battle with evasion (1 time); Np charge = 4; increase own agility by 50%; oponent always starts first [demerit]"],
        quotes: ["Master, will thou laugh at my request? I would be pleased if you did not..."],
        summonableWith: '<:icons8archersbow:644246512926195734>',
        origin: 'Fate/ Apocrypha',
        code: '813022',
        NPLevel: 1,
        noblePhantasm: {
            name: "Phoebus Catastrophe",
            power: 50,
            description: "Rather than her bow or arrows acting as the Noble Phantasm, it is instead the technique itself of nocking and shooting arrows with her bow. (deals damage, lower miss chance)",
            text: ["This is an offering to the two Gods."],
            image: "https://i.imgur.com/VQSWe6e.gif",
            canBeUsed: false
        }
    },

    {
        id: 47,
        name: ["tamamo no mae", "tamamo", "fox priestess of peerless beauty", "cas-ko", "mizukume", "otama"],
        class: "Caster",
        pictures: ["https://i.imgur.com/8bvVqhU.png", "https://i.imgur.com/RmZtDhD.png", "https://i.imgur.com/4nO3yuT.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female", "divine"],
        about: "She is publicly known as a Kitsune and is credited for catalyzing the downfall of the Shang dynasty, among other powerful regimes.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 40,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Witchcraft", "Delays enemy NP charge by 1 at the start of battle"],
        quotes: ["Our Master-Servant relationship? Don't worry, your wish is my command!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🍜',
        origin: 'Fate/ Extra',
        code: '950121',
        NPLevel: 1,
        noblePhantasm: {
            name: "Eightfold Blessings of Amaterasu",
            power: 50,
            description: "Once its function as a Noble Phantasm is activated, she summons a circle of levitating Ofuda surrounded by a number of glowing Torii, charges the mirror with energy, and stands in the middle of the circle to draw in the energy. The energy drawn in allows her to use her curses without the need to expend any magical energy for a limited time, comparable to performing as if she has an infinite magical energy supply. (slightly restores hp, deals damage, slightly raises magic stat, +1 NP charge, cure fear and curse)",
            text: [" God who resides in Izumo.",
                "Aesthetically certain,",
                "Breath of the soul.",
                "Residing in the mountains and watery heavens, Amaterasu.",
                "Let this freely become the proof of purification.",
                "Thy name is Weighted Stone of Tamamo.",
                "Become the sacred treasure, Mirror of Uka!",
                "Just kidding☆"
            ],
            image: "https://i.imgur.com/73TTlsI.gif",
            canBeUsed: false
        }
    },

    {
        id: 48,
        name: ["francis drake", "voyager of the storm", "el draque", "king of storms", "king of ghosts"],
        class: "Rider",
        pictures: ["https://i.imgur.com/QzwN98U.jpg", "https://i.imgur.com/80rJ2Dl.png", "https://i.imgur.com/YvTRtiK.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female"],
        about: " She was the renowned explorer who successfully became the second person alive who circumnavigated the globe. She paved the way for England to become the dominant superpower in the Age of Discovery through its substantial earnings.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 40,
            magic: 35,
            luck: 80
        },
        statsPoints: 0,
        passive: ["Pioneer of the Stars", "Starts battle with NP charge = 4; Critical Chance +5%"],
        quotes: ["Ooo... I drank too much. No good. Sorry, just let me rest my head on your lap for a minute."],
        summonableWith: '<:icons8wheel:644265939441025024> <:9777_gold:643527652464001024> 🎣',
        origin: 'Fate/ Extra',
        code: '010340',
        NPLevel: 1,
        noblePhantasm: {
            name: "Golden Wild Hunt",
            power: 50,
            description: "With the lead ship and her other Noble Phantasm, Golden Hind, acting as the core, it expands countless small crafts and exterminates the enemy with overwhelming firepower. (deals damage, increases luck)",
            text: ["Remember my name by the death from my passing! Temeroso el Draque! I am the woman who set the sun! You rascals, it's time! The King of Storms, a swarm of ghosts, this is the beginning of the Wild Hunt!"],
            image: "https://i.imgur.com/FLP0CMF.gif",
            canBeUsed: false
        }
    },

    {
        id: 49,
        name: ["jack the ripper", "innocent murderer", "legendary serial killer"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/jkdxkk0.png", "https://i.imgur.com/ZTUdkfS.png", "https://i.imgur.com/aD7fzi7.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female"],
        about: "She is one interpretation of the series of gory murders in 19th Century England. Her true nature is that of a collection of wraiths born from the aborted children of prostitutes in Whitechapel, London.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 50,
            magic: 30,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Information Erasure", "Own True Name can not be revealed by the enemy unless oponent class is Ruler"],
        quotes: ["Hmm... As long as it doesn't hurt, it's okay."],
        summonableWith: '🔪 🍬',
        origin: 'Fate/ Apocrypha',
        code: '089626',
        NPLevel: 1,
        noblePhantasm: {
            name: "Maria the Ripper",
            power: 50,
            description: "If the target is a woman the knives manifest within the target's body, instantly vivisecting their flesh, their innards forced out of their body as a result, and turning them into a dismembered corpse. (deals heavy damage against females, increases own luck)",
            text: ["Yeah, let's murder it.",
                    "Hell is starting. We are flames, rain, power... Let there be a slaughter..."
        ],
            image: "https://i.imgur.com/AfFviAE.gif",
            canBeUsed: false
        }
    },

    {
        id: 50,
        name: ["atalanta (alter)", "atalanta", "atalanta alter", "atalante (alter)", "atalante alter"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/3Ajd4Mi.png", "https://i.imgur.com/hiKKqFf.png", "https://i.imgur.com/bY6u3w2.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female"],
        about: "The appearance of herself who went through a transformation due to her personal Noble Phantasm, the Pelt of the Calydonian Boar.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 60,
            magic: 45,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Demonic Habituation", "Critical chance +10%; Critical Strength +50%"],
        quotes: ["All right. Watch from over there. So long as I have your scent, I will fight with all my strength. For your sake, Master, I would not regret even falling to ruin in a place like this."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153>',
        origin: 'Fate/ Apocrypha',
        code: '748934',
        NPLevel: 1,
        noblePhantasm: {
            name: "The Arrow that Eclipsed The Somber Sky",
            power: 50,
            description: `Consuming the Tauropolos used as an Archer, all magic power is poured into a single blow. Instead of an arrow, it should be called a ballistic missile. The devoured enemy is taken into the sticky substance's "darkness" and forcefully absorbed. (deals damage, inflicts fear(2 turns) and curse(5 turns) on the enemy)`,
            text: [""],
            image: "https://i.imgur.com/S0nW7q7.gif",
            canBeUsed: false
        }
    },

    {
        id: 51,
        name: ["vlad iii", "count dracula", "vlad", "lord impaler"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/I4CAu4h.jpg", "https://i.imgur.com/WkSRhB3.png", "https://i.imgur.com/uQ0hNWd.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male", "king"],
        about: "The greatest hero of Wallachia, while the nation was small, he was a hero who ascended to the throne and managed to turn back the numerous invasions of the Ottoman Empire that had trampled over every other country.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 50,
            endurance: 50,
            agility: 30,
            magic: 45,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Battle Continuation", "Starts the battle with active guts status"],
        quotes: ["I am your servant, and you are my vassal."],
        summonableWith: '<:icons8spear:644265939310739476>',
        origin: 'Fate/ Apocrypha',
        code: '556595',
        NPLevel: 1,
        noblePhantasm: {
            name: "Kazikli Bey",
            power: 50,
            description: "The true characteristic of the ability is its extraordinary quantity, allowing him to summon approximately twenty thousand stakes that can even overpower Heroic Spirits. (deals damage, inflicts fear(5 turns) on the enemy)",
            text: ["Come, savages who trample over my territory! It’s time to discipline you!",
                "I’ll turn my compassion and rage into red-hot stakes and skewer you all!",
                "And these stakes are not limited, but truly infinite, so despair",
                "and gorge on your own blood!"
            ],
            image: "https://i.imgur.com/qrWE4aj.gif",
            canBeUsed: false
        }
    },

    {
        id: 52,
        name: ["li shuwen", "no second strike", "god spear li"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/JbWuhLb.png", "https://i.imgur.com/iopVZyk.png", "https://i.imgur.com/4MCXsRw.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: "Legendary martial artist from China who, despite being born in modern times, carved many legends. He distinguished himself soon after beginning to take lessons in Bājíquán, ascending to the point of being extolled as the strongest in the history of Chinese martial arts.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 50,
            magic: 10,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Bajiquan", "Critical Strength +70%"],
        quotes: ["Shall we head out, Master? Fight enemies and beat them down. Could there be any more trust I can show you than that?"],
        summonableWith: '<:icons8spear:644265939310739476>',
        origin: 'Fate/ Extra',
        code: '594820',
        NPLevel: 1,
        noblePhantasm: {
            name: "No Second Strike",
            power: 50,
            description: "It is not a true Noble Phantasm, but rather the quintessence of his martial arts where all of his hard strikes, even those meant as a diversionary strike or a feint, are enough to snatch away the opponent's life (deals damage, chance to instant-kill (3%))",
            text: ["With my ba ji, two strikes are not needed! Anger! Mastery! Seven wounds of gushing blood... A purified death!!"],
            image: "https://i.imgur.com/p7qlswy.gif",
            canBeUsed: false
        }
    },
    
    {
        id: 53,
        name: ["suzuka gozen", "tate eboshi", "jk saber", "suzuka"],
        class: "Saber",
        pictures: ["https://i.imgur.com/J0sK8e1.png", "https://i.imgur.com/qGnfWaG.png", "https://i.imgur.com/Rp3bjfp.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female", "divine"],
        about: "Dancing princess who made her stronghold on Mount Suzuka during the Heian period. Together with Sakanoue no Tamuramaro, she engaged in Oni extermination.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 50,
            magic: 70,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Supernatural Power (JK)", "Critical chance +30%; Critical Strength +30%"],
        quotes: ["Master, are you super excited that you got to summon a totally strong and cute girl like me?"],
        summonableWith: '<:icons8sword:644265939009011723> 🍜 📖',
        origin: 'Fate/EXTRA CCC Fox Tail',
        code: '266083',
        NPLevel: 1,
        noblePhantasm: {
            name: "Heavenly Demon Rain",
            power: 50,
            description: "The single golden sword divides up to a maximum of 250 blades, and with her Supernatural Power, she makes them mercilessly fall like rain onto her opponents. (deals damage, raises luck, slightly raises magic, higher hit chance, inflicts curse on the enemy - 4 turns)",
            text: [
                "Written work",
                "If one unties a pillow by its string",
                "be known far and wide, Daitouren",
                "Many clouds shall rise and cover the skies like roof tiles",
                "and evil spirits shall swarm, spearing the sparrow",
                "Sword of Transcendent Wisdom and Knowledge Daishintou,",
                "Love Blast,"
            ],
            image: "https://i.imgur.com/Q1RtXTz.gif",
            canBeUsed: false
        }
    },

    {
        id: 54,
        name: ["lancelot (berserker)", "lancelot", "knight of the lake"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/p3F6FbL.png", "https://i.imgur.com/ISjthJ7.png", "https://i.imgur.com/JRQ1JUW.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: "The person serving as a negative symbol of the Arthurian legend, admired as the strongest even among the Knights of the Round Table. His downfall began when he fell in love with Artoria's queen, Guinevere.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 50,
            endurance: 50,
            agility: 60,
            magic: 40,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Eternal Arms Mastery", "Can not be confused; Critical Strength +30%"],
        quotes: ["Arrthurrr!"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153>',
        origin: 'Fate/ Zero',
        code: '050932',
        NPLevel: 1,
        noblePhantasm: {
            name: "Knight of Owner",
            power: 50,
            description: "Once Berserker grabs a hold of anything that can be even remotely conceptualized as a weapon, it instantly gains the property of becoming his Noble Phantasm. (raises agility and strength)",
            text: ["Hooooooo!!"],
            image: "https://i.imgur.com/kd5CzOa.gif",
            canBeUsed: false
        }
    },

    {
        id: 55,
        name: ["astolfo", "knight of evaporated sanity", "sailor paladin"],
        class: "Rider",
        pictures: ["https://i.imgur.com/BcqskQ9.jpg", "https://i.imgur.com/hm4SG9z.png", "https://i.imgur.com/lezbcRq.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["male"],
        about: `Among the Twelve Paladins of Charlemagne, Rider is said to be the most handsome, eternally optimistic, and completely lacking in sense. As the legends go, Rider was quite the ladies' man. As a cousin of Roland, Rider is included among those twelve-- that being said, Rider was famed as "weak" in legends. Also has the tendency to carelessly chatter about own team's weaknesses and True Names...`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 40,
            magic: 30,
            luck: 60
        },
        statsPoints: 0,
        passive: ["Evaporation of Sanity", "starts battle with NP charge = 3; increases own luck by 30%, Critical Chance +30%; Critical Strength +30%; 70% chance to reveal own name at the start of battle [demerit]"],
        quotes: ["Hm? Is it tough not having any common sense? Well, I guess so. But you know, there are things that only I can understand because I lack common sense."],
        summonableWith: '<:icons8wheel:644265939441025024> 📖 🔭',
        origin: 'Fate/ Apocrypha',
        code: '116114',
        NPLevel: 1,
        noblePhantasm: {
            name: "Otherworldly Phantom Horse",
            power: 50,
            description: "The favored mount used by Rider. (first increases Rider's agility, then deals damage)",
            text: ["Yeah! Leave it to me!\nShow us your true power!\nHippogriff!"],
            image: "https://i.imgur.com/etW60gU.gif",
            canBeUsed: false
        }
    },

    {
        id: 56,
        name: ["hero killer stain", "chizome akaguro", "chizome", "stain", "hero killer", "hero killer: stain"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/UGxEkdm.jpg", "https://i.imgur.com/nGkE1Dk.png", "https://i.imgur.com/TvH045F.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["male"],
        about: "Villain and ex-vigilante that is notorious for having killed many pro heroes",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 35,
            endurance: 50,
            agility: 60,
            magic: 30,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Intimidate", "At the start of battle inflict fear status on the enemy - 5 turns"],
        quotes: ["People show their true colors when they're on the verge of death."],
        summonableWith: '🔪',
        origin: 'My Hero Academia',
        code: '662448',
        NPLevel: 1,
        noblePhantasm: {
            name: "Bloodcurdle",
            power: 50,
            description: "Assassin's Noble Phantasm allows him to paralyze his target upon tasting a sample of their blood. (decrease enemy strength and agility, inflict stun (2 turns) on the enemy).",
            text: [""],
            image: "https://i.imgur.com/OiPrXy0.gif",
            canBeUsed: false
        }
    },

    {
        id: 57,
        name: ["henry jekyll & hyde", "dr. jekyll and mr. hyde", "henry jekyll", "edward hyde", "jekyll", "hyde", "dr. jekyll", "mr. hyde", "jekyll and hyde"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/ODkQgAJ.png", "https://i.imgur.com/hf3f0u3.png", "https://i.imgur.com/qyIxFHN.png", "https://i.imgur.com/NYIlWZs.png", "https://i.imgur.com/1bCsQn0.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male"],
        about: `He tried to detach the "evil" from his personality but ended up revealing a personality that embodied that "evil" and eventually came to commit murder, bringing his own ruin in the end.`,
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 35,
            endurance: 10,
            agility: 60,
            magic: 20,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Unstable Mind", "25% chance to gain 2 NP charge each turn; NP seal status immunity; confusion last 2 times longer [demerit]"],
        quotes: ["I... He... No, I... I will protect you... WE will protect you."],
        summonableWith: '🔪 <:5958_BrokenHeroSword:644265939126321153> 📖 👓',
        origin: 'Fate/ Grand Order',
        code: '706617',
        NPLevel: 1,
        noblePhantasm: {
            name: "Dangerous Game",
            power: 50,
            description: "A miracle drug that allows Assassin to swap between personalities. (restores hp, slightly raises strength if transforms from Assassin to Berserker, slightly raises agility if transforms the other way around)",
            text: [""],
            image: "https://i.imgur.com/oCRWXTk.gif",
            canBeUsed: false
        }
    },

    {
        id: 58,
        name: ["iskandar", "alexander the great", "king of conquerors", "the king of conquerors of the distant lands", "broskander"],
        class: "Rider",
        pictures: ["https://i.imgur.com/TEjMiaT.png", "https://i.imgur.com/WG3qV5O.png", "https://i.imgur.com/Ngkv1x5.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male", "divine", "king"],
        about: "With the eastern expedition, his military prowess that resounded in the Islamic world derived into many heroic tales and was propagated all over Asia.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 20,
            magic: 50,
            luck: 60
        },
        statsPoints: 0,
        passive: ["Lightning Conqueror", "Increases own Strength and Agility by 20%; multiply damage inflicted on the enemy on the first turn 5 times"],
        quotes: ["Hey, what are you lazing about for!? We depart for the front!"],
        summonableWith: '<:icons8wheel:644265939441025024> 🍷 <:icons8sandbucket:643527652237639701>',
        origin: 'Fate/ Zero',
        code: '010347',
        NPLevel: 1,
        noblePhantasm: {
            name: "Ionioi Hetairoi",
            power: 50,
            description: "In the Ionioi Hetairoi, the entirety of the Rider Army from when he was alive is summoned. (drastically raises Rider's strength)",
            text: [
                "Now, to the distant ends of the earth!",
                "As long as our chests beat with ambition for the far horizon, the campaign shall never end. Raise your cries of war!",
                "Ionion Hetairoi! AAAALaLaLaLaLaie!!"
            ],
            image: "https://i.imgur.com/qvlQQji.gif",
            canBeUsed: false
        }
    },

    {
        id: 59,
        name: ["nursery rhyme", "alice"],
        class: "Caster",
        pictures: ["https://i.imgur.com/EJUxb9u.jpg", "https://i.imgur.com/3IqP4nb.png", "https://i.imgur.com/EkLIfef.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "It is not a hero in the traditional sense, but the general term for any picture book that managed to manifest itself into a corporeal existence.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 30,
            magic: 45,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Meanwhile...", "50% chance to heal 5% of own HP each turn; 50% to gain +1 NP charge each turn"],
        quotes: ["Battling is fine and all, but be careful, Master. If you fall, who will love me?"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🍬 📖',
        origin: 'Fate/ Extra',
        code: '403724',
        NPLevel: 1,
        noblePhantasm: {
            name: "Nursery Rhyme: A Tale For Somebody's Sake",
            power: 50,
            description: "The story continues on forever. So long the sorrowful reader, continues to reject reality (deals damage, restores hp, gains +2 NP charge, decreases enemy strength and defense)",
            text: [
                "A nursery rhyme is a children's refrain,",
                "Tom Thumb's charming picture book,",
                "The first glimpse of Mother Goose's awakening,",
                "The sorrowful me to the lonely you,",
                "Your final wish, let's make it true."
            ],
            image: "https://i.imgur.com/SCoBaWo.gif",
            canBeUsed: false
        }
    },

    {
        id: 60,
        name: ["mata hari", "margaretha geertruida zelle", "the girl who has sunny eyes"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/B765mrT.png", "https://i.imgur.com/lvjFN66.png", "https://i.imgur.com/8WneQ1a.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "A female spy who operated in the shadows of the world, until she was executed for espionage while posing as an exotic dancer, she enthralled military officers with her alluring figure.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 10,
            magic: 35,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Espionage", "Inflict Stun and NP seal on the enemy at the start of battle (4 turns)"],
        quotes: ["Hey, are you ready to go yet?"],
        summonableWith: '🔪 🍷 🌺',
        origin: 'Fate/ Grand Order',
        code: '597148',
        NPLevel: 1,
        noblePhantasm: {
            name: "Mata Hari, The Girl Who Has Sunny Eyes",
            power: 50,
            description: "A brainwashing Noble Phantasm that is the manifestation of her legend. (inflict stun on enemy for 1 turn, confusion for 3 turns, decrease enemy strength and defense)",
            text: [""],
            image: "https://i.imgur.com/mL3ifjS.gif",
            canBeUsed: false
        }
    },

    {
        id: 61,
        name: ["revy", "rebecca lee", "rebecca", "two hands"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/WB2k8YA.jpg", "https://i.imgur.com/fvgjCq8.png", "https://i.imgur.com/Ghyg2Dt.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: "She is the driving force behind Lagoon's military might, being the fighter of the team who can single-handedly defeat an entire platoon by herself. Ultimately, she's the reason why Lagoon is so deadly. She alone makes Lagoon a force to be reckoned with.",
        level: 1,
        exp: 0,
        currentHp: 350,
        maxHp: 350,
        stats: {
            strength: 50,
            endurance: 35,
            agility: 40,
            magic: 25,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Fearless", "Immunity to fear"],
        quotes: ["Whether we live or die isn't a big issue"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> <:1426_pistol:643527652317331472> 🚬',
        origin: 'Black Lagoon',
        code: '998001',
        NPLevel: 1,
        noblePhantasm: {
            name: "Whitman Fever",
            power: 50,
            description: "Under the extreme stress of combat Berserker begins to attack indiscriminately. (deals damage, raises strength, inflict fear on the enemy for 2 turns)",
            text: [""],
            image: "https://i.imgur.com/KtAAP7d.gif",
            canBeUsed: false
        }
    },

    {
        id: 62,
        name: ["darkness", "dakunesu", "dasutinesu fōdo raratīna", "dustiness ford lalatina", "eroness", "lalatina", "raratina"],
        class: "Shielder",
        pictures: ["https://i.imgur.com/yjlj2dP.png", "https://i.imgur.com/Qe231VI.png", "https://i.imgur.com/gMY4Qvq.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: "She is a crusader with masochist tendencies who joined Kazuma's party. It is wise to hear what she has to say, but decline any and all quest recommendations she makes, because she only wants to fight insanely strong monsters that may very well wipe out the whole party.",
        level: 1,
        exp: 0,
        currentHp: 800,
        maxHp: 800,
        stats: {
            strength: 50,
            endurance: 80,
            agility: 1,
            magic: 20,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Masochist", "Each time when receiving normal attack damage increase own Strength stat by 20% of damage dealt"],
        quotes: ["I will do anything you ask Master."],
        summonableWith: '🛡 <:Dream_Escape_Rope_Sprite:643527652531240982> ⛓',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '062573',
        NPLevel: 1,
        noblePhantasm: {
            name: "Meat Shield",
            power: 50,
            description: "Shielder uses her own body in order to protect those behind her never hesitating to put herself in harm’s way (though most of the time, she has ulterior motives). Greatly raises endurance.",
            text: [""],
            image: "https://i.imgur.com/TBUsAP3.gif",
            canBeUsed: false
        }
    },

    {
        id: 63,
        name: ["eugeo", "yujio"],
        class: "Saber",
        pictures: ["https://i.imgur.com/yveQbgA.jpg", "https://i.imgur.com/wytT2FX.png", "https://i.imgur.com/7ZoylV9.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: "Alongside his childhood friend Kirito he went on a journey to become an Integrity Knight himself to rescue Alice, as well as acquiring the skills to wield the Blue Rose Sword he had retrieved from the mountains where Alice had broken the Taboo Index.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 35,
            endurance: 50,
            agility: 40,
            magic: 43,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Broken Seal", "Immune to NP Seal"],
        quotes: ["Stay Cool, Master"],
        summonableWith: '<:icons8sword:644265939009011723> 🌹 🌡',
        origin: 'Sword Art Online: Alicization',
        code: '703703',
        NPLevel: 1,
        noblePhantasm: {
            name: "Blue Rose Sword: Release recollection",
            power: 50,
            description: "Saber's sword instantaneously freezes the surrounding area, an infinite number of blue roses grow and leech life of both target and user. (Freezes target and self - 7 turns; inflict Np seal and stun on the target - 3 turns; slightly decreases target agility and raises own magic)",
            text: ["Bloom Blue Rose"],
            image: "https://i.imgur.com/yLesdYI.gif",
            canBeUsed: false
        }
    },

    {
        id: 64,
        name: ["siegfried", "sigurd", "tenacious dragon slayer"],
        class: "Saber",
        pictures: ["https://i.imgur.com/9DXb1qK.jpg", "https://i.imgur.com/35aJ73z.png", "https://i.imgur.com/tuEAkMr.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["male", "dragon", "king"],
        about: "He defeated the evil dragon Fafnir with the holy sword Balmung in hand. He is a great national hero of Germany that has many different depictions in the various legends attributed to him.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 45,
            endurance: 50,
            agility: 40,
            magic: 40,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Dragon Slayer", "+50% damage to enemies with dragon trait"],
        quotes: ["Master, sorry, but I want you to watch my back. I’ll guard the front."],
        summonableWith: '<:icons8sword:644265939009011723>',
        origin: 'Fate/ Apocrypha',
        code: '117175',
        NPLevel: 1,
        noblePhantasm: {
            name: "Balmung",
            power: 50,
            description: "It is the holy sword of the Nibelungs, used to slay the dragon, Fafnir. (Deals heavy damage to dragons, np charge +1)",
            text: ["The Evil Dragon will fall. All will be separated into light and shadow. The world will now reach the twilight.\nFall ― Balmung!"],
            image: "https://i.imgur.com/ETwurqU.gif",
            canBeUsed: false
        }
    },
    
    {
        id: 65,
        name: ["genryusai shigekuni yamamoto", "genryūsai shigekuni yamamoto", "yamamoto"],
        class: "Saber",
        pictures: ["https://i.imgur.com/FzUiENo.png", "https://i.imgur.com/zSQsi05.png", "https://i.imgur.com/TIbUz6m.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: "He was the captain of the 1st Division in the Gotei 13 and also the Captain-Commander of the whole Gotei 13. The embodiment of conviction, Yamamoto follows the laws and regulations of Soul Society to the letter, and expects the same of others.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 50,
            magic: 60,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Scorching Flames", "Add inflict burn (2 turns) to normal attacks"],
        quotes: ["Prepare yourself, next battle is near"],
        summonableWith: '<:icons8sword:644265939009011723> <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Bleach',
        code: '113113',
        NPLevel: 1,
        noblePhantasm: {
            name: "Ryūjin Jakka",
            power: 50,
            description: "The oldest and most powerful fire-type Zanpakutō, and has greater offensive power than all other Zanpakutō in Soul Society. (deals damage; inflicts burn for 7 turns)",
            text: ["Reduce All Creation to Ash"],
            image: "https://i.imgur.com/FFEwTbP.gif",
            canBeUsed: false
        }
    },

    {
        id: 66,
        name: ["casshern", "death", "the grim reaper", "kyashān", "kyashan"],
        class: "Foreigner",
        pictures: ["https://i.imgur.com/spZD3Th.jpg", "https://i.imgur.com/84YsEDT.png", "https://i.imgur.com/RVJvOu3.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: `Robot created by Braiking Boss' top scientist Ohji in order to pro-create robotic life. His purpose was a failure, so he was utilized as a perfect killing machine for Braiking Boss. He assassinated Luna and mixed his blood of death with hers of life, causing the entire world to spin into a cataclysmic state known as the "Ruin"`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 50,
            endurance: 50,
            agility: 50,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Regeneration", "Restores 5% of own HP each turn"],
        quotes: ["If the world is spiralling into ruin because of my own actions.. then it is MY responsibility to try and stop it from destroying everything"],
        summonableWith: '⚙ 🥼',
        origin: 'Casshern Sins',
        code: '168336',
        NPLevel: 1,
        noblePhantasm: {
            name: "Berserker Mode",
            power: 50,
            description: "He enter this when his life is in serious danger, after a prolonged amount of time fighting, or when angry. While in berserker mode he performs to the fullest of his abilities, his eyes glow a bright white and gains the ability to painfully regenerate.(slightly raises strength, agility; recovers hp)",
            text: ["If you've forgotten death..then you've forgotten what it truly means to be alive"],
            image: "https://i.imgur.com/v6lBvHv.gif",
            canBeUsed: false
        }
    },

    {
        id: 67,
        name: ["seto kaiba", "kaiba", "kaiba seto", "kaiba-boy"],
        class: "Caster",
        pictures: ["https://i.imgur.com/mIjf2MT.png", "https://i.imgur.com/V9WvOLJ.png", "https://i.imgur.com/flI8yGa.png", "https://i.imgur.com/bda983X.png", "https://i.imgur.com/tQfv0hd.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "dragon"],
        about: "An intellectually gifted and innovative computer programmer, engineer, and inventor during his youth, he invented virtual software for playing video games as a young child prodigy.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 15,
            endurance: 20,
            agility: 25,
            magic: 40,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Pride", "Deals double damage if HP is above 50%; deals half damage if it's equal or below 50% [demerit]"],
        quotes: ["I focus only on the future. I don’t waste my time worrying about the past!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🥼',
        origin: 'Yu-Gi-Oh!',
        code: '120081',
        NPLevel: 1,
        noblePhantasm: {
            name: "Blue-Eyes White Dragon",
            power: 50,
            description: "Caster summons Blue-Eyes White Dragons to fight by his side. (applies damage based on magic; increases endurance and luck; slightly increases magic; inflicts fear on enemy for 3 turns)",
            text: [""],
            image: "https://i.imgur.com/WqWkbv4.gif",
            canBeUsed: false
        }
    },

    {
        id: 68,
        name: ["seryu ubiquitous", "seryu", "serieux", "seryuu ubiquitous", "seryuu"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/mHrQZyd.png", "https://i.imgur.com/mQpMJk0.png", "https://i.imgur.com/hQSyxzK.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: `She was a member of the Jaegers, formerly of the Imperial Police. She was a young girl with a strong (and twisted) sense of justice. She was the owner of the Teigu, "Hekatonkheires".`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 30,
            endurance: 40,
            agility: 25,
            magic: 35,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Mechanical Body", "Immunity to poison, increase own defense by 10%"],
        quotes: ["I am my own justice"],
        summonableWith: '⚙ <:1426_pistol:643527652317331472>',
        origin: 'Akame ga Kill!',
        code: '825484',
        NPLevel: 1,
        noblePhantasm: {
            name: "Taizan's Cannon of Justice",
            power: 50,
            description: "A long ranged anti-tank rifle with high destructive power. (deals damage)",
            text: [""],
            image: "https://i.imgur.com/dcKQd8A.gif",
            canBeUsed: false
        }
    },

    {
        id: 69,
        name: ["sosuke aizen", "sōsuke aizen", "aizen sosuke", "aizen", "captain of the 5th division"],
        class: "Caster",
        pictures: ["https://i.imgur.com/dNWMvJH.jpg", "https://i.imgur.com/804UZxO.png", "https://i.imgur.com/Y1fcLd8.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: "Captain of the 5th Division in the Gotei 13.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 50,
            magic: 60,
            luck: 45
        },
        statsPoints: 0,
        passive: ["Strategic Thinking", "Each turn reduce the highest stat of the enemy by 3%. Each time, when HP falls below 25% apply evade (2times) to self."],
        quotes: ["Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🔮 🥼 👓',
        origin: 'Bleach',
        code: '808904',
        NPLevel: 1,
        noblePhantasm: {
            name: "Kyōka Suigetsu",
            power: 50,
            description: "It controls the five senses to the point where it can make the target misinterpret another person's form, shape, mass, feel, and smell to be an enemy's. (inflicts confusion for 7 turns, decreases enemy defense, applies evade (2 times))",
            text: ["Shatter"],
            image: "https://i.imgur.com/6fJXq0T.gif",
            canBeUsed: false
        }
    },

    {
        id: 70,
        name: ["lu bu fengxian", "lu bu", "general of repetition", "lü bu fengxian"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/MRVoeQZ.png", "https://i.imgur.com/YysztXE.png", "https://i.imgur.com/VV8m1Nh.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: "He is an infamously treacherous military commander from the Three Kingdoms era. For two times he cut down his foster fathers, and to repeat the act of betrayal on countless occasions was an unbelievable act for the China.",
        level: 1,
        exp: 0,
        currentHp: 550,
        maxHp: 550,
        stats: {
            strength: 55,
            endurance: 55,
            agility: 45,
            magic: 40,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Restless Soul", "Immunity to stun"],
        quotes: ["!!!"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 📖',
        origin: 'Fate/ Extra',
        code: '928122',
        NPLevel: 1,
        noblePhantasm: {
            name: "God Force",
            power: 50,
            description: "It is the strongest weapon born from the Romance of the Three Kingdoms era of China. (deals damage)",
            text: [""],
            image: "https://i.imgur.com/p1qs1Yd.gif",
            canBeUsed: false
        }
    },

    {
        id: 71,
        name: ["ishtar", "goddess of venus", "inanna", "mistress of heaven"],
        class: "Archer",
        pictures: ["https://i.imgur.com/BkCzQV0.png", "https://i.imgur.com/beFBJdt.png", "https://i.imgur.com/KTOLuxi.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "divine"],
        about: "She is the goddess of beauty, good harvests, war, lust, discord and fertility in Mesopotamian Mythology/Sumerian Mythology/Babylonian Mythology, and one among the many mother goddesses whose power is derived from the Earth Mother. Said to be the most pampered, or rather, the most beloved goddess by the other deities.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 40,
            magic: 70,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Mana Burst (Gem)", "Triples own Magic stat on 12th turn"],
        quotes: ["Something interesting is happening over there! I smell jewels! Let's get our hands on them first!"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:9777_gold:643527652464001024> 🔭',
        origin: 'Fate/ Grand Order',
        code: '661524',
        NPLevel: 1,
        noblePhantasm: {
            name: "An Gal Tā Kigal Shē",
            power: 50,
            description: "Archer warps to Venus and takes possession of its concept by means of management rights, loading it and firing it from Maanna’s magazine as a conceptual planet. (deals damage, raises own magic)",
            text: ["Here we go, Maanna! Gate open!... Fufu, think of it as an honor. This is my full throttle...!"],
            image: "https://i.imgur.com/UassbU7.gif",
            canBeUsed: false
        }
    },

    {
        id: 72,
        name: ["ren amaki", "sword hero", "bandit chief"],
        class: "Saber",
        pictures: ["https://i.imgur.com/lKhEkIh.jpg", "https://i.imgur.com/PEouz6L.png", "https://i.imgur.com/1jmbjtM.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male", "divine"],
        about: "He was less inclined to treat the Shield Hero unfairly compared to the other two heroes, however, he is terrible with cooperating with others and his solo player tendencies caused frequent problems.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 40,
            magic: 40,
            luck: 35
        },
        statsPoints: 0,
        passive: ["-", "-"],
        quotes: [""],
        summonableWith: '<:icons8sword:644265939009011723> <:6164_Instant_Ramen:643527652803739658> ⏳',
        origin: 'The Rising of the Shield Hero',
        code: '232323',
        NPLevel: 1,
        noblePhantasm: {
            name: "Legendary Sword",
            power: 50,
            description: "The Legendary Sword is one of the Four Legendary Weapons. (deals damage)",
            text: [""],
            image: "https://i.imgur.com/U0CC5kv.gif",
            canBeUsed: false
        }
    },

    {
        id: 73,
        name: ["gilgamesh", "humanity's oldest king", "king of heroes of decadence", "king of heroes", "linchpin of heaven", "king of uruk", "king of babylonia", "the golden king", "gil", "goldie", "wedge of heaven"],
        class: "Archer",
        pictures: ["https://i.imgur.com/UJ6MITZ.png", "https://i.imgur.com/xk6yfmF.png", "https://i.imgur.com/T7B6jvi.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["male", "divine", "king"],
        about: "He ruled the Sumerian city-state of Uruk, the capital city of ancient Mesopotamia in the B.C. era. He was an ultimate, transcendent being so divine as to be two-thirds god and one-third human, and no others in the world could match him.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 30,
            magic: 50,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Treasury of Babylon", "Np charge +1 per turn; doubles QP gained in battle"],
        quotes: ["Be sure you don't bore me, Mongrel"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:9777_gold:643527652464001024>',
        origin: 'Fate/ Stay Night',
        code: '012500',
        NPLevel: 1,
        noblePhantasm: {
            name: "Enuma Elish",
            power: 50,
            description: `It attacks everything in sight with a single strike. It cannot be said that what the blade cuts down is limited simply to "the enemy". (deals significant damage, inflicts fear for 2 turns)`,
            text: ["I speak of genesis. The elements amalgamate, coalesce, and bring forth the star that weaves all of creation. Pay homage in death."],
            image: "https://i.imgur.com/yzumuR7.gif",
            canBeUsed: false
        }
    },

    {
        id: 74,
        name: ["arjuna", "the endowed hero", "the awarded hero"],
        class: "Archer",
        pictures: ["https://i.imgur.com/JX3oqRc.png", "https://i.imgur.com/QKVituf.png", "https://i.imgur.com/wEf4zlw.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male", "divine"],
        about: `the great hero of Hindu Mythology from the ancient Indian epic poem, "Mahabharata", and the rival of Karna.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 40,
            magic: 60,
            luck: 65
        },
        statsPoints: 0,
        passive: ["Mana Burst (Flame)", "If burned, double damage done to the enemy; If frozen, cut it in half."],
        quotes: ["Make your decision, Master"],
        summonableWith: '<:icons8archersbow:644246512926195734> 📖 🥼 <:icons8matches:643527652119937065> <:9359_MCcoal:643529413979406336>',
        origin: 'Fate/ Grand Order',
        code: '184177',
        NPLevel: 1,
        noblePhantasm: {
            name: "Agni Gandiva",
            power: 50,
            description: "Normally just a regular bow, by activating its True Name, its arrow becomes a missile engulfed in flames. (deals damage, inflicts burn for 3 turns)",
            text: [""],
            image: "https://i.imgur.com/kcO3MKK.gif",
            canBeUsed: false
        }
    },
    
    {
        id: 75,
        name: ["truth", "god", "the world", "the universe", "all", "one"],
        class: "Ruler",
        pictures: ["https://i.imgur.com/2AIi64h.png", "https://i.imgur.com/cZo0CSJ.png", "https://i.imgur.com/pcHiGvL.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["divine"],
        about: "Enigmatic, metaphysical being who appears when a person attempts Human Transmutation.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 40,
            magic: 60,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Equivalent Exchange", "Each turn steals 3% of HP from the enemy"],
        quotes: ["Humankind cannot gain anything without first giving something in return"],
        summonableWith: '📖',
        origin: 'Fullmetal Alchemist',
        code: '770770',
        NPLevel: 1,
        noblePhantasm: {
            name: "The Gate of Truth",
            power: 50,
            description: "Inside, pure knowledge about the world, the universe, alchemy, and everything is forced into the target's mind as they begin to break down both physically and mentally. (deals damage, inflicts fear and curse for 7 turns)",
            text: ["I can't wait to see what he'll be offering."],
            image: "https://i.imgur.com/0ciiNHw.gif",
            canBeUsed: false
        }
    },

    {
        id: 76,
        name: ["jaguar man", "jaguar warrior", "werejaguar"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/zlM3Df0.png", "https://i.imgur.com/Ln3ZQmW.png", "https://i.imgur.com/fMbkBPC.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "The Jaguar, namely, a symbol of “war” and “death”, is an existence revered for a long time in the Central and South American civilizations of all eras, and it is said that, in the bygone days, it would often show its form to the world.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 40,
            magic: 25,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Fearless", "Immunity to fear"],
        quotes: ["I'm feeling bord. Let's go somewhere!"],
        summonableWith: '<:icons8spear:644265939310739476> <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Fate/ Grand Order',
        code: '148165',
        NPLevel: 1,
        noblePhantasm: {
            name: "Jaguar Man",
            power: 50,
            description: "decreases enemy luck, inflics confusion for 1 turn",
            text: [""],
            image: "https://i.imgur.com/UqBakzJ.gif",
            canBeUsed: false
        }
    },

    {
        id: 77,
        name: ["yu miaoyi", "consort yu", "yu the beauty", "akuta hinako", "crimson beauty under the moon", "gubijin", "gucchan"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/arsugyQ.png", "https://i.imgur.com/q20IZi2.png", "https://i.imgur.com/n4cW5rn.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: "Xiang Yu’s favourite concubine who was veiled in mystery and talked about in fragments of the Records of the Grand Historian.",
        level: 1,
        exp: 0,
        currentHp: 550,
        maxHp: 550,
        stats: {
            strength: 30,
            endurance: 55,
            agility: 20,
            magic: 45,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Infinite Mana Supply", "Prevents the reduction of Magic stat."],
        quotes: ["Since I'm under contract, I'll play along about you being the Master."],
        summonableWith: '🔪 👓',
        origin: 'Fate/ Grand Order',
        code: '230230',
        NPLevel: 1,
        noblePhantasm: {
            name: "Eternal Lament",
            power: 50,
            description: "A drastic move that reconstructs one's flesh anew after causing magical powers to exceed their limits, discarding the body to rampage, causing abnormal weather by means of a curse. (removes own buffs and debuffs, deals damage, inflicts curse - 5 turns)",
            text: [""],
            image: "https://i.imgur.com/SkxeDDZ.gif",
            canBeUsed: false
        }
    },

    {
        id: 78,
        name: ["light yagami", "kira", "god of the new world", "justice (kira)"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/zDZqdDw.jpg", "https://i.imgur.com/UhJAq4Z.png", "https://i.imgur.com/FXsV6FK.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: "After discovering the Death Note, he decided to use it to rid the world of criminals.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 10,
            endurance: 20,
            agility: 20,
            magic: 60,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Intelligence Gathering", "40% chance to reveal enemy name each turn"],
        quotes: ["I Am Righteous! I'm The Hero Who's Liberating People From Fear. I'm The Savior Who's Going To Be Like A God Of This Perfect New World!"],
        summonableWith: '📖 ☕',
        origin: 'Death Note',
        code: '661066',
        NPLevel: 1,
        noblePhantasm: {
            name: "Death Note",
            power: 50,
            description: "Supernatural notebook used by the Shinigami to sustain their life. (if the enemy name is known: deals damage, inflicts confusion - 3 turns, inflicts curse - 7 turns, insta kill chance 6%)",
            text: [""],
            image: "https://i.imgur.com/f0Fks0M.gif",
            canBeUsed: false
        }
    },

    {
        id: 79,
        name: ["monika", "lilmonix3", "president of the literature club"],
        class: "Moon Cancer",
        pictures: ["https://i.imgur.com/m5IzGDl.jpg", "https://i.imgur.com/QVb6omq.png", "https://i.imgur.com/2GO8zfY.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female"],
        about: "The poster girl of Doki Doki Literature Club! and one of the five members and President of the Literature Club.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 35,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Self-aware", "Prevents decrease of own stats"],
        quotes: ["There's nothing more I want than to be in the same room as you, **for real**"],
        summonableWith: '📖',
        origin: 'Doki Doki Literature Club!',
        code: '316022',
        NPLevel: 1,
        noblePhantasm: {
            name: "Just Monika 💕",
            power: 50,
            description: "JUST MONIKA! She is all you need JUST MONIKA! JUST MONIKA! JUST MONIKA! (decreases enemy strength, magic, and defense, inflicts stun and NP seal - 1 turn , inflicts fear - 4 turns)",
            text: ["JUST MONIKA! JUST MONIKA! JUST MONIKA! JUST MONIKA! JUST MONIKA! JUST MONIKA! JUST MONIKA! FOREVER! JUST JUST MONIKA!"],
            image: "https://i.imgur.com/wbhQZAM.gif",
            canBeUsed: false
        }
    },

    {
        id: 80,
        name: ["jeanne d'arc", "jeanne d’arc", "jeanne", "joan of arc", "holy maiden of salvation", "la pucelle d'orléans", "the maiden of orleans", "st. joan"],
        class: "Ruler",
        pictures: ["https://i.imgur.com/Of73goz.png", "https://i.imgur.com/PZFlqlq.png", "https://i.imgur.com/pR0NAGd.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: "The Saint of Orleans. A Catholic saint born in Domrémy, France, and the heroine of France who liberated Orléans in the Hundred Years' War.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 50,
            magic: 55,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Revelation", "At the start of the battle provides all informations about the enemy; during the battle there is 20% chance to get insight of the enemy current stats"],
        quotes: ["Bear no ill will for any Servant, but show them kindness as we battle together. I'm sure you can do it, Master."],
        summonableWith: '🍞 <:icons8matches:643527652119937065>',
        origin: 'Fate/Apocrypha',
        code: '060112',
        NPLevel: 1,
        noblePhantasm: {
            name: "Luminosité Eternelle",
            power: 50,
            description: "By planting it into the ground, tightly grasping it, and activating it as a Noble Phantasm, it converts her EX-rank Magic Resistance into protection against all harm, both physical and spiritual. (increases defence, significantly restores hp)",
            text: ["Here's the work of the Lord!\nMy flag, defend our brethrens!"],
            image: "https://i.imgur.com/A3eQy4c.gif",
            canBeUsed: false
        }
    },

    {
        id: 81,
        name: ["ichigo kurosaki", "ichigo", "itsygo", "kurosaki ichigo", "berry-tan"],
        class: "Saber",
        pictures: ["https://i.imgur.com/ajURJhh.jpg", "https://i.imgur.com/GpwhOIz.png", "https://i.imgur.com/pUC4q2B.png", "https://i.imgur.com/mJtdMl1.png", "https://i.imgur.com/OjO8cEn.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: "Human who is also a Substitute Shinigami.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 45,
            endurance: 50,
            agility: 50,
            magic: 55,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Reiatsu Fluctuaction", "Each turn there is 70% chance to raise all stats by 10% , if fails, lower all stats by 5% [demerit]"],
        quotes: ["Never back from from your challenges. Just because it's not easy doesn't mean you should give up Master"],
        summonableWith: '<:icons8sword:644265939009011723> <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Bleach',
        code: '151515',
        NPLevel: 1,
        noblePhantasm: {
            name: "Tensa Zangetsu",
            power: 50,
            description: "Saber takes all the power of his Bankai, compresses it into a small, condensed form, and uses the power of the Bankai to perform high-speed combat. (greatly increases speed and magic, slightly increases strength; 2nd use - deals damage)",
            text: ["It's meaningless to just live, it's meaningless to just fight. I want to win! Bankai!"],
            image: "https://i.imgur.com/gvAkeHl.gif",
            canBeUsed: false
        }
    },

    {
        id: 82,
        name: ["passionlip", "alter ego m", "lip", "passhonrippu"],
        class: "Alter Ego",
        pictures: ["https://i.imgur.com/5tDcEzl.png", "https://i.imgur.com/4mdmEvf.png", "https://i.imgur.com/DDiFDta.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female", "divine"],
        about: "She was created by BB as a Heroic Spirit-Complex. Classified as a High-Servant, she was created from BB accessing the Moon Cell's Servant Archive and selecting goddesses compatible with the Ego from inside of it.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 55,
            endurance: 50,
            agility: 30,
            magic: 35,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Masochist", "Each time when receiving normal attack damage increase own Strength stat by 20% of damage dealt"],
        quotes: ["Servants are to serve their Masters... I'm scared, but I will help you."],
        summonableWith: '🧱 <:Donut:643527652266868767>',
        origin: 'Fate/Extra CCC',
        code: '160160',
        NPLevel: 1,
        noblePhantasm: {
            name: "Brynhildr Romantia",
            power: 50,
            description: "The more love she feels for the target, the stronger its power, and the more accurate and damaging it will become. (deals damage, recovers hp)",
            text: ["Oh, this is the form of love..."],
            image: "https://i.imgur.com/3zXnIPW.gif",
            canBeUsed: false
        }
    },

    {
        id: 83,
        name: ["kid gil", "ko-gil", "young gil", "child gil", "gil-kun", "gilgamesh (child)"],
        class: "Archer",
        pictures: ["https://i.imgur.com/p143tSk.png", "https://i.imgur.com/ILwSjQX.png", "https://i.imgur.com/TAs87OR.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["male", "divine", "king"],
        about: `As a child, he was considered to be a king with aptitude for ruling superior to all others, the "epitome of the ideal boy king."`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 30,
            magic: 45,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Golden Rule", "Doubles the amount of QP gained in battle"],
        quotes: ["I know it's sentimental, but I feel like I've been your Servant for a long time. Yes... It must be a happy illusion. Even if it's one I must wake up from someday..."],
        summonableWith: '<:icons8archersbow:644246512926195734> <:9777_gold:643527652464001024> 🍬',
        origin: 'Fate/hollow ataraxia',
        code: '214030',
        NPLevel: 1,
        noblePhantasm: {
            name: "Enkidu",
            power: 50,
            description: "It is a chain named after his closest friend, made to bind the gods so they cannot escape. (deals damage, inflicts stun for 2 turns)",
            text: [""],
            image: "https://i.imgur.com/A2HKUP8.gif",
            canBeUsed: false
        }
    },

    {
        id: 84,
        name: ["renji abarai", "red pineapple", "renji", "freeloader-san", "lieutenant of the 6th division"],
        class: "Saber",
        pictures: ["https://i.imgur.com/oybBD9K.png", "https://i.imgur.com/qcQfA24.png", "https://i.imgur.com/X3XNIeg.png", "https://i.imgur.com/vnmJQN0.png", "https://i.imgur.com/dRuRGq3.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: "Lieutenant of the 6th Division under Captain Byakuya Kuchiki.",
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 45,
            endurance: 50,
            agility: 25,
            magic: 20,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Long Reach", "Deals 50% more damage to Archer Class enemies"],
        quotes: ["Worrying about a warrior's life on the battlefield is only an insult."],
        summonableWith: '<:icons8sword:644265939009011723> 🔗',
        origin: 'Bleach',
        code: '266113',
        NPLevel: 1,
        noblePhantasm: {
            name: "Hihiō Zabimaru",
            power: 50,
            description: "Zabimaru gains many more, much larger segments, resembling a mix between a snake’s vertebral column and the pick-like protrusions of his Shikai segments. (increases strength and endurance, slightly increase magic, 2nd use - deals damage) ",
            text: ["Bankai!"],
            image: "https://i.imgur.com/Jiu5XB1.gif",
            canBeUsed: false
        }
    },

    {
        id: 85,
        name: ["satou kazuma", "hikineet", "lolineet", "kazuma satou", "kazuma"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/PVbaBA3.png", "https://i.imgur.com/x5wtWZ5.png", "https://i.imgur.com/1KXJFlo.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male"],
        about: "He was reincarnated into the Fantasy World after dying.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 15,
            endurance: 10,
            agility: 25,
            magic: 20,
            luck: 70
        },
        statsPoints: 0,
        passive: ["Golden Rule", "Doubles the amount of QP gained in battle"],
        quotes: [`I yearn for true gender equality. I have no patience for one who talks about female privilege when it suits them, and then complains about someone "not being a man" when it's convenient`],
        summonableWith: '🔪 <:9777_gold:643527652464001024>',
        origin: 'KonoSuba',
        code: '171620',
        NPLevel: 1,
        noblePhantasm: {
            name: "Steal",
            power: 50,
            description: "This manifests in Assassin stealing the most valuable item someone has on them, but if he is using ‘Steal’ on a woman, it usually results in him stealing their panties, to his enjoyment. (steals fraction of random stat from the oponent and transfers it to Assassin[this NP effectiveness is being calculated based on luck]; if enemy is female inflict stun and NP seal [2 turns] )",
            text: [""],
            image: "https://i.imgur.com/pLWJJMy.gif",
            canBeUsed: false
        }
    },

    {
        id: 86,
        name: ["altair", "military uniform princess", "gunpuku no himegimi", "aluminum foil"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/ywGhh9W.png", "https://i.imgur.com/Z7KTHCI.png", "https://i.imgur.com/4BMT2qT.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: "Secondary and penultimate creation of Setsuna Shimazaki before her suicide, based on Shirotsumekusa from social game Eternal Wars Megalosphere",
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 35,
            endurance: 45,
            agility: 40,
            magic: 60,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Sword Shield", "Increases own defence by 30%"],
        quotes: ["Are you a main character Master?"],
        summonableWith: '<:icons8archersbow:644246512926195734> 📖',
        origin: 'Re:CREATORS',
        code: '391314',
        NPLevel: 1,
        noblePhantasm: {
            name: "Holopsicon",
            power: 50,
            description: "Described by Avenger that it is omnipotent, Holopsicon's vast array of abilities is the direct result of her having no story of her own. (raises own defence, decreases enemy magic, deals damage)",
            text: [""],
            image: "https://i.imgur.com/8sRxW9V.gif",
            canBeUsed: false
        }
    },

    {
        id: 87,
        name: ["blitz talker", "blitz"],
        class: "Archer",
        pictures: ["https://i.imgur.com/gWKhpMl.png", "https://i.imgur.com/CnQ8tVN.png", "https://i.imgur.com/3We2n15.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: "Secondary character from cyberpunk hard-boiled genre manga and anime Code・Babylon. He is a middle-aged ex-detective and bounty hunter/mercenary.",
        level: 1,
        exp: 0,
        currentHp: 350,
        maxHp: 350,
        stats: {
            strength: 35,
            endurance: 35,
            agility: 30,
            magic: 30,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Gravity Watch", "Prevents decrease of own agility stat"],
        quotes: ["Talking through things only works when both sides want to"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:1426_pistol:643527652317331472> 🚬 📖 👓 🔍',
        origin: 'Re:CREATORS',
        code: '210120',
        NPLevel: 1,
        noblePhantasm: {
            name: "Gravity Bomb",
            power: 50,
            description: "Special type of bullet he can use called a Gravity Bomb which can cause massive damage as well as break shields (deals damage, decreases enemy magic and defence)",
            text: [""],
            image: "https://i.imgur.com/Z7xMtJu.gif",
            canBeUsed: false
        }
    },

    {
        id: 88,
        name: ["fuuma kotarou", "fuma kotaro", "fūma kotarō", "evil-wind", "mr. red hair", "mr. redheaded ninja"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/qqgz8J4.png", "https://i.imgur.com/2tqAXP9.png", "https://i.imgur.com/wE0x7e4.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: `Served successor of Houjou Souun - Ujitsuna. Their original name derives from that of their village, and they would normally earn provisions through hunting, lumberjacking and cultivating small fields. However, upon taking up a mission, they would call themselves "Fuuma" and have their dreadfulness become known across the land.`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 35,
            endurance: 20,
            agility: 55,
            magic: 35,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Sabotage", "Reduces enemy Strength and Magic stats by 50% at the beginning of battle."],
        quotes: ["Let's keep working together until you become a respectable commander, no, a fine lord."],
        summonableWith: '🔪 🍜',
        origin: 'Fate/Grand Order',
        code: '117117',
        NPLevel: 1,
        noblePhantasm: {
            name: "Immortal Chaos Brigade",
            power: 50,
            description: "It summons his 200 subordinates as spiritual bodies, automatically turns the surroundings of the enemy group into darkness, and throw them into a hell of agonizing cries. (deals damage, decreases enemy defence, inflicts confusion - 2 turns on the enemy)",
            text: [" Well then, here's my trump card.\nHere is the great flames of hell, namely, pandemonium"],
            image: "https://i.imgur.com/8OpSlQM.gif",
            canBeUsed: false
        }
    },

    {
        id: 89,
        name: ["leonardo watch", "leonardo", "leo", "reonarudo wocchi", "tortoise knight", "pube-head", "lord pubes", "signor pubes", "pubes the great"],
        class: "Foreigner",
        pictures: ["https://i.imgur.com/1hEJC0S.png", "https://i.imgur.com/VgQoBXn.png", "https://i.imgur.com/OmDOtXg.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male"],
        about: `He is a photographer who came to Hellsalem's Lot to help his younger sister, Michella Watch. Upon visiting Hellsalem's Lot, an entity known as Riga El Menuhyut gave him the "All-Seeing Eyes of the Gods" at the cost of his younger sister's eyesight.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 15,
            endurance: 30,
            agility: 25,
            magic: 40,
            luck: 25
        },
        statsPoints: 0,
        passive: ["All-Seeing Eyes of the Gods", "Lowers enemy agility by 30% at the start of battle; immunity to confusion"],
        quotes: ["When things seem beyond help, if you open your eyes and take a really good look… It’s a lot better than turning your back and hiding your eyes Master"],
        summonableWith: '👓 🔍',
        origin: 'Blood Blockade Battlefront',
        code: '145012',
        NPLevel: 1,
        noblePhantasm: {
            name: "All Seeing Eyes of God",
            power: 50,
            description: "Eye holders are capable of altering and controlling the vision of those around them, such as switching two people's field of vision, inducing nauseating hallucinations and the power over visual illusions in general.(Reveals True Name, increases own luck, heals confusion, inflicts confusion on the enemy - 5 turns)",
            text: [""],
            image: "https://i.imgur.com/K6X2LDR.gif",
            canBeUsed: false
        }
    },

    {
        id: 90,
        name: ["alma tandoji", "alma tandōji", "alma", "tandōji alma", "tandoji alma", "alma tandouji", "tandōji aruma"],
        class: "Foreigner",
        pictures: ["https://i.imgur.com/AstMExt.png", "https://i.imgur.com/PaqFMbe.png", "https://i.imgur.com/KAssQnJ.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: `He was born with the power of Sacred Seven from his mother's exposure. A few years ago before the series, he lost control of his powers and harmed a lot of people. Therefore, he has been living in solitude ever since.`,
        level: 1,
        exp: 0,
        currentHp: 350,
        maxHp: 350,
        stats: {
            strength: 35,
            endurance: 35,
            agility: 35,
            magic: 40,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Intangibility", "10% chance to apply evade (1 time) on self each turn"],
        quotes: ["I used to think, if I didn't have this power, life wouldn't be so hard. Or it would be better if I'd never been born in the first place. But people came and reached out to me. It's like everything changed since then. And now I think, maybe there is a reason I have this power. And maybe there's even a reason for me to live. I want to protect them and you too, Master."],
        summonableWith: '<:7937_JustARock:643527652732567563> <:4933_MCemerald:643529381553111070> <:3182_diamond:643527652455743490>',
        origin: 'Sacred Seven',
        code: '707117',
        NPLevel: 1,
        noblePhantasm: {
            name: "Precision Blade",
            power: 50,
            description: `Turning part of his "scarf" into a sword used for precision cutting, its blade can be controlled. (deals damage, raises own luck and slightly strength)`,
            text: [""],
            image: "https://i.imgur.com/MalDYhE.gif",
            canBeUsed: false
        }
    },

    {
        id: 91,
        name: ["chloe von einzbern", "kuro", "chloe", "dark illya", "miss kakuloe", "miss kaku"],
        class: "Archer",
        pictures: ["https://i.imgur.com/NvSMC2U.png", "https://i.imgur.com/VcbUnkG.png", "https://i.imgur.com/XIoXHsZ.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: "The half that separated from that manifested by acquiring the mold of a certain heroic spirit. Unbefitting her childish appearance, she constantly manipulates the surrounding people with an alluring behavior.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 40,
            magic: 30,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Kiss Demon", "20% chance to steal 1 NP charge and 10% of their magic stat from the enemy each turn."],
        quotes: ["I wonder... What does your magical energy taste like? Ah, you don't have to run away. Hmph. Silly, I was just kidding. ...If I was serious you wouldn't be able to resist me anyway. Or even want to."],
        summonableWith: '<:icons8archersbow:644246512926195734> 🍬 👓',
        origin: 'Fate/kaleid liner',
        code: '133029',
        NPLevel: 1,
        noblePhantasm: {
            name: "Excalibur II",
            power: 50,
            description: "Modified version of the original Excalibur using Reinforcement. (deals significant damage)",
            text: [""],
            image: "https://i.imgur.com/qbh4c2T.gif",
            canBeUsed: false
        }
    },

    {
        id: 92,
        name: ["oda nobunaga", "demon king of the sixth heaven", "nobu", "demon archer", "big fool of owari", "nobbu", "the great fool of owari", "king of innovation"],
        class: "Archer",
        pictures: ["https://i.imgur.com/LTvJWTq.png", "https://i.imgur.com/0All6A3.png", "https://i.imgur.com/1YtgXre.png", "https://i.imgur.com/XGKCOCh.png", "https://i.imgur.com/fqePls7.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female", "king"],
        about: "She made a name for herself in the world upon defeating Imagawa Yoshimoto in the Battle of Okehazama. Responsible for the de facto downfall of the Muromachi Shogunate, she had great influence during the closure of the long, turbulent war period lasting since the Ōnin War",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 30,
            endurance: 40,
            agility: 30,
            magic: 40,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Unifying the Nation by Force", "At the start of battle raise all stats by distributing stat points equal to the enemy magic stat among all own stats equally."],
        quotes: ["Yes! Retainer, Master, what does it matter! You and I are one and the same! Together we will unify the world!"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:1426_pistol:643527652317331472> <:icons8matches:643527652119937065> 🍜',
        origin: 'Fate/KOHA-ACE',
        code: '697152',
        NPLevel: 1,
        noblePhantasm: {
            name: "Demon King of the Sixth Heaven",
            power: 50,
            description: `Upon its activation the world, acting as the "accumulation of the fear and reverence that the people held for her after death", materializes a scorching hell. (drastically raises own strength, inflicts burn on the enemy - 7 turns and on self - 5 turns[demerit]; inflicts curse on divine enemies - 7turns)`,
            text: ["Wahaha! Human life lasts only 50 years\nContrast human life with life of Geten\nIt is but a very short dream and illusion. Behold, the Demon King of the Sixth Heaven!"],
            image: "https://i.imgur.com/gmkW3bX.gif",
            canBeUsed: false
        }
    },

    {
        id: 93,
        name: ["okita souji", "okita sōji", "okita soji", "okita", "sakura saber"],
        class: "Saber",
        pictures: ["https://i.imgur.com/T2ED9sP.png", "https://i.imgur.com/h01jAni.png", "https://i.imgur.com/PRYFU42.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "The captain of the first unit of the Shinsengumi, a public order organization that was mostly active in the Kyoto of the Edo period's closing days.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 30,
            endurance: 10,
            agility: 60,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Shukuchi", "Always starts battle first"],
        quotes: ["Let's go on patrol!"],
        summonableWith: '<:icons8sword:644265939009011723> 🍜 💊',
        origin: 'Fate/KOHA-ACE',
        code: '745158',
        NPLevel: 1,
        noblePhantasm: {
            name: "Lightless, Three-Stage Thrust",
            power: 50,
            description: `It is a concealed sword that is produced by transcendent technique and speed from the stance of Hira-Seigan (deals defense ignoring damage, sure hit, drastically increases luck)`,
            text: [
                "Receive the brilliance of my concealed sword!",
                "One silent step... Two steps infinite... Three steps, a sword absolute!",
                "Lightless, Three Stage Thrust!"
        ],
            image: "https://imgur.com/v0pvamj.gif",
            canBeUsed: false
        }
    },

    {
        id: 94,
        name: ["megumin", "crazy-headed girl", "jailbait", "crazy crimson demon girl", "the greatest of the crimson demons", "the explosion mage", "eromin", "meagermin", "explosion artisan", "the true crimson goddess of destruction"],
        class: "Caster",
        pictures: ["https://i.imgur.com/0gj1nOq.png", "https://i.imgur.com/1HE60x1.png", "https://i.imgur.com/sDZ9HRR.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "An Arch Wizard of the Crimson Demon Clan, has very little self-control, especially when it comes to using Explosion magic. She has no problem wasting her spell on empty plains or abandoned castles, as long as she can use Explosion once a day.",
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 10,
            endurance: 15,
            agility: 20,
            magic: 55,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Rapid Casting", "Charge gained each turn +1"],
        quotes: ["I can't wait to cast another Explosion Master!"],
        summonableWith: '<:icons8magicwand:644277713216995348> 🧨',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '101417',
        NPLevel: 1,
        noblePhantasm: {
            name: "Explosion Magic",
            power: 50,
            description: `Deals devastating damage, inflicts stun and NP seal on self - 24 turns[demerit]`,
            text: ["Explosion!!!"],
            image: "https://i.imgur.com/jgimUBd.gif",
            canBeUsed: false
        }
    },

    {
        id: 95,
        name: ["ivan the terrible", "ivan vasilyevich", "ivan", "ivan grozny", "thunderous emperor", "ivan iv", "ivan the formidable", "grand prince of moscow"],
        class: "Rider",
        pictures: ["https://i.imgur.com/5lYpFj1.png", "https://i.imgur.com/eZibCnZ.png", "https://i.imgur.com/0ko9TLI.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["male", "king"],
        about: `As of the time of the Lostbelt, he had ruled as Tsar of Russia for nearly 450 years into present day 2018 AD of the Lostbelt, and later registered as a Servant of Chaldea after the Lostbelt was destroyed.`,
        level: 1,
        exp: 0,
        currentHp: 550,
        maxHp: 550,
        stats: {
            strength: 45,
            endurance: 55,
            agility: 20,
            magic: 40,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Intimidate", "At the start of battle inflict fear status on the enemy - 5 turns"],
        quotes: ["I may be willing to allow you to join my organization, should you desire it"],
        summonableWith: '<:icons8wheel:644265939441025024> 🌡',
        origin: 'Fate/Grand Order',
        code: '205205',
        NPLevel: 1,
        noblePhantasm: {
            name: "The Beast that Accompanied me On My Journeys",
            power: 50,
            description: `Crucession of the Divine Beast. This is the ascension path he (believe) would one day walk to heaven. (deals damage, decreases enemy defense)`,
            text: [""],
            image: "https://i.imgur.com/NWYc5Aq.gif",
            canBeUsed: false
        }
    },

    {
        id: 96,
        name: ["magane chikujoin", "magane", "magane chikujouin", "chikujōin magane", "miracle maid", "chikujoin magane", "chikujouin magane"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/9jl3MQ4.png", "https://i.imgur.com/8VyMjDW.png", "https://i.imgur.com/FZouq55.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: `She is a criminal who murdered the entire student body of Korougamine Academy in "Sougenkyu Murder Case" in the fifth volume of the original series.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 15,
            endurance: 15,
            agility: 20,
            magic: 40,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Mental Pollution", "Immunity to confusion"],
        quotes: ["Don't blame others for your own stupidity"],
        summonableWith: '🔪 📖 <:9777_gold:643527652464001024>',
        origin: 'Re:CREATORS',
        code: '616569',
        NPLevel: 1,
        noblePhantasm: {
            name: "Infinite Deception of Words",
            power: 50,
            description: `An ability allows her to bend reality through lies and deception. (deals damage, increases own defense, inflicts confusion on the enemy - 5 turns, increases enemy strength)`,
            text: ["a lie for a lie"],
            image: "https://i.imgur.com/qGapyzf.gif",
            canBeUsed: false
        }
    },

    {
        id: 97,
        name: ["ereshkigal", "the queen of kur", "mistress of the underworld", "the goddess of death", "goddess of kur", "the goddess of the netherworld"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/VTO4LGD.png", "https://i.imgur.com/czh0Bcl.png", "https://i.imgur.com/m38jYyL.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female", "divine"],
        about: "Goddess of the Underworld in Sumerian myth. She freely wields a spear-like cage; at times stabbing the enemy with it, at times imprisoning souls, at times summoning lightning, she is the fearsome ruler of the underworld.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 20,
            magic: 45,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Protection of the Underworld", "Raises own endurance by 50% at the start of battle."],
        quotes: ["Don't forget that we are human and goddess before we are Master and Servant. If you ever do something that goes against humanity, you will face my divine punishment!"],
        summonableWith: '<:icons8spear:644265939310739476> <:7937_JustARock:643527652732567563>',
        origin: 'Fate/Grand Order',
        code: '196159',
        NPLevel: 1,
        noblePhantasm: {
            name: "Kur Kigal Irkalla",
            power: 50,
            description: `An earth impact that crumbles Mt. Ebih through earthquakes and alterations to the very terrain. True meaning of this Noble Phantasm lies in 'changing the field to the underworld' (deals damage, increases own magic and strength)`,
            text: [
                "Fine, I’ll cast you down to the botton of the earth!",
                "Please, Meslamtaea! Experience the Providence of the Underworld! Appear, Shrine of Fever.",
                "This is my Kur Kigal Irkalla"
        ],
            image: "https://i.imgur.com/XE0elXG.gif",
            canBeUsed: false
        }
    },

    {
        id: 98,
        name: ["irisviel (dress of heaven)", "irisviel von einzbern", "iri", "white holy grail", "irisviel (holy grail)"],
        class: "Caster",
        pictures: ["https://i.imgur.com/U2nrI3J.png", "https://i.imgur.com/4rdk2gy.png", "https://i.imgur.com/BRcLswY.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "divine"],
        about: "Manifested in a transient form as a transient Servant. A person who sneakily emerged from the Holy Grail. A person that is the same as the terminal of the Holy Grail.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 30,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Infinite Mana Supply", "Prevents the reduction of Magic stat."],
        quotes: ["What we call the human heart... It's such a mystery, isn't it?"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '111171',
        NPLevel: 1,
        noblePhantasm: {
            name: "Song of Grail",
            power: 50,
            description: `It is her love and motherhood bonded with the Holy Grail, allowing for the temporary granting of "her sincere and pure wish." (significantly restores hp, cures all status conditions, grants guts status)`,
            text: [
                "Release! Heaven's Feel!",
                "Sing Out, O' White Grail!"
            ],
            image: "https://i.imgur.com/wa95LLa.gif",
            canBeUsed: false
        }
    },

    {
        id: 99,
        name: ["black iri", "irisviel von einzbern", "iri", "black holy grail"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/rQ4wBDT.png", "https://i.imgur.com/wLA52vW.png", "https://i.imgur.com/bsOk3K7.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female", "divine"],
        about: "Formed through Angra Mainyu possessing the remnants of Avenger's personality in the Greater Grail.",
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 30,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Black Blessing", "Reduces enemy healing received by 50%"],
        quotes: ["Die."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/ Zero',
        code: '616660',
        NPLevel: 1,
        noblePhantasm: {
            name: "Song of Grail",
            power: 50,
            description: `It is a damaging attack rather than a healing ability. (deals significant damage, inflicts curse - 10 turns, removes guts status from the enemy)`,
            text: [
                "Sing Out, O' Black Grail"
            ],
            image: "https://i.imgur.com/qVZlYG0.gif",
            canBeUsed: false
        }
    },

    {
        id: 100,
        name: ["bedivere", "the silver arm", "shining airgetlám", "lucius", "caretaker of the king"],
        class: "Saber",
        pictures: ["https://i.imgur.com/kktT9Ac.png", "https://i.imgur.com/rkWiAe2.png", "https://i.imgur.com/HamZJJ5.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male"],
        about: `The first, and only surviving knight of the round from Arthurian Legend, he served as the steward of the royal court, the king's care-taker. The individual who was present at the king's final moments. `,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 55,
            magic: 40,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Calm and Collected", "Immunity to confusion"],
        quotes: ["To trush you with my sword is the same as entrusting you with my fate. ...While I devoted my loyalty to my king, now I shall use this sword for you, my Master."],
        summonableWith: '<:icons8sword:644265939009011723> <:3679_silver:643527652250222604>',
        origin: 'Fate/Stay Night',
        code: '126126',
        NPLevel: 1,
        noblePhantasm: {
            name: "Dead End- Airgetlám",
            power: 50,
            description: `By releasing the arm’s true name, with the swing of an arm an entire army is dispatched with the full might of excalibur, at the cost of the degradation of the wielder’s spirit and soul. (deals significant damage, saber takes damage equal to 10% his max health [demerit])`,
            text: [""],
            image: "https://i.imgur.com/fm7whvA.gif",
            canBeUsed: false
        }
    },

    {
        id: 101,
        name: ["scáthach", "scathach", "queen of the land of shadows", "witch of dún scáith", "witch of dun scaith", "lord of spirits", "shishou"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/dupo1D5.png", "https://i.imgur.com/i3G3z60.png", "https://i.imgur.com/lo9bMhU.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "king"],
        about: `The queen and gatekeeper of the foreign territory - haunted realm called "Land of Shadows", a prodigy of spearmanship and Rune magic. Proud and not serving anyone. Overflowing with talent, she herself understands more than anyone else that she is different from the mediocre.`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 50,
            magic: 50,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Wisdom of Dún Scáith", "Critical Strength +30%; upon inflicting a Critical Hit apply evade to self (1 time)"],
        quotes: ["Am I lonely? No...I wouldn't say that. Even at the far corners of Dún Scáith, I have had many brave warriors gathered to be my apprentices."],
        summonableWith: '<:icons8spear:644265939310739476>',
        origin: 'Fate/Grand Order',
        code: '070452',
        NPLevel: 1,
        noblePhantasm: {
            name: "Gáe Bolg Alternative",
            power: 50,
            description: `Although their shapes are similar, this is actually something different from the spear that Cú Chulainn possesses. A specialized weapon one-step older, but of the same model as Gae Bolg that has been used since earlier. (deals damage, inflicts stun - 2 turns, 5% insta kill chance)`,
            text: [""],
            image: "https://i.imgur.com/4c5Jdmk.gif",
            canBeUsed: false
        }
    },

    {
        id: 102,
        name: ["aqua", "useless goddess", "goddess of water", "lady aqua", "goddess of the axis church"],
        class: "Caster",
        pictures: ["https://i.imgur.com/gD2EYNp.png", "https://i.imgur.com/rSg8pIP.png", "https://i.imgur.com/UXnWbyE.png", "https://i.imgur.com/rSg8pIP.png", "https://i.imgur.com/UXnWbyE.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "divine", "immune to curse", "immune to poison"],
        about: `Prior to life in the Fantasy World, she was a goddess of water who guided humans to the afterlife; within, she is worshipped by the Axis Order. `,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 45,
            magic: 50,
            luck: 1
        },
        statsPoints: 0,
        passive: ["Purity", "Immunity to poison and curse"],
        quotes: ["Hey, Master, what did you do this time?!"],
        summonableWith: '<:icons8magicwand:644277713216995348> <:6191_water_water:643527652203954186> 🍷',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '835683',
        NPLevel: 1,
        noblePhantasm: {
            name: "Nature's Beauty",
            power: 50,
            description: `A Skill that makes two fans appear on both hands and a pot of soil appear on top of your head. Spouts of water will emerge from each fan while a flower grows in the pot that will eject blossoms once fully grown. (does nothing). 2ND use: **God Requiem** (deals significant damage( heavy damage to Evil alignment servants), grants guts status to self)`,
            text: [""],
            image: "https://i.imgur.com/Jx5zOj1.gif",
            canBeUsed: false
        }
    },

    {
        id: 103,
        name: ["sakuya izayoi", "sakuya", "izayoi", "perfect maid", "perfect and elegant servant", "maid of the scarlet devil mansion", "dog of the devil", "dangerous illusionist"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/AgWRJMF.png", "https://i.imgur.com/gpIXRNt.png", "https://i.imgur.com/HWLEVHu.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female"],
        about: `Assassin is the Chief Maid who serves Remilia Scarlet, the head of the Scarlet Devil Mansion. She is the only human living in the Scarlet Devil Mansion.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 25,
            endurance: 30,
            agility: 55,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Time Manipulation", "Prevents decrease of own Agility stat"],
        quotes: ["Tonight's dinner will be Japanese-style."],
        summonableWith: '🔪 ⏳ <:3679_silver:643527652250222604>',
        origin: 'Touhou Project',
        code: '060708',
        NPLevel: 1,
        noblePhantasm: {
            name: "Killing Doll",
            power: 50,
            description: `Assassin activates her time manipulating abilities, allowing her to appear and reappear like a phantom while barraging her enemies with a flurry of silver knives. (Deals def ignoring damage calculated from own agility instead of magic(NP only), slightly increases agility, sure hit, enemy NP charge -1)`,
            text: [""],
            image: "https://i.imgur.com/zSQuOpD.gif",
            canBeUsed: false
        }
    },

    {
        id: 104,
        name: ["sora", "[ ]", "blank", "immanity king"],
        class: "Ruler",
        pictures: ["https://i.imgur.com/QvubaiC.png", "https://i.imgur.com/a1PtgEt.png", "https://i.imgur.com/6ZbY9z5.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male", "king"],
        about: `Abandoned by his parents, Sora is a brilliant NEET and the cunning and manipulative half of the siblings.`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 15,
            endurance: 20,
            agility: 25,
            magic: 45,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Manipulator", "At the start of battle, switch enemy highest stat with the lowest one"],
        quotes: ["Because of our weakness, we trained our eyes, ears and the ability to think. Learning how to survive, that’s our trait as humans!"],
        summonableWith: '📖 <:6164_Instant_Ramen:643527652803739658> <:icons8energydrink:643527652434640936>',
        origin: 'No Game No Life',
        code: '100001',
        NPLevel: 1,
        noblePhantasm: {
            name: "Cold Reading",
            power: 50,
            description: `Ruler can quickly determine what his opponents are going to do based on observation of their behavior and motivations (deals damage, sure hit, inflicts NPseal and confusion on the enemy - 3 turns)`,
            text: ["There's no observer who are more trusted than someone who suspects you."],
            image: "https://i.imgur.com/ktLQq4s.gif",
            canBeUsed: false
        }
    },

    {
        id: 105,
        name: ["mordred", "saber of red", "the knight of treachery", "the knight of londinium"],
        class: "Saber",
        pictures: ["https://i.imgur.com/nuWe3To.png", "https://i.imgur.com/y6YUhuZ.png", "https://i.imgur.com/6WmMm5b.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: `Saber is a treacherous knight who was one of the Knight of the Round Table. She killed King Arthur ending the legend of King Arthur.`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 45,
            endurance: 50,
            agility: 40,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Battle Continuation", "Starts the battle with active guts status"],
        quotes: ["Hey, Master. It's a quest! Let's do it!"],
        summonableWith: '<:icons8sword:644265939009011723>',
        origin: 'Fate/Apocrypha',
        code: '476083',
        NPLevel: 1,
        noblePhantasm: {
            name: "Clarent Blood Arthur",
            power: 50,
            description: `A transformation into an evil sword of hatred upon the condition of her holding it. She had stolen this sword from King Arthur's armory and then later used it to deal a fatal blow to her father. (Deals significant damage (heavy damage to Arthur Pendragon enemy type))`,
            text: [""],
            image: "https://i.imgur.com/eMsmAb1.gif",
            canBeUsed: false
        }
    },

    {
        id: 106,
        name: ["ainz ooal gown", "ainz", "supreme one", "lord momonga", "sorcerer king", "momon", "king of darkness", "momonga"],
        class: "Caster",
        pictures: ["https://i.imgur.com/yH7Q65u.jpg", "https://i.imgur.com/iehsp21.png", "https://i.imgur.com/WnF6DPu.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["male", "king"],
        about: `He is the guildmaster of Ainz Ooal Gown, Overlord of the Great Tomb of Nazarick, and the creator of Pandora's Actor. He is regarded as the highest of the Almighty Forty-One Supreme Beings by the NPCs of Nazarick. In the New World, he is the Sorcerer King of the Sorcerer Kingdom and the most powerful magic caster in the world.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 20,
            magic: 55,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Despair Aura", "Each turn there is 1% chance to cause instant death to the enemy, 10% to inflict confusion (2 turns), 20% chance to inflict fear (3 turns)"],
        quotes: ["Death by sword. Death by broken bones. Death by crushing. There’s not much difference, right? You die at the end."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🔮',
        origin: 'Overlord',
        code: '817743',
        NPLevel: 1,
        noblePhantasm: {
            name: "Fallen Down",
            power: 50,
            description: `Caster calls upon a huge pillar of blue light from the sky that will burn so bright and hot that it will appear like the whole world has turned white. After a few seconds, it will leave behind an area burned to a cinder, devoid of life. (Does significant damege to the enemy, inflicts burn - 2 turns)`,
            text: [""],
            image: "https://i.imgur.com/kRmFLVc.gif",
            canBeUsed: false
        }
    },

    {
        id: 107,
        name: ["ryuunosuke akutagawa", "akutagawa", "ryuunosuke", "silent rabid dog", "black cloaked hellhound"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/tkLBvOL.png", "https://i.imgur.com/XnwPbEp.png", "https://i.imgur.com/EOklhNk.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: `A member of the underground criminal organization called Port Mafia. His ruthless, vicious nature makes him one of the Port Mafia's most dangerous members, feared by both ally and foe. He is willing to commit violent crimes to further not only the mafia's goals but his own agenda. Merciless and blunt, Akutagawa doesn't discriminate when it comes to his targets, having no remorse killing anyone from innocent civilians, children, and enemies alike.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 35,
            endurance: 25,
            agility: 40,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Merciless", "100% Crit Chance if enemy has inflicted a negative status condition"],
        quotes: ["I don't need words but only actions."],
        summonableWith: '🥼 <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Bungou Stray Dogs',
        code: '631285',
        NPLevel: 1,
        noblePhantasm: {
            name: "Rashoumon",
            power: 50,
            description: `Avenger uses his ability Rashoumon which is summoned from, but not limited to, Avenger's coat, and any other garments he wears. It transforms into a shadow-like black beast. (Deals damage, raises own strength, applies Fear for 3 turns.)`,
            text: [""],
            image: "https://i.imgur.com/IIThzNa.gif",
            canBeUsed: false
        }
    },

    {
        id: 108,
        name: ["dio brando", "dio", "lord dio"],
        class: "Temptress",
        pictures: ["https://i.imgur.com/KqKKcHI.png", "https://i.imgur.com/CLxcYWF.png", "https://i.imgur.com/lWI96GG.png", "https://i.imgur.com/cBgO9Hq.png", "https://i.imgur.com/aCGsiIm.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: `An immortal vampire who has been the bane of the Joestars for hundreds of years. He is a dangerous vampire that will do anything for what he wants, and with his stand, The World, on his side, he is near unstoppable.`,
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 50,
            endurance: 45,
            agility: 20,
            magic: 25,
            luck: 15
        },
        statsPoints: 0,
        passive: ["Regeneration", "Restores 5% of own HP each turn"],
        quotes: ["I rejected my humanity long ago, Master"],
        summonableWith: '🌹 ⏳ 🍷',
        origin: "JoJo's Bizzare Adventure",
        code: '764389',
        NPLevel: 1,
        noblePhantasm: {
            name: "The World",
            power: 50,
            description: `Stand that specializes in melee attack and is capable of stopping the time for short perioids of time. (deals damage, sure hit, raises own strength and slightly agility, inflicts NPseal and stun on the enemy for 2 turns)`,
            text: ["Za Warudo! Time, stop!"],
            image: "https://i.imgur.com/V7VHakK.gif",
            canBeUsed: false
        }
    },

    {
        id: 109,
        name: ["shirou emiya", "emiya shirō", "emiya shirou", "shirou", "emiya", "faker", "shero", "hero of justice", "master of saber", "fake school janitor"],
        class: "Caster",
        pictures: ["https://i.imgur.com/CDGJjuf.png", "https://i.imgur.com/7KF1R19.png", "https://i.imgur.com/J2I9PvC.png", "https://i.imgur.com/7KF1R19.png", "https://i.imgur.com/J2I9PvC.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: 'Homurahara Academy second year student, novice magus, likes repairing electronics to help practice his Magecraft. He only finds self-worth from helping people without any compensation, feeling that the very act “helping people” is its own reward.',
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 15,
            endurance: 25,
            agility: 25,
            magic: 10,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Avalon", "Starts battle with active guts status; each turn restore own HP by 5%"],
        quotes: ["Maybe I got something wrong, but it doesn't matter because the thought of wanting to help others definitely isn't wrong"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Stay Night',
        code: '167581',
        NPLevel: 1,
        noblePhantasm: {
            name: "Projection Magecraft",
            power: 50,
            description: `Magecraft that materializes objects, in accordance to the caster’s imagination, through the use of magical energy. (drastically raises own strength)`,
            text: [
                "Trace... ON!"
            ],
            image: "https://i.imgur.com/6Y9gV25.gif",
            canBeUsed: false
        }
    },

    {
        id: 110,
        name: ["rin tohsaka", "rin", "tohsaka", "tohsaka rin", "rin tousaka", "tousaka", "tousaka rin", "miss perfect"],
        class: "Caster",
        pictures: ["https://i.imgur.com/dIYrVcZ.png", "https://i.imgur.com/dNZiFJ2.png", "https://i.imgur.com/5HhUMD4.png", "https://i.imgur.com/2EhObgL.png", "https://i.imgur.com/S2DJ0zm.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female"],
        about: "Highschool student who became the master of the warrior Archer, for the sake of her deceased father and her family's name, she seeks to obtain the Holy Grail, though she has little personal desire for it.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 25,
            endurance: 20,
            agility: 30,
            magic: 45,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Conversion of Power", "Each turn raise own magic by 5%"],
        quotes: ["Come on, already..."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Stay Night',
        code: '775780',
        NPLevel: 1,
        noblePhantasm: {
            name: "Rin's Pendant",
            power: 50,
            description: `The highest possible class of jewel, endowed with magical energy from generations of Tohsaka mages. (applies guts status); 2nd **Jewel Magecraft:**  She uses them as disposable, limited-function Mystic Codes. (deals damage, raises own defense)`,
            text: [""],
            image: "https://i.imgur.com/dN9vgab.gif",
            canBeUsed: false
        }
    },

    {
        id: 111,
        name: ["illyasviel von einzbern (fate/stay night)", "illyasviel von einzbern", "illyasviel", "illya", "master of berserker"],
        class: "Caster",
        pictures: ["https://i.imgur.com/xj799gB.png", "https://i.imgur.com/x9N3Wbt.png", "https://i.imgur.com/jTkCU4I.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "Homunculus, an artificial human given life by applying sorcery to sperm cells, originally created and raised by the Einzbern family. Master of Berserker in the Fifth Holy Grail War.",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 10,
            endurance: 20,
            agility: 20,
            magic: 45,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Vessel of the Grail", "Raise own Magic stat by 50%"],
        quotes: ["All right, I won't lose today."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Stay Night',
        code: '614762',
        NPLevel: 1,
        noblePhantasm: {
            name: "Storch Ritter",
            power: 50,
            description: `Familiars created with wires and hairs will autonomously capture and attack the enemy. (increases own strength and slightly endurance)`,
            text: [""],
            image: "https://i.imgur.com/b4yl9gW.gif",
            canBeUsed: false
        }
    },

    {
        id: 112,
        name: ["karna", "lancer of red", "son of the sun god", "hero of charity", "launcher"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/6pQNzlu.png", "https://i.imgur.com/q4JMvoL.png", "https://i.imgur.com/a79aeMd.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male", "divine"],
        about: `The invulnerable hero of the Indian epic Mahabharata, as a hero on the vanquished side. The central conflict of The Mahabharata is the war over influence between the Pandava royal family and Kaurava royal family. Lancer became famous as the rival of Arjuna, the great hero of Hindu mythology.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 50,
            magic: 50,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Mana Burst (Flame)", "If burned, double damage done to the enemy; If frozen, cut it in half."],
        quotes: ["I will use all of the power entrusted to me to do what must be done."],
        summonableWith: '<:icons8spear:644265939310739476> <:9359_MCcoal:643529413979406336>',
        origin: 'Fate/Apocrypha',
        code: '717865',
        NPLevel: 1,
        noblePhantasm: {
            name: "Vasavi Shakti",
            power: 50,
            description: `It is a spear of mortality made of lightning that can only strike once, but it possesses the power to kill the gods themselves. Although he lost his armor in the legend, he still possesses it as a Heroic Spirit, so proper usage of the spear is tied into permanently removing his armor.(first raises own strength, magic and slightly agility then deals significant damage (heavy damage on divine enemies), inflicts burn - 4 turns; lowers own defense, luck, endurance(-25%) and applies NP seal on self - 30 turns [demerit])`,
            text: [
                "On the battlefield, there is no more weakness.",
                "My father, I ask for your forgiveness. For the first and last time.",
                "End everything, Vasavi... Shakti!"
            ],
            image: "https://i.imgur.com/B51XcyL.gif",
            canBeUsed: false
        }
    },

    {
        id: 113,
        name: ["misaka mikoto", "misaka", "biri-biri", "railgun", "number three", "electric princess" ,"mikoto misaka", "electromaster", "ace of tokiwadai"],
        class: "Archer",
        pictures: ["https://i.imgur.com/ZtQZvZb.jpg", "https://i.imgur.com/jVXanMu.png", "https://i.imgur.com/9nbklTS.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female"],
        about: "One of Academy City's Level 5 espers, ranked number three. She has an ability to control electricity. She was a child Prodagy who worked from Level 1 to Level 5.",
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 25,
            endurance: 25,
            agility: 30,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Electromagnetic Barrier", "Immunity to stun and confusion, reduce damage taken from the Archer Class by 50%"],
        quotes: ["You shouldn’t give up so easily, got it Master?"],
        summonableWith: '<:icons8archersbow:644246512926195734> 🔋',
        origin: 'A Certain Scientific Railgun',
        code: '314161',
        NPLevel: 1,
        noblePhantasm: {
            name: "Railgun",
            power: 50,
            description: `Archer can fire metal objects at three times the speed of sound by forming parallel currents on both sides of her arm with her electricity. Her Railgun has a muzzle velocity of 1030 m/s (2307.2 mph), and can be fired at a rate of 8 shots per minute. (deals damage, inflicts stun - 4 turns)`,
            text: [""],
            image: "https://i.imgur.com/niRDeCj.gif",
            canBeUsed: false
        }
    },

    {
        id: 114,
        name: ["miyamoto musashi", "musashi", "musashi miyamoto", "flower of tengen", "shinmen musashi no kami fujiwara no harunobu", "bennosuke", "niten dōraku", "niten doraku", "shinmen takezō", "shinmen takezo"],
        class: "Saber",
        pictures: ["https://i.imgur.com/Szv07f1.png", "https://i.imgur.com/hEo8IYa.png", "https://i.imgur.com/hPgXPOf.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: "A swordsman from the early Edo Period, famous as the strongest swordmaster in Japanese history. The person herself has a relaxed, open attitude that never gets worked up.She's not from our world, but from an alternative one.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 40,
            magic: 25,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Dual Wielding", "+50% to strength stat"],
        quotes: ["Want to get going? I'm ready when you are."],
        summonableWith: '<:icons8sword:644265939009011723> 🍜',
        origin: 'Fate/Grand Order',
        code: '153153',
        NPLevel: 1,
        noblePhantasm: {
            name: "Six Realms Five Planes - The Divine Figure of Kurikara",
            power: 50,
            description: `A sword-roaring battou. Still wielding two swords, she takes a firm stance and: Lesser Celestial Thrust… then after overpowering the opponent with her swords’ energy to damage their spirit; Greater Celestial Phenomenon… Saber lets out her final blow with all her might. (first deals damage(sure hit) then removes all buffs and debuffs[demerit] from the enemy, increases own strength)`,
            text: [
                "I'll show you the true essence of the Five Rings!",
                "Hail the Tenmandaijizaitenjin, the divine manifestation of Nioh Kulika!",
                "Let's go, master's blade draw... Īśāna great manifestation!"
            ],
            image: "https://i.imgur.com/kQNtepu.gif",
            canBeUsed: false
        }
    },

    {
        id: 115,
        name: ["umi sonoda", "umi", "umida", "sonoda umi"],
        class: "Archer",
        pictures: ["https://i.imgur.com/orZgL65.png", "https://i.imgur.com/btPU20E.png", "https://i.imgur.com/S4IIXpC.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female"],
        about: `A person who excels in leading, willing to enforce strict rules upon others to ensure that their goal is achieved. She's very rational, the type who calms her friends down with common sense. Despite this attitude, she gets easily embarrassed when doing "cute" things and becomes shy once complimented.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 10,
            endurance: 15,
            agility: 25,
            magic: 25,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Disciplined", "Immune to NP seal"],
        quotes: ["Let's work hard today too, Master"],
        summonableWith: '<:icons8archersbow:644246512926195734> <:6164_Instant_Ramen:643527652803739658> 🌺',
        origin: 'Love Live!',
        code: '765880',
        NPLevel: 1,
        noblePhantasm: {
            name: "Love Arrow Shoot! ❤❤❤",
            power: 50,
            description: `Archer unleashes an arrow of love that is sure to pierce the target's heart. Those who reject her love shall die. Because of her own shame for doing such a flashy thing, she is stunned for 2 turns. (sure hit, deals def-ignoring damage, insta kill chance - 5%, lowers enemy strength,  inflicts stun on self - 2 turns [demerit])`,
            text: ["I'll pierce **ALL OF YOUR HEARTS** with this shot!\n...Eeeh, why did I say that?\nThat was embarrassing..."],
            image: "https://i.imgur.com/6ppZ1f7.gif",
            canBeUsed: false
        }
    },

    {
        id: 116,
        name: ["ikaros", "ikarosu", "icarus", "alpha", "uranus queen", "sky queen"],
        class: "Archer",
        pictures: ["https://i.imgur.com/440KNoi.png", "https://i.imgur.com/5e7dYXY.png", "https://i.imgur.com/mLJ3Nll.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: "Archer is a very submissive, melancholic and usually placid but resorts to violence if she sees her master harmed. She doesn't know what to do on her own, she only knows how to follow orders. She will do whatever the master wishes without a second though even killing if need be. Due to her emotional capacity being low she's unable to express emotions. She's a Strategic Battle-Class: Type Alpha Angeloid.",
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 40,
            endurance: 45,
            agility: 45,
            magic: 40,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Transport Card", "Automaticaly replenishes items used in battle"],
        quotes: ["What do you want me to do Master?"],
        summonableWith: '<:icons8archersbow:644246512926195734> 🥼 ⚙',
        origin: 'Sora no Otoshimono',
        code: '160162',
        NPLevel: 1,
        noblePhantasm: {
            name: "Apollon",
            power: 50,
            description: `A bow that's destructive, shooting an arrow while fully charged of energy is capable of destroying cities or even states. (raises own magic first then deals damage, inflicts stun - 2 turns)`,
            text: [""],
            image: "https://i.imgur.com/D1OfHnX.gif",
            canBeUsed: false
        }
    },

    {
        id: 117,
        name: ["cirno", "⑨", "9", "nine-ball", "fairy of the ice", "chiruno"],
        class: "Caster",
        pictures: ["https://i.imgur.com/5wFJpGy.png", "https://i.imgur.com/rbnK9HT.png", "https://i.imgur.com/CnH7chQ.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: `Caster is an ice fairy, being exceptionally strong for her kind, though that is easily overshadowed by her clumsy and naive behavior. Caster is a childish, confident fairy who appears to have a superiority complex in regards to others. She proclaims herself to be "the strongest" of all.`,
        level: 1,
        exp: 0,
        currentHp: 350,
        maxHp: 350,
        stats: {
            strength: 30,
            endurance: 35,
            agility: 45,
            magic: 45,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Manipulating Cold", "Can not be frozen"],
        quotes: ["I'm the strongest."],
        summonableWith: '<:icons8magicwand:644277713216995348> 🌡',
        origin: 'Touhou Project',
        code: '999999',
        NPLevel: 1,
        noblePhantasm: {
            name: "Icicle Fall",
            power: 50,
            description: `Caster absorbs the heat around her, creating a strong frosty breeze amd shooting her opponent with sharp icicles. (Deals damage, inflicts freeze - 4 turns, NP Seal - 1 turn, heals burn.)`,
            text: ["I'll show you just how strong I am!"],
            image: "https://i.imgur.com/jh0YuZN.gif",
            canBeUsed: false
        }
    },

    {
        id: 118,
        name: ["king hassan", "the old man of the mountain", "first hassan", "ziusudra"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/HPc9NGe.png", "https://i.imgur.com/h9Eekck.png", "https://i.imgur.com/iVTRR8D.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["male"],
        about: `The first to hold the title of Hassan-i-Sabbah, the founder of the Hashashin where he is considered to be both the first and the last "Old Man."`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 40,
            magic: 30,
            luck: 10
        },
        statsPoints: 0,
        passive: ["At the Boundary", "Insta-Kill immunity; 1% chance to Insta-Kill enemy with normal attack"],
        quotes: ["Be not idle"],
        summonableWith: '🔪 ⏳',
        origin: 'Fate/Grand Order',
        code: '115416',
        NPLevel: 1,
        noblePhantasm: {
            name: "Azrael",
            power: 50,
            description: `Though the broadsword that he bears is perfectly commonplace, it has been stained with the faith of its wielder in the course of his lifetime. Being a sword borne by a man who walks the boundaries of the Valley of the Shadow of Death, its edge can potentially impose the termination of life with the slightest cut. (Deals damage, insta kill chance - 8%, applies guts, charge + 1)`,
            text: [
                "Listen. The evening bell has tolled thy name.",
                "The feathers foreshadow your death, and behead━",
                "Azrael!"
            ],
            image: "https://i.imgur.com/I1NE1Ib.gif",
            canBeUsed: false
        }
    },

    {
        id: 119,
        name: ["neopolitan", "neo"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/3lefigM.png", "https://i.imgur.com/L0tPW7A.png", "https://i.imgur.com/Je4Y6qb.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: "Associate of Cinder Fall and formerly Roman Torchwick. Her weapon of choice is called Hush, a parasol with a concealed blade.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 45,
            magic: 40,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Infiltrator", "Own attacks ignore enemy defense"],
        quotes: [""],
        summonableWith: '<:icons8spear:644265939310739476> <:Donut:643527652266868767>',
        origin: 'RWBY',
        code: '410147',
        NPLevel: 1,
        noblePhantasm: {
            name: "Overactive Imagination",
            power: 50,
            description: `Allows her to create "physical illusions that can be seen by everyone" and using them to mislead attacks. (slightly raises own agility, raises own defense, applies evade (1time) )`,
            text: [""],
            image: "https://i.imgur.com/ErEfnYA.gif",
            canBeUsed: false
        }
    },

    {
        id: 120,
        name: ["medb", "queen medb", "eternal lady", "queen of connacht", "pure maiden", "alluring chief warden", "chief warden"],
        class: "Rider",
        pictures: ["https://i.imgur.com/asbAh6K.png", "https://i.imgur.com/FbFD74V.png", "https://i.imgur.com/Y62IpAW.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female", "king"],
        about: `A young girl of affairs who built engagements, marriages and, at times, nothing but carnal relations with many kings and brave warriors. The ringleader who caused the greatest war of the Ulster Cycle, she aimed at the life of the brave warrior of Ulster that defied her - Cú Chulainn. It is said that she is endowed with the aspect of discord and conflict, as a Divine Spirit that rules over insanity, evil and royal authority.`,
        level: 1,
        exp: 0,
        currentHp: 100,
        maxHp: 100,
        stats: {
            strength: 10,
            endurance: 10,
            agility: 40,
            magic: 45,
            luck: 60
        },
        statsPoints: 0,
        passive: ["My Red Mead: My Dear Honey Alcohol", "Each turn, If enemy is male, 30% chance to inflict stun (3 turns) and NP seal (1 turn)"],
        quotes: ["Many people have tried to make me their own, but how about you? Do you want me?"],
        summonableWith: '<:icons8wheel:644265939441025024> 🍷 <:Dream_Escape_Rope_Sprite:643527652531240982>',
        origin: 'Fate/Grand Order',
        code: '699916',
        NPLevel: 1,
        noblePhantasm: {
            name: "Chariot My Love",
            power: 50,
            description: `A charging attack in a chariot that is Medb's power as a queen given form. An area of effect attack. This chariot represents the royal authority of a lord, the iron that tortures people, and the fear that makes them shake. It is especially effective against males, and is difficult for any man to deflect Medb as she charges at them. No male who has been captured by Medb's chariot can escape it. The inside is a Reality Marble, a nest of love that will not let them free until the deed is over. (deals damage (heavy damage to males), inflicts fear - 4 turns, heals self)`,
            text: [
                "I’ll give you a treat…",
                "All powers belong to me… the crown of total domination… ",
                "the hard steel of oppression… and the terror that shakes the hearts of men!",
                "Chariot My Love!"
            ],
            image: "https://i.imgur.com/HjIhVUw.gif",
            canBeUsed: false
        }
    },

    {
        id: 121,
        name: ["artoria pendragon (archer)", "archuria", "squirtoria", "artoria pendragon", "arturia pendragon", "king of knights of the holy sword", "king of knights", "altria pendragon", "king arthur", "artoria", "altria", "arturia"],
        class: "Archer",
        pictures: ["https://i.imgur.com/BtEm2xt.png", "https://i.imgur.com/db8idxO.png", "https://i.imgur.com/thT8x5n.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "dragon", "king", "summer"],
        about: "A king of the beach that descended on the summer sea, she's aiming at becoming water blitz world champion",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 45,
            magic: 53,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Summer Splash!", "20% chance to gain additional 1 NP charge each turn; increases own defense by 10%"],
        quotes: ["Now I am neither knight nor king, but a shooter who fights on your behalf. No matter the stage, I will claim the number one seat!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '129129',
        NPLevel: 1,
        noblePhantasm: {
            name: "Excalibur Vivian",
            power: 50,
            description: `Excalibur was originally something entrusted by the Fairy of the Lake, so there should be nothing odd about this aspect even if it has a water attribute. (Deals damage, decreases enemy charge -1, increases own charge +4)`,
            text: [`It's swimming time. The light shining among the waves, the Sword of Victory! Excalibur Vivian!`],
            image: "https://i.imgur.com/CcXIBx3.gif",
            canBeUsed: false
        }
    },

    {
        id: 122,
        name: ["mordred (rider)", "miss surfer mor", "miss su-mor", "mordred", "the knight of treachery", "the knight of londinium"],
        class: "Rider",
        pictures: ["https://i.imgur.com/lHvtudZ.png", "https://i.imgur.com/P9DQUHM.png", "https://i.imgur.com/6d2lO00.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "dragon", "summer"],
        about: "Having been summoned as a Rider instead of Saber this time around, she has not brought Clarent with her. Not only that, she has not even brought her armor and helmet with her.",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 35,
            endurance: 40,
            agility: 55,
            magic: 45,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Surfing", "Can not be burned; at the start of battle raise own Agility by 10%"],
        quotes: ["Sun's up, let's hit those waves!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '132132',
        NPLevel: 1,
        noblePhantasm: {
            name: "Prydwen Tube Riding",
            power: 50,
            description: `Ramming the opponent head-first with a tube-riding, which boasts a top-class degree of difficulty among the surfing techniques by means of Prydwen. (deals damage, slightly raises own agility, decreases enemy charge -1)`,
            text: [
                "Now, that's a large wave!",
                "t's here, Wednesday's legendary wave! Let's go, partner!",
                "Yahoooo~!"
            ],
            image: "https://i.imgur.com/H3WFvrj.gif",
            canBeUsed: false
        }
    },

    {
        id: 123,
        name: ["tamamo no mae (lancer)", "summer tamamo-chan", "tamamo shark", "tamamo no mae", "tamamo"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/NwpxTDw.png", "https://i.imgur.com/RSy8NdK.png", "https://i.imgur.com/WKwycxp.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female", "divine", "summer"],
        about: "When talking about summer, it is the beach. When talking about beach, it is the parasol. When talking about parasol, it is your dependable miko- fox.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 50,
            magic: 20,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Midsummer Witchcraft", "At the start of battle inflict stun on the enemy (1 turn), curse (5 turns) and reduce their defense by 20%; enemy starts witch +1 NP charge [demerit]"],
        quotes: ["Even if you're my Master, today, I want us to be equals♡\nWould you escort me around and treat me like a proper lady ?"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '128128',
        NPLevel: 1,
        noblePhantasm: {
            name: "Everlasting Summer Sunlight",
            power: 50,
            description: `In a certain world, it is also called "Polygamy Castration Fist". Of course, it is a special attack against males. (deals damage (if enemy is male, then deals heavy damage + 3 turn stun))`,
            text: [
                "Then, everyone, please clap for me.",
                "Judgement time - DA-ZE!",
                "It's too late to talk your way out of this! To be late to this frivolous, cheating date, this fox can see through it all.",
                "Now, receive this 'Sunshade Parasol of Master's Most Favorite Deity!'",
                "...Please, have a look, Master!"
            ],
            image: "https://i.imgur.com/ElDQvXF.gif",
            canBeUsed: false
        }
    },

    {
        id: 124,
        name: ["scathach (assassin)", "scáthach (assassin)", "scáthach", "scathach", "queen of the land of shadows", "witch of dún scáith", "witch of dun scaith", "lord of spirits", "shishou"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/QMd1XJ8.png", "https://i.imgur.com/fm6Blkq.png", "https://i.imgur.com/inQMTPm.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "king", "summer"],
        about: "She carried out the reckless deed of changing herself and several other female Servants around into swimsuits - all under the guise of adapting to the environment.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 55,
            magic: 43,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Presence Concealment", "Starts battle with evade (1 time)"],
        quotes: ["You are not exactly my disciple. I will not make any comments even if I see you slacking off."],
        summonableWith: '<:Saintquartz:693210492818423858> 🌺',
        origin: 'Fate/Grand Order',
        code: '133331',
        NPLevel: 1,
        noblePhantasm: {
            name: "Gáe Bolg Alternative",
            power: 50,
            description: `This is the famous kicking Bolg, which made many warriors struck with admiration. Take it as a summer squall that shoots dead the hearts of warriors. (deals damage, insta kill chance - 3%)`,
            text: [
                "I shall become a bit more serious.",
                "I shall take you to the Land of Shadows...",
                "Gáe Bolg Alternative!"
            ],
            image: "https://i.imgur.com/bCHl0EX.gif",
            canBeUsed: false
        }
    },

    {
        id: 125,
        name: ["suzaku kururugi (berserker)", "sumzaku", "suzaku summer", "suzaku kururugi", "suzaku", "kururugi suzaku", "knight of zero", "white knight", "white grim reaper"], // name and aliases
        class: "Berserker",
        pictures: ["https://i.imgur.com/KrK6zTV.png", "https://i.imgur.com/XBofN8o.png", "https://i.imgur.com/17Ow9kh.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male", "summer"],
        about: "Traped on the remote island he had to addapt to the environment in order to survive. It turned out he has a real talent when it comes to hand fishing. Now, with only a fish in his hand he's ready to face any enemy he may encounter.",
        level: 1, 
        exp: 0,
        currentHp: 600,
        maxHp: 600, 
        stats: {
            strength: 55, 
            endurance: 60, 
            agility: 45, 
            magic: 10, 
            luck: 30
        },
        statsPoints: 0,
        passive: ["Heat Stroke", "Each turn there is 25% chance to inflict burn status on self (3 turns); while burnt instead of reducing own Strength each turn, raise it instead"],
        quotes: ["At a day like this one, nothing can give you as much pleasure as a fresh fish"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Code Geass: Hangyaku no Lelouch',
        code: '772525',
        NPLevel: 1, 
        noblePhantasm: {
            name: "Fish Time",
            power: 50, 
            description: "Berserker uses fish to regain some strength he put into the fight, of course it's better if fish is cooked. (raises own strength and endurance, recovers hp, heals stun (if berserker is burnt - raises str and end drastically, restores hp significantly))",
            text: ["I'll now proceed to pleasure myself with this fish."],
            image: "https://i.imgur.com/vOpsjQg.jpg",
            canBeUsed: false
        }
    },

    {
        id: 126,
        name: ["misaka mikoto (caster)", "misaka mikoto", "misaka summer", "misaka", "biri-biri", "railgun", "number three", "electric princess", "mikoto misaka", "electromaster", "ace of tokiwadai"],
        class: "Caster",
        pictures: ["https://i.imgur.com/ufs9i8q.jpg", "https://i.imgur.com/KQol5QG.png", "https://i.imgur.com/gB41aKG.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "summer"],
        about: "Her ability to control electricity is truly deadly on the beach with all the water around that makes conducting electricity easier. Be careful while aproaching her.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 25,
            endurance: 30,
            agility: 25,
            magic: 50,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Unique Electric-type Sensory Perception", "If enemy tries to inflict stun apply evade (X turns); X = number of turns the stun would last"],
        quotes: ["Why do I have to be so embarrassed ..."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'A Certain Scientific Railgun',
        code: '314162',
        NPLevel: 1,
        noblePhantasm: {
            name: "Summer Electromaster",
            power: 50,
            description: `Caster performs a wide range Lightning Attack that spreads through the water in the air. (deals damage, slightly increases own magic, slightly decreases enemy agility, inflicts stun - 2 turns)`,
            text: [""],
            image: "https://i.imgur.com/0yhj5cL.gif",
            canBeUsed: false
        }
    },

    {
        id: 127,
        name: ["esdeath (temptress)", "esdeath summer", "ice queen of the beach", "esdeath", "empire's strongest general", "ice queen"], // name and aliases
        class: "Temptress",
        pictures: ["https://i.imgur.com/aRkHgBn.png", "https://i.imgur.com/NekXb4l.png", "https://i.imgur.com/jLDvAsg.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female", "summer"],
        about: "Tall, beautiful, and slender woman with long, light blue hair and blue eyes. She's a manipulative and barbarous sadist who lack empathy for people. Despite her reputation, she possesses great charisma, able to inspire many to fight for her.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300, 
        stats: {
            strength: 40, 
            endurance: 30, 
            agility: 30, 
            magic: 60, 
            luck: 35 
        },
        statsPoints: 0,
        passive: ["Sadist", "Everytime you inflict normal attack damage to the enemy increase own strength by 15% of damage dealt."],
        quotes: ["Panicking leads to an early grave, remember to keep your cool Master."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Akame ga Kill!',
        code: '875485',
        NPLevel: 1, 
        noblePhantasm: {
            name: "Mahapdama",
            power: 50, 
            description: "Temptress uses her charisma on the enemy to let their guard down, then with her trump card frezees the time itself to avoid possible attack and freezes enemy to death. (inflicts confusion - 3 turns, deals damage, increases own agility,  applies evade to self - 1 time, inflicts freeze - 6 turns)",
            text: ["Will you fight for me?"],
            image: "https://i.imgur.com/Wi0eFO7.gif",
            canBeUsed: false
        }
    },

    {
        id: 128,
        name: ["umi sonoda (assassin)", "sumi", "summer umi","umi sonoda", "umi sonoda summer", "umi", "umida", "sonoda umi"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/HxKcZtt.png", "https://i.imgur.com/DpeFiqm.png", "https://i.imgur.com/RG80CWj.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female", "summer"],
        about: `Beautiful as flower, her name is also the Japanese word for sea. Whenever Honoka mentions the sea Assassin thinks Honoka is calling her name out instead.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 10,
            endurance: 15,
            agility: 25,
            magic: 20,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Calm and Collected", "Immunity to confusion"],
        quotes: ["There’s no point in doing it alone. If you’re going to try, we should do it together Master!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Love Live!',
        code: '765881',
        NPLevel: 1,
        noblePhantasm: {
            name: "Siren's Smile",
            power: 50,
            description: `Her beautiful smile can melt anyone heart, it's so sweet and mesmerizing that one can easily loose themself while looking at it. (inflicts stun - 1 turn, Np Seal - 1 turn, confusion - 3 turns, decrease enemy defence, raises own luck)`,
            text: [""],
            image: "https://i.imgur.com/OhWOHOh.gif",
            canBeUsed: false
        }
    },

    {
        id: 129,
        name: ["nightingale", "angel of crimea", "florence nightingale", "mercédès", "the white cloth of steel", "the lady with the lamp", "little war office"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/2rBa3er.png", "https://i.imgur.com/6Jw9IIe.png", "https://i.imgur.com/2GoGy1y.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: `A woman of conviction. Owner of a tenacious mentality that never becomes disheartened and say words which should be said to whoever it is - even the monarch of the British Empire.`,
        level: 1,
        exp: 0,
        currentHp: 550,
        maxHp: 550,
        stats: {
            strength: 45,
            endurance: 55,
            agility: 45,
            magic: 22,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Human Anatomy Understanding", "Doubles the amount of HP recovered"],
        quotes: ["Don't push yourself too hard... If anything were to happen to you, I would be quite sad. The joy of nursing you helps relieve the sorrow that comes from causing you harm..."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 💊',
        origin: 'Fate/Grand Order',
        code: '565978',
        NPLevel: 1,
        noblePhantasm: {
            name: "Nightingale Pledge",
            power: 50,
            description: `Negates all toxicity and hostility within the effective range. A forcibly produced absolute safety zone. It also contains recovery effects.(recovers Hp, removes poison, slightly reduces enemy strength and magic)`,
            text: ["I will purge all that is toxic, all that is harmful!\nFor as long as I have this power, I shall lead everyone to happiness!"],
            image: "https://i.imgur.com/TXS1GHt.gif",
            canBeUsed: false
        }
    },

    {
        id: 130,
        name: ["shoto todoroki", "todoroki", "shoto", "todoroki shoto", "icy hot"],
        class: "Caster",
        pictures: ["https://i.imgur.com/caReUzv.png", "https://i.imgur.com/D51PirR.png", "https://i.imgur.com/SgGnit4.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: `A student at U.A. High School training to become a Pro Hero. He got into U.A. through official recommendations. Though brutal in combat, he is well-grounded on the ethics of heroism, only wishing to subdue his frozen opponents as opposed to killing them by prolonging their frozen states.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 35,
            endurance: 25,
            agility: 30,
            magic: 45,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Half-Cold Half-Hot", "10% chance to inflict freeze (3 turns) with normal attacks; 10% chance to inflict burn (3 turns) with normal attacks"],
        quotes: ["I Want... To Be A Hero, Too...!"],
        summonableWith: '<:icons8magicwand:644277713216995348> <:9359_MCcoal:643529413979406336> 🌡',
        origin: 'My Hero Academia',
        code: '545432',
        NPLevel: 1,
        noblePhantasm: {
            name: "Flashfreeze Heatwave",
            power: 50,
            description: `He uses his ice to thoroughly chill the air in the area around him. By switching to his fire, he rapidly heats the air around him and expands it. This environmental control allows him to release a superheated blast that devastates anything in its path. (deals damage, inflicts burn, freeze and stun - 3 turns)`,
            text: [
                "It's not your fault.",
                "We're just playing on different levels."
            ],
            image: "https://i.imgur.com/I6pFN5z.gif",
            canBeUsed: false
        }
    },

    {
        id: 131,
        name: ["tohka yatogami", "tohka", "princess"],
        class: "Saber",
        pictures: ["https://i.imgur.com/epfoN5u.png", "https://i.imgur.com/hfOefeJ.png", "https://i.imgur.com/TB9vWEo.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: `Powerful being that is capable of mass destruction if left unchecked. Saber is capable of holding her own in combat through the use of exceptional strength, speed, and magic.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 40,
            endurance: 25,
            agility: 30,
            magic: 50,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Reiryoku", "Each turn raise own Strength by 5%"],
        quotes: ["Could this, by any chance, possibly be a date Master?"],
        summonableWith: '<:icons8sword:644265939009011723> 🍞',
        origin: 'Date A Live',
        code: '041010',
        NPLevel: 1,
        noblePhantasm: {
            name: "Halvanhelev",
            power: 50,
            description: `Saber smashes the throne that held Sandalphon and adds its material to the blade itself. This allows her to unleash a large energy wave that can cut through any material and reduce it to dust. (increases magic drastically and increases strength.)`,
            text: ["I can handle it from here!\nHalvanhelev! Take this!"],
            image: "https://i.imgur.com/rPJnL90.gif",
            canBeUsed: false
        }
    },

    {
        id: 132,
        name: ["shisui uchiha", "uchiha", "shisui", "uchiha shisui"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/xEaYIN8.png", "https://i.imgur.com/QWBkwpt.png", "https://i.imgur.com/WmmKIQZ.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: `He used the ability of teleportation so well it had earned him the title “The body flicker”. Assassin is a kind hearted and open minded person, even showing sympathy to dying enemies and respecting them. His desire for the grail is to bring peace and end all wars.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 35,
            endurance: 40,
            agility: 53,
            magic: 35,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Body Flicker", "10% chance to apply evade (1 time) on self each turn"],
        quotes: ["I don't even know if there is such a thing as justice in the world. We fight believing in our own justice. But if the enemy is doing the same thing, who's right?"],
        summonableWith: '🔪 <:icons8matches:643527652119937065>',
        origin: 'Naruto Shippuden',
        code: '432199',
        NPLevel: 1,
        noblePhantasm: {
            name: "Kotoamatsukami",
            power: 50,
            description: `A technique that allows the user to enter the mind of another person giving them false experience and making it seem as if they were doing thing of their own action. (deals damage, inflicts confusion - 10 turns, inflicts burn and stun - 3 turns, inflicts NP seal on self - 10 turns [demerit])`,
            text: ["I rule everything here, turn to dust!"],
            image: "https://i.imgur.com/DV9uxgH.gif",
            canBeUsed: false
        }
    },

    {
        id: 133,
        name: ["hachiman hikigaya", "hikki", "8man", "hachiman", "hikigaya", "monster of logic", "monster of self-consciousness"],
        class: "Moon Cancer",
        pictures: ["https://i.imgur.com/FWuRli5.png", "https://i.imgur.com/YW1anri.png", "https://i.imgur.com/plBSIV0.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: `A sharp tongued man from a world very similar to this one, but, in his words, "without any sort of magic, hope, or good luck". According to himself, he's just a regular friendless high schooler. Digging into the history embedded in his saint graph it appears he was part of a "Service Club" which helped others "Grant their Wishes". His deep understanding of how reality and human society works along with his Moon Cancer Class gave him ability to partialy alter them.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 10,
            endurance: 25,
            agility: 20,
            magic: 40,
            luck: 5
        },
        statsPoints: 0,
        passive: ["Finding Faults in Others", "At the start of battle swap enemy highest stat with your lowest one only if your lower one is less than enemy highest one"],
        quotes: ["Hard work betrays none, but dreams betray many. Working hard alone doesn't assure you that you'll achieve your dreams. Actually, there are more cases where you don't. Even so, working hard at something is some consolation at least"],
        summonableWith: '📖 ☕',
        origin: 'Ore no Seishun Love Comedy wa Machigatteiru [ My Youth Romantic Comedy Is Wrong, As I Expected ]',
        code: '010234',
        NPLevel: 1,
        noblePhantasm: {
            name: "Youth Is A Lie, An Evil - A Loner's Diatribe",
            power: 50,
            description: `A crystallization of high level human observational ability and nearly divine sophistry. The effect is the ability of Moon Cancer to analyze the weak points of any given person or situation and verbalize them in the way that hurts or annoys them the most, at the cost of Moon Cancer's wellbeing (inflicts stun - 2 turns, decrease enemy defence (decrease enemy defence drastically if enemy is a female), inflict curse on self - 3 turns[demerit] )`,
            text: ["Everyone has something they hold dear, something they never want to lose. That's why they pretend. That's why they hide the truth and that's why they lie.. but.. the biggest liar of all.. was me"],
            image: "https://i.imgur.com/8MFZxuA.gif",
            canBeUsed: false
        }
    },

    {
        id: 134,
        name: ["asuka langley soryu", "asuka", "second child", "second girl"],
        class: "Rider",
        pictures: ["https://i.imgur.com/42oxEly.png", "https://i.imgur.com/KISwHi9.png", "https://i.imgur.com/uGg5EBM.png", "https://i.imgur.com/fjGiqFx.png", "https://i.imgur.com/HWmD3vc.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: `Despite being a young girl, rider is a fantastic EVA pilot often doing better than her teammates and achieving great feats. She is the most well-rounded of the pilots, excelling in almost every area during combat `,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 25,
            endurance: 40,
            agility: 50,
            magic: 20,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Pride", "Deals double damage if HP is above 50%; deals half damage if it's equal or below 50% [demerit]"],
        quotes: ["Don't make others suffer for your personal hatred"],
        summonableWith: '<:icons8wheel:644265939441025024> ⚙ 🔋',
        origin: 'Neon Genesis Evangelion',
        code: '020202',
        NPLevel: 1,
        noblePhantasm: {
            name: "Evangelion Unit 02",
            power: 50,
            description: `Evangelion unit 02, also known as EVA02 is the mech that Rider pilots, which she uses to fight evil beings (deals damage (significant damage against Foreigner Class enemies), raises own strength and agility, slightly raises own endurance, inflicts NP seal on self - 10 turns [demerit])`,
            text: ["It is simply the duty of the elite to protect the ignorant masses."],
            image: "https://i.imgur.com/RDb1nJh.gif",
            canBeUsed: false
        }
    },

    {
        id: 135,
        name: ["akame", "akame of the demon sword murasame"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/O5a44VO.png", "https://i.imgur.com/aSsI4lb.png", "https://i.imgur.com/wKGZb5C.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female"],
        about: `From youth she was thrown into and survived many dangerous situations earning respect and direct training from one of the Empire’s generals. After being sent on assassination missions she eventually rebelled and joined a rival group, where she turned her blade back on those she once served.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 50,
            magic: 20,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Poison Resistance", "Can not be poisoned"],
        quotes: ["As the living it is our responsibility to carry out the wishes of the ones who are gone"],
        summonableWith: '🔪 <:icons8poisonbottle:646074309575573525>',
        origin: 'Akame ga kill',
        code: '637892',
        NPLevel: 1,
        noblePhantasm: {
            name: "Ennoodzuno",
            power: 50,
            description: `Assassin cuts her own flesh which increases her strength and speed. When this ability is used in combination with the poisonous blade itself, her full prowess as an assassin is unleashed (deals damage, insta kill chance 6%, applies poison and curse - 3 turns, drastically increases own agility, raises own strength, applies curse on self - 6 turns [demerit] )`,
            text: ["I’ve killed countless peoples...grief, sorrow, rage, resentment.\nThe Murasame remembers all the lives I’ve taken."],
            image: "https://i.imgur.com/NIN25wB.gif",
            canBeUsed: false
        }
    },

    {
        id: 136,
        name: ["rumia", "youkai of the dusk"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/vdQjJCH.png", "https://i.imgur.com/84st6gv.png", "https://i.imgur.com/EZOpz6b.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female"],
        about: `A man-eater youkai that exists in the realm of Gensokyo. She firmly believes that it is her job to terrorize and attack humans. Despite her man-eating habits, she is pretty absent-minded, constantly smacking into things by overusing her manipulation of darkness.`,
        level: 1,
        exp: 0,
        currentHp: 350,
        maxHp: 350,
        stats: {
            strength: 30,
            endurance: 35,
            agility: 30,
            magic: 40,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Manipulating Darkness", "10% chance to inflict fear (3 turns) with normal attacks on enemy ; Immune to curse and fear"],
        quotes: ["Are you the kind of person I can eat?"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> <:icons8matches:643527652119937065>',
        origin: 'Touhou Project',
        code: '843675',
        NPLevel: 1,
        noblePhantasm: {
            name: "Darkness Sign - Demarcation",
            power: 50,
            description: `Absorbs all light and creates a boundary of absolute darkness, then sneaks up and takes a huge chunk of her enemy (deals damage, heal self depending on npEffectiveness, inflict fear - 3 turns, apply confusion on enemy and self [demerit] for 4 turns)`,
            text: [""],
            image: "https://i.imgur.com/zonOJ5j.gif",
            canBeUsed: false
        }
    },

    {
        id: 137,
        name: ["madara uchiha", "madara"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/UjLLsiZ.png", "https://i.imgur.com/E3z2fWg.png", "https://i.imgur.com/V5Gew5s.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male"],
        about: `After his brother was killed he only wanted to get stronger and stronger to avenge his little brother death. As a servant he only care about fighting and won’t use his master power or anything.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 45,
            endurance: 40,
            agility: 40,
            magic: 30,
            luck: 15
        },
        statsPoints: 0,
        passive: ["Taijutsu", "Normal attacks are calculated based on sum of Strength + Endurance"],
        quotes: ["In this world, wherever there is light – there are also shadows"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> <:icons8matches:643527652119937065>',
        origin: 'Naruto Shippuden',
        code: '432198',
        NPLevel: 1,
        noblePhantasm: {
            name: "Infinite Tsukuyomi",
            power: 50,
            description: `This jutsu puts the whole world in an illusion where they are at their desired world and live happily. (decreases enemy strength, magic, inflicts confusion - 5 turns; -1 charge on enemy and stun them for 2 turns)`,
            text: [""],
            image: "https://i.imgur.com/4BqIf2B.gif",
            canBeUsed: false
        }
    },

    {
        id: 138,
        name: ["mysterious heroine x", "mhx", "heroine x", "x", "a-x", "mysterious racer x" ,"artoria pendragon", "arturia pendragon", "altria pendragon"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/5Ic4SJs.png", "https://i.imgur.com/ZaepFr6.png", "https://i.imgur.com/ZIAUYHw.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "king", "dragon"],
        about: `A Stranger that came visiting from a mysterious dimension called Servant Universe. Claiming to be the definitive edition of the Saber Class, an Anti-Saber Decisive Weapon that fair and square performs surprise attacks as a knight.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 55,
            magic: 55,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Galaxy Meteor Sword XEX", "100% Crit Chance against Saber Class enemies"],
        quotes: ["Now, Master. The next Saber must be waiting.\nI am not an Assassin!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '115686',
        NPLevel: 1,
        noblePhantasm: {
            name: "Secret-Calibur",
            power: 50,
            description: `The holy swords that boast tremendous power against Sabers. They don't shoot beams, but are clad in beams. (deals damage (significant damage against Saber Class enemies), raises own strength and agility)`,
            text: [`I will kill every other Saber!\nO', Sword of Starlight. Red, White, Black, thou shalt obliterate!\nKeep this a secret everyone! X(Ex)... calibur`],
            image: "https://i.imgur.com/VDztP8f.gif",
            canBeUsed: false
        }
    },

    {
        id: 139,
        name: ["mysterious heroine x (alter)", "mhxa", "fallen knight sir pendragon", "mhx alter", "mysterious heroine x alter", "artoria pendragon", "arturia pendragon", "altria pendragon"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/K6tAEuo.png", "https://i.imgur.com/SBUiyF0.png", "https://i.imgur.com/nwU6IkR.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["female", "king", "dragon"],
        about: `A Villain (antagonist), the last of her kind, on a visit from the Servant Universe. Also Anti-Anti-Saber final weapon who swears to defeat Mysterious Heroine X whilst fuelling her magical energy converter, the Altreactor.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 40,
            magic: 60,
            luck: 30
        },
        statsPoints: 0,
        passive: ["∞ Chestnut Paste", "Increases own healing received by 50%; Critical Strength + 30%"],
        quotes: ["Haa... I want to go home..."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '235686',
        NPLevel: 1,
        noblePhantasm: {
            name: "Cross-Calibur",
            power: 50,
            description: `Her prided sword, ‘Wicked Holy Sword Necrocalibur’, was bought online from a shady vendor. (deals damage (significant damage against Saber Class enemies), raises own strength, slighhtly restores HP)`,
            text: [`I have been waiting for this moment.\nAltereactor, critical limits exceeded. Through my darkness's brilliance, return to elementary particles!\n...Cross-Calibur!!`],
            image: "https://i.imgur.com/pWvN3kZ.gif",
            canBeUsed: false
        }
    },

    {
        id: 140,
        name: ["artoria pendragon (lily)", "artoria pendragon lily", "knight princess", "arturia pendragon lily", "altria pendragon lily", "king arthur lily", "artoria lily", "altria lily", "arturia lily"],
        class: "Saber",
        pictures: ["https://i.imgur.com/Oo08r9B.png", "https://i.imgur.com/vqqKC1W.png", "https://i.imgur.com/ZDxh8Ud.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "king", "dragon"],
        about: `Inexperienced knight that had had just began walking down the path of a king. To learn more about the world, she traveled the land and engaged in many adventures.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 40,
            magic: 45,
            luck: 55
        },
        statsPoints: 0,
        passive: ["Journey of Flowers", "20% chance to raise own NP charge by 1 each turn"],
        quotes: ["I'm still in the middle of my training but I'll do my best."],
        summonableWith: '<:Saintquartz:693210492818423858> <:icons8sword:644265939009011723>',
        origin: 'Fate/Grand Order',
        code: '111444',
        NPLevel: 1,
        noblePhantasm: {
            name: "Caliburn",
            power: 50,
            description: `It converts the magical energy of the owner into heat values, releasing it as particles of light (deals damage, restores own HP)`,
            text: [`Please watch me. I will bring you victory!\nSword of Selection, grant me power! Cleave the wicked!\nCaliburn!`],
            image: "https://i.imgur.com/zDb9OEf.gif",
            canBeUsed: false
        }
    },

    {
        id: 141,
        name: ["takuto tsunashi", "takuto", "tsunashi takuto", "galactic pretty boy ", "mecha driver x" ],
        class: "Rider",
        pictures: ["https://i.imgur.com/8HG3YxI.png", "https://i.imgur.com/UK7JKPb.png", "https://i.imgur.com/7WcC6gX.png", "https://i.imgur.com/vUdivJR.png", "https://i.imgur.com/mHeBpQz.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: `Rider pilots the hidden 22nd Cybody, Tauburn, normally very energetic and optimistic towards otheres. Rider firmly believes that he should fight for those who are weak and need help. He posseses an "X" shaped scar on his chest also known as the Tau mark.`,
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 35,
            endurance: 45,
            agility: 40,
            magic: 35,
            luck: 40
        },
        statsPoints: 0,
        passive: ["It's a pinch!", "If HP falls bellow 25%, double all stats [once per battle]"],
        quotes: ["When what you want to do is what you have to do, you'll see the light!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Star Driver: Kagayaki no Takuto',
        code: '221022',
        NPLevel: 1,
        noblePhantasm: {
            name: "Tauburn",
            power: 50,
            description: `Extremely powerful "Warrior" type Cybody with a large arsenal of special moves and a versatile fighting style. (slightly decreases enemy agility, raises own agility, magic, luck and slightly strength )\n 2nd **Pile Crusher**: Tauburn uses the four Piles on his back to form around its right hand. They connect, form, and spin like a drill without a pointed end with multiple uses. (raises own magic and luck first then deals damage)`,
            text: ["Dashing Entrance, Ginga Bishonen.\nTauburn!"],
            image: "https://i.imgur.com/p8C9nKX.gif",
            canBeUsed: false
        }
    },

    {
        id: 142,
        name: ["arcueid brunestud", "white princess", "white princess of the true ancestors", "true ancestor", "arcueid", "financial crisis where electronic trading decimates an entire nations economy"],
        class: "Temptress",
        pictures: ["https://i.imgur.com/TJbhC5z.png", "https://i.imgur.com/yvBbnJB.png", "https://i.imgur.com/Q7x0wOY.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: `She is the lone survivor of the True Ancestor's royal line, believed to be the foundation of the vampiric species. Though her lineage as a vampire is her most outstanding trait, she is an Elemental of the planet more akin to a destructive force of nature like typhoons and earthquakes. True Ancestors are the embodiment of the consciousness of the planet.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 60,
            endurance: 40,
            agility: 50,
            magic: 30,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Ultimate One", "Enemy's positive stat changes will also be reflected on self"],
        quotes: ["You're suprised I won't drink your blood Master?"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Tsukihime',
        code: '255255',
        NPLevel: 1,
        noblePhantasm: {
            name: "Blut die Schwester",
            power: 50,
            description: `Temptress creates a mirror image of the Moon and brings it down to Earth, dropping it into the enemy. (deals Significant Damage, stuns enemy for 2 turns, slightly lowers enemy Agility)`,
            text: [`Watch as the Red Moon comes for you... CRAAAASHH!!!`],
            image: "https://i.imgur.com/T0EBztm.gif",
            canBeUsed: false
        }
    },

    {
        id: 143,
        name: ["ciel", "bow", "elesia"],
        class: "Ruler",
        pictures: ["https://i.imgur.com/ULRCqHD.png", "https://i.imgur.com/8CZz7Sg.png", "https://i.imgur.com/3jt9iKl.png", "https://i.imgur.com/bbP3vOC.png", "https://i.imgur.com/tAAvQil.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: `Ruler had lived a normal life until her sixteenth birthday, when a reincarnating vampire took control of her actions and impulses. Soon after, she gained a paradoxical immortality, found out after a month of being killed repeatedly by the Church. Because of this ability, she was later taken in by the Burial Agency, an organization tasked with destroying heretics.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 35,
            endurance: 25,
            agility: 40,
            magic: 45,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Regeneration", "Restores 5% of own HP each turn"],
        quotes: ["Your orders Master?"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Tsukihime',
        code: '319768',
        NPLevel: 1,
        noblePhantasm: {
            name: "Seventh Holy Scripture",
            power: 50,
            description: `Ruler combines with Seven, using Reinforcement magic on herself to wield the Seventh Holy Scripture, firing its bayonet directly into her enemy. (deals damage, inflicts Curse for 3 turns, slightly raises own Agility and Strength)`,
            text: [`Seven! Combine!!`],
            image: "https://i.imgur.com/Qky8UED.gif",
            canBeUsed: false
        }
    },

    {
        id: 144,
        name: ["tohno shiki", "tohno", "shiki", "nanaya shiki", "satsujinki"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/imV0oBv.png", "https://i.imgur.com/91AzM7d.png", "https://i.imgur.com/I8UthBb.png"],
        alignment: ["Neutral", "Good"],
        traits: ["male"],
        about: `Assassin is a highschool boy that after an accident 8 years ago, became able to see "Death" through lines and points. Unable to control his new Mystic Eyes of Death Perception, he was gifted a special kind of glasses called the Mystic Eye Killers.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 20,
            endurance: 15,
            agility: 55,
            magic: 50,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Nanaya Arts", "When HP drops bellow 25% raise Critical Chance to 100%"],
        quotes: ["Let's hurry Master. My anemia will act up if I stay active too long."],
        summonableWith: '<:Saintquartz:693210492818423858> 🔪 👓 <:wooden_chair:676136047545024533>',
        origin: 'Tsukihime',
        code: '171717',
        NPLevel: 1,
        noblePhantasm: {
            name: "Mystic Eyes of Death Perception",
            power: 50,
            description: `Supernatural ability that allows the user to see the inherent mortality of everything (both living and non-living) in the form of lines and points. (deals damage, reduces enemy defense, 6% chance to instantly kill the target, raises own critical strength)`,
            text: [` This is what it means to kill something.`],
            image: "https://i.imgur.com/2BngtBZ.gif",
            canBeUsed: false
        }
    },

    {
        id: 145,
        name: ["nrvnqsr chaos", "nrvnqsr", "chaos"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/UUITGTe.png", "https://i.imgur.com/vqn7zQc.png", "https://i.imgur.com/DGnfngM.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: `Berserker is a living amalgamation of 666 creatures and the tenth of the 27 Dead Apostle Ancestors, whose magical research allowed him to combine his own existence with other creatures to achieve immortality, at the cost of the slow detriment of his sanity.`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 25,
            magic: 40,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Lair of the Beast King", "Normal attacks have 20% chance to inflict fear (3 turns) on the enemy"],
        quotes: ["I shall spread the chaos."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Tsukihime',
        code: '666027',
        NPLevel: 1,
        noblePhantasm: {
            name: "Chaos Stampede",
            power: 50,
            description: `Rider sends out a horde of stampeding creatures, trampling and crippling the opponent. (first decreases enemy agility and strength then deals damage)`,
            text: [`You would oppose chaos? Know futility!`],
            image: "https://i.imgur.com/1PC1PBi.gif",
            canBeUsed: false
        }
    },

    {
        id: 146,
        name: ["tohno akiha", "akiha", "akiha vermillion", "lunatic akiha"],
        class: "Archer",
        pictures: ["https://i.imgur.com/W1MIxDs.png", "https://i.imgur.com/Eeq7nvb.png", "https://i.imgur.com/v92MhGi.png", "https://i.imgur.com/EktiC48.png", "https://i.imgur.com/FXheDm2.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female"],
        about: `When she was young, her brother, who was the future head of the Tohno was disinherited due to an accident, she became the new head and had a harsh upbringing. The Tohno blood is weak on her but she is still prune to fall to her Inversion Impulse, so she maintains it in check by drinking blood.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 15,
            endurance: 25,
            agility: 35,
            magic: 40,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Judgemental", "Cut enemy lowest stat in half at the start of battle"],
        quotes: ["What are we planning to do Master?"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Tsukihime',
        code: '006139',
        NPLevel: 1,
        noblePhantasm: {
            name: "Caging Hair",
            power: 50,
            description: `Archer uses her Hair to plunder the heat of her enemy due to being a half-demon and applies it into her. [Slightly restores health, applies Curse and Burn for 4 turns on the enemy]`,
            text: [`Are you prepared? I'll plunder you into nothingness!!`],
            image: "https://i.imgur.com/Rj5ew9G.gif",
            canBeUsed: false
        }
    },

    {
        id: 147,
        name: ["alice synthesis thirty", "alice", "arisu shinseshisu sāti", "alice zuberg", "fragrant olive", "the radiant medium"],
        class: "Alter Ego",
        pictures: ["https://i.imgur.com/hhb5rw6.jpg", "https://i.imgur.com/eTokhM9.png", "https://i.imgur.com/pTJVvZy.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female"],
        about: `Due to accidentally breaking a clause of the Taboo Index in her childhood, she was apprehended by Deusolbert Synthesis Seven and taken to the Central Cathedral, where she was forced to become an Integrity Knight.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 50,
            endurance: 40,
            agility: 49,
            magic: 60,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Sacred Arts Mastery", "Raise own Magic stat by 50% at the start of battle"],
        quotes: ["What should I ...?"],
        summonableWith: '<:icons8sword:644265939009011723> <:9777_gold:643527652464001024>',
        origin: 'Sword Art Online: Alicization',
        code: '011001',
        NPLevel: 1,
        noblePhantasm: {
            name: "Fragrant Olive Sword: Release recollection",
            power: 50,
            description: `With the «Armament Full Control Art» in effect, the sword is capable of splitting into hundreds or even thousands of golden flakes of flower petals, each measuring less than a centimeter long. The petals have an absurdly large weight, are capable of high-speed and unrestrained movement in the air and can become sharper than a slender sword’s tip. (raises own strength and agility, removes evade buffs from the enemy)`,
            text: [""],
            image: "https://i.imgur.com/OX7eSIP.gif",
            canBeUsed: false
        }
    },

    {
        id: 148,
        name: ["medusa (lancer)", "ana", "medusiana", "medusa"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/F81BvTc.png", "https://i.imgur.com/DZeZsgT.png", "https://i.imgur.com/CTZu3bS.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "divine"],
        about: `A goddess born as a perfected "image (idol)", the embodiment of men's longing. Due some factor, the anti-hero acquired a condition as a goddess that is close to that of her two sisters and manifested as a Servant.`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 30,
            endurance: 20,
            agility: 50,
            magic: 33,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Sentiments for the Beyond", "Starts the battle with active guts status and evade (1 time)"],
        quotes: ["I sense battle. It's time for a new fight..."],
        summonableWith: '<:icons8spear:644265939310739476> 🍬 <:7937_JustARock:643527652732567563>',
        origin: 'Fate/Grand Order',
        code: '146253',
        NPLevel: 1,
        noblePhantasm: {
            name: "Caress of the Medusa",
            power: 50,
            description: `After haunting with the immortal-slayer blade on her hands, she instantly turns the opponents within her line of sight into stone - an effect by means of mystic eyes of the highest level, “Cybele”. She performs a fierce attack with this at its focal point. (deals damage, stun enemy 1turn)`,
            text: ["Fingers of iron, hair like a cage, and whispers that become poison!\nThis is my essence! Caress of the Medusa!"],
            image: "https://i.imgur.com/M3lrtvK.gif",
            canBeUsed: false
        }
    },

    {
        id: 149,
        name: ["maple", "black armored devil", "final boss"],
        class: "Shielder",
        pictures: ["https://i.imgur.com/SggW5Va.jpg", "https://i.imgur.com/XcuLsjc.png", "https://i.imgur.com/0tcEx1W.png", "https://i.imgur.com/XcuLsjc.png", "https://i.imgur.com/0tcEx1W.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "immune to poison", "immune to stun"],
        about: `Shielder is the definition of perfect defense. Shielder wanted to be able to take no damage so she became the ultimate tank. She is a curious albeit air-headed individual who unwittingly gains overpowered skills as a result of bizarre actions, such as when she ate a dungeon boss. `,
        level: 1,
        exp: 0,
        currentHp: 1260,
        maxHp: 1260,
        stats: {
            strength: 1,
            endurance: 126,
            agility: 1,
            magic: 1,
            luck: 1
        },
        statsPoints: 0,
        passive: ["Maple", "Doubles own endurance; at the start of battle if four of your stats (other than Endurance) are lower than your opponent, your stats other than Endurance are multiplied by x2; 5% chance to inflict stun (1 turn) on the enemy with normal attacks; every time you receive a normal attack, increase Endurance by +1; immune to stun; immune to poison;"],
        quotes: ["Where did bunny go...?"],
        summonableWith: '🛡 <:icons8poisonbottle:646074309575573525>',
        origin: `Bofuri: I Don't Want to Get Hurt, so I'll Max Out My Defense.`,
        code: '676431',
        NPLevel: 1,
        noblePhantasm: {
            name: "Devour",
            power: 50,
            description: `A skill that changes everything that was devoured as power. Will devour even magic, and can change it to the user’s MP. Admins limited number of uses to 10 times per day to prevent abuse of the skill but the MP that will be absorbed will be doubled. (insta kill chance %5, apply evade to self - 10 times, enemy charge -1, own NP charge +1, raises own magic stat by combined values of magic and strength stats of the enemy)\n2nd **Hydra**: Shielder draws her blade and summons her poison hydra to lay waste to the field. She traps them with a paralyzing shout to ensure their demise. (deals damage, inflicts poison - 5 turns and stun - 2 turns, own magic -10% [demerit])`,
            text: ["I'm sorry that didn't work."],
            image: "https://i.imgur.com/ZByi64R.gif",
            canBeUsed: false
        }
    },

    {
        id: 150,
        name: ["jiraiya", "legendary sannin", "toad sage", "pervy sage", "pervy old man", "jiraiya-boy"],
        class: "Caster",
        pictures: ["https://i.imgur.com/8e6M6GV.png", "https://i.imgur.com/QOvqx82.png", "https://i.imgur.com/ms7g3mr.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: `Caster is one of the three legendary sannin, three legendary ninja renowned for their strength. He attained his power after trying to learn a teleportation ability which backfired and sent him to an entirely new place where he learned that he was destined to find a student who would bring a great change to the world, so he set off on this journey to find this “prophecy student” and eventually succeeded.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 50,
            magic: 30,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Presence Concealment", "Starts battle with evade (1 time)"],
        quotes: ["All you do need, is the guts to never give up Master."],
        summonableWith: '<:icons8magicwand:644277713216995348> <:Dream_Escape_Rope_Sprite:643527652531240982> ',
        origin: 'Naruto',
        code: '404196',
        NPLevel: 1,
        noblePhantasm: {
            name: "Sage Mode",
            power: 50,
            description: `Sage mode is a temporary, yet very powerful state that Caster has the ability to enter by summoning the 2 toads Ma and Pa. This is because his sage mode isn’t complete due to his reluctance to use it. (Increases agility, increases strength, inflicts confusion on the opponent for 2 turns)`,
            text: [""],
            image: "https://i.imgur.com/aJQWKxb.gif",
            canBeUsed: false
        }
    },

    {
        id: 151,
        name: ["joker (persona 5)", "joker (p5)", "joker", "the phantom", "phantom thief", "ren amamiya", "akira kurusu", "trickster", "renren", "the pompous man in the black coat"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/wWZ0wMX.png", "https://i.imgur.com/24Tm4bM.png", "https://i.imgur.com/u3MCcZe.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["male"],
        about: `The leader of the Phantom Thieves of Hearts, a vigilante group composed of students who awakened supernatural powers called Persona. He is able to explore a metaphysical realm that physically manifests humanity's subconscious desires to remove malevolence from the hearts of people. His primary persona is Arsene, a tall winged figure that specializes in curses.`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 40,
            magic: 50,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Adverse Resolve", "Critical Chance +30%"],
        quotes: ["I can still fight Master!"],
        summonableWith: '🔪 ⛓ <:1426_pistol:643527652317331472>',
        origin: 'Persona 5',
        code: '551155',
        NPLevel: 1,
        noblePhantasm: {
            name: "Arsene",
            power: 50,
            description: `Joker invokes and calls upon Arsene, using his Persona's powers to change the tides of battle to his favor. (Deals damage (if enemy magic stat is greater use theirs magic stat value to calculate the damage dealt), lower enemy agility and apply curse - 10 turns, lose 10% of own Max HP [demerit], if assassin is cursed: remove curse and decrease enemy HP by 20%, negate own NP demerit)`,
            text: ["I am thou. Thou art I. You frauds who are in over your heads... Allow me to show you. How you pale in comparison to us as thieves!"],
            image: "https://i.imgur.com/6WwnwQR.gif",
            canBeUsed: false
        }
    },

    {
        id: 152,
        name: ["takuru miyashiro", "takuru", "miyashiro takuru", "miyashiro", "taku", "president of the hekiho academy newspaper club", "self proclaimed right-sider"],
        class: "Moon Cancer",
        pictures: ["https://i.imgur.com/5KjQ1vx.jpg", "https://i.imgur.com/udN0xd9.png", "https://i.imgur.com/rRpMYmo.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male"],
        about: `Moon Cancer finds joy by aiming to be superior than those who are naive by fulfilling his unquenchable thirst for knowledge. He often suffers from delusions during certain situations. In his delusions, he tends to dive into temptation. However, he seems to have discipline, good morals and ethics and never actually acts on his sexual, or violent desires.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 10,
            endurance: 15,
            agility: 20,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Right-sider", "If inflicted with NP seal, negate it, double own NP effectivenes and discard it's demerit"],
        quotes: ["It's all a goddamn stupid game."],
        summonableWith: '👓 <:icons8energydrink:643527652434640936>',
        origin: 'Chaos;Child',
        code: '711872',
        NPLevel: 1,
        noblePhantasm: {
            name: "Gigalomania (Telekinesis)",
            power: 50,
            description: `As a Gigalomaniac he can force certain concepts into existence through real-booting his delusions, he specializes in telekinesis that alows him to move objects with power of mind alone. His delusions can be unpleasant to him at times. (raises own magic and defense, calculate normal attacks damage based on magic, apply fear to self - 4 turns[demerit])`,
            text: ["Prepare yourself wrong-sider."],
            image: "https://i.imgur.com/B43HJTM.gif",
            canBeUsed: false
        }
    },

    {
        id: 153,
        name: ["tanya von degurechaff", "the devil of rhine", "mad dog", "battalion commander", "ace of aces", "fairy", "tanya"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/YzBbDSS.png", "https://i.imgur.com/sb1bzPl.png", "https://i.imgur.com/JBMJeGA.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female", "male"],
        about: `Initially, there was a salaryman, who died in 2013 and was given a second chance by 'Being X' upon being born as a girl unto a different world. As an Avenger, upon her word, she still held a grudge against Being X and refused to believe of Devil being God.`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 55,
            magic: 50,
            luck: 25
        },
        statsPoints: 0,
        passive: ["Manipulator", "At the start of battle, switch enemy highest stat with the lowest one"],
        quotes: ["Curse you, Being X!"],
        summonableWith: '<:1426_pistol:643527652317331472> 🧨 🍬',
        origin: 'Youjo Senki',
        code: '203203',
        NPLevel: 1,
        noblePhantasm: {
            name: "God's Eyes",
            power: 50,
            description: `By using the Elenium Type 95 and praying to Being X, her eyes turn gold and her physical and mental psyche increases beyond the extent of a normal human. Moreover, she has increased accuracy and prediction in a shooting and is able to cast a high tier powerful explosive spell that could destroy a whole company. This, however, makes her suffer by having mental corruptions, and barely remembers what she did after. (increases magic, agility and luck; apply normall attacks damage based on magic, inflict curse on self - 8 turns [demerit])`,
            text: ["Freedom without laws means anarchy; laws without freedom means tyranny."],
            image: "https://i.imgur.com/pmF32MW.gif",
            canBeUsed: false
        }
    },

    {
        id: 154,
        name: ["kira yoshikage", "kira", "yoshikage kira", "kosaku kawajiri"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/C9vpagZ.png", "https://i.imgur.com/L6M3dsx.png", "https://i.imgur.com/Z9SmqJz.png", "https://i.imgur.com/szPCbPM.png", "https://i.imgur.com/vJ9juZj.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: `Unnoticed in Morioh for years and undisturbed all his life, Assassin is an abnormal and paraphilic serial killer whose routine is shaken when the ghost of his first victim, Reimi Sugimoto, begs the Joestar Group to look for him and he attracts unwanted attention by killing Shigekiyo Yangu.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 20,
            magic: 40,
            luck: 60
        },
        statsPoints: 0,
        passive: ["Lucky", "Each turn raise own luck by 5%"],
        quotes: ["I want a peaceful life. It's just that it's in my nature to kill"],
        summonableWith: '🔪 🧨 🍞',
        origin: "JoJo's Bizzare Adventure",
        code: '013066',
        NPLevel: 1,
        noblePhantasm: {
            name: "Killer Queen",
            power: 50,
            description: `Killer Queen is a short-range humanoid Stand of average to above-average speed and melee attacking power. Killer Queen's powers revolve around setting up different kinds of bombs that can annihilate enemies in one blast. Revealing Assassin's True Name may activate "Bites The Dust"(raise own strength and agility, deals damage, insta kill chance 3%; if Assassin's True Name was revealed: damage raises to significant, insta kill chance raises to 30%, additionally drastically raises own luck )`,
            text: ["Killer Queen can erase you at any time.\nFor you see, Killer Queen can turn anything it touches into a bomb."],
            image: "https://i.imgur.com/khdhlCN.gif",
            canBeUsed: false
        }
    },

    {
        id: 155,
        name: ["sesshōin kiara", "sesshoin kiara", "kiara", "sessyoin kiara", "sesshouin kiara", "demonic bodhisattva", "last prophet", "beast iii/r"],
        class: "Alter Ego",
        pictures: ["https://i.imgur.com/ievg5vT.png", "https://i.imgur.com/5AtqMoR.png", "https://i.imgur.com/XsL2gXh.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female"],
        about: `The antagonist of Buddha. The saint that appeared in the Deep Sea Virtual Paradise, SE.RA.PH.The one who employed the rare qualities as a messiah that she possessed only for her own sake, metamorphosing into something not-human.`,
        level: 1,
        exp: 0,
        currentHp: 550,
        maxHp: 550,
        stats: {
            strength: 20,
            endurance: 55,
            agility: 45,
            magic: 70,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Nega Saver", "Deals 50% more damage to Ruler Class enemies"],
        quotes: ["You have no choice now but to stay with me until the very end Master."],
        summonableWith: '🔮',
        origin: 'Fate/Grand Order',
        code: '156992',
        NPLevel: 1,
        noblePhantasm: {
            name: "Amitābha Amidala - Heaven's Hole",
            power: 50,
            description: `A subtype of the Third Magic. Although it draws in substances with a super gravity akin to that of a black hole, its true nature is considered to be a disposal hole. (sure hit, deals damage that ignores defense to enemy, recovers own HP)`,
            text: ["Ladies and gentleman, the day of salvation has come.\nI welcome you inside me. Please, savour this feeling.\nUfufufu... ahahahaha! Haah... how irresistible.\nYou belong to me, forever...!"],
            image: "https://i.imgur.com/nNVI9gG.gif",
            canBeUsed: false
        }
    },

    {
        id: 156,
        name: ["santa artoria alter", "santa alter", "artoria pendragon santa alter", "artoria pendragon (santa alter)", "arthuria pendragon santa alter", "arthuria pendragon santa alter", "arthuria alter", "artoria alter", "altria alter"],
        class: "Rider",
        pictures: ["https://i.imgur.com/JIQTSeT.png", "https://i.imgur.com/JVA8mOC.png", "https://i.imgur.com/EboKXbX.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "king", "dragon"],
        about: `A form taken by Rider, who resolved herself to wiping out her own image and attempted to carry out activities as the ally of children・Santa Claus. The sack she holds in her hand is packed with the best-selection of presents that she spent a whole year saving up.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 50,
            endurance: 30,
            agility: 20,
            magic: 65,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Mana Burst", "Increase own defense  by 30%"],
        quotes: ["Good work, my reindeer. Now then, let's get on to our quest."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '122500',
        NPLevel: 1,
        noblePhantasm: {
            name: "Excalibur Morgan - Sword of Promised Victory",
            power: 50,
            description: `The sword of black aurora. Because she is wielding the holy sword to her heart's content, without controlling her own magical energy, the particles of magical energy ended up becoming not light, but a darkness that swallows light. (deals significant damage, own NP charge +2)`,
            text: ["Here's a little something from Santa― Fall under the Holy Night, Excalibur Morgan! Hm hm hm, hm hm hm, hm hm! hm, hmhm!"],
            image: "https://i.imgur.com/gzh9EWE.gif", 
            canBeUsed: false
        }
    },

    {
        id: 157,
        name: ["megumin (lancer)", "santa megumin", "megumin", "candy mage", "sugar demon", "crazy-headed girl", "jailbait", "crazy crimson demon girl", "the greatest of the crimson demons", "the explosion mage", "eromin", "meagermin", "explosion artisan", "the true crimson goddess of destruction"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/NaxjZ5o.jpg", "https://i.imgur.com/uR0X0Zm.png", "https://i.imgur.com/WqW7pOE.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female"],
        about: "She got this huge candy cane along with whole bag of smaller ones from Wiz's shop. She's acting even more crazy than usual due to blood sugar spike from all the candy cane she ate.",
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 15,
            endurance: 15,
            agility: 30,
            magic: 50,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Warm Clothes", "Can not be frozen"],
        quotes: ["Gimme a candy Master."],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '101418',
        NPLevel: 1,
        noblePhantasm: {
            name: "Sugar Rush",
            power: 50,
            description: `All the sugar from the candies she ate causes this sudden and brief burst of energy. (drastically raises own strength and agility, cures stun and fear, changes own class to Berserker)`,
            text: ["Gimme candy ... candy cane ... candy ..."],
            image: "https://i.imgur.com/OOzTKtg.gif",
            canBeUsed: false
        }
    },

    {
        id: 158,
        name: ["aqua (temptress)", "santa aqua", "aqua", "beautiful goddess", "goddess of water", "lady aqua", "goddess of the axis church"],
        class: "Temptress",
        pictures: ["https://i.imgur.com/gpTsEy4.jpg", "https://i.imgur.com/i74AAYJ.png", "https://i.imgur.com/d8LGflx.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female", "divine", "immune to curse", "immune to poison"],
        about: `The way she changed must be some kind of a christmas miracle. She definietley can't be called useless in this form, full of charm, embodiment of true goddess and christmas spirit.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 45,
            magic: 50,
            luck: 45
        },
        statsPoints: 0,
        passive: ["Purity", "Immunity to poison and curse"],
        quotes: ["Merry Christmas Master 💗"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '835684',
        NPLevel: 1,
        noblePhantasm: {
            name: "Goddess' Charm",
            power: 50,
            description: `Her gaze makes her enemies loose their will to fight, her gentle, beautiful voice filled with her goddess power can touch and purify human hearts, even of those most evil and mad among the human kind. (restores own HP, drastically raises own luck, lowers enemy strength magic and defense; if enemy is cursed or poisoned: cure both statuses but for each cured, adittionally lower enemy strength and magic by 50%)`,
            text: ["Merry Christmas 💗"],
            image: "https://i.imgur.com/9oQ5wgo.gif",
            canBeUsed: false
        }
    },

    {
        id: 159,
        name: ["gilgamesh (caster)", "gilgamesh", "humanity's oldest king", "king of heroes of decadence", "king of heroes", "linchpin of heaven", "king of uruk", "king of babylonia", "the golden king", "gil", "goldie", "wedge of heaven"],
        class: "Caster",
        pictures: ["https://i.imgur.com/YTC2DW0.png", "https://i.imgur.com/C14UuHV.png", "https://i.imgur.com/ev50VJC.png"],
        alignment: ["Lawful", "Good"],
        traits: ["male", "divine", "king"],
        about: `The wisest king of all, made so after returning from his quest for immortality. In the legends, he is spoken of as "the man who saw everything."`,
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 30,
            endurance: 20,
            agility: 30,
            magic: 55,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Sovereign of Magical Wands", "Grants a bonus to magecraft-type attacks [normal attacks based on magic deal x 1.5 damage]"],
        quotes: ["You're 100 years early to be resting. Don't bore me, mongrel."],
        summonableWith: '<:icons8magicwand:644277713216995348> <:9777_gold:643527652464001024> 📖',
        origin: 'Fate/ Grand Order',
        code: '145121',
        NPLevel: 1,
        noblePhantasm: {
            name: "Dingir",
            power: 50,
            description: `Dingir is a clay tablet possessed by Caster, utilized in battle to cast spells and summon wands from the Gate of Babylon. They possess the great magecraft of the Age of Gods, allowing free manipulation of their powers without much consumption of the user's energy. Effects used in battle include, fire-based magecraft and lightning-based magecraft. [deals damage, inflicts burn (3 turns), inflicts stun (1 turn), calculate normal attacks damage based on magic]`,
            text: [""],
            image: "https://i.imgur.com/RjDLCsa.gif",
            canBeUsed: false
        }
    },

    {
        id: 160,
        name: ["koneko toujou", "toujou koneko", "koneko", "shirone toujou", "toujou shirone", "shirone", "hell-cat"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/nwD1cmE.png", "https://i.imgur.com/5HkYePD.png", "https://i.imgur.com/rHolgDb.png", "https://i.imgur.com/4Swkoi0.png", "https://i.imgur.com/qFe1hmw.png"],
        alignment: ["Neutral", "Good"],
        traits: ["female"],
        about: `Berserker is a Nekoshou, a rare species of Nekomata. In her distant past, her older sister's magic went so out of control she killed their master. Berserker therefore rejected her magic powers to focus on her physical attributes She likes to act tough but at times has shows herself to be really kind.`,
        level: 1,
        exp: 0,
        currentHp: 250,
        maxHp: 250,
        stats: {
            strength: 40,
            endurance: 25,
            agility: 35,
            magic: 25,
            luck: 15
        },
        statsPoints: 0,
        passive: ["Flow of Ki Control", "Grants bonus to normal attacks damage based on remaining health [dmg += dmg * Current HP / Max HP]; if the enemy is of Evil alignment, each turn inflict curse on self (2 turns) [demerit]"],
        quotes: ["Nyan♪"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> <:icons8sandbucket:643527652237639701>',
        origin: 'High School DxD',
        code: '675773',
        NPLevel: 1,
        noblePhantasm: {
            name: "Senjutsu",
            power: 50,
            description: `Using ancient arts the berserker covers herself in an aura of ki, increasing her strength, defense, and agility while also healing herself for a small amount [increases strength, defense, and agility, slightly resores hp]`,
            text: ["It’s time to finish this"],
            image: "https://i.imgur.com/o5lA2zK.gif",
            canBeUsed: false
        }
    },

    {
        id: 161,
        name: ["mio naganohara", "mio", "mio-chan!", "naganohara mio", "daisuke naganohara"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/L6h6SHB.png", "https://i.imgur.com/cMds9vP.png", "https://i.imgur.com/6xscp5r.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female"],
        about: `Berserker is a very smart and eccentric, yet very explosive girl... often having a very short temper especially when it comes to people who “act weird”. Berserker mostly excels at academics and is a great artist, but she happens to spend a lot of her time drawing in secret. This is because of the art she tends to draw... Ecchi Yaoi art and manga. Holder of the Wooden Cubes, artifacts of the Fey Kingdom which can give the possessor of the cubes the power of the ancient weapon, giving the possessor the capability to destroy the world.`,
        level: 1,
        exp: 0,
        currentHp: 150,
        maxHp: 150,
        stats: {
            strength: 45,
            endurance: 15,
            agility: 25,
            magic: 10,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Wooden Cubes", "At the start of battle increase all base stats by 20%"],
        quotes: ["The motivation to get started, huh? You just have to get started anyway!"],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 📖',
        origin: 'Nichijou',
        code: '921625',
        NPLevel: 1,
        noblePhantasm: {
            name: "The Precious Notebook",
            power: 50,
            description: `Berserkers art is very precious to her and is very... private. She hates letting anyone see it and goes into a massive rage whenever anyone does. During these outbursts, her physical strength and speed increase at alarming rates. [increases strength and agility first, then deals damage, applies evade (1time) ]`,
            text: ["You misheard me because you’re stupid!"],
            image: "https://i.imgur.com/zrgSkBq.gif",
            canBeUsed: false
        }
    },

    {
        id: 162,
        name: ["reg", "regu", "the treasure of the deep"],
        class: "Archer",
        pictures: ["https://i.imgur.com/GWOVI3d.png", "https://i.imgur.com/jXfWjBv.png", "https://i.imgur.com/AsDnll2.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["male"],
        about: `Archer is a robot who was built to look like a young boy. Despite being a robot, he has emotions, organs and can even cry, especially when people he loves are in trouble. He is loving, caring and very sweet. He is driven by the motivation to find out where he came from and is desperate to find this out.`,
        level: 1,
        exp: 0,
        currentHp: 450,
        maxHp: 450,
        stats: {
            strength: 20,
            endurance: 45,
            agility: 35,
            magic: 20,
            luck: 15
        },
        statsPoints: 0,
        passive: ["Mechanical Body", "Immunity to poison, increase own defense by 10%"],
        quotes: ["In that case... leave it to me Master"],
        summonableWith: '<:icons8archersbow:644246512926195734> ⚙ 🔋 🧨',
        origin: 'Made in Abyss',
        code: '213814',
        NPLevel: 1,
        noblePhantasm: {
            name: "Incinerator",
            power: 50,
            description: `The incinerator is a weapon/tool that is a part of Archer's body. It allows him to grapple to things and shoot beams. Archer is limited to only a set few blasts before his body cannot take it anymore. [Deals significant damage, inflicts burn for 3 turns, decreases own agility by 20% and stuns self for 2 turns [demerit] ]`,
            text: ["Irredeemable!"],
            image: "https://i.imgur.com/PmYbGWj.gif",
            canBeUsed: false
        }
    },

    {
        id: 163,
        name: ["mirai kuriyama", "kuriyama mirai", "mirai", "megane bishoujo"],
        class: "Saber",
        pictures: ["https://i.imgur.com/5BCsy1U.jpg", "https://i.imgur.com/VP9ghIs.png", "https://i.imgur.com/9ekY53X.png"],
        alignment: ["Neutral", "Neutral"],
        traits: ["female"],
        about: `The sole survivor of her Spirit World Warrior Clan. With the ability to manipulate her own blood, she is able to forge a sword and use it as corrosive spray. Coupled with her graceful swordsmanship and superior agility than humans, she tries to earn money by slaying Youmu (Evil Spirits) to fund her expensive bonsai-tree blogging hobby.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 20,
            endurance: 30,
            agility: 40,
            magic: 30,
            luck: 20
        },
        statsPoints: 0,
        passive: ["Self-conscious", "Deals double damage if HP is below 50%; deals half damage if it's equal or higher than 50% [demerit]"],
        quotes: ["Somewhere along the line, I had decided that I can’t interact with others. That I have no choice but to be alone, but I’ve found a new reason to stay. It’s because everyone is alone, Master. Everyone is all alone."],
        summonableWith: '<:icons8sword:644265939009011723> 👓 <:6164_Instant_Ramen:643527652803739658>',
        origin: 'Kyoukai no Kanata',
        code: '225786',
        NPLevel: 1,
        noblePhantasm: {
            name: "Hemokinesis",
            power: 50,
            description: `Saber forges a sword out of her own blood, wielding it with grace and finesse as she cuts down her enemies and parrying their attacks with inhuman precision. [Reduces own Endurance by 10% [Demerit]; adds points to Strength stat equal to the amount of points Endurance was reduced, raises own Defence and Srength ]`,
            text: ["How unpleasant!"],
            image: "https://i.imgur.com/1g9CR48.gif",
            canBeUsed: false
        }
    },

    {
        id: 164,
        name: ["ken kaneki", "kaneki ken", "miracle human", "k-eater", "nameless king", "haise sasaki", "ken", "haise", "eyepatch", "centipede", "one eyed king", "black reaper", "number 240"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/hEXlUWg.png", "https://i.imgur.com/BTODD81.png", "https://i.imgur.com/9g874sf.png", "https://i.imgur.com/7slUWdV.png", "https://i.imgur.com/HM38yzV.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "dragon", "king"],
        about: `Berserker is a half-human half-ghoul. After sustaining serious injuries, Berserker underwent an organ transplant and received ghoul organs. Berserker lost many friends due his weakness, so he devoted his life to getting stronger to protect the ones he loves. Due to his consumption of ghouls he started to turn into a Kakuja: a ghoul with a transformed kagune, a predatory organ used as a weapon.`,
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 30,
            endurance: 40,
            agility: 45,
            magic: 25,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Regeneration", "Restores 5% of own HP each turn"],
        quotes: ["Everyone’s the same, in fact. He’s the main character of his novel, and she’s the main character of her movie. All those that walk this earth are the main characters of their own tragedies. All steal, and from all, something is stolen. We can’t help it. That’s who we are. Life is sad. Empty. But, despite knowing we will one day be bereft, despite knowing we will one day disappear, we still strive in wretched ways."],
        summonableWith: '<:5958_BrokenHeroSword:644265939126321153> 📖 ☕',
        origin: 'Tokyo Ghoul',
        code: '240240',
        NPLevel: 1,
        noblePhantasm: {
            name: "Centipede Kakuja",
            power: 50,
            description: `Berserker awakens his Centipede Kakuja, which sprouts twin-like centipede legs out of his sides and makes him lose control of himself. (Increases strength and agility, slightly increase endurance, fears enemy for 2 turns)\n2nd **Dragon Kakuja**: Transforms into a giant, uncontrollable beast. His kagune surrounds the entirety of the given area (Drastically increases endurance, slightly raises strength, inflicts poison on self and enemy for 3 turns, inflicts NP Seal on self for 8 turns, decreases own agility by 20% [demerit])`,
            text: ["I won’t pull back. I will press forward. Just like a centipede"],
            image: "https://i.imgur.com/q79zk1g.gif",
            canBeUsed: false
        }
    },

    {
        id: 165,
        name: ["space ishtar", "ashtareth", "astarte", "s. ishtar", "ishtar"],
        class: "Avenger",
        pictures: ["https://i.imgur.com/rkrUhiP.png", "https://i.imgur.com/B5HPkxo.png", "https://i.imgur.com/0q2q0JK.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female", "divine"],
        about: `A servant from an alternate universe, she has 3 seperate personalities, but since they have the same origin, they can be considered the same person. She chases down villains with partners as a bounty hunters despite also being an outlaw. Avenger has a strong sense of justice and righteousness, and is therefore in a position where she uses villainous tactics, but for the good of the people around her, prioritising everyone's victory over her own personal gain`,
        level: 1,
        exp: 0,
        currentHp: 600,
        maxHp: 600,
        stats: {
            strength: 40,
            endurance: 60,
            agility: 40,
            magic: 60,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Multiple Sterling", "At the start of the battle, 60% chance to increase ATK by 40%. 60% chance to increase MAG by 40%, 60% chance to increase AGI by 40%; starts with NP charge = 3"],
        quotes: ["You think you can order me?"],
        summonableWith: '🔭',
        origin: 'Fate/Grand Order',
        code: '268316',
        NPLevel: 1,
        noblePhantasm: {
            name: "Edin Shugra Quasar",
            power: 50,
            description: `Avenger summons the ancient temple Bel Maana, comprised of high-dimensional souls, to transform the Spiritual Core of the Milky Way Galaxy, transforming it into energy that burns space. It's strength depends on Avenger's mood at the time.(Deals significant damage, slightly increases own Agility, Strength and Magic)`,
            text: ["Accept your fate! The empty wasteland, the shining crown, bloom magnificently like a rose!"],
            image: "https://i.imgur.com/J904SBL.gif",
            canBeUsed: false
        }
    },

    {
        id: 166,
        name: ["itachi uchiha", "itachi", "uchiha itachi"],
        class: "Assassin",
        pictures: ["https://i.imgur.com/JOxZmaV.png", "https://i.imgur.com/bsZRPfi.png", "https://i.imgur.com/Wq66hpV.png"],
        alignment: ["Neutral", "Evil"],
        traits: ["male"],
        about: `Assassin is an extremely skilled shinobi from the Hidden Leaf Village. Assassin is a calm minded person even in the midts of a battle,  he keeps his emotion and thoughts to himself as to not show any weakness. His reason for participating in this Holy Grail War to protect his village, and his determination to keep the village safe is so strong that he would even kill his master.`,
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 45,
            endurance: 30,
            agility: 50,
            magic: 45,
            luck: 15
        },
        statsPoints: 0,
        passive: ["Tsukuyomi", "Stuns enemy for 2 turn at the start of battle"],
        quotes: ["Try all the abilities you wish, but my eyes can see through them"],
        summonableWith: '🔪 <:icons8matches:643527652119937065>',
        origin: 'Naruto',
        code: '102965',
        NPLevel: 1,
        noblePhantasm: {
            name: "Susanoo",
            power: 50,
            description: `Assassin summons a knight-like skeleton to aid him in battle. The skeleton holds two skills known as  "Yata Mirror" and "Totsuka Blade". Yata Mirror is a shield that allows him to change nature based on his opponent's attack. Totsuka Blade is a longsword that can seal any enemies hit by the blade (slightly raises endurance, raises defence, apply normal attack damage dealt based on magic, stuns the enemy for 2 turns and inflicts NP seal for 2 turns. Loses 5% of current hp [Demerit])`,
            text: [""],
            image: "https://i.imgur.com/4jEm1UD.gif",
            canBeUsed: false
        }
    },

    {
        id: 167,
        name: ["momon", "ainz ooal gown (alter ego)", "ainz ooal gown", "ainz", "supreme one", "lord momonga", "sorcerer king", "king of darkness", "momonga"],
        class: "Alter Ego",
        pictures: ["https://i.imgur.com/bEmYQRm.png", "https://i.imgur.com/Z59ps6v.png", "https://i.imgur.com/nWZY2II.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["male", "king"],
        about: `Dark warrior and leader of Darkness, an adamantite ranked adventurer group. He is an adamantite class adventurer and the strongest adventurer known in E-Rantel.`,
        level: 1,
        exp: 0,
        currentHp: 500,
        maxHp: 500,
        stats: {
            strength: 40,
            endurance: 50,
            agility: 20,
            magic: 30,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Perfect Warrior", "At the start of battle reduce own Magic to 1 and reassign those points to Strength; convert all Magic buffs to Strength ones"],
        quotes: ["I know your strength and trust you, Master. However, until we know more about this world, we must always move forward believing the enemy is stronger than us"],
        summonableWith: '<:9359_MCcoal:643529413979406336> <:3679_silver:643527652250222604>',
        origin: 'Overlord',
        code: '817744',
        NPLevel: 1,
        noblePhantasm: {
            name: "Twin Great Swords",
            power: 50,
            description: `The two swords wich were created by the spell "Create Greater Item". He can also additionally use the swords for throwing as a long-range projectile weapon and then make a new one appear. [first raises own strength then deals damage two times (damage uses Strength stat in calculation) ]`,
            text: ["There is no need for me to fight someone of your level seriously."],
            image: "https://i.imgur.com/pUrlXU3.gif",
            canBeUsed: false
        }
    },

    {
        id: 168,
        name: ["nero claudius (caster)" ,"nero claudius", "emperor of roses", "nero claudius caesar augustus germanicus", "nero"],
        class: "Caster",
        pictures: ["https://i.imgur.com/kltybCQ.png", "https://i.imgur.com/RusF6ri.png", "https://i.imgur.com/dKT53bS.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "king", "summer"],
        about: "A self-proclaimed universal genius. She was a cross- dressing beauty as a Saber(or so she says), but this time around, she is not hiding the fact that she is a beauty, and is enjoying the summer ocean wholeheartedly. She may love herself, but she also loves the people around her",
        level: 1,
        exp: 0,
        currentHp: 200,
        maxHp: 200,
        stats: {
            strength: 20,
            endurance: 20,
            agility: 50,
            magic: 45,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Rampaging Privilege", "Starts the battle with NP charge = 3; when below 50% of Max HP, gain +1 NP charge each turn"],
        quotes: ["Let's go swimming, Master! No matter how many great Roman Emperors there are, there is no other better suited to summer fun than me! This swimsuit...this passion...is for my contractor!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/ Grand Order',
        code: '843143',
        NPLevel: 1,
        noblePhantasm: {
            name: "Laudatum Domus Illustris",
            power: 50,
            description: 'For Caster who had acquired the Saint Graph as a "Singing One", this is the display of her full talents. The Golden Theatre is not restricted to its interior, it has become an outdoor stage to face its surroundings and allows Caster to bring across her singing voice [first removes all evades from the enemy and raises own magic, then deals damage and inflicts confusion on the enemy (3 turns) ]',
            text: ["Are you ready? I will no longer stop!\nEnjoy, this is the finest Aurora! Fufufu, what is that? A beauty!? Rome!? It’s me of course♪"],
            image: "https://i.imgur.com/sf4uncn.gif",
            canBeUsed: false
        }
    },

    {
        id: 169,
        name: ["maid alter", "artoria pendragon alter maid (rider)", "artoria pendragon alter (rider)", "demonic chief maid", "saber alter", "salter", "artoria alter", "artoria pendragon alter", "malter"],
        class: "Rider",
        pictures: ["https://i.imgur.com/Ap6LAYE.png", "https://i.imgur.com/aA90tC7.png", "https://i.imgur.com/k5MPzVQ.png"],
        alignment: ["Lawful", "Evil"],
        traits: ["female", "dragon", "king", "summer"],
        about: "With summer approaching, instead of being a tyrant, she thought to reflect on her role by becoming a helper. What she's saying is understandable, but how she came to that conclusion is a complete mystery. She may have chosen the path of a maid because she wanted to make Master's summer better. ",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 40,
            magic: 50,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Reloaded", "While NP charge reaches 0, gain +3 NP charge; if your agility is higher than your oponent, deal +25% more damage"],
        quotes: ["Honestly, I was about to praise you for becoming a proper Master, but look at you! I turn around for an instant, and you've already gone soft. As you are, I will have no choice but to remain at your side forever"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/ Grand Order',
        code: '616716',
        NPLevel: 1,
        noblePhantasm: {
            name: "Secace Morgan",
            power: 50,
            description: `It is a combination Noble Phantasm formed by using Excalibur Morgan and Secace. They combine into a large sniper rifle to repel the filthy invaders before they enter the "lord's domain." [deals damage, reduces enemy agility]`,
            text: ["Turn on the engine. It’s execution time.\nYou can’t run. The relentless magic bullet will race across the water’s surface. Lock."],
            image: "https://i.imgur.com/0f9A5D5.gif",
            canBeUsed: false
        }
    },

    {
        id: 170,
        name: ["oda nobunaga (berserker)", "demon king of the sixth heaven of the beach", "nobunaga the rockstar", "oda nobunaga", "demon king of the sixth heaven", "nobu", "demon archer", "big fool of owari", "nobbu", "the great fool of owari", "king of innovation"],
        class: "Berserker",
        pictures: ["https://i.imgur.com/XUm7r2R.png", "https://i.imgur.com/u7z7TzT.png", "https://i.imgur.com/3Zka6ob.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["female", "king", "summer"],
        about: "Berserker rocking out in a kickass swimsuit. She gets even more frolicky than usual. She may be concealing it with foolish statements, but this form is pretty dangerous for Berserker, so she periodically releases (shouts) her magical energy (rock) to cool down.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 40,
            magic: 30,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Unifying the Nation by Force", "At the start of battle raise all stats by distributing stat points equal to the enemy magic stat among all own stats equally."],
        quotes: ["Come on, dance with me. What? That's embarrassing? Uwahaha! You're so cute. Eh? Me? Dancing with you is a gratifying, enjoyable, unifying the nation by force! Got it? Come on, come closer! "],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Fate/Grand Order',
        code: '697153',
        NPLevel: 1,
        noblePhantasm: {
            name: "Nobunaga THE Rock 'n' Roll",
            power: 50,
            description: `A limited power release state of a Reality Marble that transforms to display immense strength against anyone who carries the trait Divinity. A mysterious Giant Skeleton (assumed name) manifests behind the back of the power released Berserker, showing off Demon King-like strength. [deals damage (heavy damage agains enemies with divine trait) ]`,
            text: [`It can’t be helped! The Three Realms, gods and Buddha, return to ashes! I am the Demon King of the Sixth Heaven Hajun, Oda Nobunaga! UUUoooooooooo!`],
            image: "https://i.imgur.com/06ELQEl.gif",
            canBeUsed: false
        }
    },

    {
        id: 171,
        name: ["ishtar (rider)", "ishtar", "goddess of venus", "inanna", "mistress of heaven"],
        class: "Rider",
        pictures: ["https://i.imgur.com/LnNvlAL.png", "https://i.imgur.com/5ZQlYkn.png", "https://i.imgur.com/d7nj6lw.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "divine", "summer"],
        about: "After witnessing the enthusiasm of people during summer festivals and being moved by the peoples' devotion, she decided to host a great event of her own. She is truly a goddess among goddesses. Riding Maanna, the Boat of Heaven, which has been modified to look more modern, she is a kung fu goddess who nimbly and acrobatically darts around.",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 30,
            endurance: 30,
            agility: 50,
            magic: 45,
            luck: 40
        },
        statsPoints: 0,
        passive: ["Summer Breaker!", "Critical Chance +30%; Critical Strength +30%; every 4th turn apply evade on self and gain +1 NP charge; every 5th one apply stun to self [demerit]"],
        quotes: ["H-hey? Are you tired? I-I suppose you would be, since I'm dragging you everywhere...I'm sorry. I just never imagined travelling with you would be so much fun...I guess I should have made my scooter seat two..."],
        summonableWith: '<:Saintquartz:693210492818423858> 🔭',
        origin: 'Fate/ Grand Order',
        code: '661526',
        NPLevel: 1,
        noblePhantasm: {
            name: "An Gal Tā - Seven Colors",
            power: 50,
            description: "She's set to enjoy summer to the fullest with all that she can muster. This iridian Noble Phantasm allows Rider to raise her spirits by going sightseeing at resorts all over the world on her Maanna Scooter, converting those happy feelings into magical energy, and letting it rain down on the earth. (slightly raises own magic first, then deals damage)",
            text: [" A vacation of a goddess, want to see and relish in it?"],
            image: "https://i.imgur.com/BVuAOQt.gif",
            canBeUsed: false
        }
    },

    {
        id: 172,
        name: ["darkness (saber)", "darkness", "dakunesu", "dasutinesu fōdo raratīna", "dustiness ford lalatina", "eroness", "lalatina", "raratina"],
        class: "Saber",
        pictures: ["https://i.imgur.com/Yv1m25D.png", "https://i.imgur.com/79Rwbr4.png", "https://i.imgur.com/2iExo9I.png"],
        alignment: ["Lawful", "Good"],
        traits: ["female", "summer"],
        about: `A 5'6" tall young woman with graceful features and alabaster skin, Saber is drop-edge gorgeous. While she is more than willing to put herself in harms way to satisfy her urges, she refuses to allow others to be harmed. Summer is a perfect time to take care of your own body, Saber wants to use her free time to make hers even more durable and strong, in order to... (I won't explain what she's planing to do with her body later...)`,
        level: 1,
        exp: 0,
        currentHp: 700,
        maxHp: 700,
        stats: {
            strength: 50,
            endurance: 70,
            agility: 10,
            magic: 20,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Masochist", "Each time when receiving normal attack damage increase own Strength stat by 20% of damage dealt"],
        quotes: ["No pain, no gain"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Kono Subarashii Sekai ni Shukufuku wo!',
        code: '062574',
        NPLevel: 1,
        noblePhantasm: {
            name: "Push-Ups",
            power: 50,
            description: "Saber does a series of push-ups which incease her strenght and endurance [drastically raises own strength, slightly raises own endurance]",
            text: ["One.. Two..\nOne.. Two..\nOne.. Two.."],
            image: "https://i.imgur.com/QXNFozj.gif",
            canBeUsed: false
        }
    },

    {
        id: 173,
        name: ["maple (rider)", "maple", "black armored devil", "final boss"],
        class: "Rider",
        pictures: ["https://i.imgur.com/AQ38lLd.png", "https://i.imgur.com/LgZZMI9.png", "https://i.imgur.com/TlWGNvU.png"],
        alignment: ["Chaotic", "Good"],
        traits: ["female", "summer"],
        about: `Rider is a simple individual. However, her defining traits are her air-headedness, innocence and love for fun. She isn't that much of a competitive person, and often plays just for her and others' fun. Also, she particularly does not hold grudges against anyone, viewing virtually everyone as a potential friend.`,
        level: 1,
        exp: 0,
        currentHp: 900,
        maxHp: 900,
        stats: {
            strength: 1,
            endurance: 90,
            agility: 10,
            magic: 1,
            luck: 30
        },
        statsPoints: 0,
        passive: ["Maple", "Doubles own endurance; at the start of battle if four of your stats (other than Endurance) are lower than your opponent, your stats other than Endurance are multiplied by x2; 5% chance to inflict stun (1 turn) on the enemy with normal attacks; every time you receive a normal attack, increase Endurance by +1; immune to stun; immune to poison;"],
        quotes: ["Let's go to swim, Master!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: `Bofuri: I Don't Want to Get Hurt, so I'll Max Out My Defense.`,
        code: '676432',
        NPLevel: 1,
        noblePhantasm: {
            name: "Summer Time Meditation",
            power: 50,
            description: `Rider relaxes her body floating on the water surface which drastically speed ups her health recovery [significantly recovers own HP, removes burn and freeze statuses from self]`,
            text: ["The weather is so lovely today"],
            image: "https://i.imgur.com/Cl0pqa0.gif",
            canBeUsed: false
        }
    },


    {
        id: 174,
        name: ["sinon (ruler)", "sinon", "asada shino", "shinon", "sinonon", "asada", "shino asada"],
        class: "Ruler",
        pictures: ["https://i.imgur.com/EgKNNHg.png", "https://i.imgur.com/qgQEqAN.png", "https://i.imgur.com/McEjION.png"],
        alignment: ["Lawful", "Neutral"],
        traits: ["female", "summer"],
        about: "Calm and cool are two words that best describe Ruler's personality. In battle she keeps a cool head, which earns her respect from her friends and foes. However, Ruler has a violent temper once angered. This summer she decided do work part-time as judge in the races which take part on the local beach. You may be sure she will take her job seriously... maybe a little bit too seriously...",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 10,
            endurance: 40,
            agility: 50,
            magic: 30,
            luck: 50
        },
        statsPoints: 0,
        passive: ["Unavoidable Punishment", "If the enemy has active evade status, decrease their HP by 5% of their Max HP for each evade stack and remove them"],
        quotes: ["Let's play fair and square Master. If you won't, you know what awaits you later..."],
        summonableWith: `<:Saintquartz:693210492818423858>`,
        origin: 'Sword Art Online',
        code: '487820',
        NPLevel: 1,
        noblePhantasm: {
            name: "No Rule Breakers",
            power: 50,
            description: "If anyone dares to cheat or break any rules around her she will make them deeply regret doing so [first removes all enemy buffs and further lowers each previously buffed stat by the amount equal to removed buff (except endurance); then deals damage]",
            text: ['You thought you may cheat on my watch?!'],
            image: "https://i.imgur.com/ILguAJt.gif",
            canBeUsed: false
        }
    },

    {
        id: 175,
        name: ["renji abarai (lancer)", "renji abarai", "red pineapple", "renji", "freeloader-san", "lieutenant of the 6th division"],
        class: "Lancer",
        pictures: ["https://i.imgur.com/ehhKqA1.png", "https://i.imgur.com/IgMRnFO.png", "https://i.imgur.com/ODLzZEx.png"],
        alignment: ["Chaotic", "Neutral"],
        traits: ["male", "summer"],
        about: "Not being able to bear summer heat anymore in the squad barracks, Lancer decided to change his training location to the beach. He truly is a born swimmer, but please, for your own safety, don't do things he does during his swimming practice",
        level: 1,
        exp: 0,
        currentHp: 400,
        maxHp: 400,
        stats: {
            strength: 40,
            endurance: 40,
            agility: 50,
            magic: 20,
            luck: 10
        },
        statsPoints: 0,
        passive: ["Swift Swim", "Each turn raise own agility by 5%"],
        quotes: ["Worrying about a swimmer's life on the beach is only an insult"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Bleach',
        code: '266114',
        NPLevel: 1,
        noblePhantasm: {
            name: "Aqua Jet Zabimaru",
            power: 50,
            description: "Lancer is not the type to just dive head first to the sea, he preffers to use his Zabimaru to launch himself head first into the deepest waters [drastically increases own agility; reduces current HP by 5% of Max HP [demerit]]",
            text: ["Let's dive, Zabimaru!"],
            image: "https://i.imgur.com/1pq5MI4.gif",
            canBeUsed: false
        }
    },

    {
        id: 176,
        name: ["revy (archer)", "revy", "rebecca lee", "rebecca", "two hands"],
        class: "Archer",
        pictures: ["https://i.imgur.com/QcPL67O.png", "https://i.imgur.com/v8KQJN9.png", "https://i.imgur.com/jbwbVZc.png"],
        alignment: ["Chaotic", "Evil"],
        traits: ["female", "summer"],
        about: "Archer decided to take a break from work and head to the beach. More calm than usual, she packed her swimsuit, sunscreen and her guns? This can not end well...",
        level: 1,
        exp: 0,
        currentHp: 300,
        maxHp: 300,
        stats: {
            strength: 40,
            endurance: 30,
            agility: 45,
            magic: 25,
            luck: 35
        },
        statsPoints: 0,
        passive: ["Heat Stroke", "Each turn there is 25% chance to inflict burn status on self (3 turns); while burnt instead of reducing own Strength each turn, raise it instead"],
        quotes: ["Nothing beats a gunfight on the beach. Let's shoot as many people as we can and have a loads of fun Master!"],
        summonableWith: '<:Saintquartz:693210492818423858>',
        origin: 'Black Lagoon',
        code: '998002',
        NPLevel: 1,
        noblePhantasm: {
            name: "Gun Bath",
            power: 50,
            description: "Archer decided to get a tan... pretty simple thing to do, right? Just take off your clothes, lay down and shoot to everything that moves? [deals damage x times where x is equal to own active burn stacks +1]",
            text: ["Ahahahaha..."],
            image: "https://i.imgur.com/zSi4tmK.gif",
            canBeUsed: false
        }
    },







    //    TEMPLATE
    // {
    //     id: 000,
    //     name: ["", "", "", "", ""],
    //     class: "",
    //     pictures: ["", "", ""],
    //     alignment: ["", ""],
    //     traits: [""],
    //     about: ``,
    //     level: 1,
    //     exp: 0,
    //     currentHp: 100,
    //     maxHp: 100,
    //     stats: {
    //         strength: 10,
    //         endurance: 10,
    //         agility: 10,
    //         magic: 10,
    //         luck: 10
    //     },
    //     statsPoints: 0,
    //     passive: ["", ""],
    //     quotes: [""],
    //     summonableWith: '',
    //     origin: '',
    //     code: '',
    //     NPLevel: 1,
    //     noblePhantasm: {
    //         name: "",
    //         power: 50,
    //         description: ``,
    //         text: [""],
    //         image: "",
    //         canBeUsed: false
    //     }
    // },


]

module.exports = characters;