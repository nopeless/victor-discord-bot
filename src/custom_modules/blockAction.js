const Server = require('../models/Server')

const blockAction = async(message, fighter1Id, fighter2Id)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const player1 = await server.players[server.playersMap.get(fighter1Id)]
            player1.isFighting = true

            if(fighter2Id){
                const player2 = await server.players.find(player => player.playerID == fighter2Id)
                player2.isFighting = true
            }
            await server.save(async function (err, data) {
                if (err) {
                    console.log(err);
                    blockAction(message, fighter1Id, fighter2Id)
                }
            })

        }
    })
           
}

module.exports = blockAction;