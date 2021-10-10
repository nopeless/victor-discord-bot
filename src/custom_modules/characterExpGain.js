const Server = require('../models/Server')
const characters = require("../charactersList");
const {MessageEmbed} = require('discord.js');
const getUser = require("./getUser")
const saveUser = require("./saveUser")

async function characterExpGain ( message, expAmount) {
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
            if (user && user !== undefined) {
                if(user.servants[0].level < 100){
                    let name = message.author.username
                    user.servants[0].exp += expAmount
                    let lvl = user.servants[0].level
                    let exp = user.servants[0].exp
                    let query = {}
                    
                    if (exp >= Math.floor(lvl ** 1.5 * 100)) { 
                        user.servants[0].level += 1
                        user.servants[0].stats.strength += 1
                        user.servants[0].stats.endurance += 1
                        user.servants[0].stats.agility += 1
                        user.servants[0].stats.magic += 1
                        user.servants[0].stats.luck += 1
                        user.servants[0].maxHp = user.servants[0].stats.endurance * 10
                        user.servants[0].currentHp += 10
                        user.servants[0].statsPoints += 1

                        query = { [`players.${getIndex}.servants.0`]: user.servants[0] };
                        saveUser(message, query)
                        let ID = user.servants[0].id
                        const emb = new MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(`Congratulations **${name}** your **${characters[ID].class}** reached **Lv. ${lvl + 1}**!`)
                            .setThumbnail(characters[ID].pictures[1])
                        message.channel.send(emb)

                    } else{
                        query = { [`players.${getIndex}.servants.0.exp`] : exp };
                        saveUser(message, query)
                    }
        
                }
                
            }

        }

module.exports = characterExpGain;