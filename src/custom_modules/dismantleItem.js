const Discord = require('discord.js');
const Server = require("../models/Server");
const itemList = require('../itemsList');
const auth = require("../../auth.json");
const prefix = auth.prefix;
const updateInventory = require('./updateInventory');


const dismantleItem = async ( message) => {
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
                    allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} \n`)
                    if (i % 10 === 0 && i !== 0) {
                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setAuthor('Rani VIII', 'https://i.imgur.com/qry70ub.jpg')
                            .setDescription(allItems)
                            .setFooter('f/number to dismantle; f/cancel to cancel')
                        message.channel.send(exampleEmbed);


                        allItems = []
                    }
                    i++
                });
                if (allItems !== []) {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setDescription(allItems)
                        .setFooter('f/number to dismantle; f/cancel to cancel')
                    message.channel.send(exampleEmbed);
                }
            } else {
                newInventory.forEach((element, i = 0) => {
                    allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} \n`)
                })

                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#800b03')
                    .setAuthor('Rani VIII', 'https://i.imgur.com/qry70ub.jpg')
                    .setDescription(allItems)
                    .setFooter('f/number to dismantle; f/cancel to cancel')
                message.channel.send(exampleEmbed);
            }
            //from synth

            const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
            const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
            collector.on('collect', async message => {
                collector.stop()

                const msg = `${message}`

                const input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                if (parseInt(input) >= 0 && parseInt(input) < newInventory.length){
                    if (newInventory[input].quantity === 1) {///in case u need to switch comment this
                        newInventory.splice(input, 1)
                    } else {
                        newInventory[input].quantity -= 1
                    }//^

                    //dismantle item
                    switch (player.inventory[input].name) {
                        case 'spider web':
                            await updateInventory(message, newInventory, itemList[22])
                            break;

                        case 'hourglass':
                            await updateInventory(message, newInventory, itemList[53])
                            break;

                        case 'notebook':
                            await updateInventory(message, newInventory, itemList[29])
                            break;

                        case 'honey pot':
                            await updateInventory(message, newInventory, itemList[52])
                            break;

                        case 'grapes':
                            await updateInventory(message, newInventory, itemList[15])
                            break;

                        case 'perfect apple':
                            await updateInventory(message, newInventory, itemList[15])
                            break;

                        case 'apple':
                            await updateInventory(message, newInventory, itemList[15])
                            break;

                        case 'thermometer':
                            await updateInventory(message, newInventory, itemList[55])
                            break;

                        case 'flashlight':
                            await updateInventory(message, newInventory, itemList[25])
                            break;

                        case 'shield':
                            await updateInventory(message, newInventory, itemList[59])
                            break;

                        case 'gear':
                            await updateInventory(message, newInventory, itemList[59])
                            break;

                        case 'chain':
                            await updateInventory(message, newInventory, itemList[37])
                            break;

                        case 'telescope':
                            await updateInventory(message, newInventory, itemList[26])
                            break;

                        case 'microscope':
                            await updateInventory(message, newInventory, itemList[26])
                            break;

                        case 'coconut':
                            await updateInventory(message, newInventory, itemList[11])
                            break;

                        case 'chair':
                            await updateInventory(message, newInventory, itemList[47])
                            break;

                        case 'candy':
                            await updateInventory(message, newInventory, itemList[52])
                            break;

                        case 'fishing rod':
                            await updateInventory(message, newInventory, itemList[22])
                            break;

                        case 'burnt match':
                            await updateInventory(message, newInventory, itemList[67])
                            break;

                        case 'instant ramen':
                            await updateInventory(message, newInventory, itemList[84])
                            break;

                        case 'sugarcane':
                            await updateInventory(message, newInventory, itemList[52])
                            break;

                        case 'wheelchair':
                            await updateInventory(message, newInventory, itemList[89])
                            break;

                        case 'magnifying glass':
                            await updateInventory(message, newInventory, itemList[98])
                            break;

                        default:
                            message.channel.send('The item was lost, you got nothing in return...')
                            await updateInventory(message, newInventory)
                    }
                } else{message.channel.send('Wrong number')}
                
               
                
            })
        }
    })
    

}



module.exports = dismantleItem;