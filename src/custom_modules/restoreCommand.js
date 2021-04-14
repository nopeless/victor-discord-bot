const {showCommandSeals} = require("../custom_modules/module");
const Server = require("../models/Server");

const restoreCommand = async (message)=>{
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let user = await server.players[getIndex]
            if (user.commandsLeft < 3 && user.money >= 10000) {
                user.commandsLeft += 1
                user.money -= 10000
                user.currentAp -= 1

                let query = { [`players.${getIndex}.money`]: user.money, [`players.${getIndex}.commandsLeft`]: user.commandsLeft, [`players.${getIndex}.currentAp`]: user.currentAp };
                Server.updateOne({ serverID: message.guild.id },
                    {
                        $set: query
                    }, async (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            message.channel.send(`Restored 1 of yours Command Seals!`)
                            showCommandSeals(message)
                        }
                    }).lean()


                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         restoreCommand(message)
                //     } else {
                //         message.channel.send(`Restored 1 of yours Command Seals!`)
                //         showCommandSeals(message)
                //     }
                // })
                

            } 
            else if(user.commandsLeft == 3){
                message.channel.send('You can not have more than 3 Command Seals!')
                showCommandSeals(message)
            } else{
                message.channel.send(`Not enough money. Current balance: ${user.money}QP`)
            }
        }
    })
}

module.exports = restoreCommand;