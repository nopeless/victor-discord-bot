const { MessageEmbed, MessageAttachment} = require('discord.js');
const banners = require("../banners");
const characters = require("../charactersList");
const Server = require("../models/Server");
const { postIntroduction } = require("../dialogues/introduction");
const getUser = require("./getUser")
const saveUser = require("./saveUser");
const user = require('../models/user');


let values = [
    [-5, -5, -5, 5, 0, 0, 5, 5],
    [1, 0, 5, 0, 0, 0, -5, -5, 0],
    [5, 5, 5, 0, 0, -5, -5, -5],
    [-5, -5, 5, -5, -5, 5, 5, 5],
    [-5, -5, 0, 0, 0, 5, 5, 5],
    [0, 0, 0, -5, 5, 5, 5, -5],
    [-5, -5, 0, 0, 5, 0, 5, 5],
    [-5, -5, 0, -5, 5, 5, -5, 5],
    [5, 5, 0, 0, 5, 0, -5, -5],
    [-10, 0, 10, 0, 0, 10, 0, -10],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

async function say(textfile, message, index = 0){
    const embed = new MessageEmbed()
        .setAuthor(textfile[index].name, textfile[index].picture)
        .setDescription(textfile[index].content)

    return message.channel.send(embed)
        

}


async function sayAll(textfile, message, client) {
    const elements = textfile.length

    let current = 0
    const reactionFilter1 = (reaction, user) => reaction.emoji.name === '➡' && user.id != client.user.id && user.id == message.author.id;

    const embed = new MessageEmbed()
        .setAuthor(textfile[current].name, textfile[current].picture)
        .setDescription(textfile[current].content)

    message.channel.send(embed)
        .then(msg => msg.react('➡'))
        .then(msg => {
            // createReactionCollector - responds on each react, AND again at the end.
            const collector1 = msg.message
                .createReactionCollector(reactionFilter1, {
                    time: 120000
                });

            // set collector events
            collector1.on('collect', r => {
                // immutably copy embed's Like field to new obj

                if (current < elements - 1) {
                    current += 1

                    // create new embed with old title & description, new field
                    const newEmbed = new MessageEmbed()
                        .setAuthor(textfile[current].name, textfile[current].picture)
                        .setDescription(textfile[current].content)

                    // edit message with new embed
                    // NOTE: can only edit messages you author
                    r.message.edit(newEmbed)
                        .then(newMsg => console.log(`new embed added`))
                        .catch(console.log);
                }

                else {
                    r.message.delete()
                        
                }
            });

            collector1.on('end', collected => console.log(`Collected ${collected.size} reactions`));
        })

        .catch(console.log);
}



async function reactions(textfile, message, client, index, func1, func2, func3, func4) {
    say(textfile, message, index)
        .then(async msg => {
            await msg.react('1⃣')
            await msg.react('2⃣')
            await msg.react('3⃣')
            await msg.react('4⃣')
            return msg
        
        })
        .then(msg => {
            // createReactionCollector - responds on each react, AND again at the end.
            const reactionFilter1 = (reaction, user) => reaction.emoji.name === '1⃣' && user.id != client.user.id && user.id == message.author.id;
            const reactionFilter2 = (reaction, user) => reaction.emoji.name === '2⃣' && user.id != client.user.id && user.id == message.author.id;
            const reactionFilter3 = (reaction, user) => reaction.emoji.name === '3⃣' && user.id != client.user.id && user.id == message.author.id;
            const reactionFilter4 = (reaction, user) => reaction.emoji.name === '4⃣' && user.id != client.user.id && user.id == message.author.id;
            
            const collector1 = msg
                .createReactionCollector(reactionFilter1, {
                    time: 100000
                });
            const collector2 = msg
                .createReactionCollector(reactionFilter2, {
                    time: 100000
                });
            const collector3 = msg
                .createReactionCollector(reactionFilter3, {
                    time: 100000
                });
            const collector4 = msg
                .createReactionCollector(reactionFilter4, {
                    time: 100000
                });

            collector1.on('collect', func1)
            collector1.on('collect', r => { r.message.delete(); })
            collector2.on('collect', func2)
            collector2.on('collect', r => { r.message.delete() })
            collector3.on('collect', func3)
            collector3.on('collect', r => { r.message.delete() })
            collector4.on('collect', func4)
            collector4.on('collect', r => { r.message.delete() })

           })
        
        
        
}

async function modifyMorality(message, number){
    // Server.findOne({ serverID: message.guild.id }, async(err, server) => {
    // Server.find({ serverID: message.guild.id }, { players: { "$elemMatch": { playerID: message.author.id } } }, async (err, server) => {
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
    let morality = user.morality
    morality += number
    // server.players.find(player => player.playerID == message.author.id).morality += number
    let query = { [`players.${getIndex}.morality`]: morality };
    saveUser(message, query)
    let moralName = ""
    if (morality < 30) {
        moralName = "Evil"
    }
    if (30 <= morality && morality <= 69) {
        moralName = "Neutral"
    }
    if (morality > 69) {
        moralName = "Good"
    };
    message.channel.send(`Your morality was altered. Current value: ${morality} [ **${moralName}** ]`)
}

async function modifyEthics(message, number){
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
    let ethics = user.ethics
    ethics += number
    // server.players.find(player => player.playerID == message.author.id).morality += number
    const query = { [`players.${getIndex}.ethics`]: ethics };
    saveUser(message, query)
    let ethicsName = ""
    if (ethics < 30) {
        ethicsName = "Chaotic"
    }
    if (30 <= ethics && ethics <= 69) {
        ethicsName = "Neutral"
    }
    if (ethics > 69) {
        ethicsName = "Lawful"
    }
    message.channel.send(`Your ethics were altered. Current value: ${ethics} [ **${ethicsName}** ]`)
}


async function aligmentTest( textfile, message, client, index){
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
            if(user && user != undefined){
                if (user.test <= 11) {
                    if (index <= 10) {
                        user.test += 1
                        reactions(textfile, message, client, index,
                            function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); aligmentTest(textfile, message, client, index += 1) },
                            function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); aligmentTest(textfile, message, client, index += 1) },
                            function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); aligmentTest(textfile, message, client, index += 1) },
                            function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); aligmentTest(textfile, message, client, index += 1) }
                        )
                        const query = { [`players.${getIndex}.test`]: user.test };
                        saveUser(message, query)
                    } else {
                        user.test += 1
                        const query2 = { [`players.${getIndex}.test`]: user.test };
                        saveUser(message, query2)
                        getAlignment(message)
                        say(postIntroduction, message)
                    }
                } else {message.channel.send("You've already taken this test before.") }
            } else {message.channel.send("Please register first. (f/register)")} 
            }



async function getAlignment( message){
    let data = await getUser(message);
    let user = data[0].players[0]
    let ethics = user.ethics
    let morality = user.morality
    let ethicsName = ""
    let moralName = ""
            if(ethics < 30){
                ethicsName = "Chaotic"
            }
            if (30 <= ethics && ethics <= 69) {
                ethicsName = "Neutral"
            }
            if (ethics > 69) {
                ethicsName = "Lawful"
            }

            if (morality < 30) {
                moralName = "Evil"
            }
            if (30 <= morality && morality <= 69) {
                moralName = "Neutral"
            }
            if (morality > 69) {
                moralName = "Good"
            };

            if (30 <= ethics && ethics <= 69 && 30 <= morality && morality <= 69){
                
                message.channel.send("Your aligment was determined to be : True Neutral")
            }
            else {
                message.channel.send(`Your aligment was determined to be : **${ethicsName} ${moralName}**`)
            }
            
        }

async function summonAlignmentBanner(message){
    let data = await getUser(message);
    let user = data[0].players[0]
    let ethics = user.ethics
    let morality = user.morality
    let ethicsName = ""
    let moralName = ""
            if(ethics < 30){
                ethicsName = "Chaotic"
            }
            else if (30 <= ethics && ethics <= 69) {
                ethicsName = "Neutral"
            }
            else if (ethics > 69) {
                ethicsName = "Lawful"
            }

            if (morality < 30) {
                moralName = "Evil"
            }
            else if (30 <= morality && morality <= 69) {
                moralName = "Neutral"
            }
            else if (morality > 69) {
                moralName = "Good"
            }


            let banner = 0

            if (ethicsName == "Lawful" && moralName == "Good"){
                banner = 1
            }
            
            else if (ethicsName == "Neutral" && moralName == "Good") {
                banner =  2
            }

            else if (ethicsName == "Chaotic" && moralName == "Good") {
                banner = 3
            }

            else if (ethicsName == "Lawful" && moralName == "Neutral") {
                banner = 4
            }

            else if (ethicsName == "Neutral" && moralName == "Neutral") {
                banner = 5
            }

            else if (ethicsName == "Chaotic" && moralName == "Neutral") {
                banner = 6
            }

            else if (ethicsName == "Lawful" && moralName == "Evil") {
                banner = 7
            }

            else if (ethicsName == "Neutral" && moralName == "Evil"){               
                banner = 8
            }

            else if (ethicsName == "Chaotic" && moralName == "Evil") {
                banner = 9
            }
            await summon(banner, message)
        }



async function showCommandSeals(message){
    let data = await getUser(message);
    let user = data[0].players[0]
            let numberOfUses = user.commandsLeft
            let commandSeals = user.commandId
            const attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
            const embed = new MessageEmbed()
                .setColor('#800b03')
                .setDescription(`You have **${numberOfUses}** command seals left.`)
            message.channel.send(embed)
            message.channel.send(attachment)
        }


async function summon(banner, message){
    const summoned = banners[banner][Math.floor(Math.random() * banners[banner].length)];
    // console.log(servants[summoned]);// change to append to player.servants array
    let data = await getUser(message);
    let [playersMap, user] = [data[0].playersMap, data[0].players[0]]
    const getIndex = playersMap.get(message.author.id)
    let servants = user.servants
    let servant = { ...characters[summoned]}
    servants.push(servant)
    let query = { [`players.${getIndex}.servants`]: servants };
    saveUser(message, query)
            
    let character = characters[summoned]
    async function summoning(character) {
        const embed = new MessageEmbed()
            .setDescription(`Congratulations! You have summoned **${character.class}** !`)
            .setColor('#800b03')
            .setImage(pickClassCard(character))
        // .setThumbnail(character.pictures[1])

        m = await message.channel.send(embed)

        const newEmbed = new MessageEmbed()
            .setDescription(`Congratulations ${message.author.username}! You have summoned **${character.class}** !`)
            .setColor('#800b03')
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


function pickClassCard(servant){
    if(servant.class == "Saber"){
        return "https://i.imgur.com/hHzzYOC.png"
    }
    if (servant.class == "Archer") {
        return "https://i.imgur.com/ss5f3Ln.png"
    }
    if(servant.class == "Lancer"){
        return "https://i.imgur.com/EYBuCSp.png"
    }
    if(servant.class == "Berserker"){
        return "https://i.imgur.com/q8WOETg.png"
    }
    if(servant.class == "Rider"){
        return "https://i.imgur.com/OLORKzp.png"
    }
    if (servant.class == "Caster") {
        return "https://i.imgur.com/p3onA8T.png"
    }
    if (servant.class == "Assassin") {
        return "https://i.imgur.com/O6xyPvm.png"
    }
    if (servant.class == "Ruler") {
        return "https://i.imgur.com/HJQRt3z.png"
    }
    if (servant.class == "Avenger") {
        return "https://i.imgur.com/EpzoD0d.png"
    }
    if (servant.class == "Alter Ego") {
        return "https://i.imgur.com/ldjgU81.png"
    }
    if (servant.class == "Foreigner") {
        return "https://i.imgur.com/JJQubf4.png"
    }
    if (servant.class == "Moon Cancer") {
        return "https://i.imgur.com/HikWfFh.png"
    }
    if (servant.class == "Shielder") {
        return "https://i.imgur.com/vnun16q.jpg"
    }
    if (servant.class == "Temptress") {
        return "https://i.imgur.com/z80IvcN.png"
    }
    else{
        return "https://i.imgur.com/accIUij.png"
    }
}

async function expGain(message, expAmount){
    Server.findOne({ serverID: message.guild.id }, async(err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            if (user){
                let name = message.author.username
                user.exp += expAmount
                let lvl = user.level
                let exp = user.exp
                if (exp >= Math.floor(lvl ** 2.15 * 100)) {// idk if it's good or not  
                    user.level += 1
                    user.statsPoints += 3

                    

                }
                if (exp >= Math.floor(lvl ** 2.15 * 100) && (lvl + 1) % 5 === 0) {
                    user.servantsLimit += 1
                    user.maxAp += 1
                    
                }
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        expGain(message, expAmount)
                    } else {
                        if (exp >= Math.floor(lvl ** 2.15 * 100)) { message.channel.send(`Congratulations **${name}** you have reached **Lv. ${lvl + 1}** as a mage!`)}
                        if (exp >= Math.floor(lvl ** 2.15 * 100) && (lvl + 1) % 5 === 0) { message.channel.send(`Congratulations **${name}** your servant limit and Max AP have been increased by **1**!`)}
                    }
                })

            }
     
        }
    }
    )

}


module.exports = {
    showCommandSeals: showCommandSeals,
    summon: summon,
    say: say,
    sayAll: sayAll,
    aligmentTest: aligmentTest,
    getAlignment: getAlignment,
    summonAlignmentBanner: summonAlignmentBanner,
    expGain: expGain,
    reactions: reactions,
    modifyEthics: modifyEthics,
    modifyMorality: modifyMorality,
    pickClassCard: pickClassCard
}