const Discord = require('discord.js');
const auth = require("../../auth.json");
const prefix = auth.prefix;
const buy = require('../custom_modules/buy');
const sell = require('../custom_modules/sell');
const { marketEvents } = require('../custom_modules/areaEvents');
const useAp = require("../custom_modules/useAp")

const market = (message, user, client) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffb3fc')
        .setAuthor('Shopkeeper Illya', 'https://i.imgur.com/rQgXulX.png')
        .setDescription('Do you want to buy something?')
        .setThumbnail('https://i.imgur.com/jmsXWp8.jpg')
        .addField('1.', 'Buy', true)
        .addField('2.', 'Sell', true)
        .addField('3.', 'Look around', true)
        .setFooter('f/(1-3) to choose; f/cancel to cancel')

    message.channel.send(exampleEmbed)

    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
    collector.on('collect', async message => {
        collector.stop()
        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        
        switch (input) {
            case '1':
                // buy stuff
                await buy(message)
                break;
            case '2':
                // sell stuff
                await sell(message)
                break;
            case '3':
                // add events
                marketEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = market;