const Server = require('../models/Server');
const User = require('../models/user');

async function apRecover(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if(user.apResets > 0){
                    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            let player = await server.players[server.playersMap.get(message.author.id)]
                            if (player) {
                                player.currentAp = player.maxAp
                                await server.save(async function (err, data) {
                                    if (err) {
                                        console.log(err);
                                        apRecover(message)
                                    } else {
                                        message.react('☑')
                                        user.apResets -= 1
                                        await user.save()
                                    }
                                })
                                
                                
                            }
                        }
                    })
                } else{
                    message.channel.send("You don't have any ap recovery in stock.")
                }
            } else{
                message.channel.send('Please register first. (f/register)')
            }


           
        }
    })


}

module.exports = apRecover;