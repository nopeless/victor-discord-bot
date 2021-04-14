const { Spell } = require('../models/Spell');
const Server = require("../models/Server");
const spellLvlUp = require('./spellLvlUp');

const learnSpell = async(message, spell)=> {
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)]
            let knownSpell = player.spells.find(spl => spl.id == spell.id)
            //if not in array
            if (!(knownSpell) && spell.qpCost <= player.money){
                const newSpell = new Spell(spell);
                // console.log(newSpell);
                player.spells.push(newSpell)
                player.money -= spell.qpCost
                player.currentAp -= 1
                
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        learnSpell(message, spell)
                    } else {
                        message.channel.send(`Congratulations **${message.author.username}** you have learned **${newSpell.name}**(**Lv.${newSpell.level}**)!`)
                    }
                })
            }
            else if (spell.qpCost > player.money){
                message.channel.send(`Not enough money. Current balance: ${player.money}QP`)

            }  else if (knownSpell.exp < (knownSpell.level + 1) * (knownSpell.level + 1) * 10) {
                message.channel.send(`Not enough exp : ${knownSpell.exp}/${(knownSpell.level + 1) * (knownSpell.level + 1) * 10}exp to level up.`)

            } else if (player.spells.find(spl => spl.id == spell.id) && spell.qpCost <= player.money && knownSpell.level < 30 && knownSpell.exp >= (knownSpell.level + 1) * (knownSpell.level + 1) * 10) {
                
                player.money -= spell.qpCost
                player.currentAp -= 1
                spellLvlUp(knownSpell, message)
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        learnSpell(message, spell)
                    } else {
                          
                    }
                })
            }
            else{
                message.channel.send('You alredy have this spell at level 30 (MAX).')
            }
            
        }
    })
}

module.exports = {
    learnSpell: learnSpell
}