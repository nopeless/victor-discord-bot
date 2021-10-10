const Discord = require('discord.js');
const Server = require("../models/Server");
const getUser = require("./getUser")
const saveUser = require("./saveUser")

const work = async( message)=>{

    //get user 
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
    if (user && user !== undefined) {
        let result = ""
        let qpAmount = (Math.floor(Math.random() * 200) + 1) * 10
        user.money += qpAmount

    

        // save 
        let query = { [`players.${getIndex}.money`]: user.money };
        saveUser(message, query)

        if (qpAmount <= 100) {
            result = 'Will you stop slacking off and finally get to work!?'
        } else if (qpAmount > 100 && qpAmount <= 500) {
            result = 'Well.. at least you have done something...'
        } else if (qpAmount > 500 && qpAmount <= 1000) {
            result = "Good job."
        } else if (qpAmount > 1000 && qpAmount <= 1500) {
            result = 'You did a great job today, keep it up.'
        } else {
            result = "Woah! You really were working hard today. Here is a little bonus from me."
        }

        const emb = new Discord.MessageEmbed()
            .setColor('#800b03')
            .setAuthor('Touko Aozaki', 'https://i.imgur.com/SIOrkVJ.png')
            .setDescription(`${result} (gained **${qpAmount}** QP)`)
        message.channel.send(emb)
        

    }  else{
        console.log("can't find the user")
    }     
}

module.exports = work;