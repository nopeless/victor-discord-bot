
const spellLvlUp = (spell, message)=>{
    switch (spell.spellType) {
        case 'damage':
            spell.power += 10
            spell.manaNeeded += 5

            break;

        case 'heal':
            spell.power += 10
            spell.manaNeeded += 5
            
            break;

        case 'buffStrength':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'buffDefence':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'buffAgility':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'buffMagic':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'buffLuck':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'debuffStrength':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'debuffDefence':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'debuffAgility':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'debuffMagic':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'debuffLuck':
            spell.power += 10
            spell.manaNeeded += 5
            break;

        case 'cureBurn':
            spell.manaNeeded -= 5
            break;

        case 'cureCurse':
            spell.manaNeeded -= 5
            break;

        case 'cureStun':
            spell.manaNeeded -= 5
            break;

        case 'cureFreeze':
            spell.manaNeeded -= 5
            break;

        case 'cureNpSeal':
            spell.manaNeeded -= 5
            break;

        case 'cureConfusion':
            spell.manaNeeded -= 5
            break;

        case 'cureFear':
            spell.manaNeeded -= 5
            break;

        case 'curePoison':
            spell.manaNeeded -= 5
            break;

        case 'inflictBurn':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29){
                spell.spellDuration += 1
            }
            
            break;

        case 'inflictCurse':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictStun':
            spell.manaNeeded -= 5
            if (spell.level === 9 || spell.level === 19 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictFreeze':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictNpSeal':
            spell.manaNeeded -= 5
            if (spell.level === 9 || spell.level === 19 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictConfusion':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictFear':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;

        case 'inflictPoison':
            spell.manaNeeded -= 5
            if (spell.level === 4 || spell.level === 9 || spell.level === 14 || spell.level === 19 || spell.level == 24 || spell.level === 29) {
                spell.spellDuration += 1
            }
            break;
    }

    spell.level += 1
    message.channel.send(`${message.author.username} learned **${spell.name}(Lvl.${spell.level})**`)
}



module.exports = spellLvlUp;