const Discord = require('discord.js');
const {sacraments} = require("../spellsList");
const { displaySpells } = require('../custom_modules/displaySpells');
const {summonAlignmentBanner} = require("../custom_modules/module");
const auth = require("../../auth.json");
const restoreCommand = require('../custom_modules/restoreCommand');
const specialSummon = require('../custom_modules/specialSummon');
const {churchEvents} = require('../custom_modules/areaEvents');
const useAp = require("../custom_modules/useAp")

const prefix = auth.prefix


const church = (message, user, client)=>{
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800b03')
        .setAuthor('Kirei Kotomine', 'https://i.imgur.com/6tAw2Cl.png')
        .setDescription('What have brought you here ?')
        .setThumbnail('https://i.imgur.com/6hs2VcZ.jpg')
        .addField('1.', 'Summon a Servant', true)
        .addField('2.', 'Restore Command Seal (cost: 10 000QP)', true)
        .addField('3.', 'Learn spells( good alignment masters only)', true)
        .addField('4.', 'Look around', true)
        .setFooter('f/(1-4) to choose; f/cancel to cancel')

    message.channel.send(exampleEmbed)
    
    

    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
    collector.on('collect', async message => {
        collector.stop()
        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        
        switch(input){
            case '1':
                if(user.test >= 12){
                if(user.servants.length < user.servantsLimit){
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor('Kirei Kotomine', 'https://i.imgur.com/6tAw2Cl.png')
                        .setDescription('Do you have a catalyst for the ritual or do you prefer not to use one?\n\n')

                        .addField('1.', 'Summon a servant without the catalyst. (only servants with the same alignment as yours can be summoned this way)')
                        .addField('2.', 'Summon a servant with a chosen item as the catalyst.')
                        .setFooter('f/(1-2) to choose; f/cancel to cancel')
                    message.channel.send(exampleEmbed)

                    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
                    
                    collector.on('collect', async message => {
                        collector.stop()
                        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                        
                        switch (input) {
                            case '1':
                                await summonAlignmentBanner(message)
                                await useAp(message);
                                break;
                            case '2':
                                await specialSummon(message)
                                break
                        }
                    })
                } else {
                    message.channel.send(`You already have reached the maximum number of servants you can own ${user.servants.length}/${user.servantsLimit}`)
                }
            } else{ message.channel.send('Please finish the alignment test first. (f/test)')}
                
                break;
            case '2':
                // restore command seal; take money
                await restoreCommand(message)
                break;
            case '3':
                displaySpells(message, sacraments, "Kirei Kotomine", "https://i.imgur.com/6tAw2Cl.png");
                break;
            case '4':
                // events
                churchEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = church;
