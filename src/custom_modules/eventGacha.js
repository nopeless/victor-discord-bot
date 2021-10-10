const Server = require("../models/Server");
const { summon } = require('./module');

const eventGacha = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            if(player.money >= 10000){
                player.money -= 10000
                await server.save()
                    .then(await summon(60, message))
            } else{
                message.channel.send('Not enough QP')
            }
            
        }
    })
}

module.exports = eventGacha;