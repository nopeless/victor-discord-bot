const Server = require('../../models/Server');
const { BattleUnit } = require('../../models/BattleUnit');
const charactersList = require('../../charactersList');
const blockAction = require('../blockAction');
// const {playerTurn, servantTurn} = require('./playerTurn');
// const servantTurn = require('./servantTurn');
const backgrounds = require('../../backgrounds');
const { MessageEmbed, MessageCollector, MessageAttachment } = require('discord.js');
const renderBattle = require('../renderBattle2');
const { castSpell } = require('../castSpell');
const auth = require("../../../auth.json");
const np = require('../specials');
const useItem = require('../useItem');
const statusCheck = require('../statusCheck');
const updatePlayer = require('../updatePlayer');
// const servantTurn = require('./servantTurn');
const prefix = auth.prefix;

const playerTurn = async (message, battlefield, first, second) => {
    //battle start
    await renderBattle(message, first, second, battlefield.background)

    // message.channel.send(`${battlefield.servant1.name[0]} hp: ${battlefield.servant1.currentHp}/${battlefield.servant1.maxHp}\nStats:${battlefield.servant1.stats}\nStatus:${battlefield.servant1.status}\ntakenDMG:${battlefield.servant1.takenDmg}`)
    // message.channel.send(`${battlefield.servant2.name[0]} hp: ${battlefield.servant2.currentHp}/${battlefield.servant2.maxHp}\nStats:${battlefield.servant2.stats}\nStatus:${battlefield.servant2.status}\ntakenDMG:${battlefield.servant2.takenDmg}`)


    let firstName = ''
    if (first.revealed) {
        firstName = first.name[0]
    } else {
        firstName = first.class
    }

    let secondName = ''
    if (second.revealed) {
        secondName = second.name[0]
    } else {
        secondName = second.class
    }
    const exampleEmbed = new MessageEmbed()
        .setColor('#800b03')
        .setAuthor(`${firstName}`, `${first.pictures[0]}`)
        .setDescription('Your orders master? (60 seconds)')
        .addField('1.', 'Attack', true)
        .addField('2.', 'Use Spell', true)
        .addField('3.', 'Use Item', true)
        .addField('4.', 'Use Noble Phantasm', true)
        .addField('5.', 'Reveal enemy True Name', true)
        .addField('6.', 'Use Command Seal', true)
        .addField('7.', 'Quit (Die)', true)
        .setFooter('f/(1-7) to choose')

    await message.channel.send(exampleEmbed)


    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
    const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
    collector1.on('collect', async message => {

        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        switch (input) {
            case '1':
                //attack
                //if stunned
                if (first.status.stun.active === true) {
                    message.channel.send(`${firstName} is stunned they can not move!`)
                    collector1.stop('attack')
                    break;
                } else {
                    // if confused
                    if (first.status.confusion.active === true) {
                        let confuse = Math.floor(Math.random() * 2);
                        if (confuse === 0) {
                            second.takeAttackDammage = [first.inflictDammage, message, false]
                            collector1.stop('attack')
                            break;
                        } else {
                            // confusion triggers servant hits themselves
                            first.takeAttackDammage = [first.inflictDammage, message, false]
                            message.channel.send(`${firstName} got hurt in their confusion!`)
                            collector1.stop('attack')
                            break;
                        }

                    } else {
                        second.takeAttackDammage = [first.inflictDammage, message, false]
                        collector1.stop('attack')
                        break;
                    }
                }



            case '2':
                //spell
                if (battlefield.player1.spells.length !== 0) {
                    collector1.stop('spell')
                    let allSpells = ""

                    if (battlefield.player1.spells.length >= 11) {
                        battlefield.player1.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                            if (i % 10 === 0 && i !== 0) {
                                let exampleEmbed = new MessageEmbed()
                                    .setColor('#800b03')
                                    .setTitle(`Choose spell to cast ${battlefield.player1.currentMana}/${battlefield.player1.maxMana}MP (30 seconds)`)
                                    .setDescription(allSpells)
                                    .setFooter('f/number to cast; f/back to go back')
                                message.channel.send(exampleEmbed);

                                allSpells = ""
                            }
                            i++
                        });
                        if (allSpells !== "") {
                            let exampleEmbed = new MessageEmbed()
                                .setColor('#800b03')
                                .setTitle(`Choose spell to cast ${battlefield.player1.currentMana}/${battlefield.player1.maxMana}MP (30 seconds)`)
                                .setDescription(allSpells)
                                .setFooter('f/number to cast; f/back to go back')
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        battlefield.player1.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name}** (mana cost: ${element.manaNeeded} Mp) \n`
                            i++
                        });

                        let exampleEmbed = new MessageEmbed()
                            .setColor('#800b03')
                            .setTitle(`Choose spell to cast ${battlefield.player1.currentMana}/${battlefield.player1.maxMana}MP (30 seconds)`)
                            .setDescription(allSpells)
                            .setFooter('f/number to cast; f/back to go back')
                        message.channel.send(exampleEmbed);
                    }


                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {
                        let spellData = ""
                        let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                        if (input == 'back') {
                            // spellData = "back"
                            collector2.stop('back')
                        } else if (input && parseInt(input) >= 0 && parseInt(input) < battlefield.player1.spells.length) {
                            collector2.stop()
                            input = Math.floor(input)
                            spellData = await castSpell(message, input, battlefield.player1)
                        } else {

                            spellData = ""
                        }


                        // console.log(spellData)
                        if (spellData === 0) {
                            message.channel.send(`Not enough mana! **${battlefield.player1.currentMana}**MP left.`)
                        } else if (spellData === "") {
                            message.channel.send('Wrong number.')
                        } else {

                            if (spellData.target === "self") {
                                first.takeSpellEffect = spellData
                            } else if (spellData.target === "enemy") {
                                second.takeSpellEffect = spellData
                            }
                            switch (spellData.spellType) {
                                case 'buffStrength':
                                    message.channel.send(`${firstName}'s strength rose`)
                                    break;
                                case 'buffDefence':
                                    message.channel.send(`${firstName}'s defence rose`)
                                    break;
                                case 'buffAgility':
                                    message.channel.send(`${firstName}'s agility rose`)
                                    break;
                                case 'buffMagic':
                                    message.channel.send(`${firstName}'s magic rose`)
                                    break;
                                case 'buffLuck':
                                    message.channel.send(`${firstName}'s luck rose`)
                                    break;
                                case 'debuffStrength':
                                    message.channel.send(`${secondName}'s strength fell`)
                                    break;
                                case 'debuffDefence':
                                    message.channel.send(`${secondName}'s defence fell`)
                                    break;
                                case 'debuffAgility':
                                    message.channel.send(`${secondName}'s agility fell`)
                                    break;
                                case 'debuffMagic':
                                    message.channel.send(`${secondName}'s magic fell`)
                                    break;
                                case 'debuffLuck':
                                    message.channel.send(`${secondName}'s luck fell`)
                                    break;
                            }


                        }

                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            playerTurn(message, battlefield, first, second)
                        } else {
                            await statusCheck(message, first, firstName, second)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
                            } else {
                                message.channel.send("Match over!")
                                await renderBattle(message, first, second, battlefield.background)
                                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                            }
                        }

                    })

                } else {
                    message.channel.send("You don't know any spells.")
                }
                break;

            case '3':
                //item

                if (battlefield.player1.inventory.length != 0) {
                    let useableItems = ""
                    let canBeSelected = []

                    battlefield.player1.inventory.forEach((element, i = 0) => {
                        if (element.consumeable === true) {
                            useableItems += `${i}. **${element.name}** x${element.quantity}\n`// do something about indexes "i"?
                            canBeSelected.push(i.toString());
                        }
                        i++
                    });
                    if (canBeSelected.length != 0) {
                        collector1.stop('item')

                        const exampleEmbed = new MessageEmbed()
                            .setColor('#800b03')
                            .setTitle('Choose item to use (30 seconds)')
                            .setDescription(useableItems)
                            .setFooter('f/number to use; f/back to go back')
                        message.channel.send(exampleEmbed);

                        const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                        const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                        collector2.on('collect', async message => {

                            let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                            if (input == 'back') {
                                collector2.stop('back')
                            } else {
                                if (canBeSelected.includes(input)) {
                                    useItem(first, second, battlefield.player1, message, input)
                                    collector2.stop()
                                } else {
                                    message.channel.send("Wrong Item!")
                                }
                            }


                        })

                        collector2.on('end', async (collected, reason) => {
                            if (reason && reason === 'back') {
                                playerTurn(message, battlefield, first, second)
                            } else {
                                await statusCheck(message, first, firstName, second)
                                if (first.currentHp > 0 && second.currentHp > 0) {
                                    setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
                                } else {
                                    message.channel.send("Match over!")
                                    await renderBattle(message, first, second, battlefield.background)
                                    await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                                }
                            }

                        })

                    } else {
                        message.channel.send("You don't have any items that could be used in battle.")
                    }

                } else {
                    message.channel.send("You don't have any items.")
                }

                break;

            case '4':
                // NP
                if (first.status.npSeal.active === true) {
                    message.channel.send(`${firstName} can't use their Noble Phantasm due to the NP Seal!`)
                    break;
                } else if (first.charge < 7) {
                    message.channel.send(`${firstName} Noble Phantasm is not fully charged yet.`)
                    break;

                } else {
                    collector1.stop('np')
                    break;
                }


            case '5':
                // name
                if (second.revealed) {
                    message.channel.send(`You already know ${second.class}'s true name.`)

                } else {
                    collector1.stop('name')
                    message.channel.send('type f/ + enemy name (30 seconds)');

                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {
                        const guess = message.content.slice(prefix.length).trim().split(/ +/g)
                        const input = guess.join(" ");
                        // console.log(input);
                        // console.log(second.name[0]);
                        if (second.name.includes(input.toLowerCase()) || first.class === "Ruler") {
                            second.stats.strength = second.stats.strength / 2
                            second.stats.magic = second.stats.magic / 2
                            second.revealed = true

                            if (first.class === "Ruler") {
                                message.channel.send(`${second.class}'s True Name was revelated, their strength and magic stats fell significantly...`)
                            } else {
                                message.channel.send(`That's right, it's ${input}!\n${input}'s strength and magic stats fell significantly...`)
                            }
                        } else {
                            message.channel.send('Wrong! You lose your turn.')
                        }
                        collector2.stop()
                    })

                    collector2.on('end', async () => {
                        await statusCheck(message, first, firstName, second)
                        if (first.currentHp > 0 && second.currentHp > 0) {
                            setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
                        } else {
                            message.channel.send("Match over!")
                            await renderBattle(message, first, second, battlefield.background)
                            await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                        }
                    })

                }

                break;

            case '6':
                // seal
                if (battlefield.player1.commandsLeft <= 0) {
                    message.channel.send("You don't have any command seals left.")
                } else {
                    collector1.stop('seal')

                    const exampleEmbed2 = new MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor(`${firstName}`, `${first.pictures[0]}`)
                        .setDescription(`Yes master? (comand seals left: ${battlefield.player1.commandsLeft}) (30 seconds)`)
                        .addField('1.', `Fight with everything you've got ${first.class}! (strength and magic + 50%)`, true)
                        .addField('2.', `Stand up ${first.class}! We haven't lost just yet. (fully restore hp)`, true)
                        .addField('3.', `${first.class}, gather the mana to use your Noble Phantasm! (NP can be used in the next turn.)`, true)
                        .addField('4.', `${first.class}, I order you with a Command Seal, retreat at once! (Flee from the battle.)`, true)
                        .setFooter('f/(1-4) to choose; f/back to go back')
                    message.channel.send(exampleEmbed2)


                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {

                        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                        let attachment = ''
                        switch (input) {
                            case '1':
                                first.stats.strength += first.stats.strength / 2
                                first.stats.magic += first.stats.magic / 2
                                battlefield.player1.commandsLeft -= 1
                                numberOfUses = battlefield.player1.commandsLeft
                                commandSeals = battlefield.player1.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '2':
                                first.currentHp = first.maxHp
                                battlefield.player1.commandsLeft -= 1
                                numberOfUses = battlefield.player1.commandsLeft
                                commandSeals = battlefield.player1.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '3':
                                first.noblePhantasm.canBeUsed = true
                                first.charge = 7
                                battlefield.player1.commandsLeft -= 1
                                numberOfUses = battlefield.player1.commandsLeft
                                commandSeals = battlefield.player1.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;
                            case '4':
                                battlefield.player1.commandsLeft -= 1
                                numberOfUses = battlefield.player1.commandsLeft
                                commandSeals = battlefield.player1.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop('escape')
                                break;
                            case 'back':
                                collector2.stop('back')
                                break;
                        }
                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            playerTurn(message, battlefield, first, second)
                        } else if (reason && reason === 'escape') {
                            message.channel.send(`${firstName} and his master have fled from the battle.`)
                            await updatePlayer(message, battlefield.player1, first, second, true, 2, 3)
                        } else {
                            await statusCheck(message, first, firstName, second)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
                            } else {
                                message.channel.send("Match over!")
                                await renderBattle(message, first, second, battlefield.background)
                                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                            }
                        }

                    })
                }
                break;
            case '7':
                const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                    const collector3 = new MessageCollector(message.channel, filter, { time: 30000 });
                    message.channel.send('Do you really want to kill your servant?\nType **f/yes** to confirm **f/cancel** to cancel.')
                    collector3.on('collect', async message => {
                        collector3.stop()
                        let input3 = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                        if (input3 == 'yes') {
                            first.currentHp = 0
                            collector1.stop('attack')
                        } else if (input3 == 'cancel') {
                            message.channel.send('Ok, please continue fighting.')
                        }
                    })
                
                break;
        }

    })

    collector1.on('end', async (collected, reason) => {
        if (reason && reason === 'attack') {
            await statusCheck(message, first, firstName, second)
            if (first.currentHp > 0 && second.currentHp > 0) {
                setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
            } else {
                message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
            }

        } else if (reason && reason === 'spell') {
            // do nothing

        } else if (reason && reason === 'item') {
            // do nothing

        } else if (reason && reason === 'np') {
            await np(first, second, battlefield, message)
            await statusCheck(message, first, firstName, second)
            if (first.currentHp > 0 && second.currentHp > 0) {
                setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
            } else {
                message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
            }

        } else if (reason && reason === 'name') {
            // do nothing

        } else if (reason && reason === 'seal') {
            // do nothing

        } else {
            message.channel.send('Time out! Next player turn')
            await statusCheck(message, first, firstName, second)
            first.missedTurns += 1
            if (first.currentHp > 0 && second.currentHp > 0) {
                setTimeout(() => { servantTurn(message, battlefield, second, first) }, 1000)
            } else {
                message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
            }
        }

    })


}
const servantTurn = async (message, battlefield, second, first) => {
    // console.log(`mob atk : ${second.stats.strength}`)
    // await renderBattle(message, first, second, battlefield.background)
    // message.channel.send(`${battlefield.servant1.name[0]} hp: ${battlefield.servant1.currentHp}/${battlefield.servant1.maxHp}\nStats:${battlefield.servant1.stats}\nStatus:${battlefield.servant1.status}\ntakenDMG:${battlefield.servant1.takenDmg}`)
    // message.channel.send(`${battlefield.servant2.name[0]} hp: ${battlefield.servant2.currentHp}/${battlefield.servant2.maxHp}\nStats:${battlefield.servant2.stats}\nStatus:${battlefield.servant2.status}\ntakenDMG:${battlefield.servant2.takenDmg}`)

    let secondName = ''
    if (second.revealed) {
        secondName = second.name[0]
    } else {
        secondName = second.class
    }

    //attack
    if (second.charge >= 7 && second.status.npSeal.active === false) {
        //use np
        await np(second, first, battlefield, message)
        await statusCheck(message, second, secondName, first)
        if (first.currentHp > 0 && second.currentHp > 0) {
            setTimeout(() => { playerTurn(message, battlefield, first, second) }, 1000)
        } else {
            message.channel.send("Match over!")
            await renderBattle(message, first, second, battlefield.background)
            await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
        }
    } else if (second.status.stun.active === true) {
        message.channel.send(`${secondName} is stunned they can not move!`)
        await statusCheck(message, second, secondName, first)
        setTimeout(() => { playerTurn(message, battlefield, first, second) }, 1000)
    } else {
        if (second.status.confusion.active === true) {
            let confuse = Math.floor(Math.random() * 2);
            if (confuse === 0) {
                message.channel.send('Enemy attacks!')
                first.takeAttackDammage = [second.inflictDammage, message, false]
                await statusCheck(message, second, secondName, first)
                setTimeout(() => { playerTurn(message, battlefield, first, second) }, 1000)
                if (first.currentHp > 0 && second.currentHp > 0) {
                } else {
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                }


            } else {
                // confusion triggers servant hits themselves
                message.channel.send('Enemy attacks!')
                second.takeAttackDammage = [second.inflictDammage, message, false]
                message.channel.send(`${secondName} got hurt in their confusion!`)
                await statusCheck(message, second, secondName, first)
                if (first.currentHp > 0 && second.currentHp > 0) {
                    setTimeout(() => { playerTurn(message, battlefield, first, second) }, 1000)
                } else {
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
                }
            }
        } else {
            message.channel.send('Enemy attacks!')
            first.takeAttackDammage = [second.inflictDammage, message, false]
            await statusCheck(message, second, secondName, first)
            if (first.currentHp > 0 && second.currentHp > 0) {
                setTimeout(() => { playerTurn(message, battlefield, first, second) }, 1000)
            } else {
                message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updatePlayer(message, battlefield.player1, first, second, false, 2, 3)
            }
        }
    }

}

const servantFight = async (message) => {

    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
    const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
    message.channel.send('Type f/(number between 1-200) to choose the enemy level\n```Remember that if your servant HP reaches 0 they will die! (You can always use a command seal to escape.)```')
    collector1.on('collect', async message => {
        collector1.stop()
        let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        let level = parseInt(input, 10);
        // console.log(level);
        if (level >= 1 && level <= 200) {
            level = Math.floor(level)
            await blockAction(message, message.author.id)
            Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                if (err) {
                    console.log(err);
                }
                else {
                    
                    const user = await server.players[server.playersMap.get(message.author.id)]
                    // initialize 
                    const bcg = Math.floor(Math.random() * backgrounds.length)
                    let battlefield = {
                        player1: {},
                        servant1: {},
                        servant2: {},
                        turn: 0,
                        background: backgrounds[bcg]
                    }

                    battlefield.player1 = user// must be the first one
                    battlefield.servant1 = new BattleUnit(user.servants[0])
                    battlefield.servant2 = new BattleUnit(charactersList[Math.floor(Math.random() * charactersList.length)])

                    // add stats together
                    battlefield.servant1.stats.strength += battlefield.player1.stats.strength
                    battlefield.servant1.stats.endurance += battlefield.player1.stats.endurance
                    battlefield.servant1.currentHp += battlefield.player1.stats.endurance * 10
                    battlefield.servant1.maxHp += battlefield.player1.stats.endurance * 10
                    battlefield.servant1.stats.agility += battlefield.player1.stats.agility
                    battlefield.servant1.stats.magic += battlefield.player1.stats.magic
                    battlefield.servant1.stats.luck += battlefield.player1.stats.luck

                    battlefield.servant2.level = level
                    battlefield.servant2.stats.strength += level * 2
                    battlefield.servant2.stats.endurance += level * 2
                    battlefield.servant2.currentHp += level * 20
                    battlefield.servant2.maxHp += level * 20
                    battlefield.servant2.stats.agility += level * 2
                    battlefield.servant2.stats.magic += level * 2
                    battlefield.servant2.stats.luck += level * 2




                    battlefield.servant1basestats = { ...battlefield.servant1.stats }
                    battlefield.servant2basestats = { ...battlefield.servant2.stats }

                    let first = ''
                    let second = ''

                    // console.log('battle start!')
                    message.channel.send('If you finished the fight or bot stopped responding during a fight and you can not perform any action(f/a), please use **f/iamnotfighting** command')
                    if (battlefield.servant1.stats.agility > battlefield.servant2.stats.agility) {
                        first = battlefield.servant1
                        second = battlefield.servant2
                        playerTurn(message, battlefield, first, second)
                    } else {
                        first = battlefield.servant1
                        second = battlefield.servant2
                        servantTurn(message, battlefield, second, first)
                    }

                }
            })

        } else {
            message.channel.send('Wrong number!')
        }

    })

}

module.exports = servantFight;