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
const showCurrentStats = require('./showCurrentStats');
// const servantTurn = require('./servantTurn');
const prefix = auth.prefix;

class ServantFight{

    constructor(message, level, player, bcg){
        this.message = message
        this.battlefield = {
            player1: player,
            servant1: new BattleUnit(player.servants[0]),
            servant2: new BattleUnit(charactersList[Math.floor(Math.random() * charactersList.length)]),
            turn: 0,
            background: backgrounds[bcg],
            servant1basestats: {},
            servant2basestats: {}
        }

        this.battlefield.servant1.stats.strength += this.battlefield.player1.stats.strength
        this.battlefield.servant1.stats.endurance += this.battlefield.player1.stats.endurance
        this.battlefield.servant1.currentHp += this.battlefield.player1.stats.endurance * 10
        this.battlefield.servant1.maxHp += this.battlefield.player1.stats.endurance * 10
        this.battlefield.servant1.stats.agility += this.battlefield.player1.stats.agility
        this.battlefield.servant1.stats.magic += this.battlefield.player1.stats.magic
        this.battlefield.servant1.stats.luck += this.battlefield.player1.stats.luck

        this.battlefield.servant2.level = level
        this.battlefield.servant2.stats.strength += level * 2
        this.battlefield.servant2.stats.endurance += level * 2
        this.battlefield.servant2.currentHp += level * 20
        this.battlefield.servant2.maxHp += level * 20
        this.battlefield.servant2.stats.agility += level * 2
        this.battlefield.servant2.stats.magic += level * 2
        this.battlefield.servant2.stats.luck += level * 2



        this.battlefield.servant1basestats = { ...this.battlefield.servant1.stats }
        this.battlefield.servant2basestats = { ...this.battlefield.servant2.stats }

        this.first = ''
        this.second = ''
    }

    async start(){
        // console.log('battle start!')
        this.message.channel.send('If you finished the fight or bot stopped responding during a fight and you can not perform any action(f/a), please use **f/iamnotfighting** command')
        if (this.battlefield.servant1.stats.agility > this.battlefield.servant2.stats.agility) {
            this.first = this.battlefield.servant1
            this.second = this.battlefield.servant2
            this.playerTurn()
        } else {
            this.first = this.battlefield.servant1
            this.second = this.battlefield.servant2
            this.servantTurn()
        }
    }

    async playerTurn(){
        await renderBattle(this.message, this.first, this.second, this.battlefield.background)

        let firstName = ''
        if (this.first.revealed) {
            firstName = this.first.name[0]
        } else {
            firstName = this.first.class
        }

        let secondName = ''
        if (this.second.revealed) {
            secondName = this.second.name[0]
        } else {
            secondName = this.second.class
        }
        const exampleEmbed = new MessageEmbed()
            .setColor('#800b03')
            .setAuthor(`${firstName}`, `${this.first.pictures[0]}`)
            .setDescription('Your orders master? (60 seconds)')
            .addField('1.', 'Attack', true)
            .addField('2.', 'Use Spell', true)
            .addField('3.', 'Use Item', true)
            .addField('4.', 'Use Noble Phantasm', true)
            .addField('5.', 'Reveal enemy True Name', true)
            .addField('6.', 'Use Command Seal', true)
            .addField('7.', 'Quit (Die)', true)
            .addField('8.', 'Show status', true)
            .setFooter('f/(1-8) to choose')

        await this.message.channel.send(exampleEmbed)


        const filter = m => m.content.startsWith(prefix) && m.author.id === this.message.author.id
        const collector1 = new MessageCollector(this.message.channel, filter, { time: 60000 });
        collector1.on('collect', async message => {

            const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
            switch (input) {
                case '1':
                    //attack
                    //if stunned
                    if (this.first.status.stun.active === true) {
                        message.channel.send(`${firstName} is stunned they can not move!`)
                        collector1.stop('attack')
                        break;
                    } else {
                        // if confused
                        if (this.first.status.confusion.active === true) {
                            let confuse = Math.floor(Math.random() * 2);
                            if (confuse === 0) {
                                this.second.takeAttackDammage = [this.first.inflictDammage, message, false]
                                collector1.stop('attack')
                                break;
                            } else {
                                // confusion triggers servant hits themselves
                                this.first.takeAttackDammage = [this.first.inflictDammage, message, false]
                                message.channel.send(`${firstName} got hurt in their confusion!`)
                                collector1.stop('attack')
                                break;
                            }

                        } else {
                            this.second.takeAttackDammage = [this.first.inflictDammage, message, false]
                            collector1.stop('attack')
                            break;
                        }
                    }



                case '2':
                    //spell
                    if (this.battlefield.player1.spells.length !== 0) {
                        collector1.stop('spell')
                        let allSpells = ""

                        if (this.battlefield.player1.spells.length >= 11) {
                            this.battlefield.player1.spells.forEach((element, i = 0) => {
                                allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                                if (i % 10 === 0 && i !== 0) {
                                    let exampleEmbed = new MessageEmbed()
                                        .setColor('#800b03')
                                        .setTitle(`Choose spell to cast ${this.battlefield.player1.currentMana}/${this.battlefield.player1.maxMana}MP (30 seconds)`)
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
                                    .setTitle(`Choose spell to cast ${this.battlefield.player1.currentMana}/${this.battlefield.player1.maxMana}MP (30 seconds)`)
                                    .setDescription(allSpells)
                                    .setFooter('f/number to cast; f/back to go back')
                                message.channel.send(exampleEmbed);
                            }
                        } else {
                            this.battlefield.player1.spells.forEach((element, i = 0) => {
                                allSpells += `${i}. **${element.name}** (mana cost: ${element.manaNeeded} Mp) \n`
                                i++
                            });

                            let exampleEmbed = new MessageEmbed()
                                .setColor('#800b03')
                                .setTitle(`Choose spell to cast ${this.battlefield.player1.currentMana}/${this.battlefield.player1.maxMana}MP (30 seconds)`)
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
                            } else if (input && parseInt(input) >= 0 && parseInt(input) < this.battlefield.player1.spells.length) {
                                input = Math.floor(input)
                                spellData = await castSpell(message, input, this.battlefield.player1)
                                // console.log(spellData)
                                if (spellData === 0) {
                                    message.channel.send(`Not enough mana! **${this.battlefield.player1.currentMana}**MP left.`)
                                } else {

                                    if (spellData.target === "self") {
                                        this.first.takeSpellEffect = spellData
                                    } else if (spellData.target === "enemy") {
                                        this.second.takeSpellEffect = spellData
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
                                this.playerTurn()
                            } else {
                                await statusCheck(message, this.first, firstName, this.second)
                                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                                    setTimeout(() => { this.servantTurn() }, 1000)
                                } else {
                                    message.channel.send("Match over!")
                                    await renderBattle(message, this.first, this.second, this.battlefield.background)
                                    await updatePlayer(message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                                }
                            }

                        })

                    } else {
                        message.channel.send("You don't know any spells.")
                    }
                    break;

                case '3':
                    //item

                    if (this.battlefield.player1.inventory.length != 0) {
                        let useableItems = ""
                        let canBeSelected = []

                        this.battlefield.player1.inventory.forEach((element, i = 0) => {
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
                                        useItem(this.first, this.second, this.battlefield.player1, message, input)
                                        collector2.stop()
                                    } else {
                                        message.channel.send("Wrong Item!")
                                    }
                                }


                            })

                            collector2.on('end', async (collected, reason) => {
                                if (reason && reason === 'back') {
                                    this.playerTurn()
                                } else {
                                    await statusCheck(message, this.first, firstName, this.second)
                                    if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                                        setTimeout(() => { this.servantTurn() }, 1000)
                                    } else {
                                        message.channel.send("Match over!")
                                        await renderBattle(message, this.first, this.second, this.battlefield.background)
                                        await updatePlayer(message, this.battlefield.player1, this.first, this.second, false, 2, 3)
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
                    if (this.first.status.npSeal.active === true) {
                        message.channel.send(`${firstName} can't use their Noble Phantasm due to the NP Seal!`)
                        break;
                    } else if (this.first.charge < 7) {
                        message.channel.send(`${firstName} Noble Phantasm is not fully charged yet.`)
                        break;

                    } else {
                        collector1.stop('np')
                        break;
                    }


                case '5':
                    // name
                    if (this.second.revealed) {
                        message.channel.send(`You already know ${this.second.class}'s true name.`)

                    } else {
                        collector1.stop('name')
                        message.channel.send('type f/ + enemy name (30 seconds)');

                        const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                        const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                        collector2.on('collect', async message => {
                            const guess = message.content.slice(prefix.length).trim().split(/ +/g)
                            const input = guess.join(" ");
                            if (this.second.name.includes(input.toLowerCase()) || this.first.class === "Ruler") {
                                this.second.stats.strength = this.second.stats.strength / 2
                                this.second.stats.magic = this.second.stats.magic / 2
                                this.second.revealed = true

                                if (this.first.class === "Ruler") {
                                    message.channel.send(`${this.second.class}'s True Name was revelated, their strength and magic stats fell significantly...`)
                                } else {
                                    message.channel.send(`That's right, it's ${input}!\n${input}'s strength and magic stats fell significantly...`)
                                }
                            } else {
                                message.channel.send('Wrong! You lose your turn.')
                            }
                            collector2.stop()
                        })

                        collector2.on('end', async () => {
                            await statusCheck(message, this.first, firstName, this.second)
                            if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                                setTimeout(() => { this.servantTurn() }, 1000)
                            } else {
                                message.channel.send("Match over!")
                                await renderBattle(message, this.first, this.second, this.battlefield.background)
                                await updatePlayer(message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                            }
                        })

                    }

                    break;

                case '6':
                    // seal
                    if (this.battlefield.player1.commandsLeft <= 0) {
                        message.channel.send("You don't have any command seals left.")
                    } else {
                        collector1.stop('seal')

                        const exampleEmbed2 = new MessageEmbed()
                            .setColor('#800b03')
                            .setAuthor(`${firstName}`, `${this.first.pictures[0]}`)
                            .setDescription(`Yes master? (command seals left: ${this.battlefield.player1.commandsLeft}) (30 seconds)`)
                            .addField('1.', `Fight with everything you've got ${this.first.class}! (strength and magic + 50%)`, true)
                            .addField('2.', `Stand up ${this.first.class}! We haven't lost just yet. (fully restore hp)`, true)
                            .addField('3.', `${this.first.class}, gather the mana to use your Noble Phantasm! (NP can be used in the next turn.)`, true)
                            .addField('4.', `${this.first.class}, I order you with a Command Seal, retreat at once! (Flee from the battle.)`, true)
                            .setFooter('f/(1-4) to choose; f/back to go back')
                        message.channel.send(exampleEmbed2)


                        const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                        const collector2 = new MessageCollector(message.channel, filter, { time: 30000 });
                        collector2.on('collect', async message => {

                            const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                            let attachment = ''
                            let numberOfUses = ''
                            let commandSeals = ''
                            switch (input) {
                                case '1':
                                    this.first.stats.strength += this.first.stats.strength / 2
                                    this.first.stats.magic += this.first.stats.magic / 2
                                    this.battlefield.player1.commandsLeft -= 1
                                    numberOfUses = this.battlefield.player1.commandsLeft
                                    commandSeals = this.battlefield.player1.commandId
                                    attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                    await message.channel.send(attachment)
                                    collector2.stop()
                                    break;

                                case '2':
                                    this.first.currentHp = this.first.maxHp
                                    this.battlefield.player1.commandsLeft -= 1
                                    numberOfUses = this.battlefield.player1.commandsLeft
                                    commandSeals = this.battlefield.player1.commandId
                                    attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                    await message.channel.send(attachment)
                                    collector2.stop()
                                    break;

                                case '3':
                                    this.first.noblePhantasm.canBeUsed = true
                                    this.first.charge = 7
                                    this.battlefield.player1.commandsLeft -= 1
                                    numberOfUses = this.battlefield.player1.commandsLeft
                                    commandSeals = this.battlefield.player1.commandId
                                    attachment = new MessageAttachment(`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`, `cs${commandSeals}_${numberOfUses}.png`);
                                    await message.channel.send(attachment)
                                    collector2.stop()
                                    break;
                                case '4':
                                    this.battlefield.player1.commandsLeft -= 1
                                    numberOfUses = this.battlefield.player1.commandsLeft
                                    commandSeals = this.battlefield.player1.commandId
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
                                this.playerTurn()
                            } else if (reason && reason === 'escape') {
                                message.channel.send(`${firstName} and his master have fled from the battle.`)
                                await updatePlayer(message, this.battlefield.player1, this.first, this.second, true, 2, 3)
                            } else {
                                await statusCheck(message, this.first, firstName, this.second)
                                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                                    setTimeout(() => { this.servantTurn() }, 1000)
                                } else {
                                    message.channel.send("Match over!")
                                    await renderBattle(message, this.first, this.second, this.battlefield.background)
                                    await updatePlayer(message, this.battlefield.player1, this.first, this.second, false, 2, 3)
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
                            this.first.currentHp = 0
                            collector1.stop('attack')
                        } else if(input3 == 'cancel'){
                            message.channel.send('Ok, please continue fighting.')
                        }
                    })
                    break;
                case '8':
                    showCurrentStats(this.first, message)
                    break;
            }

        })

        collector1.on('end', async (collected, reason) => {
            if (reason && reason === 'attack') {
                await statusCheck(this.message, this.first, firstName, this.second)
                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                    setTimeout(() => { this.servantTurn() }, 1000)
                } else {
                    this.message.channel.send("Match over!")
                    await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                    await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                }

            } else if (reason && reason === 'spell') {
                // do nothing

            } else if (reason && reason === 'item') {
                // do nothing

            } else if (reason && reason === 'np') {
                await np(this.first, this.second, this.battlefield, this.message)
                await statusCheck(this.message, this.first, firstName, this.second)
                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                    setTimeout(() => { this.servantTurn() }, 1000)
                } else {
                    this.message.channel.send("Match over!")
                    await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                    await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                }

            } else if (reason && reason === 'name') {
                // do nothing

            } else if (reason && reason === 'seal') {
                // do nothing

            } else {
                this.message.channel.send('Time out! Next player turn')
                await statusCheck(this.message, this.first, firstName, this.second)
                this.first.missedTurns += 1
                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                    setTimeout(() => { this.servantTurn() }, 1000)
                } else {
                    this.message.channel.send("Match over!")
                    await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                    await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                }
            }

        })


    }

    async servantTurn(){

        let secondName = ''
        if (this.second.revealed) {
            secondName = this.second.name[0]
        } else {
            secondName = this.second.class
        }

        //attack
        if (this.second.charge >= 7 && this.second.status.npSeal.active === false) {
            //use np
            await np(this.second, this.first, this.battlefield, this.message)
            await statusCheck(this.message, this.second, secondName, this.first)
            if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                setTimeout(() => { this.playerTurn() }, 1000)
            } else {
                this.message.channel.send("Match over!")
                await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
            }
        } else if (this.second.status.stun.active === true) {
            this.message.channel.send(`${secondName} is stunned they can not move!`)
            await statusCheck(this.message, this.second, secondName, this.first)
            setTimeout(() => { this.playerTurn() }, 1000)
        } else {
            if (this.second.status.confusion.active === true) {
                let confuse = Math.floor(Math.random() * 2);
                if (confuse === 0) {
                    this.message.channel.send('Enemy attacks!')
                    this.first.takeAttackDammage = [this.second.inflictDammage, this.message, false]
                    await statusCheck(this.message, this.second, secondName, this.first)                    
                    if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                        setTimeout(() => { this.playerTurn() }, 1000)
                    } else {
                        this.message.channel.send("Match over!")
                        await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                        await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                    }


                } else {
                    // confusion triggers servant hits themselves
                    this.message.channel.send('Enemy attacks!')
                    this.second.takeAttackDammage = [this.second.inflictDammage, this.message, false]
                    this.message.channel.send(`${secondName} got hurt in their confusion!`)
                    await statusCheck(this.message, this.second, secondName, this.first)
                    if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                        setTimeout(() => { this.playerTurn() }, 1000)
                    } else {
                        this.message.channel.send("Match over!")
                        await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                        await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                    }
                }
            } else {
                this.message.channel.send('Enemy attacks!')
                this.first.takeAttackDammage = [this.second.inflictDammage, this.message, false]
                await statusCheck(this.message, this.second, secondName, this.first)
                if (this.first.currentHp > 0 && this.second.currentHp > 0) {
                    setTimeout(() => { this.playerTurn() }, 1000)
                } else {
                    this.message.channel.send("Match over!")
                    await renderBattle(this.message, this.first, this.second, this.battlefield.background)
                    await updatePlayer(this.message, this.battlefield.player1, this.first, this.second, false, 2, 3)
                }
            }
        }
    }
}

const servantFight = (message) => {
    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
    const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
    message.channel.send('Type f/(number between 1-200) to choose the enemy level\n```Remember that if your servant HP reaches 0 they will die! (You can always use a command seal to escape.)```')
    collector1.on('collect', async message => {
        collector1.stop()
        let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        let level = parseInt(input, 10);
        if (level >= 1 && level <= 200) {
            level = Math.floor(level)
            await blockAction(message, message.author.id)
            Server.findOne({ serverID: message.guild.id }, async (err, server) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const user = await server.players[server.playersMap.get(message.author.id)]
                    const bcg = Math.floor(Math.random() * backgrounds.length)
                    let fight = new ServantFight(message, level, user, bcg)
                    fight.start()
                }
            })
        } else {
            message.channel.send('Wrong number.')
        }
    })
}



module.exports = servantFight;