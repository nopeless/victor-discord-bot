const Server = require('../models/Server');
const User = require('../models/user');

async function vote(message) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            message.channel.send(`You have **${user.apResets}AP Reset** in stock. Use **f/apr** to reset your AP\n*Now 2Ap resets per vote on weekends!*\nhttps://top.gg/bot/673351491184099358/vote`)
                        }
                    })   
            } else {
                message.channel.send("You haven't registered yet. Please do so first to receive your AP resets.\nhttps://top.gg/bot/673351491184099358/vote")
            }



        }
    })


}

module.exports = vote;