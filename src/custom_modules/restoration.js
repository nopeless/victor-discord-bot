const Discord = require('discord.js');
const Server = require("../models/Server");


const healServant = async ( message, price)=>{
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            const emb = new Discord.MessageEmbed()
                .setColor('#bb45d6')
                .setAuthor('BB', 'https://i.imgur.com/qbQyToz.png')

            if (user) {
                if(user.servants.length != 0){
                    if (user.servants[0].currentHp != user.servants[0].maxHp){
                        if (user.money >= price) {
                            user.servants[0].currentHp = user.servants[0].maxHp
                            user.money -= price
                            user.currentAp -= 1
                            await server.save(async function (err, data) {
                                if (err) {
                                    console.log(err);
                                    healServant(message, price)
                                } else {
                                    emb.setDescription("Your servant has been fully healed Senpai.")
                                    message.channel.send(emb)
                                }
                            })
                            
                        } else {
                            emb.setDescription(`Not enough money. Senpai's current balance is: ${user.money} QP`)
                            message.channel.send(emb)
                        }
                    } else{
                        emb.setDescription("Your servant Hp is already full Senpai!")
                        message.channel.send(emb)
                    }  
                } else{
                    emb.setDescription("Senpai doesn't have any servants ...")
                    message.channel.send(emb)
                }
            }
        }
    })
}

const restoreMana = async (message, price) => {
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            const emb = new Discord.MessageEmbed()
                .setColor('#bb45d6')
                .setAuthor('BB', 'https://i.imgur.com/qbQyToz.png')

            if (user) {
                if (user.currentMana != user.maxMana){
                    if (user.money >= price) {
                        user.currentMana = user.maxMana
                        user.money -= price
                        user.currentAp -= 1
                        await server.save(async function (err, data) {
                            if (err) {
                                console.log(err);
                                restoreMana(message, price)
                            } else {
                                emb.setDescription("Your mana has been restored Senpai, I hope you are feeling better. 💜")
                                message.channel.send(emb)
                            }
                        })
                        
                    } else {
                        emb.setDescription(`Not enough money. Senpai's current balance is: ${user.money} QP`)
                        message.channel.send(emb)
                    }
                } else{
                    emb.setDescription("Your mana is already full Senpai!")
                    message.channel.send(emb)
                }
                
                
             }
        }
    })
}

module.exports = {
    healServant: healServant,
    restoreMana: restoreMana
}