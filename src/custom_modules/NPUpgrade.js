const Server = require("../models/Server");

const NPUpgrade = async(message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user.holyGrails < 1) {
                message.channel.send(`You don't have any Holy Grails.`)
            } else{
                if (user.servants.length !== 0) {
                    if (user.servants[0].NPLevel >= 3){
                        message.channel.send("This servant's NP cannot be upgraded any further. Lvl.3(MAX)")
                    }else{
                        user.servants[0].NPLevel += 1
                        user.holyGrails -= 1
                        await server.save(async function (err, data) {
                            if (err) {
                                console.log(err);
                                NPUpgrade(message)
                            } else {
                                message.channel.send('Servant NP was successfully upgraded!')
                            }
                        })
                        
                    }
                    
                } else{
                    message.channel.send('You have no servants.')
                }
            }
            

        }
    })
}

module.exports = NPUpgrade;