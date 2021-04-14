const {MessageEmbed, MessageCollector} = require('discord.js');
const characters = require("../charactersList");
const Server = require("../models/Server");
const auth = require("../../auth.json");
const {pickClassCard} = require('../custom_modules/module');
const prefix = auth.prefix;

async function Csummon(ID, message) {
    // console.log(servants[summoned]);// change to append to player.servants array
    await Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {

            let player = await server.players[server.playersMap.get(message.author.id)]
            let servants = player.servants
            let servant = { ...characters[ID] }
            servants.push(servant)
            player.goldenCoins -= 1
            // console.log(servant)
            await server.save(async function (err, data) {
                if (err) {
                    console.log(err);
                    Csummon(ID, message)
                } else {
                    character = characters[ID]
                    async function summoning(character) {
                        const embed = new MessageEmbed()
                            .setDescription(`Congratulations! You have summoned **${character.class}** !`)
                            .setImage(pickClassCard(character))
                        // .setThumbnail(character.pictures[1])

                        m = await message.channel.send(embed)

                        const newEmbed = new MessageEmbed()
                            .setDescription(`Congratulations ${message.author.username}! You have summoned **${character.class}** !`)
                            .setImage(character.pictures[0])
                        // .setThumbnail(character.pictures[1])


                        var customDelay = new Promise(function (resolve) {
                            var delay = 3000; // milliseconds
                            var before = Date.now();
                            while (Date.now() < before + delay) { };
                            resolve('Success!');
                        });

                        customDelay.then(m.edit(newEmbed));


                    }
                    summoning(character);
                }
            })
            
        }
    }
    )

}

const codeSummon = async (message, user)=>{
    const exampleEmbed = new MessageEmbed()
        .setColor('#ccc925')
        .setAuthor('Gilgamesh', 'https://i.imgur.com/3CRZfVL.jpg')
        .setDescription('Type "f/(6 digit servant code)" to summon a servant you desire mongrel.\n')        
        .setFooter('f/codes to display servant codes; f/cancel to cancel')
    message.channel.send(exampleEmbed)


    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new MessageCollector(message.channel, filter, { time: 90000 });
    
    collector.on('collect', async message => {
        collector.stop()
        const msg = `${message}`
        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
       
        code = ""

        characters.forEach(character => {
            if(character.code === input){
                Csummon(character.id, message)
            }
        });


    })
}

module.exports = codeSummon;