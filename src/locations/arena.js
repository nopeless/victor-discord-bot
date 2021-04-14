const Discord = require('discord.js');
const auth = require("../../auth.json");
const characterExpGain = require('../custom_modules/characterExpGain');
const {getRandomItem} = require('../custom_modules/getItem');
const prefix = auth.prefix;
const mobFight = require('../custom_modules/mobFight/mobFight');
const battle = require('../custom_modules/battle/battle');
const { arenaEvents } = require('../custom_modules/areaEvents');
const characters = require("../charactersList");
const useAp = require("../custom_modules/useAp");
const servantFight = require('../custom_modules/servantFight/servantFight2');
const mockPvP = require('../custom_modules/mockPvP/mockPvP');

const arena = (message, user, client) => {

    if(user.servants.length != 0){
        let ID = user.servants[0].id
        let quote = 'What are we going to do master?'
        if (characters[ID].quotes[0] !== ""){
            quote = characters[ID].quotes[0]
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#800b03')
            .setAuthor(`${characters[ID].class}`, `${characters[ID].pictures[0]}`)
            .setDescription(`${quote}`)
            .setThumbnail('https://i.imgur.com/gO5tQyG.jpg')
            .addField('1.', 'Train', true)
            .addField('2.', 'Fight mob (exp,QP,BP x1)', true)
            .addField('3.', 'Treasure hunt', true)
            .addField('4.', 'Fight another master (PvP) (exp,QP x 5; BP x 10)', true)
            .addField('5.', 'Fight enemy servant (exp,QP x 2; BP x 3)', true)
            .addField('6.', 'Mock PvP (servants do not die, no rewards, full HP & MP)', true)
            .addField('7.', 'Look around', true)
            .setFooter('f/(1-5) to choose; f/cancel to cancel')

        message.channel.send(exampleEmbed)



        const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

        const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
        collector.on('collect', async message => {
            collector.stop()
            const msg = `${message}`

            const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
            
            switch (input) {
                case '1':
                    //train your servant
                    message.channel.send('+300 Exp')
                    characterExpGain(message, 300);
                    useAp(message);
                    break;
                case '2':
                    //mob fight
                    mobFight(message)
                    useAp(message)
                    break;
                case '3':
                    //get a random treasure
                    getRandomItem(message)
                    useAp(message)
                    break;
                case '4':
                    // fight another player
                    battle(message)
                    useAp(message)
                    break;
                case '5':
                    // fight enemy servant
                    servantFight(message);
                    useAp(message)
                    break;
                case '6':
                    // mock PvP
                    mockPvP(message)
                    break
                case '7':
                    // add events
                    arenaEvents(message, client)
                    useAp(message)
                    break;
                case 'cancel':
                    // choice.message.delete()
                    break;
            }
        })
    } else{
        message.channel.send("You need to summon yourself a servant first.")
    }
}

    

module.exports = arena;