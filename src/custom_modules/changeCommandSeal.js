const User = require('../models/user');
const Server = require("../models/Server");
const commandsList = require("../commandsList");



const change = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            let cs = user.commandId
            let cmdID = Math.floor((Math.random() * commandsList.length));
            while(cmdID == cs){
                cmdID = Math.floor((Math.random() * commandsList.length));
            }
            user.commandId = cmdID
            await server.save(async function (err, data) {
                if (err) {
                    console.log(err);
                    await change(message)
                } else {
                    message.channel.send('Your command seals were altered.')
                }
            })
        }
    })
}

async function sqSummon(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.VIPCoins > 0) {
                    await change(message)
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

module.exports = sqSummon;