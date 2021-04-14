const { MessageEmbed,  MessageCollector} = require('discord.js');
const church = require('../locations/church');
const library = require('../locations/library');
const nurse = require('../locations/nurse');
const workshop = require('../locations/workshop');
const market = require('../locations/market');
const undergrounds = require('../locations/undergrounds');
const city = require('../locations/city');
const arena = require('../locations/arena');
const gilShop = require('../locations/gilShop');
const chaldea = require('../locations/chaldea');
const event = require('../locations/event');
const Server = require('../models/Server');
const User = require('../models/user');
const auth = require("../../auth.json");
const prefix = auth.prefix;

const chooseAction = (message, client)=>{
    
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            if (user && user !== undefined) {
                if(user.isFighting === false){
                    if (user.currentAp > 0){
                        User.findOne({ userID: message.author.id}, async (err, actionUser) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                if (actionUser.FA < Date.now() - 5000){
                                    actionUser.FA = Date.now()
                                    actionUser.save()
                                    const exampleEmbed = new MessageEmbed()
                                        .setColor('#800b03')
                                        .setTitle(`${message.author.username}'s AP: ${user.currentAp}/${user.maxAp}`)
                                        .setFooter('f/(1-9) to choose; f/cancel to cancel')
                                        .setDescription(`
                                            Where you want to go?\n\n                                           
                                            1. Church ⛪\n
                                            2. Library 📚\n
                                            3. Nurse office 💉\n
                                            4. Alchemy workshop <:icons8testtube50:663396617520676929>\n
                                            5. Market 🛒\n
                                            6. Undergrounds 🏚\n
                                            7. City center 🌃\n
                                            8. Arena <:Icon_Coin_Mooncell:663389214976770049>\n
                                            9. Gil's Shop <:grail:663138422763945985>\n
                                            10. Chaldea <:Saintquartz:693210492818423858>\n
                                            
                                                   
                                            `)
                                    // add events 11. Event <:archer_santa:586620773238571008>

                                    message.channel.send(exampleEmbed)


                                    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

                                    const collector = new MessageCollector(message.channel, filter, { time: 15000 });
                                    collector.on('collect', async message => {
                                        collector.stop()

                                        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                                        switch (input) {
                                            case '1':
                                                church(message, user, client)
                                                break;
                                            case '2':
                                                library(message, user, client)
                                                break;
                                            case '3':
                                                nurse(message, user, client)
                                                break;
                                            case '4':
                                                workshop(message, user, client)
                                                break;
                                            case '5':
                                                market(message, user, client)
                                                break;
                                            case '6':
                                                undergrounds(message, user, client)
                                                break;
                                            case '7':
                                                city(message, user, client)
                                                break;
                                            case '8':
                                                arena(message, user, client)
                                                break;
                                            case '9':
                                                gilShop(message, user)
                                                break;
                                            case '10':
                                                chaldea(message, user)
                                                break;
                                            // case '11':
                                            //     let currentDate = Date.now()
                                            //     if (currentDate > 1608502136977 + 864000000){
                                            //         message.channel.send('Event has ended')
                                            //     } else{
                                            //         event(message, user)
                                            //     }
                                            //     break;
                                            case 'cancel':
                                                message.channel.send('canceled')
                                                break;
                                            default:
                                                message.channel.send('Wrong choice.')
                                                break;
                                        }
                                    })
                                }else{
                                    message.channel.send("Please, wait 5 seconds between action commands.")
                                }
                            }
                        })
                        

                    } else{
                        message.channel.send('You have no AP left.')
                    }
                    
                } else{
                    message.channel.send('You can not perform any action while fighting!')
                }
                
            } else{
                message.channel.send("You have to register first!")
            }
        }
    })

   
}

module.exports = chooseAction;