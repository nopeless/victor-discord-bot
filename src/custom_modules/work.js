const Discord = require('discord.js');
const Server = require("../models/Server");

const work = async( message)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let user = await server.players[getIndex]
            if (user && user !== undefined){
                let result = ""
                let qpAmount = (Math.floor(Math.random() * 200) + 1) * 10
                user.money += qpAmount

                let query = { [`players.${getIndex}.money`]: user.money };
                Server.updateOne({ serverID: message.guild.id },
                    {
                        $set: query
                    }, async (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            if (qpAmount <= 100) {
                                result = 'Will you stop slacking off and finally get to work!?'
                            } else if (qpAmount > 100 && qpAmount <= 500) {
                                result = 'Well.. at least you have done something...'
                            } else if (qpAmount > 500 && qpAmount <= 1000) {
                                result = "Good job."
                            } else if (qpAmount > 1000 && qpAmount <= 1500) {
                                result = 'You did a great job today, keep it up.'
                            } else {
                                result = "Woah! You really were working hard today. Here is a little bonus from me."
                            }

                            const emb = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setAuthor('Touko Aozaki', 'https://i.imgur.com/SIOrkVJ.png')
                                .setDescription(`${result} (gained **${qpAmount}** QP)`)
                            message.channel.send(emb)
                        }
                    }).lean()

                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         work(message)
                //     } else {
                //         if (qpAmount <= 100) {
                //             result = 'Will you stop slacking off and finally get to work!?'
                //         } else if (qpAmount > 100 && qpAmount <= 500) {
                //             result = 'Well.. at least you have done something...'
                //         } else if (qpAmount > 500 && qpAmount <= 1000) {
                //             result = "Good job."
                //         } else if (qpAmount > 1000 && qpAmount <= 1500) {
                //             result = 'You did a great job today, keep it up.'
                //         } else {
                //             result = "Woah! You really were working hard today. Here is a little bonus from me."
                //         }

                //         const emb = new Discord.MessageEmbed()
                //             .setColor('#800b03')
                //             .setAuthor('Touko Aozaki', 'https://i.imgur.com/SIOrkVJ.png')
                //             .setDescription(`${result} (gained **${qpAmount}** QP)`)
                //         message.channel.send(emb)
                //     }
                // })
                
            }
        }
    })
}

module.exports = work;