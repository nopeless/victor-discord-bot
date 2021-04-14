const Server = require('../models/Server')
const characters = require("../charactersList");
const {MessageEmbed} = require('discord.js');

async function characterExpGain ( message, expAmount) {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let user = await server.players[getIndex]
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
                        Server.updateOne({ serverID: message.guild.id },
                            {
                                $set: query
                            }, async (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    let ID = user.servants[0].id
                                    const emb = new MessageEmbed()
                                        .setColor('#800b03')
                                        .setDescription(`Congratulations **${name}** your **${characters[ID].class}** reached **Lv. ${lvl + 1}**!`)
                                        .setThumbnail(characters[ID].pictures[1])
                                    message.channel.send(emb)
                                }
                            }).lean()

                    } else{
                        query = { [`players.${getIndex}.servants.0.exp`] : exp };
                        Server.updateOne({ serverID: message.guild.id },
                            {
                                $set: query
                            }, async (err) => {
                                if (err) {console.log(err);}
                            }
                        ).lean()
                    }

                    // await server.save(async function (err) {
                    //     if (err) {
                    //         console.log(err);
                    //         characterExpGain(message, expAmount)
                    //     } else {
                    //         if (exp >= Math.floor(lvl ** 1.5 * 100)) {
                    //             let ID = user.servants[0].id
                    //             const emb = new MessageEmbed()
                    //                 .setColor('#800b03')
                    //                 .setDescription(`Congratulations **${name}** your **${characters[ID].class}** reached **Lv. ${lvl + 1}**!`)
                    //                 .setThumbnail(characters[ID].pictures[1])
                    //             message.channel.send(emb)
                    //         }
                    //     }
                    // })

                    
                }
                
            }

        }
    }
    )

    
}

module.exports = characterExpGain;