const Server = require("../models/Server");
const getUser = require("./getUser")
const saveUser = require("./saveUser")

const useAp = async (message) => {
    let data = await getUser(message);
    let [playersMap, player] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
            if (player.currentAp > 0){
                player.currentAp -= 1
                let query = { [`players.${getIndex}.currentAp`]: player.currentAp };
                saveUser(message, query)
        }
    }

module.exports = useAp;