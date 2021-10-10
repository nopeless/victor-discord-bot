const chancify = require('chancify');
const { MessageEmbed } = require('discord.js');
const characters = require("../charactersList");
const chooseHighestStat = require('./chooseHighestStat');
const chooseLowestStat = require('./chooseLowestStat');


const abilityCheck = (servant1, servant2, message) => {

    let pas1 = servant1.passive[0]
    let pas2 = servant2.passive[0]

    // for 1st servant
    if (pas1 == "Played Steel" && pas2 != "Played Steel"){
        servant1.passive[0] = servant2.passive[0]
        pas1 = servant1.passive[0]
    }
    if (pas1 == "Battle Continuation" || pas1 == "Invictus Spiritus" || pas1 == "Avalon" || pas1 == "Sentiments for the Beyond") {
        servant1.guts = true
    }
    if (pas1 == "Protection from Wind") {
        servant1.evade += 2
    }
    if (pas1 == "Mystic Eyes of Petrification"){
        servant2.stun(3)
        servant2.debuffAgility(250)
    }
    if (pas1 == "Sabotage"){
        servant2.debuffStrength(500)
        servant2.debuffMagic(500)
    } 
    if (pas1 == "Affection of the Holy Grail"){
        servant1.charge += 3
        servant1.buffCriticalStrength(500) 
    }
    if (pas1 == "Dual Wielding") {
        servant1.buffStrength(servant1.stats.strength/2)
    }
    if (pas1 == "Crest of the Star") {
        servant1.buffStrength(servant1.stats.strength * 0.3)
        servant1.buffMagic(servant1.stats.magic * 0.2)
    }
    if (pas1 == "Protection from Arrows") {
        servant1.evade += 3
    }
    if (pas1 == "Love Spot" && servant2.traits.includes("female") && servant2.class != "Saber" && servant2.class != "Archer" && servant2.class != "Lancer") {
        servant2.debuffStrength(200)
        servant2.debuffEndurance(200)
        servant2.debuffMagic(200)
        servant2.debuffAgility(200)
        servant2.debuffLuck(200)
    }
    if (pas1 == "Protection from Ra") {
        servant1.charge += 5
    }
    if (pas1 == "Mana Burst" || pas1 == "Sword Shield") {
        servant1.buffDefence(300)
    }
    if (pas1 == "All Kinds of Specializations") {
        servant1.buffStrength(servant1.stats.strength * 0.1)
        servant1.buffEndurance(servant1.stats.endurance * 0.1)
        servant1.buffAgility(servant1.stats.agility * 0.1)
        servant1.buffMagic(servant1.stats.magic * 0.1)
        servant1.buffLuck(servant1.stats.luck * 0.1)
        servant1.evade += 1
    }
    if (pas1 == "Aesthetics of the Last Spurt") {
        servant1.charge += 4
        servant1.evade += 1
        servant1.buffAgility(servant1.stats.agility * 0.5)
    }
    if (pas1 == "Witchcraft") {
        servant2.charge -= 1
    }
    if (pas1 == "Pioneer of the Stars") {
        servant1.charge += 4
    }
    if (pas1 == "Demonic Habituation") {
        servant1.buffCriticalStrength(500)
    }
    if (pas1 == "Bajiquan") {
        servant1.buffCriticalStrength(700)
    }
    if (pas1 == "Supernatural Power (JK)" || pas1 == "Eternal Arms Mastery" || pas1 == "Wisdom of Dún Scáith" || pas1 == "∞ Chestnut Paste") {
        servant1.buffCriticalStrength(300)
    }
    if (pas1 == "Evaporation of Sanity") {
        servant1.charge += 3
        servant1.buffLuck(servant1.stats.luck * 0.3)
        servant1.buffCriticalStrength(300)
        const hi = chancify(() => { 
            message.channel.send("HELLO, I'm Astolfo <3\nNice to meet you ;p\n`Astolfo strength and magic stats fell significantly...`")
            servant1.revealed = true
            servant1.debuffStrength(500)
            servant1.debuffMagic(500)
         }, 0.7);
        hi();
    }
    if (pas1 == "Intimidate") {
        servant2.fear(5)
    }
    if (pas1 == "Lightning Conqueror") {
        servant1.buffStrength(servant1.stats.strength * 0.2)
        servant1.buffAgility(servant1.stats.agility * 0.2)
    }
    // if (pas1 == "The Queen's Glass Game") {
    //     servant1.charge += 2
    // }
    if (pas1 == "Espionage") {
        servant2.stun(4)
        servant2.npSeal(4)
    }
    if (pas1 == "Mechanical Body" || pas1 == "Summer Splash!") {
        servant1.buffDefence(100)
    }
    if (pas1 == "Revelation"){
        message.channel.send('Revelation:')
        let n = parseInt(servant2.id)
        let character = characters[n]
        let alignment = character.alignment
        if (alignment[0] === alignment[1]) {
            alignment = "True Neutral"
        } else {
            alignment = alignment[0] + " " + alignment[1]
        }
        const embed = new MessageEmbed()
            .setTitle(`${character.name[0]} `)
            .setColor('#800b03')
            .setImage(character.pictures[1])
            .setThumbnail(character.pictures[0])
            .addField(`Class:`, character.class)
            .addField(`Aliases:`, character.name, true)
            .addField(`Traits:`, character.traits, true)
            .addField(`Origin:`, character.origin)
            .addField(`Code:`, character.code)
            .addField(`Summonable with:`, character.summonableWith)
            .addField(`Alignment:`, alignment)
            .addField(`Passive:`, `${character.passive[0]} - ${character.passive[1]}`)
            .addField(`Noble Phantasm:`, `${character.noblePhantasm.name}`)
            .addField('NP Description:', `${character.noblePhantasm.description}`)
            .addField('Base Stats:', `${character.maxHp} HP`, false)
            .addField('Strength', `${character.stats.strength}`, true)
            .addField('Endurance', `${character.stats.endurance}`, true)
            .addField('Agility', `${character.stats.agility}`, true)
            .addField('Magic', `${character.stats.magic}`, true)
            .addField('Luck', `${character.stats.luck}`, true)
        message.channel.send(embed)
    }
    if (pas1 == "All-Seeing Eyes of the Gods") {
        servant2.debuffAgility(300)
    }
    if (pas1 == "Unifying the Nation by Force") {
        let points = Math.floor(servant2.stats.magic / 5)
        servant1.buffStrength(points)
        servant1.buffEndurance(points)
        servant1.buffAgility(points)
        servant1.buffMagic(points)
        servant1.buffLuck(points)
    }
    if (pas1 == "Protection of the Underworld"){
        servant1.buffEndurance(servant1.stats.endurance * 0.5)
    }
    if (pas1 == "Black Blessing"){
        servant2.traits.push("Black Blessing")
    }
    if (pas1 == "Manipulator"){
        let hStat = chooseHighestStat(servant2.stats)// [0]value;[1]name
        let lStat = chooseLowestStat(servant2.stats)
        if (hStat[0] == lStat[0]){

        } else{
            servant2.stats[hStat[1]] = lStat[0]
            servant2.stats[lStat[1]] = hStat[0]
            if (hStat[1] == "endurance" || lStat[1] == "endurance"){
                let percentage = servant2.currentHp / servant2.maxHp
                servant2.maxHp = servant2.stats.endurance * 10
                if (servant2.currentHp > servant2.maxHp){
                    servant2.currentHp = servant2.maxHp
                } else{
                    servant2.currentHp = servant2.maxHp * percentage
                }
            }
        }
    }
    if (pas1 == "Vessel of the Grail" || pas1 == "Sacred Arts Mastery") {
        servant1.buffMagic(servant1.stats.magic * 0.5)
    }
    if (pas1 == "Surfing") {
        servant1.buffAgility(servant1.stats.agility * 0.1)
    }
    if (pas1 == "Midsummer Witchcraft") {
        servant2.stun(1)
        servant2.curse(5)
        servant2.debuffDefence(200)
        servant2.charge += 1
    }
    if (pas1 == "Presence Concealment" || pas1 == "Sentiments for the Beyond"){
        servant1.evade += 1
    }
    if (pas1 == "Finding Faults in Others") {
        let hStat = chooseHighestStat(servant2.stats)
        let lStat = chooseLowestStat(servant1.stats)
        if(lStat[0] >= hStat[0]){

        }else{
            servant2.stats[hStat[1]] = lStat[0]
            servant1.stats[lStat[1]] = hStat[0]

            if (hStat[1] == "endurance") {
                let percentage = servant2.currentHp / servant2.maxHp
                servant2.maxHp = servant2.stats.endurance * 10
                if (servant2.currentHp > servant2.maxHp) {
                    servant2.currentHp = servant2.maxHp
                } else {
                    servant2.currentHp = servant2.maxHp * percentage
                }
            }
            if (lStat[1] == "endurance"){
                let percentage2 = servant1.currentHp / servant1.maxHp
                servant1.maxHp = servant1.stats.endurance * 10
                if (servant1.currentHp > servant1.maxHp) {
                    servant1.currentHp = servant1.maxHp
                } else {
                    servant1.currentHp = servant1.maxHp * percentage2
                }
            }
        }
    }
    if (pas1 == "Judgemental") {
        let lStat = chooseLowestStat(servant2.stats)
        servant2.stats[lStat[1]] = lStat[0] / 2
        if (lStat[1] == "endurance") {
            let percentage = servant2.currentHp / servant2.maxHp
            servant2.maxHp = servant2.stats.endurance * 10
            if (servant2.currentHp > servant2.maxHp) {
                servant2.currentHp = servant2.maxHp
            } else {
                servant2.currentHp = servant2.maxHp * percentage
            }
        }
    }
    if (pas1 == "Maple"){
        servant1.buffEndurance(servant1.stats.endurance)
        if (servant1.stats.strength < servant2.stats.strength && servant1.stats.agility < servant2.stats.agility && servant1.stats.magic < servant2.stats.magic && servant1.stats.luck < servant2.stats.luck){
            servant1.buffStrength(servant1.stats.strength)
            servant1.buffAgility(servant1.stats.agility)
            servant1.buffMagic(servant1.stats.magic)
            servant1.buffLuck(servant1.stats.luck)
        }
    }
    if (pas1 == "Wooden Cubes") {
        servant1.buffEndurance(servant1.stats.endurance / 5)
        servant1.buffStrength(servant1.stats.strength / 5)
        servant1.buffAgility(servant1.stats.agility / 5)
        servant1.buffMagic(servant1.stats.magic / 5)
        servant1.buffLuck(servant1.stats.luck / 5)
    }
    if (pas1 == "Multiple Sterling") {
        servant1.charge += 3
        const SIStr = chancify(() => {
            servant1.buffStrength(servant1.stats.strength * 0.4)
            message.channel.send("Avenger Strength rose")
        }, 0.6);
        const SIAgi = chancify(() => {
            servant1.buffAgility(servant1.stats.agility * 0.4)
            message.channel.send("Avenger Agility rose")
        }, 0.6);
        const SIMag = chancify(() => {
            servant1.buffMagic(servant1.stats.magic * 0.4)
            message.channel.send("Avenger Magic rose")
        }, 0.6);
        SIStr();
        SIAgi();
        SIMag();
        
    }
    if (pas1 == "Tsukuyomi") {
        servant2.stun(2)
    }
    if (pas1 == "Perfect Warrior") {
        let MMagicLost = servant1.stats.magic - 1
        servant1.stats.magic = 1
        servant1.buffStrength(MMagicLost)
    }
    if (pas1 == "Rampaging Privilege") {
        servant1.charge += 3
    }
    if (pas1 == "Summer Breaker!") {
        servant1.buffCriticalStrength(300)
    }

    



    // has to be last
    if (pas2 == "Presence Detection") {
        servant1.evade = 0
    } 









    // for 2nd servant
    if (pas2 == "Played Steel" && pas1 != "Played Steel") {
        servant2.passive[0] = servant1.passive[0]
        pas2 = servant2.passive[0]
    }
    if (pas2 == "Battle Continuation" || pas2 == "Invictus Spiritus" || pas2 == "Avalon" || pas2 == "Sentiments for the Beyond") {
        servant2.guts = true
    }
    if (pas2 == "Protection from Wind") {
        servant2.evade += 2
    }
    if (pas2 == "Mystic Eyes of Petrification") {
        servant1.stun(3)
        servant1.debuffAgility(250)
    }
    if (pas2 == "Sabotage") {
        servant1.debuffStrength(500)
        servant1.debuffMagic(500)
    }
    if (pas2 == "Affection of the Holy Grail") {
        servant2.charge += 3
        servant2.buffCriticalStrength(500)
    }
    if (pas2 == "Dual Wielding") {
        servant2.buffStrength(servant2.stats.strength / 2)
    }
    if (pas2 == "Crest of the Star") {
        servant2.buffStrength(servant2.stats.strength * 0.3)
        servant2.buffMagic(servant2.stats.magic * 0.2)
    }
    if (pas2 == "Protection from Arrows") {
        servant2.evade += 3
    }
    if (pas2 == "Love Spot" && servant1.traits.includes("female") && servant1.class != "Saber" && servant1.class != "Archer" && servant1.class != "Lancer") {
        servant1.debuffStrength(200)
        servant1.debuffEndurance(200)
        servant1.debuffMagic(200)
        servant1.debuffAgility(200)
        servant1.debuffLuck(200)
    }
    if (pas2 == "Protection from Ra") {
        servant2.charge += 5
    }
    if (pas2 == "Mana Burst" || pas2 == "Sword Shield") {
        servant2.buffDefence(300)
    }
    if (pas2 == "All Kinds of Specializations") {
        servant2.buffStrength(servant2.stats.strength * 0.1)
        servant2.buffEndurance(servant2.stats.endurance * 0.1)
        servant2.buffAgility(servant2.stats.agility * 0.1)
        servant2.buffMagic(servant2.stats.magic * 0.1)
        servant2.buffLuck(servant2.stats.luck * 0.1)
        servant2.evade += 1
    }
    if (pas2 == "Aesthetics of the Last Spurt") {
        servant2.charge += 4
        servant2.evade += 1
        servant2.buffAgility(servant2.stats.agility * 0.5)
    }
    if (pas2 == "Witchcraft") {
        servant1.charge -= 1
    }
    if (pas2 == "Pioneer of the Stars") {
        servant2.charge += 4
    }
    if (pas2 == "Demonic Habituation") {
        servant2.buffCriticalStrength(500)
    }
    if (pas2 == "Bajiquan") {
        servant2.buffCriticalStrength(700)
    }
    if (pas2 == "Supernatural Power (JK)" || pas2 == "Eternal Arms Mastery" || pas2 == "Wisdom of Dún Scáith" || pas2 == "∞ Chestnut Paste") {
        servant2.buffCriticalStrength(300)
    }
    if (pas2 == "Evaporation of Sanity") {
        servant2.charge += 3
        servant2.buffLuck(servant2.stats.luck * 0.3)
        servant2.buffCriticalStrength(300)
        const hi = chancify(() => {
            message.channel.send("HELLO, I'm Astolfo <3\nNice to meet you ;p")
            servant2.revealed = true
            servant2.debuffStrength(500)
            servant2.debuffMagic(500)
        }, 0.7);
        hi();
    }
    if (pas2 == "Intimidate") {
        servant1.fear(5)
    }
    if (pas2 == "Lightning Conqueror") {
        servant2.buffStrength(servant2.stats.strength * 0.2)
        servant2.buffAgility(servant2.stats.agility * 0.2)
    }
    // if (pas2 == "The Queen's Glass Game") {
    //     servant2.charge += 2
    // }
    if (pas2 == "Espionage") {
        servant1.stun(4)
        servant1.npSeal(4)
    }
    if (pas2 == "Mechanical Body" || pas2 == "Summer Splash!") {
        servant2.buffDefence(100)
    }
    if (pas2 == "Revelation") {
        message.channel.send('Revelation:')
        let n = parseInt(servant1.id)
        let character = characters[n]
        let alignment = character.alignment
        if (alignment[0] === alignment[1]) {
            alignment = "True Neutral"
        } else {
            alignment = alignment[0] + " " + alignment[1]
        }
        const embed = new MessageEmbed()
            .setTitle(`${character.name[0]} `)
            .setColor('#800b03')
            .setImage(character.pictures[1])
            .setThumbnail(character.pictures[0])
            .addField(`Class:`, character.class)
            .addField(`Aliases:`, character.name, true)
            .addField(`Traits:`, character.traits, true)
            .addField(`Origin:`, character.origin)
            .addField(`Code:`, character.code)
            .addField(`Summonable with:`, character.summonableWith)
            .addField(`Alignment:`, alignment)
            .addField(`Passive:`, `${character.passive[0]} - ${character.passive[1]}`)
            .addField(`Noble Phantasm:`, `${character.noblePhantasm.name}`)
            .addField('NP Description:', `${character.noblePhantasm.description}`)
            .addField('Base Stats:', `${character.maxHp} HP`, false)
            .addField('Strength', `${character.stats.strength}`, true)
            .addField('Endurance', `${character.stats.endurance}`, true)
            .addField('Agility', `${character.stats.agility}`, true)
            .addField('Magic', `${character.stats.magic}`, true)
            .addField('Luck', `${character.stats.luck}`, true)
        message.channel.send(embed)
    }
    if (pas2 == "All-Seeing Eyes of the Gods") {
        servant1.debuffAgility(300)
    }
    if (pas2 == "Unifying the Nation by Force") {
        let points = Math.floor(servant1.stats.magic / 5)
        servant2.buffStrength(points)
        servant2.buffEndurance(points)
        servant2.buffAgility(points)
        servant2.buffMagic(points)
        servant2.buffLuck(points)
    }
    if (pas2 == "Protection of the Underworld") {
        servant2.buffEndurance(servant2.stats.endurance * 0.5)
    }
    if (pas2 == "Black Blessing") {
        servant1.traits.push("Black Blessing")
    }
    if (pas2 == "Manipulator") {
        let hStat = chooseHighestStat(servant1.stats)// [0]value;[1]name
        let lStat = chooseLowestStat(servant1.stats)
        if (hStat[0] == lStat[0]) {

        } else {
            servant1.stats[hStat[1]] = lStat[0]
            servant1.stats[lStat[1]] = hStat[0]
            if (hStat[1] == "endurance" || lStat[1] == "endurance") {
                const percentage = servant1.currentHp / servant1.maxHp
                servant1.maxHp = servant1.stats.endurance * 10
                if (servant1.currentHp > servant1.maxHp) {
                    servant1.currentHp = servant1.maxHp
                } else {
                    servant1.currentHp = servant1.maxHp * percentage
                }
            }
        }
    }
    if (pas2 == "Vessel of the Grail" || pas2 == "Sacred Arts Mastery") {
        servant2.buffMagic(servant2.stats.magic * 0.5)
    }
    if (pas2 == "Surfing") {
        servant2.buffAgility(servant2.stats.agility * 0.1)
    }
    if (pas2 == "Midsummer Witchcraft") {
        servant1.stun(1)
        servant1.curse(5)
        servant1.debuffDefence(200)
        servant1.charge += 1
    }
    if (pas2 == "Presence Concealment" || pas2 == "Sentiments for the Beyond") {
        servant2.evade += 1
    }
    if (pas2 == "Finding Faults in Others") {
        let hStat = chooseHighestStat(servant1.stats)
        let lStat = chooseLowestStat(servant2.stats)
        if (lStat[0] >= hStat[0]) {

        } else {
            servant1.stats[hStat[1]] = lStat[0]
            servant2.stats[lStat[1]] = hStat[0]

            if (hStat[1] == "endurance") {
                let percentage = servant1.currentHp / servant1.maxHp
                servant1.maxHp = servant1.stats.endurance * 10
                if (servant1.currentHp > servant1.maxHp) {
                    servant1.currentHp = servant1.maxHp
                } else {
                    servant1.currentHp = servant1.maxHp * percentage
                }
            }
            if (lStat[1] == "endurance") {
                let percentage2 = servant2.currentHp / servant2.maxHp
                servant2.maxHp = servant2.stats.endurance * 10
                if (servant2.currentHp > servant2.maxHp) {
                    servant2.currentHp = servant2.maxHp
                } else {
                    servant2.currentHp = servant2.maxHp * percentage2
                }
            }
        }
    }
    if (pas2 == "Judgemental") {
        let lStat = chooseLowestStat(servant1.stats)
        servant1.stats[lStat[1]] = lStat[0] / 2
        if (lStat[1] == "endurance") {
            let percentage = servant1.currentHp / servant1.maxHp
            servant1.maxHp = servant1.stats.endurance * 10
            if (servant1.currentHp > servant1.maxHp) {
                servant1.currentHp = servant1.maxHp
            } else {
                servant1.currentHp = servant1.maxHp * percentage
            }
        }
    }
    if (pas2 == "Maple") {
        servant2.buffEndurance(servant2.stats.endurance)
        if (servant2.stats.strength < servant1.stats.strength && servant2.stats.agility < servant1.stats.agility && servant2.stats.magic < servant1.stats.magic && servant2.stats.luck < servant1.stats.luck) {
            servant2.buffStrength(servant2.stats.strength)
            servant2.buffAgility(servant2.stats.agility)
            servant2.buffMagic(servant2.stats.magic)
            servant2.buffLuck(servant2.stats.luck)
        }
    }
    if (pas2 == "Wooden Cubes") {
        servant2.buffStrength(servant2.stats.strength / 5)
        servant2.buffAgility(servant2.stats.agility / 5)
        servant2.buffMagic(servant2.stats.magic / 5)
        servant2.buffLuck(servant2.stats.luck / 5)
    }
    if (pas2 == "Multiple Sterling") {
        servant2.charge += 3
        const SIStr2 = chancify(() => {
            servant2.buffStrength(servant2.stats.strength * 0.4)
            message.channel.send("Avenger Strength rose")
        }, 0.6);
        const SIAgi2 = chancify(() => {
            servant2.buffAgility(servant2.stats.agility * 0.4)
            message.channel.send("Avenger Agility rose")
        }, 0.6);
        const SIMag2 = chancify(() => {
            servant2.buffMagic(servant2.stats.magic * 0.4)
            message.channel.send("Avenger Magic rose")
        }, 0.6);
        SIStr2();
        SIAgi2();
        SIMag2();
    }
    if (pas2 == "Tsukuyomi") {
        servant1.stun(2)
    }
    if (pas2 == "Perfect Warrior") {
        let MMagicLost2 = servant2.stats.magic - 1
        servant2.stats.magic = 1
        servant2.buffStrength(MMagicLost2)
    }
    if (pas2 == "Rampaging Privilege") {
        servant2.charge += 3
    }
    if (pas2 == "Summer Breaker!") {
        servant2.buffCriticalStrength(300)
    }




    // has to be last
    if (pas1 == "Presence Detection") {
        servant2.evade = 0
    }




    return [servant1, servant2]
}

module.exports = abilityCheck;