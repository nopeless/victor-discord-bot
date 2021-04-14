const Discord = require('discord.js');
const { darkSpells } = require("../spellsList");
const { displaySpells } = require('../custom_modules/displaySpells');
const auth = require("../../auth.json");
const { undergroundsEvents } = require('../custom_modules/areaEvents');
const prefix = auth.prefix;
const useAp = require("../custom_modules/useAp")

const undergrounds = (message, user, client) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800b03')
        .setAuthor('Zouken Matou', 'https://i.imgur.com/rBpihfN.jpg')
        .setDescription('What do you want?')
        .setThumbnail('https://i.imgur.com/fMS8v7l.png')
        .addField('1.', 'Learn spells (Evil alignment masters only)', true)
        .addField('2.', 'Look around', true)
        .setFooter('f/(1-2) to choose; f/cancel to cancel')

    message.channel.send(exampleEmbed)

    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
    collector.on('collect', async message => {
        collector.stop()
       
        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        
        switch (input) {
            case '1':
                displaySpells(message, darkSpells, 'Zouken Matou', 'https://i.imgur.com/rBpihfN.jpg');
                break;
            case '2':
                // add events
                undergroundsEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = undergrounds;