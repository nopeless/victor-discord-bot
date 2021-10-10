const { MessageEmbed } = require('discord.js');
const chancify = require('chancify');
const chooseHighestStat = require('./chooseHighestStat');
const showCurrentStats = require('./servantFight/showCurrentStats');

const statusCheck = async (message, servant, name, enemy, battlefield)=>{

    let chargeGain = 1
    let statusFade = 1
    if (servant.class === "Avenger"){
        statusFade = 2
    } else if (servant.class === "Moon Cancer"){
        chargeGain = 2
    } else if (servant.class === "Temptress") {
        let dmgStolen = enemy.maxHp * 0.03

        if (enemy.currentHp - dmgStolen < 0) {
            enemy.currentHp = 0
        } else {
            enemy.currentHp -= dmgStolen
        }

        if (servant.currentHp + dmgStolen > servant.maxHp) {
            servant.currentHp = servant.maxHp
        } else {
            servant.currentHp += dmgStolen
        }
    }



    //ability check
    if (servant.passive[0] == "Regeneration" || servant.passive[0] == "Avalon") {
        servant.heal(servant.maxHp * 0.05)
    }
    if (servant.passive[0] == "Meanwhile...") {
        const mean1 = chancify(() => { chargeGain += 1; message.channel.send("NP charge +1") }, 0.5);
        mean1();

        const mean2 = chancify(() => { servant.heal(servant.maxHp * 0.05); message.channel.send("Healed 5%") }, 0.5);
        mean2();
    }

    if (enemy.passive[0] == "Strategic Thinking"){
        let hStat = chooseHighestStat(servant.stats)
        if (hStat[1] == "strength"){
            servant.debuffStrength(30)
        } else if (hStat[1] == "endurance"){
            servant.debuffEndurance(30)
        } else if (hStat[1] == "agility") {
            servant.debuffAgility(30)
        } else if (hStat[1] == "magic") {
            servant.debuffMagic(30)
        } else if (hStat[1] == "luck") {
            servant.debuffLuck(30)
        }
    }
    if (servant.passive[0] == "Strategic Thinking" && servant.currentHp < servant.maxHp / 4 && servant.below25 == false){
        servant.evade += 2
        message.channel.send("evade +2")
    }
    if (servant.passive[0] == "Invictus Spiritus" && servant.currentHp < servant.maxHp / 4 && servant.below25 == false) {
        servant.evade += 1
        message.channel.send("evade +1")
    }
    if (servant.passive[0] == "Geass Command" && servant.currentHp < servant.maxHp / 4){
        const geass = chancify(() => { servant.guts = true; message.channel.send("Geass Command was triggered")}, 0.3);
        geass();
    }
    if (servant.passive[0] == "Rapid Casting" || servant.passive[0] == "Overload" || servant.passive[0] == "Treasury of Babylon") {
        chargeGain += 1
    }
    if (servant.passive[0] == "Seventh Sense" || servant.passive[0] == "Conversion of Power") {
        servant.buffMagic(servant.stats.magic * 0.05)
    }
    if (enemy.passive[0] == "Overload") {
        servant.currentHp -= servant.maxHp * 0.03 
        if(servant.currentHp < 0){
            servant.currentHp = 0
        }
    }
    if (servant.passive[0] == "Unstable Mind") {
        const unstable = chancify(() => { chargeGain += 1; message.channel.send("NP charge +1")}, 0.25);
        unstable();
    }
    
    if (servant.passive[0] == "Mana Burst (Gem)" && servant.turn == 11) {
        servant.buffMagic(servant.stats.magic * 2)
        message.channel.send("Mana Burst (Gem) was activated!")
    }
    if (servant.passive[0] == "Equivalent Exchange") {
        let dmgStolen = enemy.maxHp * 0.03

        if (enemy.currentHp - dmgStolen < 0) {
            enemy.currentHp = 0
        } else {
            enemy.currentHp -= dmgStolen
        }

        if (servant.currentHp + dmgStolen > servant.maxHp) {
            servant.currentHp = servant.maxHp
        } else {
            servant.currentHp += dmgStolen
        }
    }
    if (servant.passive[0] == "Intelligence Gathering" && enemy.revealed === false) {
        const intel = chancify(() => { 
            enemy.revealed = true
            enemy.debuffStrength(500)
            enemy.debuffMagic(500)
            message.channel.send("True Name was revealed through Intelligence Gathering!")
        }, 0.4);
        intel();
    }
    if (servant.passive[0] == "Revelation"){
        const revelation = chancify(() => {
            message.channel.send("Enemy Stats:")
            showCurrentStats(enemy, message)
        }, 0.2);
        revelation();
    }
    if (servant.passive[0] == "Reiatsu Fluctuaction") {
        let flc = 0
        const fluctuate = chancify(() => {
            flc = 1
        }, 0.7);
        fluctuate();

        if (flc == 1){
            servant.buffStrength(servant.stats.strength * 0.1)
            servant.buffEndurance(servant.stats.endurance * 0.1)
            servant.buffAgility(servant.stats.agility * 0.1)
            servant.buffMagic(servant.stats.magic * 0.1)
            servant.buffLuck(servant.stats.luck * 0.1)
            message.channel.send("All stats rose!")
        } else {
            servant.debuffStrength(50)
            servant.debuffMagic(50)
            servant.debuffEndurance(50)
            servant.debuffAgility(50)
            servant.debuffLuck(50)
            message.channel.send("All stats fell...")
        }
    }
    if (servant.passive[0] == "Intangibility" || servant.passive[0] == "Body Flicker") {
        const intangible = chancify(() => {
            servant.evade += 1
            message.channel.send("evade +1")
        }, 0.1);
        intangible();
    }
    if (servant.passive[0] == "Kiss Demon") {
        const kiss = chancify(() => {
            servant.charge += 1
            enemy.charge -= 1
            servant.buffMagic(enemy.stats.magic * 0.1)
            enemy.debuffMagic(100)
            message.channel.send("Stolen enemy magic and NP Charge")
        }, 0.2);
        kiss();
    }
    if (servant.passive[0] == "Wisdom of Dún Scáith" && enemy.gotCrit == true){
        servant.evade += 1
        message.channel.send("evade +1")
    }
    if (enemy.passive[0] == "Despair Aura"){
        servant.instaKill(0.01)
        const dfuse = chancify(() => {
            servant.confuse(2)
        }, 0.1);
        dfuse();
        const dear = chancify(() => {
            servant.fear(3)
        }, 0.2);
        dear();
    }
    if (enemy.passive[0] == "My Red Mead: My Dear Honey Alcohol" && servant.traits.includes('male')) {
        const alc = chancify(() => {
            servant.stun(3)
            servant.npSeal(1)
            message.channel.send("My Red Mead: My Dear Honey Alcohol was triggered")
        }, 0.3);
        alc();  
    }
    if (servant.passive[0] == "Summer Splash!" || servant.passive[0] == "Journey of Flowers"){
        const splash = chancify(() => {
            chargeGain += 1
            message.channel.send("NP Charge +1")
        }, 0.2);
        splash();
    }
    if (servant.passive[0] == "Heat Stroke") {
        const stroke = chancify(() => {
            servant.burn(3)
            message.channel.send("Heat Stroke was triggered!")
        }, 0.25);
        stroke();
    }
    if (servant.passive[0] == "Reiryoku") {
        servant.buffStrength(servant.stats.strength * 0.05)
    }
    if (servant.passive[0] == "It's a pinch!" && servant.currentHp < servant.maxHp / 4 && servant.below25 == false && !servant.traits.includes("It's a pinch!")) {
        servant.traits.push("It's a pinch!")
        servant.buffEndurance(servant.stats.endurance)
        servant.buffStrength(servant.stats.strength)
        servant.buffAgility(servant.stats.agility)
        servant.buffMagic(servant.stats.magic)
        servant.buffLuck(servant.stats.luck)
        message.channel.send("It's a pinch!")
    }
    if (servant.passive[0] == "Lucky") {
        servant.buffLuck(servant.stats.luck * 0.05)
    }
    if (servant.passive[0] == "Flow of Ki Control" && enemy.alignment[1] == "Evil"){
        servant.curse(2)
    }
    if (servant.passive[0] == "Rampaging Privilege" && servant.currentHp < servant.maxHp / 2) {
        chargeGain += 1
    }
    if (servant.passive[0] == "Reloaded" && servant.charge == 0) {
        chargeGain += 3
    }
    if (servant.passive[0] == "Summer Breaker!" ) {
        if (servant.turn % 4 == 0){
            servant.evade += 1
            chargeGain += 1
        }
        if (servant.turn % 5 == 0) {
            servant.stun(2)
        }
    }
    if (servant.passive[0] == "Swift Swim") {
        servant.buffAgility(servant.stats.agility * 0.05)
    }




    // has to be last
    if (enemy.passive[0] == "Ultimate One") {
        console.log(`now ${servant.stats.endurance} back ${servant.lastTurnStats.endurance}`)
        if(servant.stats.endurance > servant.lastTurnStats.endurance){
            enemy.buffEndurance(servant.stats.endurance - servant.lastTurnStats.endurance)
            message.channel.send(`${enemy.class} Endurance rose`)
        }
        console.log(`now ${servant.stats.strength} back ${servant.lastTurnStats.strength}`)
        if (servant.stats.strength > servant.lastTurnStats.strength) {
            enemy.buffStrength(servant.stats.strength - servant.lastTurnStats.strength)
            message.channel.send(`${enemy.class} Strength rose`)
        }
        console.log(`now ${servant.stats.agility} back ${servant.lastTurnStats.agility}`)
        if (servant.stats.agility > servant.lastTurnStats.agility) {
            enemy.buffAgility(servant.stats.agility - servant.lastTurnStats.agility)
            message.channel.send(`${enemy.class} Agility rose`)
        }
        console.log(`now ${servant.stats.magic} back ${servant.lastTurnStats.magic}`)
        if (servant.stats.magic > servant.lastTurnStats.magic) {
            enemy.buffMagic(servant.stats.magic - servant.lastTurnStats.magic)
            message.channel.send(`${enemy.class} Magic rose`)
        }
        console.log(`now ${servant.stats.luck} back ${servant.lastTurnStats.luck}`)
        if (servant.stats.luck > servant.lastTurnStats.luck) {
            enemy.buffLuck(servant.stats.luck - servant.lastTurnStats.luck)
            message.channel.send(`${enemy.class} Luck rose`)
        }
    }
    if (enemy.passive[0] == "Presence Detection") {
        servant.evade = 0
    }
    if (enemy.passive[0] == "Unavoidable Punishment" && servant.evade > 0) {
        servant.takeDammageFlat(0.05 * servant.maxHp * servant.evade)
        servant.evade = 0
    }


    // statuses
    if (servant.status.burn.active === true) {
        if (servant.passive[0] == "Heat Stroke") {
            servant.buffStrength(servant.stats.strength * 0.1)
            let dmgDealt = servant.maxHp / 20
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }
            message.channel.send(`${name} suffers from burn!`)
        } else if (servant.passive[0] == "Fire Manipulation") {
            servant.buffMagic(servant.stats.magic * 0.1)
            servant.buffDefence(100)
        } else {
            servant.debuffStrength(100)
            let dmgDealt = servant.maxHp / 20
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }
            message.channel.send(`${name} suffers from burn!`)
        }

        servant.status.burn.duration -= statusFade
        if (servant.status.burn.duration <= 0) {
            servant.status.burn.duration = 0
            servant.status.burn.active = false
        }

    }


    if (servant.status.curse.active === true) {

        if (servant.passive[0] == "something with curse") {

        } else {
            servant.debuffLuck(100)
            let dmgDealt = servant.maxHp / 20
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }
            message.channel.send(`${name} suffers from curse!`)
        }

        servant.status.curse.duration -= statusFade
        if (servant.status.curse.duration <= 0) {
            servant.status.curse.duration = 0
            servant.status.curse.active = false
        }
    }


    if (servant.status.stun.active === true) {
        if (servant.passive[0] == "something with stun") {

        } else {
            //servant can't attack but can use NP
        }
        servant.status.stun.duration -= statusFade
        if (servant.status.stun.duration <= 0) {
            servant.status.stun.duration = 0
            servant.status.stun.active = false
        }
    }


    if (servant.status.freeze.active === true) {
        if (servant.passive[0] == "something with freeze") {

        } else {
            servant.debuffAgility(100)
            let dmgDealt = servant.maxHp / 20
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }
            message.channel.send(`${name} suffers from freeze!`)
        }
        servant.status.freeze.duration -= statusFade
        if (servant.status.freeze.duration <= 0) {
            servant.status.freeze.duration = 0
            servant.status.freeze.active = false
        }

    }


    if (servant.status.npSeal.active === true) {
        // servant can't use NP
        if (servant.passive[0] == "something with npSeal") {

        } else {
    
        }
        servant.status.npSeal.duration -= statusFade
        if (servant.status.npSeal.duration <= 0) {
            servant.status.npSeal.duration = 0
            servant.status.npSeal.active = false
        }
    }


    if (servant.status.confusion.active === true) {
        // servant may hit themselves
        if (servant.passive[0] == "something with confusion") {

        } else {
        }
        servant.status.confusion.duration -= statusFade
        if (servant.status.confusion.duration <= 0) {
            servant.status.confusion.duration = 0
            servant.status.confusion.active = false
        }
    }


    if (servant.status.fear.active === true) {
        if (servant.passive[0] == "something with fear") {

        } else {
            servant.debuffMagic(200)
            message.channel.send(`${name} is trembling with fear!`)
        }
        servant.status.fear.duration -= statusFade
        if (servant.status.fear.duration <= 0) {
            servant.status.fear.duration = 0
            servant.status.fear.active = false
        }
    }


    if (servant.status.poison.active === true) {
        if (servant.passive[0] == "something with poison") {

        } else {
            let dmgDealt = servant.maxHp / 10
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }
            message.channel.send(`${name} suffers from poison!`)
        }
        servant.status.poison.duration -= statusFade
        if (servant.status.poison.duration <= 0) {
            servant.status.poison.duration = 0
            servant.status.poison.active = false
        }
    }


    if (servant.guts === true) {
        if (servant.currentHp === 0) {
            let heal = (servant.stats.magic + servant.noblePhantasm.power) * 6
            if (servant.currentHp + heal > servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            servant.guts = false

            let npPicture = servant.noblePhantasm.image

            if (servant.id === 12) {
                npPicture = 'https://i.imgur.com/bfcTCMv.gif'
            } else if (servant.id === 109) {
                npPicture = 'https://i.imgur.com/V1sO0JW.gif'
            }

            const embed = new MessageEmbed()
                .setAuthor(name, servant.pictures[0])
                .setThumbnail(servant.pictures[1])
                .setTitle(servant.noblePhantasm.text)
                .setDescription("**" + servant.noblePhantasm.name + "**")
                .setImage(npPicture)
            await message.channel.send(embed);
            message.channel.send(`${name} has been revived!`)
        }
    }
    


    // other checks
    if(servant.currentHp < servant.maxHp / 2){
        servant.below50 = true
    }
    if (servant.currentHp < servant.maxHp / 4) {
        servant.below25 = true
    }
    
    if (servant.charge < 7) {
        servant.charge += chargeGain
    }
    if (servant.charge > 7) {
        servant.charge = 7
    }

    servant.gotCrit = false
    battlefield.turn += 0.5
    servant.turn += 1

    enemy.lastTurnStats = {...enemy.stats}

    if (enemy.guts === true) {
        if (enemy.currentHp === 0) {
            let heal = (enemy.stats.magic + enemy.noblePhantasm.power) * 5
            if (enemy.currentHp + heal > enemy.maxHp) {
                enemy.currentHp = enemy.maxHp
            } else {
                enemy.currentHp += heal
            }
            enemy.guts = false
            if (enemy.name[0] === "heracles" || enemy.name[0] === "c.c.") {
                const embed = new MessageEmbed()
                    .setAuthor(enemy.class, enemy.pictures[0])
                    .setThumbnail(enemy.pictures[1])
                    .setTitle(enemy.noblePhantasm.text)
                    .setDescription("**" + enemy.noblePhantasm.name + "**")
                    .setImage(enemy.noblePhantasm.image)
                await message.channel.send(embed);
                message.channel.send(`${enemy.class} has been revived!`)
            }  
        }
    }

    if (servant.guts === true) {
        if (servant.currentHp === 0) {
            let heal = (servant.stats.magic + servant.noblePhantasm.power) * 5
            if (servant.currentHp + heal > servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            servant.guts = false
            if (servant.name[0] === "heracles" || servant.name[0] === "c.c.") {
                const embed = new MessageEmbed()
                    .setAuthor(servant.class, servant.pictures[0])
                    .setThumbnail(servant.pictures[1])
                    .setTitle(servant.noblePhantasm.text)
                    .setDescription("**" + servant.noblePhantasm.name + "**")
                    .setImage(servant.noblePhantasm.image)
                await message.channel.send(embed);
                message.channel.send(`${servant.class} has been revived!`)
            }
        }
    }
}

module.exports = statusCheck;