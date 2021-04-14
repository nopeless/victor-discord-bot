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
            mob.stats.magic += npEffectiveness / 2
            message.channel.send('Enemy magic rose')
            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;
        case 1:// skeleton
            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;
        case 2:// golem
            power = npEffectiveness
            if (power > 800) {
                power = 800
            }
            mob.takenDmg -= mob.takenDmg * (power / 1000)
            message.channel.send('Enemy defense rose')
            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;
        case 3:// ghost
            enemy.status.curse.active = true
            enemy.status.curse.duration += 2

            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;
        case 4:// wyvern
            enemy.status.burn.active = true
            enemy.status.burn.duration += 2

            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;
        case 5:// crix
            enemy.status.poison.active = true
            enemy.status.poison.duration += 2

            enemy.takeAttackDammage = [mob.inflictDammage, message, true]
            break;

    }
    
    
}

module.exports = mobNp;
