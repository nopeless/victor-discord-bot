const Server = require('../../models/Server');
const {BattleUnit} = require('../../models/BattleUnit');
const blockAction = require('../blockAction');
const backgrounds = require('../../backgrounds');
const { MessageEmbed, MessageCollector, MessageAttachment } = require('discord.js');
const renderBattle = require('../renderBattle2');
const { castSpell } = require('../castSpell');
const auth = require("../../../auth.json");
const np = require('../specials');
const useItem = require('../useItem');
const statusCheck = require('../statusCheck');
const updateTwoPlayers = require('../updateTwoPlayers');
const showCurrentStats = require('../servantFight/showCurrentStats');
const abilityCheck = require('../abilityCheck');
const prefix = auth.prefix;


const fight = async (message, battlefield, first, second, firstPlayer, secondPlayer) => {
    //battle start
    message.channel.send(`${(message.guild.members.cache.get(firstPlayer.playerID.toString())).user}'s turn`)
    message.channel.send(`Turn ${Math.floor(battlefield.turn)}`)
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
        .setDescription(`Your orders master? (60 seconds)`)
        .addField('1.', 'Attack', true)
        .addField('2.', 'Use Spell', true)
        .addField('3.', 'Use Item', true)
        .addField('4.', 'Use Noble Phantasm', true)
        .addField('5.', 'Reveal enemy True Name', true)
        .addField('6.', 'Use Command Seal', true)
        .addField('7.', 'Show status', true)
        .setFooter('f/(1-6) to choose')

    message.channel.send(exampleEmbed)


    const filter = m => m.content.startsWith(prefix) && m.author.id === firstPlayer.playerID
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
                            let dmg = second.takeAttackDammage([first.inflictDammage, message, false])
                            message.channel.send(`Dealt ${dmg} damage`)
                            if (first.passive[0] == "Sadist") {
                                first.buffStrength(dmg * 0.15)
                            }
                            collector1.stop('attack')
                            break;
                        } else {
                            // confusion triggers servant hits themselves
                            let dmg = first.takeAttackDammage([first.inflictDammage, message, false])
                            message.channel.send(`Dealt ${dmg} damage`)
                            message.channel.send(`${firstName} got hurt in their confusion!`)
                            collector1.stop('attack')
                            break;
                        }

                    } else {
                        let dmg = second.takeAttackDammage([first.inflictDammage, message, false])
                        message.channel.send(`Dealt ${dmg} damage`)
                        if (first.passive[0] == "Sadist") {
                            first.buffStrength(dmg * 0.15)
                        }
                        collector1.stop('attack')
                        break;
                    }
                }



            case '2':
                //spell
                if (firstPlayer.spells.length != 0) {
                    collector1.stop('spell')
                    let allSpells = ""

                    if (firstPlayer.spells.length >= 11) {
                        firstPlayer.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                            if (i % 10 === 0 && i !== 0) {
                                let exampleEmbed = new MessageEmbed()
                                    .setColor('#800b03')
                                    .setTitle(`Choose spell to cast ${firstPlayer.currentMana}/${firstPlayer.maxMana}MP (30 seconds)`)
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
                                .setTitle(`Choose spell to cast ${firstPlayer.currentMana}/${firstPlayer.maxMana}MP (30 seconds)`)
                                .setDescription(allSpells)
                                .setFooter('f/number to cast; f/back to go back')
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        firstPlayer.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name}** (mana cost: ${element.manaNeeded} Mp) \n`
                            i++
                        });

                        let exampleEmbed = new MessageEmbed()
                            .setColor('#800b03')
                            .setTitle(`Choose spell to cast ${firstPlayer.currentMana}/${firstPlayer.maxMana}MP (30 seconds)`)
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
                        } else if (input && parseInt(input) >= 0 && parseInt(input) < firstPlayer.spells.length) {
                            input = Math.floor(input)
                            spellData = await castSpell(message, input, firstPlayer)
                            // console.log(spellData)
                            if (spellData === 0) {
                                message.channel.send(`Not enough mana! **${firstPlayer.currentMana}**MP left.`)
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
                            collector2.stop()
                        } else {
                            spellData = ""
                            message.channel.send('Wrong number.')
                        }


                        

                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                        } else {
                            await statusCheck(message, first, firstName, second, battlefield)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                            } else {
                                if(battlefield.rewind === true){
                                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                } else {
                                    message.channel.send("Match over!")
                                    await renderBattle(message, first, second, battlefield.background)
                                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                }
                                
                            }
                        }

                    })

                } else {
                    message.channel.send("You don't know any spells.")
                }
                break;


            case '3':
                //item

                if (firstPlayer.inventory.length != 0) {
                    let useableItems = ""
                    let canBeSelected = []

                    firstPlayer.inventory.forEach((element, i = 0) => {
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
                                    useItem(first, second, firstPlayer, message, input)
                                    collector2.stop()
                                } else {
                                    message.channel.send("Wrong Item!")
                                }
                            }


                        })

                        collector2.on('end', async (collected, reason) => {
                            if (reason && reason === 'back') {
                                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                            } else {
                                await statusCheck(message, first, firstName, second, battlefield)
                                if (first.currentHp > 0 && second.currentHp > 0) {
                                    secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                                } else {
                                    if(battlefield.rewind === true){
                                        fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                    } else{
                                        message.channel.send("Match over!")
                                        await renderBattle(message, first, second, battlefield.background)
                                        await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                    }
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
                if (first.status.npSeal.active === true && first.passive[0] != "Right-sider") {
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

                    const filter = m => m.content.startsWith(prefix) && m.author.id === firstPlayer.playerID
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {
                        const guess = message.content.slice(prefix.length).trim().split(/ +/g)
                        const input = guess.join(" ");
                        // console.log(input);
                        // console.log(second.name[0]);
                        if ((second.name.includes(input.toLowerCase()) && second.passive[0] != "Information Erasure") || first.class === "Ruler") {
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
                        await statusCheck(message, first, firstName, second, battlefield)
                        if (first.currentHp > 0 && second.currentHp > 0) {
                            secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                        } else {
                            if(battlefield.rewind === true){
                                fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                            } else{
                                message.channel.send("Match over!")
                                await renderBattle(message, first, second, battlefield.background)
                                await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                            }
                        }
                    })

                }

                break;

            case '6':
                // seal

                if (firstPlayer.commandsLeft <= 0) {
                    message.channel.send("You don't have any command seals left.")
                } else {
                    collector1.stop('seal')

                    const exampleEmbed2 = new MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor(`${firstName}`, `${first.pictures[0]}`)
                        .setDescription(`Yes master? (comand seals left: ${firstPlayer.commandsLeft}) (30 seconds)`)
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
                        switch (input) {
                            case '1':
                                first.stats.strength += first.stats.strength / 2
                                first.stats.magic += first.stats.magic / 2
                                firstPlayer.commandsLeft -= 1
                                numberOfUses = firstPlayer.commandsLeft
                                commandSeals = firstPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '2':
                                first.currentHp = first.maxHp
                                firstPlayer.commandsLeft -= 1
                                numberOfUses = firstPlayer.commandsLeft
                                commandSeals = firstPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '3':
                                first.noblePhantasm.canBeUsed = true
                                first.charge = 7
                                firstPlayer.commandsLeft -= 1
                                numberOfUses = firstPlayer.commandsLeft
                                commandSeals = firstPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;
                            case '4':
                                firstPlayer.commandsLeft -= 1
                                numberOfUses = firstPlayer.commandsLeft
                                commandSeals = firstPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                if (second.passive[0] === "Ath nGabla"){
                                    message.channel.send("Can not escape")
                                } else{
                                    collector2.stop('escape')
                                }
                                break;
                            case 'back':
                                collector2.stop('back')
                                break;
                        }
                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                        } else if (reason && reason === 'escape') {
                            message.channel.send(`${firstName} and his master have fled from the battle.`)
                            await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, true)
                        } else {
                            await statusCheck(message, first, firstName, second, battlefield)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                            } else {
                                if(battlefield.rewind === true){
                                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                } else{
                                    message.channel.send("Match over!")
                                    await renderBattle(message, first, second, battlefield.background)
                                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                }   
                            }
                        }

                    })
                }
                break;
            case '7':
                showCurrentStats(first, message)
                break;


        }

    })

    collector1.on('end', async (collected, reason) => {
        if (reason && reason === 'attack') {
            await statusCheck(message, first, firstName, second, battlefield)
            if (first.currentHp > 0 && second.currentHp > 0) {
                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else{
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                }
            }

        } else if (reason && reason === 'spell') {
            // do nothing

        } else if (reason && reason === 'item') {
            // do nothing

        } else if (reason && reason === 'np') {
            await np(first, second, battlefield, message)
            await statusCheck(message, first, firstName, second, battlefield)
            if (first.currentHp > 0 && second.currentHp > 0) {
                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else{
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                } 
            }

        } else if (reason && reason === 'name') {
            // do nothing

        } else if (reason && reason === 'seal') {
            // do nothing

        } else {
            message.channel.send('Time out! Next player turn')
            await statusCheck(message, first, firstName, second, battlefield)
            first.missedTurns += 1
            if (first.currentHp > 0 && second.currentHp > 0) {
                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else{
                    message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                }  
            }
        }

    })


}







const secondTurn = async (message, battlefield, second, first, firstPlayer, secondPlayer) => {
    message.channel.send(`${(message.guild.members.cache.get(secondPlayer.playerID.toString())).user}'s turn`)
    message.channel.send(`Turn ${Math.floor(battlefield.turn)}`)
    await renderBattle(message, first, second, battlefield.background)
    // message.channel.send(`${battlefield.servant1.name[0]} hp: ${battlefield.servant1.currentHp}/${battlefield.servant1.maxHp}\nStats:${battlefield.servant1.stats}\nStatus:${battlefield.servant1.status}\ntakenDMG:${battlefield.servant1.takenDmg}`)
    // message.channel.send(`${battlefield.servant2.name[0]} hp: ${battlefield.servant2.currentHp}/${battlefield.servant2.maxHp}\nStats:${battlefield.servant2.stats}\nStatus:${battlefield.servant2.status}\ntakenDMG:${battlefield.servant2.takenDmg}`)

    let secondName = ''
    if (second.revealed) {
        secondName = second.name[0]
    } else {
        secondName = second.class
    }
    const exampleEmbed = new MessageEmbed()
        .setColor('#800b03')
        .setAuthor(`${secondName}`, `${second.pictures[0]}`)
        .setDescription(`Your orders master? (60 seconds)`)
        .addField('1.', 'Attack', true)
        .addField('2.', 'Use Spell', true)
        .addField('3.', 'Use Item', true)
        .addField('4.', 'Use Noble Phantasm', true)
        .addField('5.', 'Reveal enemy True Name', true)
        .addField('6.', 'Use Command Seal', true)
        .addField('7.', 'Show status', true)
        .setFooter('f/(1-6) to choose')

    message.channel.send(exampleEmbed)


    const filter = m => m.content.startsWith(prefix) && m.author.id === secondPlayer.playerID
    const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
    collector1.on('collect', async message => {

        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        switch (input) {
            case '1':
                //attack
                if (second.status.stun.active === true) {
                    message.channel.send(`${secondName} is stunned they can not move!`)
                    collector1.stop('attack')
                    break;
                } else {
                    if (second.status.confusion.active === true) {
                        let confuse = Math.floor(Math.random() * 2);
                        if (confuse === 0) {
                            let dmg = first.takeAttackDammage([second.inflictDammage, message, false])
                            message.channel.send(`Dealt ${dmg} damage`)
                            if (second.passive[0] == "Sadist") {
                                second.buffStrength(dmg * 0.15)
                            }
                            collector1.stop('attack')
                            break;
                        } else {
                            // confusion triggers servant hits themselves
                            let dmg = second.takeAttackDammage([second.inflictDammage, message, false])
                            message.channel.send(`Dealt ${dmg} damage`)
                            collector1.stop('attack')
                            message.channel.send(`${secondName} got hurt in their confusion!`)
                            break;
                        }
                    } else {
                        let dmg = first.takeAttackDammage([second.inflictDammage, message, false])
                        message.channel.send(`Dealt ${dmg} damage`)
                        if (second.passive[0] == "Sadist") {
                            second.buffStrength(dmg * 0.15)
                        }
                        collector1.stop('attack')
                        break;
                    }
                }


            case '2':
                //spell

                if (secondPlayer.spells.length != 0) {
                    collector1.stop('spell')
                    let allSpells = ""

                    if (secondPlayer.spells.length >= 11) {
                        secondPlayer.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                            if (i % 10 === 0 && i !== 0) {
                                let exampleEmbed = new MessageEmbed()
                                    .setColor('#800b03')
                                    .setTitle(`Choose spell to cast ${secondPlayer.currentMana}/${secondPlayer.maxMana}MP (30 seconds)`)
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
                                .setTitle(`Choose spell to cast ${secondPlayer.currentMana}/${secondPlayer.maxMana}MP (30 seconds)`)
                                .setDescription(allSpells)
                                .setFooter('f/number to cast; f/back to go back')
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        secondPlayer.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name}** (mana cost: ${element.manaNeeded} Mp) \n`
                            i++
                        });

                        let exampleEmbed = new MessageEmbed()
                            .setColor('#800b03')
                            .setTitle(`Choose spell to cast ${secondPlayer.currentMana}/${secondPlayer.maxMana}MP (30 seconds)`)
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
                        } else if (input && parseInt(input) >= 0 && parseInt(input) < secondPlayer.spells.length) {
                            
                            input = Math.floor(input)
                            spellData = await castSpell(message, input, secondPlayer)
                            // console.log(spellData)
                            if (spellData === 0) {
                                message.channel.send(`Not enough mana! **${secondPlayer.currentMana}**MP left.`)
                            } else {
                                if (spellData.target === "self") {
                                    second.takeSpellEffect = spellData
                                } else if (spellData.target === "enemy") {
                                    first.takeSpellEffect = spellData
                                }
                                switch (spellData.spellType) {
                                    case 'buffStrength':
                                        message.channel.send(`${secondName}'s strength rose`)
                                        break;
                                    case 'buffDefence':
                                        message.channel.send(`${secondName}'s defence rose`)
                                        break;
                                    case 'buffAgility':
                                        message.channel.send(`${secondName}'s agility rose`)
                                        break;
                                    case 'buffMagic':
                                        message.channel.send(`${secondName}'s magic rose`)
                                        break;
                                    case 'buffLuck':
                                        message.channel.send(`${secondName}'s luck rose`)
                                        break;
                                    case 'debuffStrength':
                                        message.channel.send(`${firstName}'s strength fell`)
                                        break;
                                    case 'debuffDefence':
                                        message.channel.send(`${firstName}'s defence fell`)
                                        break;
                                    case 'debuffAgility':
                                        message.channel.send(`${firstName}'s agility fell`)
                                        break;
                                    case 'debuffMagic':
                                        message.channel.send(`${firstName}'s magic fell`)
                                        break;
                                    case 'debuffLuck':
                                        message.channel.send(`${firstName}'s luck fell`)
                                        break;
                                }


                            }
                            collector2.stop()
                        } else {
                            spellData = ""
                            message.channel.send('Wrong number.')
                        }


                        

                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                        } else {
                            await statusCheck(message, second, secondName, first, battlefield)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                            } else {
                                if(battlefield.rewind === true){
                                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                } else {
                                    message.channel.send("Match over!")
                                await renderBattle(message, first, second, battlefield.background)
                                await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                } 
                            }
                        }

                    })

                } else {
                    message.channel.send("You don't know any spells.")
                }
                break;

            case '3':
                //item

                if (secondPlayer.inventory.length != 0) {
                    let useableItems = ""
                    let canBeSelected = []

                    secondPlayer.inventory.forEach((element, i = 0) => {
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
                                    useItem(second, first, secondPlayer, message, input)
                                    collector2.stop()
                                } else {
                                    message.channel.send("Wrong Item!")
                                }
                            }


                        })

                        collector2.on('end', async (collected, reason) => {
                            if (reason && reason === 'back') {
                                secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                            } else {
                                await statusCheck(message, second, secondName, first, battlefield)
                                if (first.currentHp > 0 && second.currentHp > 0) {
                                    fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                                } else {
                                    if(battlefield.rewind === true){
                                        fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                    } else{
                                        message.channel.send("Match over!")
                                        await renderBattle(message, first, second, battlefield.background)
                                        await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                    }
                                    
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
                if (second.status.npSeal.active === true && second.passive[0] != "Right-sider") {
                    message.channel.send(`${secondName} can't use their Noble Phantasm due to the NP Seal!`)
                    break;
                } else if (second.charge < 7) {
                    message.channel.send(`${secondName} Noble Phantasm is not fully charged yet.`)
                    break;
                } else {
                    collector1.stop('np')
                    break;

                }

            case '5':
                // name
                if (first.revealed) {
                    message.channel.send(`You already know ${first.class}'s true name.`)

                } else {
                    collector1.stop('name')
                    message.channel.send('type f/ + enemy name (30 seconds)');

                    const filter = m => m.content.startsWith(prefix) && m.author.id === secondPlayer.playerID
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {
                        const guess = message.content.slice(prefix.length).trim().split(/ +/g)
                        const input = guess.join(" ");
                        // console.log(input);
                        // console.log(first.name[0]);
                        if ((first.name.includes(input.toLowerCase()) && first.passive[0] != "Information Erasure") || second.class === "Ruler") {
                            first.stats.strength = first.stats.strength / 2
                            first.stats.magic = first.stats.magic / 2
                            first.revealed = true
                            if (second.class === "Ruler") {
                                message.channel.send(`${first.class}'s True Name was revelated, their strength and magic stats fell significantly...`)
                            } else {
                                message.channel.send(`That's right, it's ${input}!\n${input}'s strength and magic stats fell significantly...`)
                            }
                        } else {
                            message.channel.send('Wrong! You lose your turn.')
                        }
                        collector2.stop()
                    })

                    collector2.on('end', async () => {
                        await statusCheck(message, second, secondName, first, battlefield)
                        if (first.currentHp > 0 && second.currentHp > 0) {
                            fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                        } else {
                            if(battlefield.rewind === true){
                                fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                            } else{
                                message.channel.send("Match over!")
                                await renderBattle(message, first, second, battlefield.background)
                                await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                            }
                           
                        }
                    })

                }

                break;

            case '6':
                // seal


                if (secondPlayer.commandsLeft <= 0) {
                    message.channel.send("You don't have any command seals left.")
                } else {
                    collector1.stop('seal')

                    const exampleEmbed2 = new MessageEmbed()
                        .setColor('#800b03')
                        .setAuthor(`${secondName}`, `${second.pictures[0]}`)
                        .setDescription(`Yes master? (comand seals left: ${secondPlayer.commandsLeft}) (30 seconds)`)
                        .addField('1.', `Fight with everything you've got ${second.class}! (strength and magic + 50%)`, true)
                        .addField('2.', `Stand up ${second.class}! We haven't lost just yet. (fully restore hp)`, true)
                        .addField('3.', `${second.class}, gather the mana to use your Noble Phantasm! (NP can be used in the next turn.)`, true)
                        .addField('4.', `${second.class}, I order you with a Command Seal, retreat at once! (Flee from the battle.)`, true)
                        .setFooter('f/(1-4) to choose; f/back to go back')
                    message.channel.send(exampleEmbed2)


                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                    const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                    collector2.on('collect', async message => {

                        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                        switch (input) {
                            case '1':
                                second.stats.strength += second.stats.strength / 2
                                second.stats.magic += second.stats.magic / 2
                                secondPlayer.commandsLeft -= 1
                                numberOfUses = secondPlayer.commandsLeft
                                commandSeals = secondPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '2':
                                second.currentHp = second.maxHp
                                secondPlayer.commandsLeft -= 1
                                numberOfUses = secondPlayer.commandsLeft
                                commandSeals = secondPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;

                            case '3':
                                second.noblePhantasm.canBeUsed = true
                                second.charge = 7
                                secondPlayer.commandsLeft -= 1
                                numberOfUses = secondPlayer.commandsLeft
                                commandSeals = secondPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                collector2.stop()
                                break;
                            case '4':
                                secondPlayer.commandsLeft -= 1
                                numberOfUses = secondPlayer.commandsLeft
                                commandSeals = secondPlayer.commandId
                                attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                await message.channel.send(attachment)
                                if (first.passive[0] === "Ath nGabla") {
                                    message.channel.send("Can not escape")
                                } else {
                                    collector2.stop('escape')
                                }
                                break;
                            case 'back':
                                collector2.stop('back')
                                break;
                        }
                    })

                    collector2.on('end', async (collected, reason) => {
                        if (reason && reason === 'back') {
                            secondTurn(message, battlefield, second, first, firstPlayer, secondPlayer)
                        } else if (reason && reason === 'escape') {
                            message.channel.send(`${secondName} and his master have fled from the battle.`)
                            await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, true)
                        } else {
                            await statusCheck(message, second, secondName, first, battlefield)
                            if (first.currentHp > 0 && second.currentHp > 0) {
                                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
                            } else {
                                if(battlefield.rewind === true){
                                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                } else{
                                    message.channel.send("Match over!")
                                    await renderBattle(message, first, second, battlefield.background)
                                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                                }
                                
                            }
                        }

                    })
                }
                break;
            case '7':
                showCurrentStats(second, message)
                break;

        }

    })

    collector1.on('end', async (collected, reason) => {
        if (reason && reason === 'attack') {
            await statusCheck(message, second, secondName, first, battlefield)
            if (first.currentHp > 0 && second.currentHp > 0) {
                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else {
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                }
               
            }

        } else if (reason && reason === 'spell') {
            // do nothing

        } else if (reason && reason === 'item') {
            // do nothing

        } else if (reason && reason === 'np') {
            await np(second, first, battlefield, message)
            await statusCheck(message, second, secondName, first, battlefield)
            if (first.currentHp > 0 && second.currentHp > 0) {
                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else {
                    message.channel.send("Match over!")
                await renderBattle(message, first, second, battlefield.background)
                await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                }
                
            }

        } else if (reason && reason === 'name') {
            // do nothing

        } else if (reason && reason === 'seal') {
            // do nothing

        } else {
            message.channel.send('Time out! Next player turn')
            await statusCheck(message, second, secondName, first, battlefield)
            second.missedTurns += 1
            if (first.currentHp > 0 && second.currentHp > 0) {
                fight(message, battlefield, first, second, firstPlayer, secondPlayer)
            } else {
                if(battlefield.rewind === true){
                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                } else{
                    message.channel.send("Match over!")
                    await renderBattle(message, first, second, battlefield.background)
                    await updateTwoPlayers(message, firstPlayer, secondPlayer, first, second, false)
                }
               
            }
        }

    })

}



const battle = async (message)=>{

    // choose your opponent
    message.channel.send('type "f/ + mention user" to choose your opponent\n```Remember that if your servant HP reaches 0 they will die! (You can always use a command seal to escape.)```')
    const filter0 = m => m.content.startsWith(prefix) && m.author.id === message.author.id
    const collector0 = new MessageCollector(message.channel, filter0, { time: 60000 });
    collector0.on('collect', async message => {
        collector0.stop()
        if (typeof message.mentions.users.first() != "undefined") {
            const challenger = message.author
            const opponent = message.mentions.users.first()
            message.channel.send(`${opponent} you got challenged by ${challenger} (f/y - to accept f/n - to decline.)`)

            const filter = m => m.content.startsWith(prefix) && m.author.id === opponent.id
            const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
            collector1.on('collect', async message => {

                let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                switch (input) {
                    case 'y':
                        collector1.stop()
                        message.channel.send(`${challenger} VS ${opponent}`)
                        
                        Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                const p1 = await server.players.find(player => player.playerID == challenger.id)
                                const p2 = await server.players.find(player => player.playerID == opponent.id)
                                if (p2 && p2.servants.length !== 0) {
                                    await blockAction(message, challenger.id, opponent.id)
                                    // initialize 
                                    const bcg = Math.floor(Math.random() * backgrounds.length)
                                    let battlefield = {
                                        player1: {},
                                        servant1: {},
                                        player2: {},
                                        servant2: {},
                                        turn: 1,
                                        background: backgrounds[bcg],
                                        rewind: false
                                    }
                                    battlefield.player1 = p1// must be the first one
                                    battlefield.player2 = p2
                                    battlefield.servant1 = new BattleUnit(p1.servants[0])
                                    battlefield.servant2 = new BattleUnit(p2.servants[0])

                                    // add stats together
                                    battlefield.servant1.stats.strength += battlefield.player1.stats.strength
                                    battlefield.servant1.stats.endurance += battlefield.player1.stats.endurance
                                    battlefield.servant1.currentHp += battlefield.player1.stats.endurance * 10
                                    battlefield.servant1.maxHp += battlefield.player1.stats.endurance * 10
                                    battlefield.servant1.stats.agility += battlefield.player1.stats.agility
                                    battlefield.servant1.stats.magic += battlefield.player1.stats.magic
                                    battlefield.servant1.stats.luck += battlefield.player1.stats.luck

                                    battlefield.servant2.stats.strength += battlefield.player2.stats.strength
                                    battlefield.servant2.stats.endurance += battlefield.player2.stats.endurance
                                    battlefield.servant2.currentHp += battlefield.player2.stats.endurance * 10
                                    battlefield.servant2.maxHp += battlefield.player2.stats.endurance * 10
                                    battlefield.servant2.stats.agility += battlefield.player2.stats.agility
                                    battlefield.servant2.stats.magic += battlefield.player2.stats.magic
                                    battlefield.servant2.stats.luck += battlefield.player2.stats.luck


                                    battlefield.servant1.baseStats = { ...battlefield.servant1.stats }
                                    battlefield.servant2.baseStats = { ...battlefield.servant2.stats }
                                    battlefield.servant1.lastTurnStats = { ...battlefield.servant1.stats }
                                    battlefield.servant2.lastTurnStats = { ...battlefield.servant2.stats }

                                    let first = ''
                                    let second = ''
                                    let firstPlayer = ''
                                    let secondPlayer = ''

                                    //abilityCheck
                                    [battlefield.servant1, battlefield.servant2] = await abilityCheck(battlefield.servant1, battlefield.servant2, message)

                                    if (battlefield.servant1.stats.agility > battlefield.servant2.stats.agility && !(battlefield.servant1.passive[0] == "Aesthetics of the Last Spurt" || battlefield.servant2.passive[0] == "Shukuchi")) {
                                        first = battlefield.servant1
                                        second = battlefield.servant2
                                        firstPlayer = battlefield.player1
                                        secondPlayer = battlefield.player2
                                    } else if (battlefield.servant2.passive[0] == "Aesthetics of the Last Spurt"){
                                        first = battlefield.servant1
                                        second = battlefield.servant2
                                        firstPlayer = battlefield.player1
                                        secondPlayer = battlefield.player2
                                    } else if (battlefield.servant1.passive[0] == "Shukuchi") {
                                        first = battlefield.servant1
                                        second = battlefield.servant2
                                        firstPlayer = battlefield.player1
                                        secondPlayer = battlefield.player2
                                    }else {
                                        first = battlefield.servant2
                                        second = battlefield.servant1
                                        firstPlayer = battlefield.player2
                                        secondPlayer = battlefield.player1
                                    }

                                    // console.log('pvp start!')

                                    // console.log(battlefield.servant1)
                                    // console.log(battlefield.servant2)
                                    const ogMessage = message
                                    const ogBattlefield = battlefield
                                    const ogFirst = first
                                    const ogSecond = second
                                    const ogFirstPlayer = firstPlayer
                                    const ogSecondPlayer = secondPlayer
                                    fight(ogMessage, ogBattlefield, ogFirst, ogSecond, ogFirstPlayer, ogSecondPlayer)
                                } else if (p2 && p2.servants.length === 0) {
                                    message.channel.send(`${opponent} doesn't have any servants.`)
                                } else {
                                    message.channel.send(`${opponent} must register first.`)
                                }

                            }
                        })
                        break;
                    case 'n':
                        collector1.stop()
                        message.channel.send(`${challenger} your challenge was declined by ${opponent}.`)
                        break;
                }
            })

        } else {
            message.channel.send("You need to mention somebody...")
        }
    })

}

module.exports = battle;