const chancify = require('chancify');
const characters = require("../charactersList");
const mobsList = require('../mobsList');



class BattleUnit {

    constructor(servant, isMob){
        let ID = servant.id
        let units 
        if(isMob === true){
            units = mobsList
        } else{
            units  = characters
        }
        // const picked = (({ id, name, pictures, alignment, traits, about, level, exp, currentHp, maxHp, stats, statsPoints, noblePhantasm, status }) => ({ id, name, pictures, alignment, traits, about, level, exp, currentHp, maxHp, stats, statsPoints, noblePhantasm, status }))(servant);
        // Object.assign(this, picked)
        this.stats = {}
        this.noblePhantasm = {}
        this.status = {
            burn: {//reduce str -30% and hp-5%ofmaxhp per turn
                active: false,
                duration: 0
            },
            curse: {//reduce luck -30% and hp-5%ofmaxhp per turn
                active: false,
                duration: 0
            },
            stun: {// servant can't take action
                active: false,
                duration: 0
            },
            freeze: {//reduce agility -30% and hp-5%ofmaxhp per turn
                active: false,
                duration: 0
            },
            npSeal: {// servant can't use theirs NP
                active: false,
                duration: 0
            },
            confusion: {// 50%chance of dealing 50% of your str stat to yourself
                active: false,
                duration: 0
            },
            fear: { //reduce magic - 30%
                active: false,
                duration: 0
            },
            poison: {// hp-10%ofmaxhp per turn
                active: false,
                duration: 0
            }

        }
        const picked = (({ currentHp, maxHp, NPLevel }) => ({ currentHp, maxHp, NPLevel }))(servant);
        Object.assign(this, picked)
        Object.assign(this.stats, servant.stats)
        Object.assign(this.noblePhantasm, units[ID].noblePhantasm)
        
        this.id = servant.id
        this.name = units[ID].name // name and aliases
        this.class = units[ID].class
        this.pictures = units[ID].pictures
        this.alignment = units[ID].alignment
        this.traits = units[ID].traits
        this.about = units[ID].about
        this.level = servant.level // max 100
        this.exp = servant.exp
        // this.currentHp = servant.currentHp
        // this.maxHp = servant.maxHp
        // this.stats= servant.stats
        this.statsPoints= servant.statsPoints // +1 per lvl up
        // this.noblePhantasm = servant.noblePhantasm
        // this.status = servant.status 

        // additional properties
        this.takenDmg = 1 //(works as deffence factor; increase(def down); decrease (def up))
        this.damageBasedOnMagic = false
        this.revealed = false
        this.missedTurns = 0
        this.transformed = false
        this.guts = false
        this.charge = 0
        this.evade = 0
        this.critStr = 1.5
    }
    

    /**
     * 
     * @param {Array} unitStats
     */
    set takeAttackDammage(unitStats) {//unitStats[1] == message unitStats[2] == np(true/false)
        // hit/miss formula
        let hit = 1
        if(unitStats[0].agility >= this.stats.agility){
            if(this.class === "Rider"){
                let missChance = 0.1
                // console.log(`chance to miss ${missChance}`)
                const miss = chancify(() => { hit = 0; unitStats[1].channel.send('miss...') }, missChance);
                miss();
            } else{
                hit = 1
                // console.log(`chance to miss 0`)
            } 
        } else{
            let missChance = 1 - ( 2 * unitStats[0].agility / (unitStats[0].agility + this.stats.agility))// decimal fraction between 0 and 1 
            if (this.class === "Rider") {
                missChance += 0.1
            }
            // console.log(`chance to miss ${missChance}`)
            const miss = chancify(()=>{hit= 0; unitStats[1].channel.send('miss...')}, missChance);
            miss();
        }
        if(this.evade > 0){
            hit = 0
            this.evade -= 1
        }
        
        //crit formula
        let crit = 1
        
        if (unitStats[0].luck <= this.stats.luck) {
            if(unitStats.class === "Assassin"){
                let critChance = 0.1
                // console.log(`chance for crit ${critChance}`)
                const criticalHit = chancify(() => { crit = unitStats[0].critStr; unitStats[1].channel.send('Critical hit!') }, critChance)
                criticalHit();
            } else{
                crit = 1
                // console.log(`chance for crit 0`)
            }
        } else {
            let critChance = 1 - (2 * this.stats.luck / (this.stats.luck + unitStats[0].luck))
            if (unitStats.class === "Assassin"){
                critChance += 0.1
            }
            // console.log(`chance for crit ${critChance}`)
            const criticalHit = chancify(() => { crit = unitStats[0].critStr; unitStats[1].channel.send('Critical hit!')}, critChance)
            criticalHit();
        }
        
        //dmg formula
        if (unitStats[0].damageBasedOnMagic === false && unitStats[2] === false){// normal attacks
            let dmg = unitStats[0].strength * crit * hit 
            if(crit === 1 || this.takenDmg > 1){
                dmg = dmg * this.takenDmg
            }
            if(unitStats.class === "Berserker"){
                dmg = 1.2 * dmg
            } else if (unitStats.class === "Alter Ego") {
                dmg =  1.05 * dmg
            }
            
            if (this.class === "Shielder") {
                dmg = 0.75 * dmg
            } else if (this.class === "Alter Ego") {
                dmg = 0.95 * dmg
            }
            // console.log(`DMG: ${dmg}`)
            if (this.currentHp < dmg){
                this.currentHp = 0
            } else{
                this.currentHp -= dmg
            }
        } else if (unitStats[2] === true){// np dmg
            let dmg = ((unitStats[0].magic * 1.5) + (unitStats[0].npPower * unitStats[0].NPLevel)) * crit * hit
            if (crit === 1 || this.takenDmg > 1) {
                dmg = dmg * this.takenDmg
            }
            if (this.class === "Foreigner"){
                dmg = 0.75 * dmg
            } else if (this.class === "Alter Ego") {
                dmg = 0.95 * dmg
            }
            // console.log(`magic: ${unitStats[0].magic}\nnpPower: ${unitStats[0].npPower * unitStats[0].NPLevel}\ncrit: ${crit} hit: ${hit}`)
            // console.log(`NP DMG: ${dmg}`)
            if (this.currentHp < dmg ) {
                this.currentHp = 0
            } else {
                this.currentHp -= dmg
            }
        } else{// normal attacks based on magic
            let dmg = unitStats[0].magic * crit * hit
            if (crit === 1 || this.takenDmg > 1) {
                dmg = dmg * this.takenDmg
            }
            if (unitStats.class === "Berserker") {
                dmg = 1.2 * dmg
            } else if (unitStats.class === "Alter Ego") {
                dmg = 1.05 * dmg
            }

            if (this.class === "Shielder") {
                dmg = 0.75 * dmg
            } else if (this.class === "Alter Ego") {
                dmg = 0.9 * dmg
            }

            if (this.currentHp < dmg ) {
                this.currentHp = 0
            } else {
                this.currentHp -= dmg
            }
        }
        
        
    }

    takeDammage(number){
        if (this.currentHp < number) {
            this.currentHp = 0
        } else {
            this.currentHp -= number
        }
        if (this.evade > 0) {
            this.evade -= 1
        }
    }

    heal(number) {
        if (this.currentHp + number > this.maxHp) {
            this.currentHp = this.maxHp
        } else {
            this.currentHp += number
        }
    }


    set takeSpellEffect(spellData){
        switch(spellData.spellType){
            case 'damage':
                let dmg = spellData.power 
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer"){
                    dmg = dmg / 2
                }
                
                if (this.currentHp < dmg) {
                    this.currentHp = 0
                } else {
                    this.currentHp -= dmg
                }
                break;

            case 'heal':
                const heal = spellData.power
                if(this.currentHp + heal > this.maxHp){
                    this.currentHp = this.maxHp
                } else{
                    this.currentHp += heal
                }
                break;
            
            case 'buffStrength':
                this.stats.strength += this.stats.strength * (spellData.power / 1000);
                break;

            case 'buffDefence':
                this.takenDmg -= this.takenDmg * (spellData.power / 1000)
                break;

            case 'buffAgility':
                this.stats.agility += this.stats.agility * (spellData.power / 1000);
                break;

            case 'buffMagic':
                this.stats.magic += this.stats.magic * (spellData.power / 1000);
                break;
            
            case 'buffLuck':
                this.stats.luck += this.stats.luck * (spellData.power / 1000);
                break;

            case 'debuffStrength':
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer") {
                    this.stats.strength -= (this.stats.strength * (spellData.power / 1000))/2;
                } else{
                    this.stats.strength -= this.stats.strength * (spellData.power / 1000);
                }
                break;

            case 'debuffDefence': 
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer") {
                    this.takenDmg += (this.takenDmg * (spellData.power / 1000))/2;
                } else {
                    this.takenDmg += this.takenDmg * (spellData.power / 1000);
                }
                break;

            case 'debuffAgility':
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer") {
                    this.stats.agility -= (this.stats.agility * (spellData.power / 1000)) / 2;
                } else {
                    this.stats.agility -= this.stats.agility * (spellData.power / 1000);
                }
                break;

            case 'debuffMagic':
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer") {
                    this.stats.magic -= (this.stats.magic * (spellData.power / 1000)) / 2;
                } else {
                    this.stats.magic -= this.stats.magic * (spellData.power / 1000);
                }
                break;

            case 'debuffLuck':
                if (this.class === "Saber" || this.class === "Archer" || this.class === "Lancer") {
                    this.stats.luck -= (this.stats.luck * (spellData.power / 1000)) / 2;
                } else {
                    this.stats.luck -= this.stats.luck * (spellData.power / 1000);
                }
                break;

            case 'cureBurn':
                this.status.burn.active = false;
                this.status.burn.duration = 0
                break;

            case 'cureCurse':
                this.status.curse.active = false;
                this.status.curse.duration = 0
                break;

            case 'cureStun':
                this.status.stun.active = false;
                this.status.stun.duration = 0
                break;
            
            case 'cureFreeze':
                this.status.freeze.active = false;
                this.status.freeze.duration = 0
                break;

            case 'cureNpSeal':
                this.status.npSeal.active = false;
                this.status.npSeal.duration = 0
                break;

            case 'cureConfusion':
                this.status.confusion.active = false;
                this.status.confusion.duration = 0
                break;

            case 'cureFear':
                this.status.fear.active = false;
                this.status.fear.duration = 0
                break;
            
            case 'curePoison':
                this.status.poison.active = false;
                this.status.poison.duration = 0
                break;
            
            case 'inflictBurn':
                this.status.burn.active = true;
                this.status.burn.duration += spellData.spellDuration
                break;

            case 'inflictCurse':
                this.status.curse.active = true;
                this.status.curse.duration += spellData.spellDuration
                break;

            case 'inflictStun':
                this.status.stun.active = true;
                this.status.stun.duration += spellData.spellDuration
                break;

            case 'inflictFreeze':
                this.status.freeze.active = true;
                this.status.freeze.duration += spellData.spellDuration
                break;

            case 'inflictNpSeal':
                this.status.npSeal.active = true;
                this.status.npSeal.duration += spellData.spellDuration
                break;

            case 'inflictConfusion':
                this.status.confusion.active = true;
                this.status.confusion.duration += spellData.spellDuration
                break;

            case 'inflictFear':
                this.status.fear.active = true;
                this.status.fear.duration += spellData.spellDuration
                break;

            case 'inflictPoison':
                this.status.poison.active = true;
                this.status.poison.duration += spellData.spellDuration
                break;
        }
    }

    
    get inflictDammage(){
        //stats needed for calculation
        const unitStats = {
            strength: this.stats.strength,
            agility: this.stats.agility,
            luck: this.stats.luck,
            magic: this.stats.magic,
            damageBasedOnMagic: this.damageBasedOnMagic,
            npPower: this.noblePhantasm.power,
            NPLevel: this.NPLevel,
            class: this.class,
            critStr: this.critStr
        }
        return unitStats;
    }

    get np(){
        return this.noblePhantasm;
    }
}



// const createBattleUnit = async(Server, message)=>{
//         Server.findOne({ serverID: message.guild.id }, async(err, server) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 let player = server.players.find(player => player.playerID == message.author.id)
//                 const unit = new BattleUnit(player.servants[0])
//                 const enemy = new BattleUnit(player.servants[1])// remove this later
//                 unit.takeAttackDammage = [enemy.inflictDammage, message]
//                 spellData = await castSpell( message, 0)
//                 unit.takeSpellEffect = spellData
//                 console.log(spellData)
//                 console.log(`${unit.name[0]} Hp: ${unit.currentHp}/${unit.maxHp}`)
                
//                 server.save()
//             }
//         })   
// }

module.exports = {
    // createBattleUnit: createBattleUnit,
    BattleUnit: BattleUnit
};