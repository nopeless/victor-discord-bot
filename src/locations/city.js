const Discord = require('discord.js');
const { runes } = require("../spellsList");
const { displaySpells } = require('../custom_modules/displaySpells');
const auth = require("../../auth.json");
const work = require('../custom_modules/work');
const { cityEvents } = require('../custom_modules/areaEvents');
const prefix = auth.prefix;
const useAp = require("../custom_modules/useAp")

const city = (message, user, client) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800b03')
        .setAuthor('Touko Aozaki', 'https://i.imgur.com/SIOrkVJ.png')
        .setDescription('Are you lost?')
        .setThumbnail('https://i.imgur.com/w1EbcNk.jpg')
        .addField('1.', 'Go to work', true)
        .addField('2.', 'Learn spells( Neutral alignment masters only', true)
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
                //earn money
                await work(message)
                await useAp(message);
                break;
            case '2':
                displaySpells(message, runes, 'Touko Aozaki', 'https://i.imgur.com/SIOrkVJ.png');
                break;
            case '3':
                // add events
                cityEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = city;