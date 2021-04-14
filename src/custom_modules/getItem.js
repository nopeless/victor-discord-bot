const Discord = require('discord.js');
const itemList = require('../itemsList');
const Item = require('../models/templates/item');
const Server = require("../models/Server");

const getItem = async (message, item) => {
    await Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let player = await server.players[getIndex]

            //if not in array
            oldItem = await player.inventory.find(itm => itm.id == item.id)
            if (!(oldItem)) {
                const newitem = new Item(item);
                player.inventory.push(newitem)
                
                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         getItem(message, item)
                //     } else {
                //         message.channel.send(`*${message.author.username} acquired ${item.icon}*`)
                //     }
                // })
                message.channel.send(`*${message.author.username} acquired ${item.icon}*`)
            } else {
                oldItem.quantity += item.quantity
                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         getItem(message, item)
                //     } else {
                //         message.channel.send(`${item.icon} x ${item.quantity}`)
                //     }
                // })
                message.channel.send(`${item.icon} x ${item.quantity}`)
                
            }
            let query = { [`players.${getIndex}.inventory`]: player.inventory };
            Server.updateOne({ serverID: message.guild.id },
                {
                    $set: query
                }, async (err) => {
                    if (err) { console.log(err); }
                }
            ).lean()

        }
    })
}

const getRandomItem = async (message) => {
    const itemsToGet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 24, 25, 32, 45, 47, 55, 57, 64, 71, 72, 73, 74, 75, 0, 1, 2, 3, 4, 77, 78, 80, 81, 82, 83, 85, 87, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 24, 25, 32, 45, 47, 55, 57, 64, 71, 73, 74, 75, 77, 78, 80, 85, 87, 43]
    const pickednumber = itemsToGet[Math.floor(Math.random() * itemsToGet.length)]
    const item = itemList[pickednumber]

    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id);
            let player = await server.players[getIndex]


            //if not in array
            oldItem = await player.inventory.find(itm => itm.id == item.id)
            if (!(oldItem)) {
                const newitem = new Item(item);
                // console.log(newitem);
                player.inventory.push(newitem)
                
                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         getRandomItem(message)
                //     } else {
                //         const emb = new Discord.MessageEmbed()
                //             .setColor('#800b03')
                //             .setDescription(`${message.author.username} acquired:\n\n${item.name}\n${item.icon}`)
                //         message.channel.send(emb)
                //     }
                // })
                const emb = new Discord.MessageEmbed()
                    .setColor('#800b03')
                    .setDescription(`${message.author.username} acquired:\n\n${item.name}\n${item.icon}`)
                message.channel.send(emb)
            } else {
                oldItem.quantity += 1
                

                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);    
                //         getRandomItem(message)  
                //     } else{
                //         const emb = new Discord.MessageEmbed()
                //             .setColor('#800b03')
                //             .setDescription(`${item.name}\n${item.icon}`)
                //         message.channel.send(emb)
                //     }
                // })
                const emb = new Discord.MessageEmbed()
                    .setColor('#800b03')
                    .setDescription(`${item.name}\n${item.icon}`)
                message.channel.send(emb)
            }
            let query = { [`players.${getIndex}.inventory`]: player.inventory };
            Server.updateOne({ serverID: message.guild.id },
                {
                    $set: query
                }, async (err) => {
                    if (err) { console.log(err); }
                }
            ).lean()
        }
    })
}



module.exports = {
    getItem: getItem,
    getRandomItem: getRandomItem
}