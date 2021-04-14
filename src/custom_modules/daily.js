const Server = require('../models/Server')

async function daily(message) {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let user = await server.players[getIndex]
            if (user && user !== undefined) {
                if (user.isFighting === false) {
                    const now = Date.now()
                    if (now - user.daily >= 86400000){
                        const gain = Math.floor(Math.random() * 9001) + 1000;  // returns a random integer from 1000 to 5000 
                        user.money += gain
                        user.daily = Date.now()
                        // await server.save(async function (err, data) {
                        //     if (err) {
                        //         console.log(err);
                        //         daily(message)
                        //     } else {
                        //         message.channel.send(`+ ${gain} QP`)
                        //     }
                        // })

                        let query = { [`players.${getIndex}.money`]: user.money, [`players.${getIndex}.daily`]: user.daily };
                        Server.updateOne({ serverID: message.guild.id },
                            {
                                $set: query
                            }, async (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    message.channel.send(`+ ${gain} QP`)
                                }
                            }).lean()
                        
                    } else{
                        
                        function msToTime(duration) {
                            var milliseconds = parseInt((duration % 1000) / 100)
                                , seconds = parseInt((duration / 1000) % 60)
                                , minutes = parseInt((duration / (1000 * 60)) % 60)
                                , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

                            hours = (hours < 10) ? "0" + hours : hours;
                            minutes = (minutes < 10) ? "0" + minutes : minutes;
                            seconds = (seconds < 10) ? "0" + seconds : seconds;

                            return hours + "h  " + minutes + "min  " + seconds + "s";
                        }

                        const remainingTime = msToTime(86400000 - (now - user.daily))

                        message.channel.send(`You need to wait ${remainingTime} to claim the daily reward again.`)
                    }
                } else {
                    message.channel.send('You can not do it while fighting!')
                }
            } else {
                message.channel.send('You need to register first.')
            }
        }
    })
}

module.exports = daily;