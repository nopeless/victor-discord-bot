const Discord = require('discord.js');
const Server = require("../models/Server");
const {summon} = require('./module');
const auth = require("../../auth.json");
const prefix = auth.prefix;
const updateInventory = require('./updateInventory');



const specialSummon = async (message)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            if(player.inventory.length > 0){
                let newInventory = [...player.inventory]
                let allItems = []

                if (newInventory.length >= 11) {
                    await newInventory.forEach((element, i = 0) => {
                        allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} \n`)
                        if (i % 10 === 0 && i !== 0) {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setAuthor('Kirei Kotomine', 'https://i.imgur.com/6tAw2Cl.png')
                                .setTitle('Choose the catalyst that will be used for the summoning ritual')
                                .setDescription(allItems)
                                .setFooter('f/number to choose; f/cancel to cancel')
                            message.channel.send(exampleEmbed);

                            allItems = []
                        }
                        i++
                    });
                    if (allItems !== []) {
                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(allItems)
                            .setFooter('f/number to choose; f/cancel to cancel')
                        message.channel.send(exampleEmbed);
                    }
                } else {
                    newInventory.forEach((element, i = 0) => {
                        allItems.push(`${i}. **${element.name}** ${element.icon} x${element.quantity} \n`)
                    })

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor('Kirei Kotomine', 'https://i.imgur.com/6tAw2Cl.png')
                        .setTitle('Choose the catalyst that will be used for the summoning ritual')
                        .setDescription(allItems)
                        .setFooter('f/number to choose; f/cancel to cancel')
                    message.channel.send(exampleEmbed);
                }
                

                const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
                const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
               
                collector.on('collect', async message => {
                   
                    const msg = `${message}`
                    let input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                    if (parseInt(input) >= 0 && parseInt(input) < newInventory.length) {
                        input = Math.floor(input)
                        if (newInventory[input].quantity === 1) {
                            newInventory.splice(input, 1)
                        } else {
                            newInventory[input].quantity -= 1
                        }
                        collector.stop()
                        //special summon
                        switch (player.inventory[input].name) {
                            case 'bow':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(11, message)
                                 
                                break;
                            case 'sword':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(12, message)
                                 
                                break;
                            case 'spear':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(13, message)
                                 
                                break;
                            case 'magic wand':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(14, message)
                                 
                                break;
                            case 'wheel':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(15, message)
                                 
                                break;
                            case 'knife':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(16, message)
                                 
                                break;
                            case 'broken sword':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(17, message)
                                 
                                break;
                            case 'gear':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(18, message)
                                 
                                break;
                            case 'cigarette':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(19, message)
                                 
                                break;
                            case 'gun':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(20, message)
                                 
                                break;
                            case 'notebook':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(21, message)
                                 
                                break;
                            case 'crystal ball':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(22, message)
                                 
                                break;
                            case 'chain':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(23, message)
                                 
                                break;
                            case 'ramen':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(24, message)
                                 
                                break;
                            case 'instant ramen':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(25, message)
                                 
                                break;
                            case 'fishing rod':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(26, message)
                                 
                                break;
                            case 'poison':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(27, message)
                                 
                                break;
                            case 'hourglass':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(28, message)
                                 
                                break;
                            case 'thermometer':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(29, message)
                                 
                                break;
                            case 'pizza':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(30, message)
                                 
                                break;
                            case 'rose':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(31, message)
                                 
                                break;
                            case 'herb':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(32, message)
                                 
                                break;
                            case 'wine':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(33, message)
                                 
                                break;
                            case 'lab coat':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(34, message)
                                 
                                break;
                            case 'telescope':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(35, message)
                                 
                                break;
                            case 'candy':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(36, message)
                                 
                                break;
                            case 'silver':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(37, message)
                                 
                                break;
                            case 'gold':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(38, message)
                                 
                                break;
                            case 'bread':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(39, message)
                                 
                                break;
                            case 'water bottle':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(40, message)

                                break;

                            case 'shield':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(41, message)

                                break;

                            case 'rope':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(42, message)

                                break;

                            case 'coal':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(43, message)

                                break;

                            case 'match':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(47, message)

                                break;

                            case 'glasses':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(44, message)

                                break;

                            case 'battery':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(45, message)

                                break;

                            case 'hibiscus':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(46, message)

                                break;

                            case 'brick':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(48, message)

                                break;

                            case 'donut':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(49, message)

                                break;

                            case 'link':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(50, message)

                                break;

                            case 'magnifying glass':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(51, message)

                                break;

                            case 'diamond':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(52, message)

                                break;

                            case 'emerald':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(53, message)

                                break;

                            case 'rock':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(54, message)

                                break;

                            case 'medicine':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(55, message)

                                break;

                            case 'tnt':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(56, message)

                                break; 

                            case 'energy drink':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(58, message)

                                break; 

                            case 'chair':
                                message.channel.send(`Used **${player.inventory[input].name}**`)
                                await updateInventory(message, newInventory)
                                await summon(62, message)

                                break; 
                                
                            default:
                                const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#800b03')
                                    .setAuthor('Kirei Kotomine', 'https://i.imgur.com/6tAw2Cl.png')
                                    .setDescription("I doubt that you will be able to summon any Heroic Spirit with that item.")
                                message.channel.send(exampleEmbed);
                                break;
                        }
                    } else{
                        message.channel.send('Wrong number. Try again')
                        collector.stop()
                    }
                    
                })
            } else{
                message.channel.send("Your inventory is empty.")
            }
        }
    })

}

module.exports = specialSummon;