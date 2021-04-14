const chancify = require('chancify');
const { MessageEmbed } = require('discord.js');

const np = async (servant, enemy, battlefield, message)=>{
    let transformServants = ["seto kaiba", "kira yoshikage", "dio brando", "kallen kozuki", "oda nobunaga", "asuka langley soryu", "ciel"]

    if (servant.name[0] === "heracles" || servant.name[0] === "c.c."){
        message.channel.send("Noble Phantasm effect activated!")
    } else if (servant.transformed === false || transformServants.includes(servant.name[0])){
        const embed = new MessageEmbed()
            .setAuthor(servant.class, servant.pictures[0])
            .setColor('#800b03')
            .setThumbnail(servant.pictures[1])
            .setTitle("**" + servant.noblePhantasm.name + "**")
            .setDescription(servant.noblePhantasm.text)
            .setImage(servant.noblePhantasm.image)
        await message.channel.send(embed);
    }
    
    let npEffectiveness = servant.stats.magic + (servant.noblePhantasm.power * servant.NPLevel)
    if(servant.class === "Caster"){
        npEffectiveness = 1.1 * npEffectiveness
    } else if (servant.class === "Alter Ego") {
        npEffectiveness = 1.05 * npEffectiveness
    }

    servant.noblePhantasm.canBeUsed = false
    servant.charge = 0

    //variables for switch
    let instaKill = ''
    let crit = ''
    let power = ''
    let debuffmagic = ''
    let heal = ''
    let debuffstrength = ''
    let debuffagility = ''
    let debuffluck = ''
    let secondNP = ''
    let secondNPImage = ''
    let msg = ''
    let drain = ''
    let critChance = ''


    switch(servant.id){
        case 0:// emiya
            battlefield.background = "ubw2.png"
            servant.stats.agility += (npEffectiveness)
            servant.stats.magic += npEffectiveness
            servant.damageBasedOnMagic = true
            message.channel.send(`${servant.class}'s agility rose\n${servant.class}'s magic rose\n${servant.class}' will deal magic based damage from now on`)
            break;
        case 1:// heracles
            servant.currentHp += (npEffectiveness) * 5
            servant.maxHp += (npEffectiveness) * 5

            servant.guts = true
            message.channel.send(`${servant.class}'s endurance slightly rose`)
            break;
        case 2://gilles de rais
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 3://medusa
            enemy.status.stun.active = true
            enemy.status.stun.duration += 3
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)
            message.channel.send(`${enemy.class} got stunned (2 turns)`)
            break;
        case 4://kojirou
            servant.stats.luck += servant.stats.luck
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.luck = servant.stats.luck / 2
            break;
        case 5:// robin hood
            if(enemy.status.poison.active === true){
                let robinMagic = servant.stats.magic * 1.5
                servant.stats.magic += robinMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= robinMagic
            } else{
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            break;
        case 6://hassan of the cursed arm
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.05)
            instaKill();
            break;
        case 7://cu
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1
                
            } else {
                 critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)

             instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.03)
            instaKill();
            break;
        case 8:// gawain
            enemy.status.burn.active = true
            enemy.status.burn.duration += 3
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            // message.channel.send(`${enemy.class} got burned `)
            break;
        case 9:// magikarp
            // do nothing
            break;
        case 10:// illya kaleid
        if(servant.transformed === false){
            servant.transformed = true
            servant.status.curse.active = true
            servant.status.curse.duration += 7
            servant.stats.magic += npEffectiveness * 1.25
            servant.charge += 2
            servant.damageBasedOnMagic = true
            message.channel.send(`${servant.class}'s magic drastically rose\n${servant.class}' will deal magic based damage from now on`)
        } else{
            secondNP = 'Quintett Feuer'
            secondNPImage = 'https://i.imgur.com/d0ajAJt.gif'
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
        }
            
            break;
        case 11:// zero
            power = npEffectiveness
            if(power > 800){
                power = 800
            } 
             debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

             debuffagility = enemy.stats.agility * (power / 1000);
            enemy.stats.agility -= debuffagility

             debuffluck = enemy.stats.luck * (power / 1000);
            enemy.stats.luck -= debuffluck

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 5

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell\n${enemy.class}'s luck fell`)

            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`... to die.`) }, 0.08)
            instaKill();
            break;
        case 12:// suzaku
            if (servant.transformed === false) {
                servant.transformed = true

                servant.stats.agility += npEffectiveness
                servant.stats.strength += (npEffectiveness) / 2

                power = npEffectiveness
                if (power > 800) {
                    power = 800
                }
                servant.takenDmg -= servant.takenDmg * (power / 1000)


                message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility rose\n${servant.class}'s defense rose`)
            } else {
                secondNP = 'Geass'
                secondNPImage = 'https://i.imgur.com/bfcTCMv.gif'

                gutsChance = chancify(() => { servant.guts = true; message.channel.send('Rider: I have to LIVE!'); }, 0.5)
                gutsChance();

                servant.currentHp += (npEffectiveness) * 10
                servant.maxHp += (npEffectiveness) * 10
                servant.stats.agility += npEffectiveness
                servant.stats.strength += (npEffectiveness)
                message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose\n${servant.class}'s endurance rose`)
            }
            break;
        case 13://kallen
            servant.transformed = true
            power = npEffectiveness
            if (power > 800) {
                power = 800
            } 
            servant.stats.agility += npEffectiveness
            drain = enemy.currentHp * (power / 1000)
            enemy.currentHp -= drain
            servant.maxHp += drain
            servant.currentHp += drain
            enemy.charge -= 1
            servant.charge += 1

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            message.channel.send(`${servant.class}'s agility rose\nenemy's HP has been drained\nenemy's NP Charge has been drained\n ${servant.class}'s endurance rose`)
            break;
        case 14://cc
            servant.guts = true

            servant.stats.magic += npEffectiveness / 2

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 3
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 15:// kurogane ikki
            servant.stats.agility += (npEffectiveness) * 1.25
            servant.stats.strength += (npEffectiveness) * 1.25
            servant.stats.luck += (npEffectiveness) * 1.25
            servant.currentHp = servant.currentHp / 2
            message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s agility drastically rose\n${servant.class}'s luck drastically rose`)
            break;
        case 16:// esdeath
            enemy.status.freeze.active = true
            enemy.status.freeze.duration += 6
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic += npEffectiveness
            message.channel.send(`${servant.class}'s magic rose`)
            break;
        case 17:// kiritsugu
             power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffmagic = enemy.stats.magic * (power / 1000);
            enemy.stats.magic -= debuffmagic

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 4
            message.channel.send(`${enemy.class}'s magic fell`)
            break;
        case 18:// medea
            if(enemy.id !== servant.id){
                if (enemy.id === battlefield.servant1.id) {
                    enemy.stats.strength = battlefield.servant1basestats.strength
                    enemy.stats.endurance = battlefield.servant1basestats.endurance
                    enemy.stats.magic = battlefield.servant1basestats.magic
                    enemy.stats.luck = battlefield.servant1basestats.luck
                    enemy.stats.agility = battlefield.servant1basestats.agility
                    enemy.takenDmg = 1
                    enemy.transformed = false
                } else {
                    enemy.stats.strength = battlefield.servant2basestats.strength
                    enemy.stats.endurance = battlefield.servant2basestats.endurance
                    enemy.stats.magic = battlefield.servant2basestats.magic
                    enemy.stats.luck = battlefield.servant2basestats.luck
                    enemy.stats.agility = battlefield.servant2basestats.agility
                    enemy.takenDmg = 1
                    enemy.transformed = false
                }
                message.channel.send(`${enemy.class}'s bufffs and debuffs were removed.`)
            } else {
                message.channel.send("Rule Breaker was ineffective against caster.")
            }
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 19:// sinon
            servant.stats.luck += npEffectiveness
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            servant.critStr += servant.critStr * (power / 1000)

            message.channel.send(`${servant.class}'s luck rose`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit)
            
            break;
        case 20:// kirito
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.strength += (npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            break;
        case 21:// priestess
            heal = npEffectiveness * 2
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)
            servant.takenDmg -= servant.takenDmg * (power / 1000)
            enemy.status.stun.active = true
            enemy.status.stun.duration += 2
            message.channel.send(`${servant.class}'s defence rose drastically\n${servant.class}'s HP was slightly recovered`)
            break;
        case 22:// goblin slayer
            servant.stats.strength += npEffectiveness
            servant.currentHp += (npEffectiveness) * 5
            servant.maxHp += (npEffectiveness) * 5
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 23:// high elf archer
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)
            break;
        case 24:// spear hero
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 25:// sagittarius seiya
            servant.stats.magic += npEffectiveness / 2

            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 3
            

            if(servant.currentHp <= servant.maxHp * 0.05){
                servant.currentHp = 0
            } else{
                servant.currentHp -= servant.maxHp * 0.05
            }

            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 26:// lord grim
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)
            enemy.status.poison.active = true
            enemy.status.poison.duration += 3
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s defence rose`)
            break;
        case 27:// stella vermilion
            enemy.status.burn.active = true
            enemy.status.burn.duration += 6

            servant.status.burn.active = true
            servant.status.burn.duration += 6

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 28:// okabe
            heal = npEffectiveness * 6
            if(servant.currentHp + heal >= servant.maxHp){
                servant.currentHp = servant.maxHp
            } else{
                servant.currentHp += heal
            }

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.critStr += servant.critStr * (power / 1000)

            servant.evade += 3

            servant.stats.luck += npEffectiveness * 1.25
            servant.status.fear.active = true
            servant.status.fear.duration += 7

            servant.status.confusion.active = true
            servant.status.confusion.duration += 2

            message.channel.send(`${servant.class}'s hp was significantly restored`)
            message.channel.send(`${servant.class}'s luck rose drastically\n${servant.class}'s critical strength rose`)
            break;
        case 29:// semiramis
            enemy.status.poison.active = true
            enemy.status.poison.duration += 10
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 30: // artoria
            servant.stats.magic += npEffectiveness / 2

            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 10
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 31:// nero
            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 7

            servant.stats.agility += (npEffectiveness) / 2
            servant.stats.magic += (npEffectiveness) / 2
            servant.stats.luck += (npEffectiveness) / 2
            servant.damageBasedOnMagic = true

            enemy.status.burn.active = true
            enemy.status.burn.duration += 7
            battlefield.background = "theater.png"
            message.channel.send(`${servant.class}'s luck slightly rose\n${servant.class}'s agility slightly rose\n${servant.class}'s magic slightly rose\n${servant.class} will deal damage based on magic`)
            break;
        case 32:// shiki
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            
            servant.critStr += servant.critStr * (power / 1000)
            enemy.takenDmg += enemy.takenDmg * (power / 1000)
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.08)
            instaKill();
            message.channel.send(`${enemy.class}'s defence fell`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            break;
        case 33://altera
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)
            servant.stats.magic += npEffectiveness / 2
            message.channel.send(`${enemy.class}'s defence fell\n ${servant.class}'s magic slightly rose`)
            break;
        case 34:// proto cu
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.02)
            instaKill();
            servant.stats.luck += npEffectiveness / 2
            message.channel.send(`${servant.class}'s luck slightly rose`)
            break;
        case 35:// cu caster
            enemy.status.burn.active = true
            enemy.status.burn.duration += 6
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 36:// diarmud
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            if (enemy.id !== servant.id) {
                if (enemy.id === battlefield.servant1.id) {
                    enemy.stats.strength = battlefield.servant1basestats.strength
                    enemy.stats.endurance = battlefield.servant1basestats.endurance
                    enemy.stats.magic = battlefield.servant1basestats.magic
                    enemy.stats.luck = battlefield.servant1basestats.luck
                    enemy.stats.agility = battlefield.servant1basestats.agility
                    enemy.takenDmg = 1
                } else {
                    enemy.stats.strength = battlefield.servant2basestats.strength
                    enemy.stats.endurance = battlefield.servant2basestats.endurance
                    enemy.stats.magic = battlefield.servant2basestats.magic
                    enemy.stats.luck = battlefield.servant2basestats.luck
                    enemy.stats.agility = battlefield.servant2basestats.agility
                    enemy.takenDmg = 1
                }
                message.channel.send(`${enemy.class}'s bufffs and debuffs were removed.`)
            } else{
                message.channel.send("Gáe Dearg was ineffective.")
            }

            enemy.status.curse.active = true
            enemy.status.curse.duration += 3

            break;
        case 37://achilles
            servant.stats.agility += (npEffectiveness) * 1.25
            message.channel.send(`${servant.class}'s drastically agility rose`)
            break;
        case 38:// enkidu
            enemy.status.stun.active = true
            enemy.status.stun.duration += 3
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 39://shakespeare
            enemy.status.stun.active = true
            enemy.status.stun.duration += 1

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 4

            enemy.status.fear.active = true
            enemy.status.fear.duration += 7
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 40://spartacus
            servant.stats.strength += (npEffectiveness) / 2
            servant.currentHp += (npEffectiveness) * 5
            servant.maxHp += (npEffectiveness) * 5
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 41://ozy
            enemy.status.curse.active = true
            enemy.status.curse.duration += 7
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 42:// fran
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            servant.status.stun.active = true
            servant.status.stun.duration += 3
            break;
        case 43:// salter
            servant.stats.magic += npEffectiveness / 2

            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 10

            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 44:// hundred faces hassan
            servant.currentHp += (npEffectiveness) * 10
            servant.maxHp += (npEffectiveness) * 10
            message.channel.send(`${servant.class}'s endurance rose`)
            break;
        case 45:// Fujinon
            servant.stats.luck += npEffectiveness /2

            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            message.channel.send(`${enemy.class}'s defence fell, ${servant.class}'s luck slightly rose`)
            break;
        case 46://atalanta
            servant.stats.agility += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.agility -= servant.stats.magic
            break;
        case 47:// tamamo
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            
            heal = npEffectiveness * 2
            if (servant.currentHp + heal > servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else{
                servant.currentHp += heal
            }

            servant.status.curse.active = false
            servant.status.curse.duration = 0
            servant.status.fear.active = false
            servant.status.fear.duration = 0

            servant.charge += 1

            servant.stats.magic += npEffectiveness / 2
            message.channel.send(`${servant.class}'s hp was slightly restored \n${servant.class}'s magic slightly rose\n +1 NP Charge`)
            break;
        case 48:// drake
            servant.stats.luck += npEffectiveness
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 49:// jack the ripper
            if (enemy.traits.includes("female")) {
                let jackMagic = servant.stats.magic * 1.5
                servant.stats.magic += jackMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= jackMagic
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            servant.stats.luck += npEffectiveness
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 50:// atalanta (alter)
            enemy.status.curse.active = true
            enemy.status.curse.duration += 5

            enemy.status.fear.active = true
            enemy.status.fear.duration += 2

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 51:// vlad III
            enemy.status.fear.active = true
            enemy.status.fear.duration += 5

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 52:// li shuwen
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.03)
            instaKill();
            break;
        case 53://suzuka gozen
            enemy.status.curse.active = true
            enemy.status.curse.duration += 4

            servant.stats.agility += (npEffectiveness)
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.agility -= (npEffectiveness)

            servant.stats.luck += (npEffectiveness)
            servant.stats.magic += (npEffectiveness) / 2
            message.channel.send("Saber's luck rose\nSaber's magic slightly rose")
            break;
        case 54:// lancelot (berserker)
            servant.stats.agility += (npEffectiveness)
            servant.stats.strength += (npEffectiveness)
            message.channel.send("Berserker's agility rose\nBerserker's strength rose")
            break;
        case 55:// astolfo
            servant.stats.agility += (npEffectiveness)
            message.channel.send("Rider's agility rose")

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 56:// stain
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            debuffagility = enemy.stats.agility * (power / 1000);
            enemy.stats.agility -= debuffagility

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell`)

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2
            break;
        case 57:// henry jekyll & hyde
            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            if(servant.transformed === false){
                servant.class = "Berserker"
                servant.stats.strength += (npEffectiveness) / 2
                servant.transformed = true
                message.channel.send(`${servant.class}'s hp was restored \n${servant.class}'s strength slightly rose`)
            } else {
                servant.class = "Assassin"
                servant.stats.agility += (npEffectiveness) / 2
                servant.transformed = false
                secondNP = servant.noblePhantasm.name
                secondNPImage = servant.noblePhantasm.image
                msg = (`${servant.class}'s hp was restored \n${servant.class}'s agility slightly rose`)
            }
            break;
        case 58:// iskandar
            servant.stats.strength += (npEffectiveness) * 1.25
            message.channel.send(`${servant.class}'s strength rose drastically`)
            break;
        case 59:// nursery rhyme
            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            servant.charge += 2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s hp was restored\n NP charge +1\n${enemy.class}'s strength fell\n${enemy.class}'s defense fell`)
            break;
        case 60:// mata hari
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s defense fell`)

            enemy.status.stun.active = true
            enemy.status.stun.duration += 1

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 3
            break;
        case 61:// revy
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            servant.stats.strength += (npEffectiveness) 
            message.channel.send(`${servant.class}'s strength rose`)

            enemy.status.fear.active = true
            enemy.status.fear.duration += 2
            break;
        case 62: // darkness
            servant.currentHp += (npEffectiveness) * 10 * 1.25
            servant.maxHp += (npEffectiveness) * 10 * 1.25
            message.channel.send(`${servant.class}'s endurance rose drastically`)
            break;
        case 63: // eugeo
            enemy.status.freeze.active = true
            enemy.status.freeze.duration += 7

            enemy.status.stun.active = true
            enemy.status.stun.duration += 3

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 3

            servant.status.freeze.active = true
            servant.status.freeze.duration += 7

            power = npEffectiveness
            if (power > 800) {
                power = 800
            } 

            debuffagility = enemy.stats.agility * (power / 2000);
            enemy.stats.agility -= debuffagility

            servant.stats.magic += (npEffectiveness) / 2

            message.channel.send(`${enemy.class}'s agility fell slightly\n${servant.class}'s magic rose slightly`)
            break;
        case 64:// siegfried
            servant.charge += 1

            if (enemy.traits.includes("dragon")) {
                let siegfriedMagic = servant.stats.magic * 1.5
                servant.stats.magic += siegfriedMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= siegfriedMagic
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            break;
        case 65:// yamamoto
            enemy.status.burn.active = true
            enemy.status.burn.duration += 7
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 66:// casshern
            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            servant.stats.strength += npEffectiveness / 2
            servant.stats.agility += npEffectiveness / 2
            message.channel.send(`${servant.class}'s strength and agility slightly rose\n${servant.class}'s hp was restored.`)
            break;
        case 67:// kaiba
            servant.transformed = true
            servant.stats.magic += npEffectiveness/2
            servant.stats.luck += npEffectiveness
            servant.currentHp += (npEffectiveness) * 10
            servant.maxHp += (npEffectiveness) * 10

            servant.damageBasedOnMagic = true

            enemy.status.fear.active = true
            enemy.status.fear.duration += 3

            message.channel.send(`${servant.class}'s luck and endurance rose\n${servant.class}'s magic rose slightly\n${servant.class} will deal magic based damage from now on`)
            break;
        case 68:// seryu
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 69:// aizen
            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 7

            servant.evade += 2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            message.channel.send(`${enemy.class}'s defense fell\n${servant.class} +evade (1time)`)
            break;
        case 70:// lu bu
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 71:// Ishtar
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic += npEffectiveness
            message.channel.send(`${servant.class}'s magic rose`)
            break;
        case 72:// sword hero
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 73:// gilgamesh
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            enemy.status.fear.active = true
            enemy.status.fear.duration += 2
            break;
        case 74:// arjuna
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.burn.active = true
            enemy.status.burn.duration += 3
            break;
        case 75:// truth
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.fear.active = true
            enemy.status.fear.duration += 7

            enemy.status.curse.active = true
            enemy.status.curse.duration += 7
            break;
        case 76:// jaguar man
            power = npEffectiveness
            if (power > 800) {
                power = 800
            } 

            debuffluck = enemy.stats.luck * (power / 1000);
            enemy.stats.luck -= debuffluck

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 1
            break;
        case 77: // yu miayoi
           
            if(enemy.id !== servant.id){
                if (servant.id === battlefield.servant1.id) {
                    servant.stats.strength = battlefield.servant1basestats.strength
                    servant.stats.endurance = battlefield.servant1basestats.endurance
                    servant.stats.magic = battlefield.servant1basestats.magic
                    servant.stats.luck = battlefield.servant1basestats.luck
                    servant.stats.agility = battlefield.servant1basestats.agility
                    servant.takenDmg = 1
                } else {
                    servant.stats.strength = battlefield.servant2basestats.strength
                    servant.stats.endurance = battlefield.servant2basestats.endurance
                    servant.stats.magic = battlefield.servant2basestats.magic
                    servant.stats.luck = battlefield.servant2basestats.luck
                    servant.stats.agility = battlefield.servant2basestats.agility
                    servant.takenDmg = 1
                }
            }
                message.channel.send(`${servant.class}'s bufffs and debuffs were removed.`)

                enemy.status.curse.active = true
                enemy.status.curse.duration += 5

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 78:// light yagami
            if(enemy.revealed === true){
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]

                enemy.status.confusion.active = true
                enemy.status.confusion.duration += 3

                enemy.status.curse.active = true
                enemy.status.curse.duration += 7

                instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.06)
                instaKill();
            } else{
                message.channel.send(`Nothing happened.`)
            }
            break;
        case 79:// monika
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            debuffmagic = enemy.stats.magic * (power / 1000);
            enemy.stats.magic -= debuffmagic

            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 1

            enemy.status.stun.active = true
            enemy.status.stun.duration += 1

            enemy.status.fear.active = true
            enemy.status.fear.duration += 4

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell\n${enemy.class}'s defence fell`)
            break;
        case 80:// jeanne
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)

            heal = npEffectiveness * 6
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            message.channel.send(`${servant.class}'s defence rose\n${servant.class}'s hp was significantly restored`)
            break;
        case 81:// ichigo kurosaki
            if(servant.transformed === false){
                servant.transformed = true
                servant.stats.agility += (npEffectiveness) * 1.25
                servant.stats.strength += (npEffectiveness)/2
                servant.stats.magic += (npEffectiveness) *1.25
                message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility greatly rose\n${servant.class}'s magic greatly rose`)
            }else{
                secondNP = 'Hollow Getsuga Tenshō'
                secondNPImage = 'https://i.imgur.com/UR5j2NC.gif'
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            break;
        case 82:// passionlip
            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 83:// kid gil
            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            break;
        case 84:// renji
            if (servant.transformed === false) {
                servant.transformed = true
                servant.stats.strength += (npEffectiveness)
                servant.stats.magic += (npEffectiveness) / 2
                servant.currentHp += (npEffectiveness) * 10
                servant.maxHp += (npEffectiveness) * 10
                message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance rose\n${servant.class}'s magic slightly rose`)
            } else {
                secondNP = 'Hikotsu Taihō'
                secondNPImage = 'https://i.imgur.com/h51DXNB.gif'
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            break;
        case 85:// kazuma
            power = servant.stats.luck + servant.noblePhantasm.power
            if (power > 800) {
                power = 800
            }
            let kazumaNumber = Math.floor(Math.random() * 5)
            if(kazumaNumber === 0){
                debuffstrength = enemy.stats.strength * (power / 1000);
                enemy.stats.strength -= debuffstrength
                servant.stats.strength += debuffstrength
                message.channel.send(`part of ${enemy.class}'s strength was stolen`)
            } else if (kazumaNumber === 1){
                debuffmagic = enemy.stats.magic * (power / 1000);
                enemy.stats.magic -= debuffmagic
                servant.stats.magic += debuffmagic
                message.channel.send(`part of ${enemy.class}'s magic was stolen`)
            } else if (kazumaNumber === 2) {
                debuffluck = enemy.stats.luck * (power / 1000);
                enemy.stats.luck -= debuffluck
                servant.stats.luck += debuffluck
                message.channel.send(`part of ${enemy.class}'s luck was stolen`)
            } else if (kazumaNumber === 3) {
                debuffagility = enemy.stats.agility * (power / 1000);
                enemy.stats.agility -= debuffagility
                servant.stats.agility += debuffagility
                message.channel.send(`part of ${enemy.class}'s agility was stolen`)
            } else if (kazumaNumber === 4) {
                drain = enemy.currentHp * (power / 1000)
                enemy.currentHp -= drain
                enemy.maxHp -= drain
                servant.maxHp += drain
                servant.currentHp += drain
                message.channel.send(`part of ${enemy.class}'s endurance was stolen`)
            }

            if (enemy.traits.includes("female")) {
                enemy.status.stun.active = true
                enemy.status.stun.duration += 2

                enemy.status.npSeal.active = true
                enemy.status.npSeal.duration += 2

                message.channel.send(`Panties were stolen`)
            }
            break;
        case 86:// altair
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)

            debuffmagic = enemy.stats.magic * (power / 1000);

            enemy.stats.magic -= debuffmagic

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${servant.class}'s defence rose\n${enemy.class}'s magic fell\n`)
            break;
        case 87:// blitz talker
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffmagic = enemy.stats.magic * (power / 1000);

            enemy.stats.magic -= debuffmagic

            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${enemy.class}'s defence fell\n${enemy.class}'s magic fell\n`)
            break;
        case 88:// fuuma kotarou
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 2
            message.channel.send(`${enemy.class}'s defence fell`)
            break;
        case 89://leonardo watch
            if(enemy.revealed === false){
                enemy.revealed = true
                enemy.stats.strength = enemy.stats.strength/2
                enemy.stats.magic = enemy.stats.magic / 2
                message.channel.send(`Enemy True Name was revealed.\nIt's ${enemy.name[0]}!\n${enemy.name[0]}'s strength and magic fell`)
            }

            servant.status.confusion.active = false
            servant.status.confusion.duration = 0

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 5

            servant.stats.luck += npEffectiveness

            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 90://alma (sacred seven)
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            servant.stats.luck += npEffectiveness
            servant.stats.strength += npEffectiveness/2

            message.channel.send(`${servant.class}'s luck rose\n${servant.class}'s strength slightly rose`)
            break;
        case 91://kuro (f/kaleid)
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2
            break;
        case 92:// nobu
            battlefield.background = "papiyas.png"
            servant.transformed = true
            
            servant.stats.strength += (npEffectiveness) * 1.25

            enemy.status.burn.active = true
            enemy.status.burn.duration += 7

            servant.status.burn.active = true
            servant.status.burn.duration += 5

            if (enemy.traits.includes("divine")) {
                enemy.status.curse.active = true
                enemy.status.curse.duration += 7
            }
            message.channel.send(`${servant.class}'s strength rose drastically`)
            break;
        case 93://okita
            servant.stats.luck += npEffectiveness * 1.25

            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit)

            message.channel.send(`${servant.class}'s luck rose drastically`)
            break;
        case 94:// megumin
            let meguMagic = servant.stats.magic * 2
            servant.stats.magic += meguMagic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic -= meguMagic

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 24

            servant.status.stun.active = true
            servant.status.stun.duration += 24
            break;
        case 95:// ivan the terrible
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            message.channel.send(`${enemy.class}'s defence fell`)
            break;
        case 96:// magane
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 5

            enemy.stats.strength += enemy.stats.strength

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)

            message.channel.send(`${servant.class}'s defense rose\n${enemy.class}'s strength rose`)
            break;
        case 97:// eresh
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.strength += (npEffectiveness) 
            servant.stats.magic += (npEffectiveness) 

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s magic rose`)
            break;
        case 98:// iri (white)
            heal = npEffectiveness * 6
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            servant.status.curse.active = false
            servant.status.curse.duration = 0
            servant.status.fear.active = false
            servant.status.fear.duration = 0
            servant.status.burn.active = false
            servant.status.burn.duration = 0
            servant.status.freeze.active = false
            servant.status.freeze.duration = 0
            servant.status.poison.active = false
            servant.status.poison.duration = 0
            servant.status.confusion.active = false
            servant.status.confusion.duration = 0
            servant.status.stun.active = false
            servant.status.stun.duration = 0

            servant.guts = true
            break;
        case 99:// black iri
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            enemy.guts = false

            enemy.status.curse.active = true
            enemy.status.curse.duration += 10
            break;
        case 100:// bedivere
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            if(servant.currentHp <= servant.maxHp * 0.1){
                servant.currentHp = 0
            } else{
                servant.currentHp -= servant.maxHp * 0.1
            }
            break;
        case 101:// scat
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.05)
            instaKill();
            break;
        case 102:// aqua
            if (servant.transformed === false) {
                servant.transformed = true
                message.channel.send(`Woah! Nice trick.`)
            } else {
                secondNP = 'God Requiem'
                secondNPImage = 'https://i.imgur.com/0oFZXBY.gif'

                if(enemy.alignment[1] == "Evil"){
                    let aquaMagic = servant.stats.magic * 1.5
                    servant.stats.magic += aquaMagic
                    enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                    servant.stats.magic -= aquaMagic
                }else{
                    servant.stats.magic += servant.stats.magic
                    enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                    servant.stats.magic = servant.stats.magic / 2
                }

                servant.guts = true
            }
            break;
        case 103:// sakuya
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }

            let sakuyaNpEffectiveness = servant.stats.agility + (servant.noblePhantasm.power * servant.NPLevel)
            enemy.takeDammage((sakuyaNpEffectiveness) * crit * enemy.takenDmg)

            servant.stats.agility += npEffectiveness

            enemy.charge -= 1

            message.channel.send(`${servant.class}'s agility rose`)
            
            break;
        case 104:// sora
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 3

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 3
            break;
        case 105:// mordred
            if (enemy.name.includes("artoria pendragon") || enemy.name.includes("arthur pendragon")) {
                let mordredMagic = servant.stats.magic * 1.5
                servant.stats.magic += mordredMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= mordredMagic
            } else {
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2
            }
            break;
        case 106:// ainz
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            enemy.status.burn.active = true
            enemy.status.burn.duration += 2
            break;
        case 107:// akutagawa
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.fear.active = true
            enemy.status.fear.duration += 3
            break;
        case 108:// dio
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 2

            servant.transformed = true

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            servant.stats.strength += npEffectiveness
            servant.stats.agility += npEffectiveness/2

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility slightly rose`)
            break;
        case 109:// shirou emiya
            if (servant.transformed === false) {
                servant.transformed = true
                servant.stats.strength += (npEffectiveness) * 1.25
                message.channel.send(`${servant.class}'s magic drastically rose`)
            } else {
                secondNP = 'Avalon'
                secondNPImage = 'https://i.imgur.com/V1sO0JW.gif'
                servant.guts = true
            }
            break;
        case 110:// rin tohsaka
            if (servant.transformed === false) {
                servant.transformed = true
                servant.guts = true
            } else {
                secondNP = 'Jewel Magecraft'
                secondNPImage = 'https://i.imgur.com/WO5F4Yy.gif'
                
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                power = npEffectiveness
                if (power > 800) {
                    power = 800
                }
                servant.takenDmg -= servant.takenDmg * (power / 1000)
                message.channel.send(`${servant.class}'s defense rose`)
            }
            break;
        case 111:// illya (f/sn)
            servant.stats.strength += (npEffectiveness)
            servant.currentHp += (npEffectiveness) * 5
            servant.maxHp += (npEffectiveness) * 5
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 112:// karna
            servant.stats.strength += (npEffectiveness)
            servant.stats.magic += (npEffectiveness)
            servant.stats.agility += (npEffectiveness)/2

            enemy.status.burn.active = true
            enemy.status.burn.duration += 4

            if (enemy.traits.includes("divine")) {
                let karnaMagic = servant.stats.magic * 1.5
                servant.stats.magic += karnaMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= karnaMagic
            } else {
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2
            }

            servant.takenDmg += servant.takenDmg
            servant.stats.luck = servant.stats.luck/2

            servant.currentHp = 3/4 * servant.currentHp
            servant.maxHp = 3/4 * servant.maxHp

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 30

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s magic rose\n${servant.class}'s agility slightly rose\n${servant.class}'s defense fell\n${servant.class}'s luck fell\n${servant.class}'s endurance fell`)
            break;
        case 113:// misaka (railgun)
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 4
            break;
        case 114:// musashi
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit * enemy.takenDmg)

            servant.stats.strength += (npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            
            if (enemy.id !== servant.id) {
                if (enemy.id === battlefield.servant1.id) {
                    enemy.stats.strength = battlefield.servant1basestats.strength
                    enemy.stats.endurance = battlefield.servant1basestats.endurance
                    enemy.stats.magic = battlefield.servant1basestats.magic
                    enemy.stats.luck = battlefield.servant1basestats.luck
                    enemy.stats.agility = battlefield.servant1basestats.agility
                    enemy.takenDmg = 1
                    enemy.transformed = false
                } else {
                    enemy.stats.strength = battlefield.servant2basestats.strength
                    enemy.stats.endurance = battlefield.servant2basestats.endurance
                    enemy.stats.magic = battlefield.servant2basestats.magic
                    enemy.stats.luck = battlefield.servant2basestats.luck
                    enemy.stats.agility = battlefield.servant2basestats.agility
                    enemy.takenDmg = 1
                    enemy.transformed = false
                }
                message.channel.send(`${enemy.class}'s bufffs and debuffs were removed.`)
            } else {
                message.channel.send("Noble Phantasm was ineffective against saber.")
            }
            break;
        case 115:// umi sonoda
            crit = 1
            
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit )

            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.05)
            instaKill();

            servant.status.stun.active = true
            servant.status.stun.duration += 2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            message.channel.send(`${enemy.class}'s strength fell`)
            break;
        case 116:// ikaros
            servant.stats.magic += (npEffectiveness)

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2
            break;
        case 117:// cirno
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.freeze.active = true
            enemy.status.freeze.duration += 4

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 1

            servant.status.burn.active = false
            servant.status.burn.duration = 0

            break;
        case 118:// king hassan
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.08)
            instaKill();

            servant.guts = true

            servant.charge += 1
            break;
        case 119:// neo
            servant.stats.agility += (npEffectiveness)/2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)

            servant.evade += 1

            message.channel.send(`${servant.class}'s agility slightly rose\n${servant.class}'s defense rose\n +evade (1time)`)
            break;
        case 120:// medb
            if (enemy.traits.includes("male")) {
                let medbMagic = servant.stats.magic * 1.5
                servant.stats.magic += medbMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= medbMagic
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }

            enemy.status.fear.active = true
            enemy.status.fear.duration += 4

            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            
            message.channel.send(`${servant.class}'s HP was restored\n`)
            break;
        case 121:// archoria
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            enemy.charge -= 1
            servant.charge += 4
            break;
        case 122:// mordred rider
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            enemy.charge -= 1
            servant.stats.agility += (npEffectiveness) / 2
            message.channel.send(`${servant.class}'s agility rose slighttly`)
            break;
        case 123:// tamamo lancer
            if (enemy.traits.includes("male")) {
                let tamamoLancerMagic = servant.stats.magic * 1.5
                servant.stats.magic += tamamoLancerMagic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic -= tamamoLancerMagic

                enemy.status.stun.active = true
                enemy.status.stun.duration += 3
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }
            break;
        case 124:// scathach summer
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.03)
            instaKill();
            break;
        case 125:// sumzaku
            if (servant.status.burn.active === true) {
                servant.stats.strength += (npEffectiveness) * 1.25

                servant.currentHp += (npEffectiveness) * 10 * 1.25
                servant.maxHp += (npEffectiveness) * 10 * 1.25

                heal = npEffectiveness * 6
                if (servant.currentHp + heal >= servant.maxHp) {
                    servant.currentHp = servant.maxHp
                } else {
                    servant.currentHp += heal
                }

                message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s endurance drastically rose`)
                message.channel.send(`${servant.class}'s hp was significantly restored`)
            } else {
                servant.stats.strength += (npEffectiveness)

                servant.currentHp += (npEffectiveness) * 10
                servant.maxHp += (npEffectiveness) * 10

                heal = npEffectiveness * 4
                if (servant.currentHp + heal >= servant.maxHp) {
                    servant.currentHp = servant.maxHp
                } else {
                    servant.currentHp += heal
                }

                message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance rose`)
                message.channel.send(`${servant.class}'s hp was  restored`)
            }
            break;
        case 126:// misaka summer
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            servant.stats.magic += npEffectiveness/2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            debuffagility = enemy.stats.agility * (power / 2000);
            enemy.stats.agility -= debuffagility

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            message.channel.send(`${enemy.class}'s agility fell slightly`)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 127:// esdeath summer
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 3

            servant.stats.agility += (npEffectiveness)

            servant.evade += 1 

            enemy.status.freeze.active = true
            enemy.status.freeze.duration += 6
            message.channel.send(`${servant.class}'s agility rose`)
            break;
        case 128:// sumi
            enemy.status.stun.active = true
            enemy.status.stun.duration += 1

            enemy.status.npSeal.active = true
            enemy.status.npSeal.duration += 1

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 3

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            servant.stats.luck += npEffectiveness
            message.channel.send(`${enemy.class}'s defense fell`)
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 129:// florence
            servant.status.poison.active = false
            servant.status.poison.duration = 0

            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 2000);
            enemy.stats.strength -= debuffstrength

            debuffmagic = enemy.stats.magic * (power / 2000);
            enemy.stats.magic -= debuffmagic

            message.channel.send(`${servant.class}'s hp was restored`)
            message.channel.send(`${enemy.class}'s strength fell slightly\n${enemy.class}'s magic fell slightly`)
            break;
        case 130:// todoroki
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 3

            enemy.status.burn.active = true
            enemy.status.burn.duration += 3

            enemy.status.freeze.active = true
            enemy.status.freeze.duration += 3
            break;
        case 131:// tohka
            servant.stats.magic += (npEffectiveness) * 1.25
            servant.stats.strength += (npEffectiveness)
            message.channel.send(`${servant.class}'s magic drastically rose\n${servant.class}'s strength rose`)
            break;
        case 132:// uchicha
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 3

            enemy.status.burn.active = true
            enemy.status.burn.duration += 3

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 10

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 10
            break;
        case 133:// hachiman
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            if (enemy.traits.includes("female")) {
            enemy.takenDmg += enemy.takenDmg * (power / 1000)
            message.channel.send(`${enemy.class}'s defence fell drastically`)
            } else{
                message.channel.send(`${enemy.class}'s defence fell`)
            }

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            servant.status.curse.active = true
            servant.status.curse.duration += 3
            break;
        case 134:// asuka
            servant.transformed = true

            if (enemy.class == "Foreigner" ) {
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            }

            servant.stats.agility += npEffectiveness

            servant.stats.strength += (npEffectiveness)

            servant.currentHp += (npEffectiveness) * 5
            servant.maxHp += (npEffectiveness) * 5

            servant.status.npSeal.active = true
            servant.status.npSeal.duration += 10

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 135:// akame
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.06)
            instaKill();

            enemy.status.poison.active = true
            enemy.status.poison.duration += 3

            enemy.status.curse.active = true
            enemy.status.curse.duration += 3

            servant.status.curse.active = true
            servant.status.curse.duration += 6

            servant.stats.agility += (npEffectiveness) * 1.25
            servant.stats.strength += (npEffectiveness)

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose drastically`)
            break;
        case 136:// rumia
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            drain = enemy.maxHp * (power / 1000)
            
            if (servant.currentHp + drain >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += drain
            }

            enemy.status.fear.active = true
            enemy.status.fear.duration += 3

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 4

            servant.status.confusion.active = true
            servant.status.confusion.duration += 4
            message.channel.send(`${servant.class}'s restored some of their HP`)
            break;
        case 137:// madara
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            debuffmagic = enemy.stats.magic * (power / 1000);
            enemy.stats.magic -= debuffmagic

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 5

            enemy.charge -= 1

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell`)
            break;
        case 138:// mhx
            if (enemy.class == "Saber") {
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }

            servant.stats.agility += (npEffectiveness) 
            servant.stats.strength += (npEffectiveness)

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose`)
            break;
        case 139:// mhxa
            if (enemy.class == "Saber") {
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }

            servant.stats.strength += (npEffectiveness)

            heal = npEffectiveness * 2
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s HP was slightly restored`)
            break;
        case 140:// saber lily
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }
            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 141:// takuto
            if (servant.transformed === false) {
                servant.transformed = true

                battlefield.background = "zerotime.png"

                servant.stats.agility += npEffectiveness
                servant.stats.magic += npEffectiveness
                servant.stats.luck += npEffectiveness
                servant.stats.strength += (npEffectiveness) / 2

                power = npEffectiveness
                if (power > 800) {
                    power = 800
                }

                debuffagility = enemy.stats.agility * (power / 2000);
                enemy.stats.agility -= debuffagility


                message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility rose\n${servant.class}'s magic rose\n${servant.class}'s luck rose`)
                message.channel.send(`${enemy.class}'s agility fell slightly`)
            } else {
                secondNP = 'Pile Crusher'
                secondNPImage = 'https://i.imgur.com/wJGb2UI.gif'


                servant.stats.magic += npEffectiveness
                servant.stats.luck += npEffectiveness

                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                message.channel.send(`${servant.class}'s magic rose\n${servant.class}'s luck rose\n${servant.class}: "**It's a punch!**"`)
            }
            break;

        case 142: //arcueid
            battlefield.background = "crimsonmoon.png"


            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            enemy.status.stun.active = true
            enemy.status.stun.duration += 2

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            debuffagility = enemy.stats.agility * (power / 2000);
            enemy.stats.agility -= debuffagility

            message.channel.send(`${enemy.class}'s agility fell slightly`)
            break;

        case 143: // ciel
            servant.transformed = true

            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.curse.active = true
            enemy.status.curse.duration += 3

            servant.stats.strength += npEffectiveness / 2
            servant.stats.agility += npEffectiveness / 2

            message.channel.send(`${servant.class}'s strength and agility rose slightly`)
            break;
        
        case 144: // tohno shiki
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            servant.critStr += servant.critStr * (power / 1000)
            enemy.takenDmg += enemy.takenDmg * (power / 1000)
            instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.06)
            instaKill();
            message.channel.send(`${enemy.class}'s defence fell`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            break;
        
        case 145: // nrvnqsr chaos
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            debuffagility = enemy.stats.agility * (power / 1000);
            enemy.stats.agility -= debuffagility
            
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell`)
            break;
        
        case 146: // tohno akiha
            heal = npEffectiveness * 2
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            enemy.status.curse.active = true
            enemy.status.curse.duration += 4

            enemy.status.burn.active = true
            enemy.status.burn.duration += 4

            message.channel.send(`${servant.class}'s HP was slightly recovered`)
            break;
        case 147: // alice sao
            servant.stats.agility += npEffectiveness
            servant.stats.strength += npEffectiveness

            enemy.evade = 0

            message.channel.send(`${servant.class}'s strength and agility rose`)
            break;
        case 148: // medusa lily
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]

            enemy.status.stun.active = true
            enemy.status.stun.duration += 1
            break;
        case 149: // maple
            if (servant.transformed === false) {
                servant.transformed = true

                instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`sorry...`) }, 0.05)
                instaKill();

                servant.evade += 10
                enemy.charge -= 1
                servant.charge += 1

                servant.stats.magic += enemy.stats.strength + enemy.stats.magic
                message.channel.send(`${servant.class}'s Devour applied.`)

            } else {
                secondNP = 'Hydra'
                secondNPImage = 'https://i.imgur.com/5NknldS.gif'
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]

                enemy.status.poison.active = true
                enemy.status.poison.duration += 5

                enemy.status.stun.active = true
                enemy.status.stun.duration += 2

                servant.stats.magic = servant.stats.magic * 0.9
                message.channel.send(`${servant.class}'s magic fell by 10%`)
            }
            break;

        case 150: // jiraiya
            servant.stats.agility += npEffectiveness
            servant.stats.strength += npEffectiveness

            enemy.status.confusion.active = true
            enemy.status.confusion.duration += 2

            message.channel.send(`${servant.class}'s strength and agility rose`)
            break;
        case 151: // joker
            if (enemy.stats.magic > servant.stats.magic) {
                let jokerMagic = servant.stats.magic
                servant.stats.magic = enemy.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = jokerMagic
            } else {
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            }

            if (servant.status.curse.active === true){
                servant.status.curse.active = false
                servant.status.curse.duration = 0
                if(enemy.currentHp <= enemy.maxHp * 0.2){
                    enemy.currentHp = 0
                } else{
                    enemy.currentHp -= enemy.maxHp * 0.2
                }
            }

            enemy.status.curse.active = true
            enemy.status.curse.duration += 10

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }

            debuffagility = enemy.stats.agility * (power / 1000);
            enemy.stats.agility -= debuffagility

            
            if (servant.currentHp <= servant.maxHp * 0.1) {
                servant.currentHp = 0
            } else {
                servant.currentHp -= servant.maxHp * 0.1
            }

            message.channel.send(`${enemy.class}'s agility fell`)
            break;
        case 152: // takuru
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            servant.takenDmg -= servant.takenDmg * (power / 1000)

            servant.stats.magic += npEffectiveness

            servant.damageBasedOnMagic = true

            servant.status.fear.active = true
            servant.status.fear.duration += 4

            message.channel.send(`${servant.class}'s defense rose\n${servant.class}'s magic rose\n${servant.class} will deal magic based damage from now on`)
            break;
        case 153: //tanya
            servant.damageBasedOnMagic = true
            servant.stats.agility += (npEffectiveness)
            servant.stats.magic += (npEffectiveness)
            servant.stats.luck += (npEffectiveness) 

            servant.status.curse.active = true
            servant.status.curse.duration += 8

            message.channel.send(`${servant.class}'s magic rose\n${servant.class}'s agility rose\n${servant.class}'s luck rose`)
            break;
        case 154: // yoshikage kira
            servant.transformed = true

            if(servant.revealed === true){
                message.channel.send(`Bites The Dust has been activated!`)
                
                servant.stats.magic += servant.stats.magic
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                servant.stats.magic = servant.stats.magic / 2

                servant.stats.luck += (npEffectiveness) * 1.25

                instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.3)
                instaKill();
                message.channel.send(`${servant.class}'s luck rose drastically`)
            } else{
                enemy.takeAttackDammage = [servant.inflictDammage, message, true]
                instaKill = chancify(() => { enemy.currentHp = 0; message.channel.send(`${enemy.class} died.`) }, 0.03)
                instaKill();
            }

            servant.stats.agility += (npEffectiveness)
            servant.stats.strength += (npEffectiveness)

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose`)
            break;
        case 155: // kiara
            crit = 1
            if (servant.stats.luck <= enemy.stats.luck) {
                crit = 1

            } else {
                critChance = 1 - (2 * enemy.stats.luck / (enemy.stats.luck + servant.stats.luck))
                // console.log(`chance for crit ${critChance}`)
                criticalHit = chancify(() => { crit = servant.critStr; message.channel.send('Critical hit!') }, critChance)
                criticalHit();
            }
            enemy.takeDammage((npEffectiveness) * crit)

            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 156: // santa salter
            servant.stats.magic += servant.stats.magic
            enemy.takeAttackDammage = [servant.inflictDammage, message, true]
            servant.stats.magic = servant.stats.magic / 2

            servant.charge += 2
            break;
        case 157: // megumin santa lancer
            servant.stats.agility += (npEffectiveness) * 1.25
            servant.stats.strength += (npEffectiveness) * 1.25

            servant.status.stun.active = false
            servant.status.stun.duration = 0
            servant.status.fear.active = false
            servant.status.fear.duration = 0

            servant.class = "Berserker"

            message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s agility drastically rose`)
            break;
        case 158: // aqua santa temptress
            heal = npEffectiveness * 4
            if (servant.currentHp + heal >= servant.maxHp) {
                servant.currentHp = servant.maxHp
            } else {
                servant.currentHp += heal
            }

            servant.stats.luck += (npEffectiveness) * 1.25

            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            debuffstrength = enemy.stats.strength * (power / 1000);
            enemy.stats.strength -= debuffstrength

            debuffmagic = enemy.stats.magic * (power / 1000);
            enemy.stats.magic -= debuffmagic

            enemy.takenDmg += enemy.takenDmg * (power / 1000)

            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell\n${enemy.class}'s defense fell`)

            if (enemy.status.curse.active === true) {
                enemy.status.curse.active = false
                enemy.status.curse.duration = 0
                enemy.stats.strength = enemy.stats.strength/2
                enemy.stats.magic = enemy.stats.magic/2
                message.channel.send(`${enemy.class}'s strength and magic fell by 50%`)
            }

            if (enemy.status.poison.active === true) {
                enemy.status.poison.active = false
                enemy.status.poison.duration = 0
                enemy.stats.strength = enemy.stats.strength / 2
                enemy.stats.magic = enemy.stats.magic / 2
                message.channel.send(`${enemy.class}'s strength and magic fell by 50%`)
            }

            message.channel.send(`${servant.class} HP was restored\n${servant.class}'s luck rose drastically`)
            break;
    }

    if (servant.transformed === true && secondNP){
        const emb = new MessageEmbed()
            .setAuthor(servant.class, servant.pictures[0])
            .setColor('#800b03')
            .setThumbnail(servant.pictures[3])
            .setTitle("**" + secondNP + "**")
            .setImage(secondNPImage)
        await message.channel.send(emb);
        if(msg){
            await message.channel.send(msg);
        }
        
    }
    
}

module.exports = np;
