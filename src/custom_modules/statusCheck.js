const { MessageEmbed } = require('discord.js');

const statusCheck = async (message, servant, name, enemy)=>{

    let chargeGain = 1
    let statusFade = 1
    if (servant.class === "Avenger"){
        statusFade = 2
    } else if (servant.class === "Moon Cancer"){
        chargeGain = 2
    } else if (servant.class === "Temptress") {
        let dmgStolen = enemy.maxHp / 33

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

    if(servant.charge <7){
        servant.charge += chargeGain
    }
    if (servant.charge >7){
        servant.charge = 7
    }

    if(servant.status.burn.active === true){

        servant.stats.strength = servant.stats.strength * 0.9
        let dmgDealt = servant.maxHp / 20
        if(servant.currentHp - dmgDealt < 0){
            servant.currentHp = 0
        } else{
            servant.currentHp -= dmgDealt
        }

        servant.status.burn.duration -= statusFade
        if (servant.status.burn.duration <= 0){
            servant.status.burn.duration = 0
            servant.status.burn.active = false
        }

        message.channel.send(`${name} suffers from burn!`)
    }


    if (servant.status.curse.active === true) {

        if (servant.traits.includes("immune to curse")){
            servant.status.curse.active = false
            servant.status.curse.duration = 0
            message.channel.send(`${name} is immune to curse`)
        }else{
            servant.stats.luck = servant.stats.luck * 0.9
            let dmgDealt = servant.maxHp / 20
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }

            servant.status.curse.duration -= statusFade
            if (servant.status.curse.duration <= 0) {
                servant.status.curse.duration = 0
                servant.status.curse.active = false
            }
            message.channel.send(`${name} suffers from curse!`)
        } 
    }


    if (servant.status.stun.active === true) {
        if (servant.traits.includes("immune to stun")) {
            servant.status.stun.active = false
            servant.status.stun.duration = 0
            message.channel.send(`${name} is immune to stun`)
        } else{
            //servant can't attack but can use NP
            servant.status.stun.duration -= statusFade
            if (servant.status.stun.duration <= 0) {
                servant.status.stun.duration = 0
                servant.status.stun.active = false
            }
        }
    }


    if (servant.status.freeze.active === true) {

        servant.stats.agility = servant.stats.agility * 0.9
        let dmgDealt = servant.maxHp / 20
        if (servant.currentHp - dmgDealt < 0) {
            servant.currentHp = 0
        } else {
            servant.currentHp -= dmgDealt
        }

        servant.status.freeze.duration -= statusFade
        if (servant.status.freeze.duration <= 0) {
            servant.status.freeze.duration = 0
            servant.status.freeze.active = false
        }

        message.channel.send(`${name} suffers from freeze!`)
    }


    if (servant.status.npSeal.active === true) {
        // servant can't use NP
        servant.status.npSeal.duration -= statusFade
        if (servant.status.npSeal.duration <= 0) {
            servant.status.npSeal.duration = 0
            servant.status.npSeal.active = false
        }
    }

    if (servant.status.confusion.active === true) {
        // servant may hit themselves
        servant.status.confusion.duration -= statusFade
        if (servant.status.confusion.duration <= 0) {
            servant.status.confusion.duration = 0
            servant.status.confusion.active = false
        }
    }

    if (servant.status.fear.active === true) {
        servant.stats.magic = servant.stats.magic * 0.8

        servant.status.fear.duration -= statusFade
        if (servant.status.fear.duration <= 0) {
            servant.status.fear.duration = 0
            servant.status.fear.active = false
        }

        message.channel.send(`${name} is trembling with fear!`)
    }

    if (servant.status.poison.active === true) {

        if (servant.traits.includes("immune to poison")) {
            servant.status.poison.active = false
            servant.status.poison.duration = 0
            message.channel.send(`${name} is immune to poison`)
        } else{
            let dmgDealt = servant.maxHp / 10
            if (servant.currentHp - dmgDealt < 0) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= dmgDealt
            }

            servant.status.poison.duration -= statusFade
            if (servant.status.poison.duration <= 0) {
                servant.status.poison.duration = 0
                servant.status.poison.active = false
            }

            message.channel.send(`${name} suffers from poison!`)
        }   
    }

    if (servant.guts === true){
        if(servant.currentHp === 0){
            let heal = (servant.stats.magic + servant.noblePhantasm.power) * 6
            if (servant.currentHp + heal > servant.maxHp){
                servant.currentHp = servant.maxHp
            } else{
                servant.currentHp += heal
            }
            servant.guts = false

            let npPicture = servant.noblePhantasm.image

            if(servant.id === 12 ){
                npPicture = 'https://i.imgur.com/bfcTCMv.gif'
            } else if (servant.id === 109){
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

    if (enemy.guts === true) {
        if (enemy.currentHp === 0) {
            let heal = (enemy.stats.magic + enemy.noblePhantasm.power) * 6
            if (enemy.currentHp + heal > enemy.maxHp) {
                enemy.currentHp = enemy.maxHp
            } else {
                enemy.currentHp += heal
            }
            enemy.guts = false
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

module.exports = statusCheck;