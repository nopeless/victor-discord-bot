const { MessageEmbed } = require('discord.js');

const mobNp = async (mob, enemy, battlefield, message) => {

        const embed = new MessageEmbed()
            .setAuthor(mob.class)
            .setColor('#800b03')
            .setThumbnail(mob.pictures[1])
            .setTitle(mob.noblePhantasm.text)
            .setDescription("**" + mob.noblePhantasm.name + "**")
            .setImage(mob.noblePhantasm.image)
        await message.channel.send(embed);



    let npEffectiveness = mob.stats.magic + mob.noblePhantasm.power

    mob.noblePhantasm.canBeUsed = false
    mob.charge = 0

    switch (mob.id) {
        case 0:// creeper
            mob.currentHp = mob.currentHp / 2
            mob.buffMagic(npEffectiveness)
            message.channel.send('Enemy magic rose')
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 1:// skeleton
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 2:// golem
            mob.buffDefence(npEffectiveness)
            message.channel.send('Enemy defense rose')
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 3:// ghost
            enemy.curse(2)

            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 4:// wyvern
            enemy.burn(2)

            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 5:// crix
            enemy.poison(2)

            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 6: //red bug
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            mob.buffStrength(npEffectiveness)
            message.channel.send('Enemy strength rose')
            break;
        case 7: // golbat
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 8: // hollow
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            mob.buffMagic(npEffectiveness)
            message.channel.send('Enemy magic rose')
            break;
        case 9: // kuriboh
            mob.buffLuck(npEffectiveness)
            mob.evade += 1
            message.channel.send('Enemy luck rose')
            break;
        case 10: // goomba
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 11: // oni
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            break;
        case 12: //misaka
            enemy.takeAttackDammage([mob.inflictDammage, message, true])
            enemy.stun(2)
            break;

    }
    
    
}

module.exports = mobNp;
