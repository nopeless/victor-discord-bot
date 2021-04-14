
class Spell {
    constructor(spell){
        this.id = spell.id
        this.name = spell.name
        this.level = spell.level
        this.exp = spell.exp
        this.description = spell.description
        this.power = spell.power
        this.manaNeeded = spell.manaNeeded
        this.spellType = spell.spellType //???doesnt add
        this.spellDuration = spell.spellDuration// ??? same
        this.target = spell.target
    }
    
};


module.exports = {
    Spell: Spell
}