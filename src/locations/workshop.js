const Discord = require('discord.js');
const dismantleItem = require('../custom_modules/dismantleItem');
const synthesizeItem = require('../custom_modules/synthesizeItem');
const auth = require("../../auth.json");
const { alchemyEvents } = require('../custom_modules/areaEvents');
const prefix = auth.prefix;
const useAp = require("../custom_modules/useAp")

const library = (message, user, client) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800b03')
        .setAuthor('Rani VIII', 'https://i.imgur.com/qry70ub.jpg')
        .setDescription('How can I help you?')
        .setThumbnail('https://i.imgur.com/7Vivfgy.jpg')
        .addField('1.', 'Synthesize Items', true)
        .addField('2.', 'Dismantle Items', true)
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
                //create item
                await synthesizeItem( message)
                break;
            case '2':
                //dismount item
                await dismantleItem( message)
                break;
            case '3':
                //add events
                alchemyEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = library;