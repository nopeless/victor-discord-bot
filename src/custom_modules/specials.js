const chancify = require('chancify');
const { MessageEmbed } = require('discord.js');

const np = async (servant, enemy, battlefield, message)=>{
    let transformServants = ["seto kaiba", "kira yoshikage", "dio brando", "kallen kozuki", "oda nobunaga", "asuka langley soryu", "ciel", "koneko toujou"]

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
    if (servant.class === "Caster" || servant.passive[0] == "All Classes Proficiency" || servant.passive[0] == "Double Summon (Caster)" ){
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
    let dmg = 0


    switch(servant.id){
        case 0:// emiya
            battlefield.background = "ubw2.png"
            servant.buffAgility(npEffectiveness)
            servant.buffMagic(npEffectiveness)
            servant.damageBasedOnMagic = true
            message.channel.send(`${servant.class}'s agility rose\n${servant.class}'s magic rose\n${servant.class}' will deal magic based damage from now on`)
            break;
        case 1:// heracles
            servant.buffEndurance(npEffectiveness/2)
            servant.guts = true
            message.channel.send(`${servant.class}'s endurance slightly rose`)
            break;
        case 2://gilles de rais
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 3://medusa
            enemy.stun(3)
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${enemy.class} got stunned (3 turns)`)
            break;
        case 4://kojirou
            servant.stats.luck += servant.stats.luck
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.luck = servant.stats.luck / 2
            break;
        case 5:// robin hood
            if(enemy.status.poison.active === true){
                let robinMagic = servant.stats.magic * 1.5
                servant.stats.magic += robinMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= robinMagic
            } else{
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 6://hassan of the cursed arm
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.05)
            break;
        case 7://cu
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.03)
            break;
        case 8:// gawain
            enemy.burn(3)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 9:// magikarp
            // do nothing
            break;
        case 10:// illya kaleid
        if(servant.transformed === false){
            servant.transformed = true
            servant.curse(7)
            servant.buffMagic(npEffectiveness * 1.25)
            servant.charge += 2
            servant.damageBasedOnMagic = true
            message.channel.send(`${servant.class}'s magic drastically rose\n${servant.class}' will deal magic based damage from now on`)
        } else{
            secondNP = 'Quintett Feuer'
            secondNPImage = 'https://i.imgur.com/d0ajAJt.gif'
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
        }
            break;
        case 11:// zero
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffAgility(npEffectiveness)
            enemy.debuffLuck(npEffectiveness)
            enemy.confuse(5)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell\n${enemy.class}'s luck fell`)

            instaKill = chancify(() => { enemy.instaKill(1); message.channel.send(`... to die.`) }, 0.08)
            instaKill();
            break;
        case 12:// suzaku
            servant.transformed = true
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness / 2)
            servant.buffDefence(npEffectiveness)
            message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility rose\n${servant.class}'s defense rose`)
            break;
        case 13://kallen
            servant.transformed = true
            power = npEffectiveness
            if (power > 800) {
                power = 800
            } 
            drain = Math.round(enemy.currentHp * (power / 1000))
            enemy.currentHp -= drain
            servant.heal(drain)
            servant.buffAgility(npEffectiveness)
            enemy.charge -= 1
            servant.charge += 1
            enemy.stun(2)
            message.channel.send(`${servant.class}'s agility rose\nenemy's HP has been drained\nenemy's NP Charge has been drained\n ${servant.class}'s endurance rose`)
            break;
        case 14://cc
            servant.guts = true
            servant.buffMagic(npEffectiveness / 2)
            enemy.confuse(3)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 15:// kurogane ikki
            servant.buffAgility(npEffectiveness * 1.25)
            servant.buffStrength(npEffectiveness * 1.25)
            servant.buffLuck(npEffectiveness * 1.25)
            servant.currentHp = servant.currentHp / 2
            message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s agility drastically rose\n${servant.class}'s luck drastically rose`)
            break;
        case 16:// esdeath
            enemy.freezee(6)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffMagic(npEffectiveness)
            message.channel.send(`${servant.class}'s magic rose`)
            break;
        case 17:// kiritsugu
            enemy.debuffMagic(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.npSeal(4)
            message.channel.send(`${enemy.class}'s magic fell`)
            break;
        case 18:// medea
            enemy.stats = enemy.baseStats
            let oldMaxHPMe = enemy.maxHp
            enemy.maxHp = enemy.stats.endurance * 10
            enemy.currentHp -= oldMaxHPMe - enemy.maxHp
            if (enemy.currentHp < 0) {
                enemy.currentHp = 1
            }
            enemy.takenDmg = 1
            enemy.critStr = 1.5
            message.channel.send(`${enemy.class}'s buffs and debuffs were removed`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 19:// sinon
            servant.buffLuck(npEffectiveness)
            servant.buffCriticalStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s luck rose`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 20:// kirito
            servant.transformed = true
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            break;
        case 21:// priestess
            servant.heal(npEffectiveness * 2)
            servant.buffDefence(npEffectiveness * 2)
            enemy.stun(2)
            message.channel.send(`${servant.class}'s defence rose drastically\n${servant.class}'s HP was slightly recovered`)
            break;
        case 22:// goblin slayer
            servant.buffStrength(npEffectiveness)
            servant.buffEndurance(npEffectiveness/2)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 23:// high elf archer
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 24:// spear hero
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 25:// sagittarius seiya
            servant.buffMagic(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.npSeal(3)
            servant.takeDammageFlat(servant.maxHp * 0.05)
            
            break;
        case 26:// lord grim
            servant.buffDefence(npEffectiveness)
            enemy.poison(3)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s defence rose`)
            break;
        case 27:// stella vermilion
            enemy.burn(6)
            servant.burn(6)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 28:// okabe
            servant.heal(npEffectiveness * 6)
            servant.buffCriticalStrength(npEffectiveness)
            servant.evade += 3
            servant.buffLuck(npEffectiveness * 1.25)
            servant.fear(7)
            servant.confuse(2)
            message.channel.send(`${servant.class}'s hp was significantly restored`)
            message.channel.send(`${servant.class}'s luck rose drastically\n${servant.class}'s critical strength rose`)
            break;
        case 29:// semiramis
            enemy.poison(10)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 30: // artoria
            servant.buffMagic(npEffectiveness / 2)

            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.npSeal(13)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 31:// nero
            servant.npSeal(7)

            servant.buffAgility(npEffectiveness / 2)
            servant.buffMagic(npEffectiveness / 2)
            servant.buffLuck(npEffectiveness / 2)
            servant.damageBasedOnMagic = true

            enemy.burn(7)
            battlefield.background = "theater.png"
            message.channel.send(`${servant.class}'s luck slightly rose\n${servant.class}'s agility slightly rose\n${servant.class}'s magic slightly rose\n${servant.class} will deal damage based on magic`)
            break;
        case 32:// shiki
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffCriticalStrength(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            enemy.instaKill(0.08)
            message.channel.send(`${enemy.class}'s defence fell`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            break;
        case 33://altera
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.debuffDefence(npEffectiveness)
            servant.buffMagic(npEffectiveness / 2)
            message.channel.send(`${enemy.class}'s defence fell\n ${servant.class}'s magic slightly rose`)
            break;
        case 34:// proto cu
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.02)
            servant.buffLuck(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s luck slightly rose`)
            break;
        case 35:// cu caster
            enemy.burn(6)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 36:// diarmuid
            enemy.stats = enemy.baseStats
            let oldMaxHPMd = enemy.maxHp
            enemy.maxHp = enemy.stats.endurance * 10
            enemy.currentHp -= oldMaxHPMd - enemy.maxHp
            if (enemy.currentHp < 0) {
                enemy.currentHp = 1
            }
            enemy.takenDmg = 1
            enemy.critStr = 1.5
            message.channel.send(`${enemy.class}'s bufffs and debuffs were removed`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.curse(3)
            break;
        case 37://achilles
            servant.buffAgility(npEffectiveness * 1.25)
            message.channel.send(`${servant.class}'s agility rose drastically`)
            break;
        case 38:// enkidu
            enemy.stun(3)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 39://shakespeare
            enemy.stun(1)
            enemy.confuse(4)
            enemy.fear(7)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 40://spartacus
            servant.buffStrength(npEffectiveness / 2)
            servant.buffEndurance(npEffectiveness / 2)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 41://ozy
            enemy.curse(7)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 42:// fran
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.stun(3)
            break;
        case 43:// salter
            servant.buffMagic(npEffectiveness / 2)

            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.npSeal(13)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 44:// hundred faces hassan
            servant.buffEndurance(npEffectiveness)
            message.channel.send(`${servant.class}'s endurance rose`)
            break;
        case 45:// Fujinon
            servant.buffLuck(npEffectiveness /2)
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.debuffDefence(npEffectiveness)
            message.channel.send(`${enemy.class}'s defence fell, ${servant.class}'s luck slightly rose`)
            break;
        case 46://atalanta
            servant.stats.agility += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.agility -= servant.stats.magic
            break;
        case 47:// tamamo
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            
            servant.heal(npEffectiveness * 2)
            servant.cureCurse()
            servant.cureFear()
            servant.charge += 1
            servant.buffMagic(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s hp was slightly restored \n${servant.class}'s magic slightly rose\n +1 NP Charge`)
            break;
        case 48:// drake
            servant.buffLuck(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 49:// jack the ripper
            if (enemy.traits.includes("female")) {
                let jackMagic = servant.stats.magic * 1.5
                servant.stats.magic += jackMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= jackMagic
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            servant.buffLuck(npEffectiveness)
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 50:// atalanta (alter)
            enemy.curse(5)
            enemy.fear(2)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 51:// vlad III
            enemy.fear(5)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 52:// li shuwen
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.03)
            break;
        case 53://suzuka gozen
            enemy.curse(4)
            servant.stats.agility += (npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.agility -= (npEffectiveness)

            servant.buffLuck(npEffectiveness)
            servant.buffMagic(npEffectiveness / 2)
            message.channel.send("Saber's luck rose\nSaber's magic slightly rose")
            break;
        case 54:// lancelot (berserker)
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness)
            message.channel.send("Berserker's agility rose\nBerserker's strength rose")
            break;
        case 55:// astolfo
            servant.buffAgility(npEffectiveness)
            message.channel.send("Rider's agility rose")

            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 56:// stain
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffAgility(npEffectiveness)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell`)
            enemy.stun(2)
            break;
        case 57:// henry jekyll & hyde
            servant.heal(npEffectiveness * 4)
            if(servant.transformed === false){
                servant.class = "Berserker"
                servant.buffStrength(npEffectiveness / 2)
                servant.transformed = true
                message.channel.send(`${servant.class}'s hp was restored \n${servant.class}'s strength slightly rose`)
            } else {
                servant.class = "Assassin"
                servant.buffAgility(npEffectiveness / 2)
                servant.transformed = false
                secondNP = servant.noblePhantasm.name
                secondNPImage = servant.noblePhantasm.image
                msg = (`${servant.class}'s hp was restored \n${servant.class}'s agility slightly rose`)
            }
            break;
        case 58:// iskandar
            servant.buffStrength(npEffectiveness * 1.25)
            message.channel.send(`${servant.class}'s strength rose drastically`)
            break;
        case 59:// nursery rhyme
            servant.heal(npEffectiveness * 4)
            servant.charge += 2
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s hp was restored\n NP charge +1\n${enemy.class}'s strength fell\n${enemy.class}'s defense fell`)
            break;
        case 60:// mata hari
            enemy.debuffDefence(npEffectiveness)
            enemy.debuffStrength(npEffectiveness)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s defense fell`)
            enemy.stun(1)
            enemy.confuse(3)
            break;
        case 61:// revy
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            enemy.fear(2)
            break;
        case 62: // darkness
            servant.buffEndurance(npEffectiveness * 1.25)
            message.channel.send(`${servant.class}'s endurance rose drastically`)
            break;
        case 63: // eugeo
            enemy.freezee(7)
            enemy.stun(3)
            enemy.npSeal(3)
            servant.freezee(7)
            enemy.debuffAgility(npEffectiveness / 2)
            servant.buffMagic(npEffectiveness / 2)
            message.channel.send(`${enemy.class}'s agility fell slightly\n${servant.class}'s magic rose slightly`)
            break;
        case 64:// siegfried
            servant.charge += 1
            if (enemy.traits.includes("dragon")) {
                let siegfriedMagic = servant.stats.magic * 1.5
                servant.stats.magic += siegfriedMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= siegfriedMagic
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 65:// yamamoto
            enemy.burn(7)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 66:// casshern
            servant.heal(npEffectiveness * 4)
            servant.buffStrength(npEffectiveness / 2)
            servant.buffAgility(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s strength and agility slightly rose\n${servant.class}'s hp was restored.`)
            break;
        case 67:// kaiba
            servant.transformed = true
            servant.buffMagic(npEffectiveness/2)
            servant.buffLuck(npEffectiveness)
            servant.buffEndurance(npEffectiveness)
            servant.damageBasedOnMagic = true
            enemy.fear(3)
            message.channel.send(`${servant.class}'s luck and endurance rose\n${servant.class}'s magic rose slightly\n${servant.class} will deal magic based damage from now on`)
            break;
        case 68:// seryu
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 69:// aizen
            enemy.confuse(7)
            servant.evade += 2
            enemy.debuffDefence(npEffectiveness)
            message.channel.send(`${enemy.class}'s defense fell\n${servant.class} +evade (1time)`)
            break;
        case 70:// lu bu
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 71:// Ishtar
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffMagic(npEffectiveness)
            message.channel.send(`${servant.class}'s magic rose`)
            break;
        case 72:// sword hero
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 73:// gilgamesh
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            enemy.fear(2)
            break;
        case 74:// arjuna
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)

            enemy.burn(3)
            break;
        case 75:// truth
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.fear(7)
            enemy.curse(7)
            break;
        case 76:// jaguar man
            enemy.debuffLuck(npEffectiveness)
            enemy.confuse(1)
            break;
        case 77: // yu miayoi
            servant.stats = servant.baseStats
            let oldMaxHPMy = enemy.maxHp
            enemy.maxHp = enemy.stats.endurance * 10
            enemy.currentHp -= oldMaxHPMy - enemy.maxHp
            if (enemy.currentHp <= 0) {
                enemy.currentHp = 1
            }
            servant.takenDmg = 1
            servant.critStr = 1.5
            message.channel.send(`${servant.class}'s buffs and debuffs were removed.`)
            enemy.curse(5)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 78:// light yagami
            if(enemy.revealed === true){
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                enemy.confuse(3)
                enemy.curse(7)
                enemy.instaKill(0.06)
            } else{
                message.channel.send(`Nothing happened.`)
            }
            break;
        case 79:// monika
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffMagic(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            enemy.npSeal(1)
            enemy.stun(1)
            enemy.fear(4)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell\n${enemy.class}'s defence fell`)
            break;
        case 80:// jeanne
            servant.buffDefence(npEffectiveness)
            servant.heal(npEffectiveness * 6)
            message.channel.send(`${servant.class}'s defence rose\n${servant.class}'s hp was significantly restored`)
            break;
        case 81:// ichigo kurosaki
            if(servant.transformed === false){
                servant.transformed = true
                servant.buffAgility(npEffectiveness * 1.25)
                servant.buffStrength(npEffectiveness/2)
                servant.buffMagic(npEffectiveness *1.25)
                message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility greatly rose\n${servant.class}'s magic greatly rose`)
            }else{
                secondNP = 'Hollow Getsuga Tenshō'
                secondNPImage = 'https://i.imgur.com/UR5j2NC.gif'
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 82:// passionlip
            servant.heal(npEffectiveness * 4)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 83:// kid gil
            enemy.stun(2)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 84:// renji
            if (servant.transformed === false) {
                servant.transformed = true
                servant.buffStrength(npEffectiveness)
                servant.buffMagic(npEffectiveness / 2)
                servant.buffEndurance(npEffectiveness)
                message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance rose\n${servant.class}'s magic slightly rose`)
            } else {
                secondNP = 'Hikotsu Taihō'
                secondNPImage = 'https://i.imgur.com/h51DXNB.gif'
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 85:// kazuma
            power = servant.stats.luck + servant.noblePhantasm.power
            if (power > 800) {
                power = 800
            }
            let kazumaNumber = Math.floor(Math.random() * 5)
            if(kazumaNumber === 0){
                debuffstrength = Math.round(enemy.stats.strength * (power / 1000))
                enemy.stats.strength -= debuffstrength
                servant.stats.strength += debuffstrength
                message.channel.send(`part of ${enemy.class}'s strength was stolen`)
            } else if (kazumaNumber === 1){
                debuffmagic = Math.round(enemy.stats.magic * (power / 1000))
                enemy.stats.magic -= debuffmagic
                servant.stats.magic += debuffmagic
                message.channel.send(`part of ${enemy.class}'s magic was stolen`)
            } else if (kazumaNumber === 2) {
                debuffluck = Math.round(enemy.stats.luck * (power / 1000))
                enemy.stats.luck -= debuffluck
                servant.stats.luck += debuffluck
                message.channel.send(`part of ${enemy.class}'s luck was stolen`)
            } else if (kazumaNumber === 3) {
                debuffagility = Math.round(enemy.stats.agility * (power / 1000))
                enemy.stats.agility -= debuffagility
                servant.stats.agility += debuffagility
                message.channel.send(`part of ${enemy.class}'s agility was stolen`)
            } else if (kazumaNumber === 4) {
                drain = Math.round(enemy.stats.endurance * (power / 1000))
                currentdrain = Math.round(enemy.currentHp * (power / 1000))
                enemy.currentHp -= currentdrain 
                enemy.maxHp -= drain * 10
                enemy.endurance -= drain 
                if(enemy.currentHp > enemy.maxHp){
                    enemy.currentHp = enemy.maxHp
                }
                servant.maxHp += drain * 10
                servant.endurance += drain
                servant.currentHp += currentdrain
                if (servant.currentHp > servant.maxHp) {
                    servant.currentHp = servant.maxHp
                }
                message.channel.send(`part of ${enemy.class}'s endurance was stolen`)
            }

            if (enemy.traits.includes("female")) {
                enemy.stun(2)
                enemy.npSeal(2)
                message.channel.send(`Panties were stolen`)
            }
            break;
        case 86:// altair
            servant.buffDefence(npEffectiveness)
            enemy.debuffMagic(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s defence rose\n${enemy.class}'s magic fell\n`)
            break;
        case 87:// blitz talker
            enemy.debuffMagic(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${enemy.class}'s defence fell\n${enemy.class}'s magic fell\n`)
            break;
        case 88:// fuuma kotarou
            enemy.debuffDefence(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.confuse(2)
            message.channel.send(`${enemy.class}'s defence fell`)
            break;
        case 89://leonardo watch
            if(enemy.revealed === false){
                enemy.revealed = true
                enemy.stats.strength = enemy.stats.strength/2
                enemy.stats.magic = enemy.stats.magic / 2
                message.channel.send(`Enemy True Name was revealed.\nIt's ${enemy.name[0]}!\n${enemy.name[0]}'s strength and magic fell`)
            }
            servant.cureConfusion()
            enemy.confuse(5)
            servant.buffLuck(npEffectiveness)
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 90://alma (sacred seven)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffLuck(npEffectiveness)
            servant.buffStrength(npEffectiveness/2)
            message.channel.send(`${servant.class}'s luck rose\n${servant.class}'s strength slightly rose`)
            break;
        case 91://kuro (f/kaleid)
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2
            break;
        case 92:// nobu
            battlefield.background = "papiyas.png"
            servant.transformed = true
            servant.buffStrength(npEffectiveness * 1.25)
            enemy.burn(7)
            servant.burn(5)
            if (enemy.traits.includes("divine")) {
                enemy.curse(7)
            }
            message.channel.send(`${servant.class}'s strength rose drastically`)
            break;
        case 93://okita
            servant.buffLuck(npEffectiveness * 1.25)
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${servant.class}'s luck rose drastically`)
            break;
        case 94:// megumin
            let meguMagic = servant.stats.magic * 2
            servant.stats.magic += meguMagic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic -= meguMagic
            servant.npSeal(24)
            servant.stun(24)
            break;
        case 95:// ivan the terrible
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.debuffDefence(npEffectiveness)
            message.channel.send(`${enemy.class}'s defence fell`)
            break;
        case 96:// magane
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.confuse(5)
            enemy.stats.strength += enemy.stats.strength
            servant.buffDefence(npEffectiveness)
            message.channel.send(`${servant.class}'s defense rose\n${enemy.class}'s strength rose`)
            break;
        case 97:// eresh
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffStrength(npEffectiveness) 
            servant.buffMagic(npEffectiveness) 
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s magic rose`)
            break;
        case 98:// iri (white)
            servant.heal(npEffectiveness * 6)
            servant.cureCurse()
            servant.cureFear()
            servant.cureBurn()
            servant.cureFreeze()
            servant.curePoison()
            servant.cureConfusion()
            servant.cureStun()
            servant.guts = true
            break;
        case 99:// black iri
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2
            enemy.guts = false
            enemy.curse(10)
            break;
        case 100:// bedivere
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2
            servant.takeDammageFlat(servant.maxHp * 0.1)
            break;
        case 101:// scat
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(2)
            enemy.instaKill(0.05)
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
                    dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                    servant.stats.magic -= aquaMagic
                }else{
                    servant.stats.magic += servant.stats.magic
                    dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                    servant.stats.magic = servant.stats.magic / 2
                }
                servant.guts = true
            }
            break;
        case 103:// sakuya
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])// agility check in Unit
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffAgility(npEffectiveness)
            enemy.charge -= 1
            message.channel.send(`${servant.class}'s agility rose`) 
            break;
        case 104:// sora
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.npSeal(3)
            enemy.confuse(3)
            break;
        case 105:// mordred
            if (enemy.name.includes("artoria pendragon") || enemy.name.includes("arthur pendragon")) {
                let mordredMagic = servant.stats.magic * 1.5
                servant.stats.magic += mordredMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= mordredMagic
            } else {
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2
            }
            break;
        case 106:// ainz
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2
            enemy.burn(2)
            break;
        case 107:// akutagawa
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.fear(3)
            break;
        case 108:// dio
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.npSeal(2)
            servant.transformed = true
            enemy.stun(2)
            servant.buffStrength(npEffectiveness)
            servant.buffAgility(npEffectiveness/2)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility slightly rose`)
            break;
        case 109:// shirou emiya
            servant.transformed = true
            servant.buffStrength(npEffectiveness * 1.25)
            message.channel.send(`${servant.class}'s strength drastically rose`)
            break;
        case 110:// rin tohsaka
            if (servant.transformed === false) {
                servant.transformed = true
                servant.guts = true
            } else {
                secondNP = 'Jewel Magecraft'
                secondNPImage = 'https://i.imgur.com/WO5F4Yy.gif'
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.buffDefence(npEffectiveness)
                message.channel.send(`${servant.class}'s defense rose`)
            }
            break;
        case 111:// illya (f/sn)
            servant.buffStrength(npEffectiveness)
            servant.buffEndurance(npEffectiveness/2)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 112:// karna
            servant.buffStrength(npEffectiveness)
            servant.buffMagic(npEffectiveness)
            servant.buffAgility(npEffectiveness/2)
            enemy.burn(4)

            if (enemy.traits.includes("divine")) {
                let karnaMagic = servant.stats.magic * 1.5
                servant.stats.magic += karnaMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= karnaMagic
            } else {
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2
            }

            servant.takenDmg += servant.takenDmg
            servant.stats.luck = servant.stats.luck/2

            servant.currentHp = Math.round(3/4 * servant.currentHp)
            servant.stats.endurance = Math.round(3/4 * servant.stats.endurance)
            servant.maxHp = servant.stats.endurance  *10

            servant.npSeal(30)

            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s magic rose\n${servant.class}'s agility slightly rose\n${servant.class}'s defense fell\n${servant.class}'s luck fell\n${servant.class}'s endurance fell`)
            break;
        case 113:// misaka (railgun)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(4)
            break;
        case 114:// musashi
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            enemy.stats = enemy.baseStats
            enemy.takenDmg = 1
            enemy.critStr = 1.5
            break;
        case 115:// umi sonoda
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.05)
            servant.stun(2)
            enemy.debuffStrength(npEffectiveness)
            message.channel.send(`${enemy.class}'s strength fell`)
            break;
        case 116:// ikaros
            servant.buffMagic(npEffectiveness)
            message.channel.send(`${servant.class}'s magic rose`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(2)
            break;
        case 117:// cirno
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.freezee(4)
            enemy.npSeal(1)
            servant.cureBurn()
            break;
        case 118:// king hassan
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.08)
            servant.guts = true
            servant.charge += 1
            break;
        case 119:// neo
            servant.buffAgility(npEffectiveness/2)
            servant.buffDefence(npEffectiveness)
            servant.evade += 1
            message.channel.send(`${servant.class}'s agility slightly rose\n${servant.class}'s defense rose\n +evade (1time)`)
            break;
        case 120:// medb
            if (enemy.traits.includes("male")) {
                let medbMagic = servant.stats.magic * 1.5
                servant.stats.magic += medbMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= medbMagic
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                message.channel.send(`Dealt ${dmg} damage`)
            }
            enemy.fear(4)
            servant.heal(npEffectiveness * 4)
            message.channel.send(`${servant.class}'s HP was restored\n`)
            break;
        case 121:// archoria
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.charge -= 1
            servant.charge += 4
            break;
        case 122:// mordred rider
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.charge -= 1
            servant.buffAgility(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s agility rose slighttly`)
            break;
        case 123:// tamamo lancer
            if (enemy.traits.includes("male")) {
                let tamamoLancerMagic = servant.stats.magic * 1.5
                servant.stats.magic += tamamoLancerMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= tamamoLancerMagic

                enemy.stun(3)
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 124:// scathach summer
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.03)
            break;
        case 125:// sumzaku
            if (servant.status.burn.active === true) {
                servant.buffStrength(npEffectiveness * 1.25)
                servant.buffEndurance(npEffectiveness * 1.25)
                servant.heal(npEffectiveness * 6)
                message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s endurance drastically rose`)
                message.channel.send(`${servant.class}'s hp was significantly restored`)
            } else {
                servant.buffStrength(npEffectiveness)
                servant.buffEndurance(npEffectiveness)
                servant.heal(npEffectiveness * 4)
                message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s endurance rose`)
                message.channel.send(`${servant.class}'s hp was  restored`)
            }
            break;
        case 126:// misaka summer
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffMagic(npEffectiveness/2)
            enemy.debuffAgility(npEffectiveness/2)
            enemy.stun(2)
            message.channel.send(`${enemy.class}'s agility fell slightly`)
            message.channel.send(`${servant.class}'s magic slightly rose`)
            break;
        case 127:// esdeath summer
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.confuse(3)
            servant.buffAgility(npEffectiveness)
            servant.evade += 1 
            enemy.freezee(6)
            message.channel.send(`${servant.class}'s agility rose`)
            break;
        case 128:// sumi
            enemy.stun(1)
            enemy.npSeal(1)
            enemy.confuse(3)
            enemy.debuffDefence(npEffectiveness)
            servant.buffLuck(npEffectiveness)
            message.channel.send(`${enemy.class}'s defense fell`)
            message.channel.send(`${servant.class}'s luck rose`)
            break;
        case 129:// florence
            servant.curePoison()
            servant.heal(npEffectiveness * 4)
            power = npEffectiveness
            enemy.debuffStrength(npEffectiveness/2)
            enemy.debuffMagic(npEffectiveness/2)
            message.channel.send(`${servant.class}'s hp was restored`)
            message.channel.send(`${enemy.class}'s strength fell slightly\n${enemy.class}'s magic fell slightly`)
            break;
        case 130:// todoroki
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(3)
            enemy.burn(3)
            enemy.freezee(3)
            break;
        case 131:// tohka
            servant.buffMagic(npEffectiveness * 1.25)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s magic drastically rose\n${servant.class}'s strength rose`)
            break;
        case 132:// uchicha
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(3)
            enemy.burn(3)
            enemy.confuse(10)
            servant.npSeal(10)
            break;
        case 133:// hachiman
            enemy.debuffDefence(npEffectiveness)
            if (enemy.traits.includes("female")) {
                enemy.debuffDefence(npEffectiveness)
                message.channel.send(`${enemy.class}'s defence fell drastically`)
            } else{
                message.channel.send(`${enemy.class}'s defence fell`)
            }
            enemy.stun(2)
            servant.curse(3)
            break;
        case 134:// asuka
            servant.transformed = true
            if (enemy.class == "Foreigner" ) {
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness)
            servant.buffEndurance(npEffectiveness/2)
            servant.npSeal(10)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose\n${servant.class}'s endurance slightly rose`)
            break;
        case 135:// akame
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.instaKill(0.06)
            enemy.poison(3)
            enemy.curse(3)
            servant.curse(6)
            servant.buffAgility(npEffectiveness * 1.25)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose drastically`)
            break;
        case 136:// rumia
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            drain = Math.round(enemy.currentHp * (power / 1000))
            enemy.currentHp -= drain
            servant.heal(drain)
            enemy.fear(3)
            enemy.confuse(4)
            servant.confuse(4)
            message.channel.send(`${servant.class}'s restored some of their HP`)
            break;
        case 137:// madara
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffMagic(npEffectiveness)
            enemy.confuse(5)
            enemy.charge -= 1
            enemy.stun(2)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell`)
            break;
        case 138:// mhx
            if (enemy.class == "Saber") {
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            servant.buffAgility(npEffectiveness) 
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose`)
            break;
        case 139:// mhxa
            if (enemy.class == "Saber") {
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            servant.buffStrength(npEffectiveness)

            servant.heal(npEffectiveness * 2)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s HP was slightly restored`)
            break;
        case 140:// saber lily
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.heal(npEffectiveness * 4)
            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 141:// takuto
            if (servant.transformed === false) {
                servant.transformed = true
                battlefield.background = "zerotime.png"
                servant.buffAgility(npEffectiveness)
                servant.buffMagic(npEffectiveness)
                servant.buffLuck(npEffectiveness)
                servant.buffStrength(npEffectiveness / 2)
                enemy.debuffAgility(npEffectiveness/2)
                message.channel.send(`${servant.class}'s strength slightly rose\n${servant.class}'s agility rose\n${servant.class}'s magic rose\n${servant.class}'s luck rose`)
                message.channel.send(`${enemy.class}'s agility fell slightly`)
            } else {
                secondNP = 'Pile Crusher'
                secondNPImage = 'https://i.imgur.com/wJGb2UI.gif'
                servant.buffMagic(npEffectiveness)
                servant.buffLuck(npEffectiveness)
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                message.channel.send(`${servant.class}'s magic rose\n${servant.class}'s luck rose\n${servant.class}: "**It's a punch!**"`)
            }
            break;

        case 142: //arcueid
            battlefield.background = "crimsonmoon.png"

            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            enemy.stun(2)
            enemy.debuffAgility(npEffectiveness/2)
            message.channel.send(`${enemy.class}'s agility fell slightly`)
            break;

        case 143: // ciel
            servant.transformed = true
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.curse(3)
            servant.buffStrength(npEffectiveness / 2)
            servant.buffAgility(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s strength and agility rose slightly`)
            break;
        
        case 144: // tohno shiki
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.buffCriticalStrength(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            enemy.instaKill(0.06)
            message.channel.send(`${enemy.class}'s defence fell`)
            message.channel.send(`${servant.class}'s critical strength rose`)
            break;
        
        case 145: // nrvnqsr chaos
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffAgility(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s agility fell`)
            break;
        
        case 146: // tohno akiha
            servant.heal(npEffectiveness * 2)
            enemy.curse(4)
            enemy.burn(4)
            message.channel.send(`${servant.class}'s HP was slightly recovered`)
            break;
        case 147: // alice sao
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness)
            enemy.evade = 0
            message.channel.send(`${servant.class}'s strength and agility rose`)
            break;
        case 148: // medusa lily
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            enemy.stun(1)
            break;
        case 149: // maple
            if (servant.transformed === false) {
                servant.transformed = true
                enemy.instaKill(0.05)
                servant.evade += 10
                enemy.charge -= 1
                servant.charge += 1
                servant.stats.magic += enemy.stats.strength + enemy.stats.magic
                message.channel.send(`${servant.class}'s Devour applied.`)
            } else {
                secondNP = 'Hydra'
                secondNPImage = 'https://i.imgur.com/5NknldS.gif'
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                enemy.poison(5)
                enemy.stun(2)
                servant.stats.magic = servant.stats.magic * 0.9
                message.channel.send(`${servant.class}'s magic fell by 10%`)
            }
            break;

        case 150: // jiraiya
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness)
            enemy.confuse(2)
            message.channel.send(`${servant.class}'s strength and agility rose`)
            break;
        case 151: // joker
            if (enemy.stats.magic > servant.stats.magic) {
                let jokerMagic = servant.stats.magic
                servant.stats.magic = enemy.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = jokerMagic
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            }
            if (servant.status.curse.active === true){
                servant.cureCurse()
                enemy.takeDammageFlat(enemy.maxHp * 0.2)
            } else{
                servant.takeDammageFlat(servant.maxHp * 0.1)
            }
            enemy.curse(10)
            enemy.debuffAgility(npEffectiveness)
            message.channel.send(`${enemy.class}'s agility fell`)
            break;
        case 152: // takuru
            if(servant.status.npSeal.active === true){
                npEffectiveness = npEffectiveness *2
                servant.buffDefence(npEffectiveness)
                servant.buffMagic(npEffectiveness)
                servant.damageBasedOnMagic = true
            } else{
                servant.buffDefence(npEffectiveness)
                servant.buffMagic(npEffectiveness)
                servant.damageBasedOnMagic = true
                servant.fear(4)
            }
            message.channel.send(`${servant.class}'s defense rose\n${servant.class}'s magic rose\n${servant.class} will deal magic based damage from now on`)
            break;
        case 153: //tanya
            servant.damageBasedOnMagic = true
            servant.buffAgility(npEffectiveness)
            servant.buffMagic(npEffectiveness)
            servant.buffLuck(npEffectiveness) 
            servant.curse(8)
            message.channel.send(`${servant.class}'s magic rose\n${servant.class}'s agility rose\n${servant.class}'s luck rose`)
            break;
        case 154: // yoshikage kira
            servant.transformed = true
            if(servant.revealed === true){
                message.channel.send(`Bites The Dust has been activated!`)
                
                servant.stats.magic += servant.stats.magic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic = servant.stats.magic / 2

                servant.buffLuck(npEffectiveness * 1.25)
                enemy.instaKill(0.3)
                message.channel.send(`${servant.class}'s luck rose drastically`)
            } else{
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                message.channel.send(`Dealt ${dmg} damage`)
                enemy.instaKill(0.03)
            }
            servant.buffAgility(npEffectiveness)
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose`)
            break;
        case 155: // kiara
            dmg = enemy.takeSureHitNP([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.heal(npEffectiveness * 4)
            message.channel.send(`${servant.class}'s HP was restored`)
            break;
        case 156: // santa salter
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.charge += 2
            break;
        case 157: // megumin santa lancer
            servant.buffAgility(npEffectiveness * 1.25)
            servant.buffStrength(npEffectiveness * 1.25)

            servant.cureStun()
            servant.cureFear()
            servant.class = "Berserker"
            message.channel.send(`${servant.class}'s strength drastically rose\n${servant.class}'s agility drastically rose`)
            break;
        case 158: // aqua santa temptress
            servant.heal(npEffectiveness * 4)
            servant.buffLuck(npEffectiveness * 1.25)
            enemy.debuffStrength(npEffectiveness)
            enemy.debuffMagic(npEffectiveness)
            enemy.debuffDefence(npEffectiveness)
            message.channel.send(`${enemy.class}'s strength fell\n${enemy.class}'s magic fell\n${enemy.class}'s defense fell`)

            if (enemy.status.curse.active === true) {
                enemy.cureCurse()
                enemy.stats.strength = enemy.stats.strength/2
                enemy.stats.magic = enemy.stats.magic/2
                message.channel.send(`${enemy.class}'s strength and magic fell by 50%`)
            }

            if (enemy.status.poison.active === true) {
                enemy.curePoison()
                enemy.stats.strength = enemy.stats.strength / 2
                enemy.stats.magic = enemy.stats.magic / 2
                message.channel.send(`${enemy.class}'s strength and magic fell by 50%`)
            }

            message.channel.send(`${servant.class} HP was restored\n${servant.class}'s luck rose drastically`)
            break;
        case 159: // caster gil
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage \n${servant.class} will deal magic based damage from now on`)
            enemy.burn(3)
            enemy.stun(1)
            servant.damageBasedOnMagic = true
            break;
        case 160: // koneko
            servant.transformed = true
            servant.heal(npEffectiveness * 2)
            servant.buffStrength(npEffectiveness)
            servant.buffAgility(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose\n${servant.class}'s Hp was lightly restored`)
            break;
        case 161: // mio
            servant.buffStrength(npEffectiveness)
            servant.buffAgility(npEffectiveness)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            servant.evade += 1
            message.channel.send(`${servant.class}'s strength rose\n${servant.class}'s agility rose\nDealt ${dmg} damage`)
            break;
        case 162: // reg
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.stats.agility = servant.stats.agility * 0.8

            enemy.burn(3)
            servant.stun(2)
            message.channel.send(`${servant.class}'s agility fell by 20%`)
            break;
        case 163: // mirai
            let miraiEnd = servant.stats.endurance
            servant.currentHp = Math.round(servant.currentHp * 0.9)
            servant.stats.endurance = Math.round(servant.stats.endurance * 0.9)
            servant.maxHp = servant.stats.endurance * 10

            servant.stats.strength += miraiEnd - servant.stats.endurance

            servant.buffStrength(npEffectiveness)
            servant.buffDefence(npEffectiveness)
            message.channel.send(`part of ${servant.class}'s endurance was converted to strength\n${servant.class}'s strength rose\n${servant.class}'s defense rose`)
            break;
        case 164:// ken kaneki
            if (servant.transformed === false) {
                servant.transformed = true
                enemy.fear(2)

                servant.buffAgility(npEffectiveness)
                servant.buffStrength(npEffectiveness)
                servant.buffEndurance(npEffectiveness/ 2)
                message.channel.send(`${servant.class}'s endurance slightly rose\n${servant.class}'s agility rose\n${servant.class}'s strength rose`)
            } else {
                secondNP = 'Dragon Kakuja'
                secondNPImage = 'https://i.imgur.com/5bOw1m0.gif'
                servant.buffEndurance(npEffectiveness * 1.25)
                servant.buffStrength(npEffectiveness / 2)
                servant.stats.agility = servant.stats.agility * 0.8
                enemy.poison(3)
                servant.poison(3)
                servant.npSeal(8)
                message.channel.send(`${servant.class}'s endurance rose drastically\n${servant.class}'s strength slightly rose\n${servant.class}'s agility fell by 20%`)
            }
            break;
        case 165: // space ishtar
            servant.stats.magic += servant.stats.magic
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            servant.stats.magic = servant.stats.magic / 2

            servant.buffAgility(npEffectiveness / 2)
            servant.buffStrength(npEffectiveness / 2)
            servant.buffMagic(npEffectiveness / 2)

            message.channel.send(`${servant.class}'s strength, agility and magic rose slightly`)
            break;
        case 166: // itachi
            servant.buffEndurance(npEffectiveness/2)
            servant.buffDefence(npEffectiveness)
            servant.damageBasedOnMagic = true
            enemy.stun(2)
            enemy.npSeal(2)

            servant.takeDammageFlat(servant.maxHp * 0.05)
            message.channel.send(`${servant.class}'s endurance slightly rose\n${servant.class}'s defence rose\n${servant.class} will deal normal damage based on magic`)
            break;
        case 167: // momon
            servant.buffStrength(npEffectiveness)
            message.channel.send(`${servant.class}'s strength rose`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])// check in Unit
            message.channel.send(`Dealt ${dmg} damage`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 168: // nero caster
            servant.buffMagic(npEffectiveness)
            enemy.evade = 0
            message.channel.send(`${servant.class}'s magic rose`)

            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            
            enemy.confuse(3)
            break;
        case 169: // maid alter
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)

            enemy.debuffAgility(npEffectiveness)
            message.channel.send(`${enemy.class}'s agility fell`)
            break;
        case 170: // nobuzerker
            if (enemy.traits.includes("divine")) {
                let nobuMagic = servant.stats.magic * 1.5
                servant.stats.magic += nobuMagic
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                message.channel.send(`Dealt ${dmg} damage`)
                servant.stats.magic -= nobuMagic
            } else {
                dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                message.channel.send(`Dealt ${dmg} damage`)
            }
            break;
        case 171: // ishtar rider
            servant.buffAgility(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s agility rose slighttly`)
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 172: // darkness saber
            servant.buffStrength(npEffectiveness * 1.25)
            servant.buffEndurance(npEffectiveness / 2)
            message.channel.send(`${servant.class}'s strength rose drastically\n${servant.class}'s endurance slightly rose`)
            break;
        case 173: // maple rider
            servant.heal(npEffectiveness * 8)
            servant.cureBurn()
            servant.cureFreeze()
            message.channel.send(`${servant.class}'s HP was significantly restored`)
            break;
        case 174: // sinon ruler
            message.channel.send(`${enemy.class}'s buffs and were removed`)
            if(enemy.baseStats.strength < enemy.stats.strength){
                let oldStr = enemy.stats.strength
                enemy.stats.strength = enemy.baseStats.strength
                enemy.stats.strength -= oldStr - enemy.baseStats.strength
                if(enemy.stats.strength <= 0){
                    enemy.stats.strength = 1
                }
                message.channel.send(`${enemy.class}'s strength fell`)
            }
            if(enemy.baseStats.agility < enemy.stats.agility){
                let oldAgi = enemy.stats.agility
                enemy.stats.agility = enemy.baseStats.agility
                enemy.stats.agility -= oldAgi - enemy.baseStats.agility
                if (enemy.stats.agility <= 0) {
                    enemy.stats.agility = 1
                }
                message.channel.send(`${enemy.class}'s agility fell`)
            }
            if (enemy.baseStats.magic < enemy.stats.magic) {
                let oldMag = enemy.stats.magic
                enemy.stats.magic = enemy.baseStats.magic
                enemy.stats.magic -= oldMag - enemy.baseStats.magic
                if (enemy.stats.magic <= 0) {
                    enemy.stats.magic = 1
                }
                message.channel.send(`${enemy.class}'s magic fell`)
            }
            if (enemy.baseStats.luck < enemy.stats.luck) {
                let oldLuc = enemy.stats.luck
                enemy.stats.luck = enemy.baseStats.luck
                enemy.stats.luck -= oldLuc - enemy.baseStats.luck
                if (enemy.stats.luck <= 0) {
                    enemy.stats.luck = 1
                }
                message.channel.send(`${enemy.class}'s luck fell`)
            } 
            if (enemy.baseStats.endurance < enemy.stats.endurance){
                let oldMaxHPMs = enemy.maxHp
                enemy.maxHp = enemy.stats.endurance * 10
                enemy.currentHp -= oldMaxHPMs - enemy.maxHp
                if (enemy.currentHp < 0) {
                    enemy.currentHp = 1
                }
            }
            if(enemy.takenDmg < 1){
                enemy.takenDmg = 1
            }
            if(enemy.critStr > 1.5){
                enemy.critStr = 1.5
            }
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
        case 175: // renji lancer
            servant.buffAgility(npEffectiveness * 1.25)
            message.channel.send(`${servant.class}'s agility rose drastically`)
            servant.takeDammageFlat(servant.maxHp * 0.05)
            break;
        case 176: // revy archer
            if (servant.status.burn.active == true){
                for (let i = 0; i < servant.status.burn.duration; i++) {
                    dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
                    message.channel.send(`Dealt ${dmg} damage`)
                }
            }
            dmg = enemy.takeAttackDammage([servant.inflictDammage, message, true])
            message.channel.send(`Dealt ${dmg} damage`)
            break;
    }

    if (servant.transformed === true && secondNP){
        const emb = new MessageEmbed()
            .setAuthor(servant.class, servant.pictures[0])
            .setColor('#800b03')
            .setThumbnail(servant.pictures[3])
            .setTitle("**" + secondNP + "**")
            .setDescription(servant.noblePhantasm.text)
            .setImage(secondNPImage)
        await message.channel.send(emb);
        if(msg){
            await message.channel.send(msg);
        }
        
    }
    
}

module.exports = np;
