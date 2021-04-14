const Discord = require('discord.js');
const Server = require("../models/Server");
const itemList = require('../itemsList');
const auth = require("../../auth.json");
const prefix = auth.prefix;
const updateInventory = require('./updateInventory');


const synthesizeItem = async ( message) => {
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
                            .setFooter('f/number to add item to syntesize; f/cancel to cancel')
                        message.channel.send(exampleEmbed);


                        allItems = []
                    }
                    i++
                });
                if (allItems !== []) {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setDescription(allItems)
                        .setFooter('f/number to add item to syntesize; f/cancel to cancel')
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
                    .setFooter('f/number to add item to syntesize; f/cancel to cancel')
                message.channel.send(exampleEmbed);

            }



            const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
            const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
            
            collector.on('collect', async message => {
                collector.stop()
                const msg = `${message}`
                const input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                if (parseInt(input) >= 0 && parseInt(input) < newInventory.length) {
                    const firstItem = newInventory[input].name
                    if (firstItem !== 'hammer' && firstItem !== 'lighter' && firstItem !== 'wrench') {
                        if (newInventory[input].quantity === 1) {///in case u need to switch comment this
                            newInventory.splice(input, 1)
                        } else {
                            newInventory[input].quantity -= 1
                        }//^
                    }

                    allItems = []

                    // newInventory[input].quantity -= 1

                    newInventory.forEach((element, i = 0) => {
                        allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} \n`)
                        i++
                    });




                    const embed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor('Rani VIII', 'https://i.imgur.com/qry70ub.jpg')
                        .setDescription(allItems)
                        .setFooter('f/number to add item to syntesize; f/cancel to cancel')


                    message.channel.send(embed);

                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
                    const collector2 = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
                    
                    collector2.on('collect', async message => {
                        collector2.stop()
                        const msg2 = `${message}`
                        const input2 = msg2.slice(prefix.length).trim().split(/ +/g)[0];
                        if (parseInt(input2) >= 0 && parseInt(input2) < newInventory.length) {
                            const secondItem = newInventory[input2].name
                            if (secondItem !== 'hammer' && secondItem !== 'lighter' && secondItem !== 'wrench') {
                                if (newInventory[input2].quantity === 1) {
                                    newInventory.splice(input2, 1)
                                } else {
                                    newInventory[input2].quantity -= 1
                                }
                            }


                            // items used
                        //     console.log(
                        //         `First item: ${firstItem}\n
                        // Second item: ${secondItem}`
                        //     )
                            let unsortedInputs = [input, input2]
                            const sortedInputs = unsortedInputs.sort();

                            // synthesis cases                  

                            if ((firstItem === 'hibiscus' && secondItem === 'water bottle') || (secondItem === 'hibiscus' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[50])

                            } else if ((firstItem === 'herb' && secondItem === 'water bottle') || (secondItem === 'herb' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[70])

                            } else if ((firstItem === 'herb' && secondItem === 'paper') || (secondItem === 'herb' && firstItem === 'paper')) {
                                await updateInventory(message, newInventory, itemList[46])

                            } else if ((firstItem === 'grapes' && secondItem === 'water bottle') || (secondItem === 'grapes' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[14])

                            } else if ((firstItem === 'wine' && secondItem === 'mushroom') || (secondItem === 'wine' && firstItem === 'mushroom')) {
                                await updateInventory(message, newInventory, itemList[97])

                            } else if ((firstItem === 'bread' && secondItem === 'sugar') || (secondItem === 'bread' && firstItem === 'sugar')) {
                                await updateInventory(message, newInventory, itemList[69])

                            } else if ((firstItem === 'battery' && secondItem === 'light bulb') || (secondItem === 'battery' && firstItem === 'light bulb')) {
                                await updateInventory(message, newInventory, itemList[28])

                            } else if ((firstItem === 'magnifying glass' && secondItem === 'flashlight') || (secondItem === 'magnifying glass' && firstItem === 'flashlight')) {
                                await updateInventory(message, newInventory, itemList[42])

                            } else if ((firstItem === 'hammer' && secondItem === 'iron') || (secondItem === 'hammer' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[34])

                            } else if ((firstItem === 'hammer' && secondItem === 'wheat') || (secondItem === 'hammer' && firstItem === 'wheat')) {
                                await updateInventory(message, newInventory, itemList[76])

                            } else if ((firstItem === 'hammer' && secondItem === 'hot iron') || (secondItem === 'hammer' && firstItem === 'hot iron')) {
                                await updateInventory(message, newInventory, itemList[91])

                            } else if ((firstItem === 'hammer' && secondItem === 'link') || (secondItem === 'hammer' && firstItem === 'link')) {
                                await updateInventory(message, newInventory, itemList[61])

                            } else if ((firstItem === 'hammer' && secondItem === 'rock') || (secondItem === 'hammer' && firstItem === 'rock')) {
                                await updateInventory(message, newInventory, itemList[53])

                            } else if ((firstItem === 'hammer' && secondItem === 'sword') || (secondItem === 'hammer' && firstItem === 'sword')) {
                                await updateInventory(message, newInventory, itemList[94])

                            } else if ((firstItem === 'hammer' && secondItem === 'glass') || (secondItem === 'hammer' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'iron' && secondItem === 'iron') || (secondItem === 'iron' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[35])

                            } else if ((firstItem === 'iron' && secondItem === 'wheel') || (secondItem === 'iron' && firstItem === 'wheel')) {
                                await updateInventory(message, newInventory, itemList[36])

                            } else if ((firstItem === 'iron' && secondItem === 'thread') || (secondItem === 'iron' && firstItem === 'thread')) {
                                await updateInventory(message, newInventory, itemList[37])

                            } else if ((firstItem === 'link' && secondItem === 'link') || (secondItem === 'link' && firstItem === 'link')) {
                                await updateInventory(message, newInventory, itemList[38])

                            } else if ((firstItem === 'battery' && secondItem === 'hot iron') || (secondItem === 'battery' && firstItem === 'hot iron')) {
                                await updateInventory(message, newInventory, itemList[39])

                            } else if ((firstItem === 'test tube' && secondItem === 'bacteria') || (secondItem === 'test tube' && firstItem === 'bacteria')) {
                                await updateInventory(message, newInventory, itemList[44])

                            }  else if ((firstItem === 'microscope' && secondItem === 'rock') || (secondItem === 'microscope' && firstItem === 'rock')) {
                                await updateInventory(message, newInventory, itemList[43])

                            } else if ((firstItem === 'microscope' && secondItem === 'milk') || (secondItem === 'microscope' && firstItem === 'milk')) {
                                await updateInventory(message, newInventory, itemList[43])

                            } else if ((firstItem === 'cigarette' && secondItem === 'match') || (secondItem === 'cigarette' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'cigarette' && secondItem === 'lighter') || (secondItem === 'cigarette' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'wood' && secondItem === 'wood') || (secondItem === 'wood' && firstItem === 'wood')) {
                                await updateInventory(message, newInventory, itemList[48])

                            } else if ((firstItem === 'wood' && secondItem === 'coal') || (secondItem === 'wood' && firstItem === 'coal')) {
                                await updateInventory(message, newInventory, itemList[56])

                            } else if ((firstItem === 'wood' && secondItem === 'lighter') || (secondItem === 'wood' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'wood' && secondItem === 'match') || (secondItem === 'wood' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'wood' && secondItem === 'iron') || (secondItem === 'wood' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[33])

                            } else if ((firstItem === 'wood' && secondItem === 'rope') || (secondItem === 'wood' && firstItem === 'rope')) {
                                await updateInventory(message, newInventory, itemList[88])

                            } else if ((firstItem === 'wood' && secondItem === 'knife') || (secondItem === 'wood' && firstItem === 'knife')) {
                                await updateInventory(message, newInventory, itemList[92])

                            } else if ((firstItem === 'wood' && secondItem === 'hammer') || (secondItem === 'wood' && firstItem === 'hammer')) {
                                await updateInventory(message, newInventory, itemList[89])

                            } else if ((firstItem === 'wood' && secondItem === 'mana potion') || (secondItem === 'wood' && firstItem === 'mana potion')) {
                                await updateInventory(message, newInventory, itemList[93])

                            } else if ((firstItem === 'chair' && secondItem === 'wheel') || (secondItem === 'chair' && firstItem === 'wheel')) {
                                await updateInventory(message, newInventory, itemList[90])

                            } else if ((firstItem === 'sugar' && secondItem === 'sugar') || (secondItem === 'sugar' && firstItem === 'sugar')) {
                                await updateInventory(message, newInventory, itemList[49])

                            } else if ((firstItem === 'coffee' && secondItem === 'sugar') || (secondItem === 'coffee' && firstItem === 'sugar')) {
                                await updateInventory(message, newInventory, itemList[63])

                            } else if ((firstItem === 'sand' && secondItem === 'glass') || (secondItem === 'sand' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[18])

                            } else if ((firstItem === 'petrol' && secondItem === 'iron') || (secondItem === 'petrol' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[60])

                            } else if ((firstItem === 'mercury' && secondItem === 'glass') || (secondItem === 'mercury' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[19])

                            } else if ((firstItem === 'match' && secondItem === 'glass') || (secondItem === 'match' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[40])

                            } else if ((firstItem === 'lighter' && secondItem === 'glass') || (secondItem === 'lighter' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[40])

                            } else if ((firstItem === 'match' && secondItem === 'iron ore') || (secondItem === 'match' && firstItem === 'iron ore')) {
                                await updateInventory(message, newInventory, itemList[59])

                            } else if ((firstItem === 'lighter' && secondItem === 'iron ore') || (secondItem === 'lighter' && firstItem === 'iron ore')) {
                                await updateInventory(message, newInventory, itemList[59])

                            } else if ((firstItem === 'match' && secondItem === 'iron') || (secondItem === 'match' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[58])

                            } else if ((firstItem === 'lighter' && secondItem === 'iron') || (secondItem === 'lighter' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[58])

                            } else if ((firstItem === 'match' && secondItem === 'dust') || (secondItem === 'match' && firstItem === 'dust')) {
                                await updateInventory(message, newInventory, itemList[66])

                            } else if ((firstItem === 'lighter' && secondItem === 'dust') || (secondItem === 'lighter' && firstItem === 'dust')) {
                                await updateInventory(message, newInventory, itemList[66])

                            } else if ((firstItem === 'match' && secondItem === 'flour') || (secondItem === 'match' && firstItem === 'flour')) {
                                await updateInventory(message, newInventory, itemList[9])

                            } else if ((firstItem === 'lighter' && secondItem === 'flour') || (secondItem === 'lighter' && firstItem === 'flour')) {
                                await updateInventory(message, newInventory, itemList[9])

                            } else if ((firstItem === 'match' && secondItem === 'sand') || (secondItem === 'match' && firstItem === 'sand')) {
                                await updateInventory(message, newInventory, itemList[98])

                            } else if ((firstItem === 'lighter' && secondItem === 'sand') || (secondItem === 'lighter' && firstItem === 'sand')) {
                                await updateInventory(message, newInventory, itemList[98])

                            } else if ((firstItem === 'paper' && secondItem === 'match') || (secondItem === 'paper' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'paper' && secondItem === 'lighter') || (secondItem === 'paper' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'notebook' && secondItem === 'match') || (secondItem === 'notebook' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'notebook' && secondItem === 'lighter') || (secondItem === 'notebook' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'coal' && secondItem === 'match') || (secondItem === 'coal' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'coal' && secondItem === 'lighter') || (secondItem === 'coal' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'match' && secondItem === 'lighter') || (secondItem === 'match' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[65])

                            } else if ((firstItem === 'burnt match' && secondItem === 'lighter') || (secondItem === 'burnt match' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[67])

                            } else if ((firstItem === 'iron' && secondItem === 'dust') || (secondItem === 'iron' && firstItem === 'dust')) {
                                await updateInventory(message, newInventory, itemList[51])

                            } else if ((firstItem === 'iron' && secondItem === 'rock') || (secondItem === 'iron' && firstItem === 'rock')) {
                                await updateInventory(message, newInventory, itemList[16])

                            } else if ((firstItem === 'glass' && secondItem === 'link') || (secondItem === 'glass' && firstItem === 'link')) {
                                await updateInventory(message, newInventory, itemList[23])

                            } else if ((firstItem === 'thread' && secondItem === 'thread') || (secondItem === 'thread' && firstItem === 'thread')) {
                                await updateInventory(message, newInventory, itemList[68])

                            } else if ((firstItem === 'hook' && secondItem === 'thread') || (secondItem === 'hook' && firstItem === 'thread')) {
                                await updateInventory(message, newInventory, itemList[62])

                            } else if ((firstItem === 'hook' && secondItem === 'bow') || (secondItem === 'hook' && firstItem === 'bow')) {
                                await updateInventory(message, newInventory, itemList[62])

                            } else if ((firstItem === 'coffe beans' && secondItem === 'water bottle') || (secondItem === 'coffe beans' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[12])

                            } else if ((firstItem === 'gun powder' && secondItem === 'iron') || (secondItem === 'gun powder' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[86])

                            } else if ((firstItem === 'teabag' && secondItem === 'water bottle') || (secondItem === 'teabag' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[13])

                            } else if ((firstItem === 'instant ramen' && secondItem === 'water bottle') || (secondItem === 'instant ramen' && firstItem === 'water bottle')) {
                                await updateInventory(message, newInventory, itemList[79])

                            } else if ((firstItem === 'sugarcane' && secondItem === 'sugarcane') || (secondItem === 'sugarcane' && firstItem === 'sugarcane')) {
                                await updateInventory(message, newInventory, itemList[29])

                            } else if ((firstItem === 'paper' && secondItem === 'paper') || (secondItem === 'paper' && firstItem === 'paper')) {
                                await updateInventory(message, newInventory, itemList[30])

                            } else if ((firstItem === 'knife' && secondItem === 'knife') || (secondItem === 'knife' && firstItem === 'knife')) {
                                await updateInventory(message, newInventory, itemList[31])

                            } else if ((firstItem === 'magnifying glass' && secondItem === 'magnifying glass') || (secondItem === 'magnifying glass' && firstItem === 'magnifying glass')) {
                                await updateInventory(message, newInventory, itemList[41])

                            } else if ((firstItem === 'glass' && secondItem === 'mana potion') || (secondItem === 'glass' && firstItem === 'mana potion')) {
                                await updateInventory(message, newInventory, itemList[21])

                            } else if ((firstItem === 'copper' && secondItem === 'glass') || (secondItem === 'copper' && firstItem === 'glass')) {
                                await updateInventory(message, newInventory, itemList[27])

                            } else if ((firstItem === 'milk' && secondItem === 'bacteria') || (secondItem === 'milk' && firstItem === 'bacteria')) {
                                await updateInventory(message, newInventory, itemList[95])

                            } else if ((firstItem === 'bread' && secondItem === 'cheese') || (secondItem === 'bread' && firstItem === 'cheese')) {
                                await updateInventory(message, newInventory, itemList[96])

                            } else if ((firstItem === 'gun powder' && secondItem === 'thread') || (secondItem === 'gun powder' && firstItem === 'thread')) {
                                await updateInventory(message, newInventory, itemList[20])

                            } else if ((firstItem === 'fossil' && secondItem === 'hourglass') || (secondItem === 'fossil' && firstItem === 'hourglass')) {
                                await updateInventory(message, newInventory, itemList[54])

                            } else if ((firstItem === 'water bottle' && secondItem === 'sand') || (secondItem === 'water bottle' && firstItem === 'sand')) {
                                await updateInventory(message, newInventory, itemList[99])

                            } else if ((firstItem === 'mud' && secondItem === 'match') || (secondItem === 'mud' && firstItem === 'match')) {
                                await updateInventory(message, newInventory, itemList[17])

                            } else if ((firstItem === 'mud' && secondItem === 'lighter') || (secondItem === 'mud' && firstItem === 'lighter')) {
                                await updateInventory(message, newInventory, itemList[17])

                            } else if ((firstItem === 'glass' && secondItem === 'iron') || (secondItem === 'glass' && firstItem === 'iron')) {
                                await updateInventory(message, newInventory, itemList[26])

                            }else {
                                message.channel.send("Synthesis failed, those items can not be combined.")
                            }
                        } else { message.channel.send('Wrong number') }
                        

                    })
                } else {message.channel.send('Wrong number')}
                

            })
        }
    })
}

module.exports = synthesizeItem;