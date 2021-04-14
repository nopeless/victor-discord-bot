const User = require('../models/user');
const { summon } = require('./module');

async function sqSummon(message, option) {

    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.VIPCoins > 0 && option === 1) {
                    await summon(0, message)
                    user.VIPCoins -= 1 
                    user.save()
                } else if(user.VIPCoins === 0) {
                    message.channel.send("You don't have any Saint Quartz.")
                } else if (user.VIPCoins > 2 && option === 2) {
                    await summon(10, message)
                    user.VIPCoins -= 3
                    user.save()
                } else {
                    message.channel.send("You don't have enough Saint Quartz.")
                }
            } else {
                message.channel.send('Please register first. (f/register)')
            }



        }
    })


}

module.exports = sqSummon;