const Discord = require('discord.js');
const {spells} = require("../spellsList");
const { displaySpells } = require('../custom_modules/displaySpells');
const { expGain} = require("../custom_modules/module");
const auth = require("../../auth.json");
const { libraryEvents } = require('../custom_modules/areaEvents');
const prefix = auth.prefix;
const useAp = require("../custom_modules/useAp")

const library = async(message, user, client)=>{

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800b03')
        .setAuthor('Lord El-Melloi II', 'https://i.imgur.com/hYz4ipb.jpg')
        .setDescription('I see that you want to expand your knowledge. Care to listen to a short lecture then?')
        .setThumbnail('https://i.imgur.com/jNUKlKg.png')
        .addField('1.', 'Study', true)
        .addField('2.', 'Learn spells', true)
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
                let result = ""
                expAmount = (Math.floor(Math.random() * 200) + 1) * 10
                await expGain(message, expAmount);
                if(expAmount<=100){
                    result = 'You lack focus. Try to concentrate more next time...'
                } else if(expAmount>100 && expAmount<=500){
                    result = 'You have learned something but I know that you could do better than that.'
                } else if (expAmount > 500 && expAmount <= 1000){
                    result = "I see that you are making some progress, that's good."
                } else if (expAmount > 1000 && expAmount <= 1500){
                    result = 'You must have been studying pretty hard lately, you did a great job, keep it up.'
                } else {
                    result = "Amazing! You must be a genius. I'm very proud of you."
                }

                const emb = new Discord.MessageEmbed()
                    .setColor('#800b03')
                    .setAuthor('Lord El-Melloi II', 'https://i.imgur.com/hYz4ipb.jpg')
                    .setDescription(`${result} (gained **${expAmount}**exp)`)
                message.channel.send(emb)
                await useAp(message);
                break;

            case '2':
                displaySpells(message, spells, 'Lord El-Melloi II', 'https://i.imgur.com/hYz4ipb.jpg');
                break;

            case '3':
                //events
                libraryEvents(message, client)
                await useAp(message);
                break;
    
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = library;