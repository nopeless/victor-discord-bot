const Server = require('../models/Server');
const User = require('../models/user');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function voteV2(message) {

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
                        const timePast = Date.now() - user.lastApResets
                        if (timePast >= 21600000) {
                            const assignAp = randomIntFromInterval(1, 5)
                            user.apResets += assignAp
                            user.lastApResets = Date.now()
                            await user.save().catch(console.error)

                            message.channel.send(`You received ${assignAp}AP Reset, You have **${user.apResets}AP Reset** in stock. Use **f/apr** to reset your AP`)
                        } else {
                            const timeRemaining = user.lastApResets + 21600000

                            message.channel.send(`You are on cooldown, expires: <:t${timeRemaining}:R>`)
                        }


                        //message.channel.send(`You have **${user.apResets}AP Reset** in stock. Use **f/apr** to reset your AP\n*Now 2Ap resets per vote on weekends!*\nhttps://top.gg/bot/673351491184099358/vote`)
                    }
                })
            } else {
                message.channel.send("You haven't registered yet. Please do so first to receive your AP resets.\nhttps://top.gg/bot/673351491184099358/vote")
            }



        }
    })


}

module.exports = voteV2;