const Server = require("../models/Server");

const increaseCharactersLimit = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            if (user.goldenCoins < 1){
                message.channel.send(`You don't have any Golden Coins.`)
            } else{
                user.servantsLimit += 1
                user.goldenCoins -= 1
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        increaseCharactersLimit(message)
                    } else {
                        message.channel.send('Servant Limit has been increased! (+1)')  
                    }
                })
                  
            }

        }
    })
}

module.exports = increaseCharactersLimit;