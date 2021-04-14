const Server = require("../models/Server");
const User = require('../models/user');

async function exchangeSQtoQP(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.VIPCoins > 0) {
                    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            let player = await server.players[server.playersMap.get(message.author.id)];
                            if (player) {
                                player.money += 25000
                                await server.save(async function (err, data) {
                                    if (err) {
                                        console.log(err);
                                        exchangeSQtoQP(message)
                                    } else {
                                        message.channel.send('+ 25000 QP')
                                        user.VIPCoins -= 1
                                        await user.save()
                                    }
                                })


                            }
                        }
                    })
                } else {
                    message.channel.send("You don't have any Saint Quartz.")
                }
            } else {
                message.channel.send('Please register first. (f/register)')
            }



        }
    })


}

async function exchangeSQtoAPR(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
            exchangeSQtoAPR(message)
        }
        else {
            if (user) {
                if (user.VIPCoins > 0) {
                    user.apResets += 1
                    user.VIPCoins -= 1
                    user.save()
                    message.channel.send('+ 1 AP Reset')
                } else {
                    message.channel.send("You don't have any Saint Quartz.")
                }
            } else {
                message.channel.send('Please register first. (f/register)')
            }



        }
    })


}

module.exports = {
    exchangeSQtoQP: exchangeSQtoQP,
    exchangeSQtoAPR: exchangeSQtoAPR
}