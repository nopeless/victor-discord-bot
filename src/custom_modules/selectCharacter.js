const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const { MessageEmbed } = require('discord.js');
const characters = require("../charactersList");


const selectCharacter = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            if (player && player !== undefined){
                if (player.isFighting === false) {
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    const typed = args.join(" ");
                    let num = typed.slice(6).trim().split(/ +/g);
                    // console.log(num)
                    var integer = parseInt(num, 10);
                    integer -= 1
                    if (integer >= 0 && integer < player.servants.length) {
                        let ID = player.servants[integer].id
                        let item = player.servants[integer]
                        player.servants.splice(integer, 1);
                        player.servants.unshift(item);
                        
                        await server.save(async function (err, data) {
                            if (err) {
                                console.log(err);
                                selectCharacter(message)
                            } else {
                                const embed = new MessageEmbed()
                                    .setColor('#800b03')
                                    .setImage(characters[ID].pictures[0])
                                    .setDescription(`Selected **${characters[ID].class} Lvl.${player.servants[0].level}**`)
                                message.channel.send(embed)
                            }
                        })

                    } else {
                        message.channel.send('Wrong number.')
                    }
                } else {
                    message.channel.send('You can not select another character while fighting!')
                }
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
            
            
            
            
        }
    })
}

module.exports = selectCharacter;