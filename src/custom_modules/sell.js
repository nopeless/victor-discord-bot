const Discord = require('discord.js');
const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const updateInventory = require('./updateInventory');


const sell = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            let newInventory = [...player.inventory]
            let allItems = []

            if (newInventory.length >= 11) {
            await newInventory.forEach((element, i = 0) => {
                allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} (${element.value} QP/piece) \n`)
                if (i % 10 === 0 && i !== 0) {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#ffb3fc')
                        .setAuthor('Shopkeeper Illya', 'https://i.imgur.com/rQgXulX.png')
                        .setTitle(`${message.author.username}'s QP: ${player.money}`)
                        .setDescription(allItems)
                        .setFooter('f/number to sell; f/cancel to cancel')
                    message.channel.send(exampleEmbed);

                    allItems = []
                }
                i++
            });
                if (allItems !== []) {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#ffb3fc')
                        .setDescription(allItems)
                        .setFooter('f/number to sell; f/cancel to cancel')
                    message.channel.send(exampleEmbed);
                }
            } else{
                newInventory.forEach((element, i = 0) => {
                    allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} (${element.value} QP/piece) \n`)
                })

                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#ffb3fc')
                    .setAuthor('Shopkeeper Illya', 'https://i.imgur.com/rQgXulX.png')
                    .setTitle(`${message.author.username}'s QP: ${player.money}`)
                    .setDescription(allItems)
                    .setFooter('f/number amount to sell; f/cancel to cancel')
                message.channel.send(exampleEmbed);
            }

        
            const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
            const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
            collector.on('collect', async message => {
                collector.stop()
                const msg = `${message}`
                let input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                let amount = msg.slice(prefix.length).trim().split(/ +/g)[1];
                if (parseInt(input) >= 0 && parseInt(input) < newInventory.length) {
                    if (parseInt(amount) >= 0 && parseInt(amount) <= newInventory[input].quantity){
                        input = Math.floor(input)
                        amount = Math.floor(amount)
                        player.money += newInventory[input].value * amount
                        message.channel.send(`${message.author} gained ${newInventory[input].value * amount} QP`)
                        if (newInventory[input].quantity == amount) {///in case u need to switch comment this
                            newInventory.splice(input, 1)
                        } else {
                            newInventory[input].quantity -= amount
                        }

                        await server.save(async function (err, data) {
                            if (err) {
                                console.log(err);
                                message.channel.send("Error, failed to sell, please try again.");
                                sell(message)
                            } else {
                                await updateInventory(message, newInventory)
                            }
                        })

                    } else{message.channel.send('Please enter valid amount (f/item number amount[1-30max])')}


                } else if(input == 'cancel'){

                } else {
                    message.channel.send('Wrong number')
                }
                
            })
        }
    })
}

module.exports = sell;