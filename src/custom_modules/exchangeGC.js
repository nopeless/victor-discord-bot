const Server = require("../models/Server");

const exchangeGC = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user.goldenCoins < 1) {
                message.channel.send(`You don't have any Golden Coins.`)
            } else {
                user.money += 50000
                user.goldenCoins -= 1
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        exchangeGC(message)
                    } else {
                        message.channel.send('Gained 50 000 QP')
                    }
                })
                
            }

        }
    })
}

module.exports = exchangeGC;