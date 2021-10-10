const Server = require('../models/Server')
const getUser = require("./getUser")
const saveUser = require("./saveUser")

async function daily(message) {
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
            if (user && user !== undefined) {
                if (user.isFighting === false) {
                    const now = Date.now()
                    if (now - user.daily >= 86400000){
                        const gain = Math.floor(Math.random() * 9001) + 1000;  // returns a random integer from 1000 to 5000 
                        user.money += gain
                        user.daily = Date.now()

                        let query = { [`players.${getIndex}.money`]: user.money, [`players.${getIndex}.daily`]: user.daily };
                        saveUser(message, query)
                        message.channel.send(`+ ${gain} QP`)
                        
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

module.exports = daily;