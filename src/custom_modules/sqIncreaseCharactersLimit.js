const User = require('../models/user');
const Server = require("../models/Server");

const increase = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            user.servantsLimit += 1
            await server.save(async function (err, data) {
                if (err) {
                    console.log(err);
                    await increase(message)
                } else {
                    message.channel.send('Servant Limit has been increased! (+1)')
                }
            })
        }
    })} 

async function sqIncreaseCharactersLimit(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.VIPCoins > 0) {
                    await increase(message)
                    user.VIPCoins -= 1
                    await user.save()
                } else {
                    message.channel.send("You don't have any Saint Quartz.")
                }
            } else {
                message.channel.send('Please register first. (f/register)')
            }



        }
    })


}

module.exports = sqIncreaseCharactersLimit;