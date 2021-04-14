const Discord = require('discord.js');
const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const itemList = require('../itemsList');
const {getItem} = require('./getItem');

const buy = async (message)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            const shopStock = [1, 2, 3, 5, 7, 85, 45, 77]// u can change it anytime 
            let list = []
            shopStock.forEach(element => {
                list.push(itemList[element])
            });

            const text = []
            let i = 0
            list.forEach(element => {
                text.push(`${i}. ${list[i].icon} ${list[i].name} (${list[i].value * 10} QP)`)
                i += 1
            });

            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#ffb3fc')
                .setAuthor('Shopkeeper Illya', 'https://i.imgur.com/rQgXulX.png')
                .setTitle(`${ message.author.username }'s QP: ${player.money}`)
                .setDescription(text)
                .setFooter('f/number amount to buy; f/cancel to cancel')
            message.channel.send(exampleEmbed);

            const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id

            const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
            collector.on('collect', async message => {
                const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                const amount = message.content.slice(prefix.length).trim().split(/ +/g)[1];
                let number = parseInt(input)
                let amountNumber = parseInt(amount)
                if (number >= 0 && number < list.length) {
                    if (amountNumber > 0 && amountNumber <= 30 ){
                        number = Math.floor(number)
                        amountNumber = Math.floor(amountNumber)
                        collector.stop()
                        if (list[number].value * 10 * amountNumber> player.money) {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#ffb3fc')
                                .setAuthor('Shopkeeper Illya', 'https://i.imgur.com/rQgXulX.png')
                                .setDescription("I'm sorry, but you don't have this much money.")
                            message.channel.send(exampleEmbed);
                        } else {
                            player.money -= list[number].value * 10 * amountNumber
                            player.currentAp -= 1
                            await server.save(async function (err, data) {
                                if (err) {
                                    console.log(err);
                                    message.channel.send("Error, purchase failed, please try again.");
                                    buy(message)
                                } else {
                                    let item = { ...itemList[list[number].id]}
                                    if(amountNumber > 1){
                                        item.quantity = amountNumber
                                    }
                                    console.log(item)
                                    await getItem(message, item)
                                }
                            })

                        }
                    } else { message.channel.send('Please enter valid amount (f/item number amount[1-30max])') }

                } else if(input === 'cancel'){
                    collector.stop()
                }else {
                    message.channel.send('Wrong number, try again.')
                }

            })

            
        }
    })
}


module.exports = buy;