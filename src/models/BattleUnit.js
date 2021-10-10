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
            units = characters
        }
        this.passive = [...units[ID].passive]
        // const picked = (({ id, name, pictures, alignment, traits, about, level, exp, currentHp, maxHp, stats, statsPoints, noblePhantasm, status }) => ({ id, name, pictures, alignment, traits, about, level, exp, currentHp, maxHp, stats, statsPoints, noblePhantasm, status }))(servant);
        // Object.assign(this, picked)
        this.stats = {}
        this.baseStats = {}
        this.lastTurnStats = {}
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
        Object.assign(this.baseStats, servant.stats)
        Object.assign(this.lastTurnStats, servant.stats)
        Object.assign(this.noblePhantasm, units[ID].noblePhantasm)
        
        this.id = servant.id
        this.name = [...units[ID].name] // name and aliases
        this.class = units[ID].class
        this.pictures = [...units[ID].pictures]
        this.alignment = [...units[ID].alignment]
        this.traits = [...units[ID].traits]
        this.about = units[ID].about
        this.level = servant.level // max 100
        this.exp = servant.exp
        this.statsPoints= servant.statsPoints // +1 per lvl up
        

        // additional properties
        this.gotCrit = false
        this.below50 = false
        this.below25 = false
        this.damageBasedOnMagic = false
        this.turn = 1
        this.takenDmg = 1 //(works as defence factor; increase(def down); decrease (def up))
        this.revealed = false
        this.missedTurns = 0
        this.transformed = false
        this.guts = false
        this.charge = 0
        this.evade = 0
        this.critStr = 1.5
        
        console.log(this.name[0])
    }
    

    /**
     * 
     * @param {Array} unitStats//unitStats[1] == message unitStats[2] == np(true/false)
     */
    takeAttackDammage(unitStats) {
        // hit/miss formula
        let hit = 1
        if(unitStats[0].agility >= this.stats.agility){
            let missChance = 0
            if (this.class == "Rider" || this.passive[0] == "All Classes Proficiency"){
                missChance += 0.1    
            }

            //ability check
            if (this.passive[0] == "Mind's Eye" || this.passive[0] == "Instinct"){
                missChance += 0.3
            } else if (this.passive[0] == "Crest of the Star") {
                missChance += 0.1
            }
            // console.log(`chance to miss ${missChance}`)
            const miss = chancify(() => { hit = 0; unitStats[1].channel.send('miss...') }, missChance);
            miss();
        } else{
            let missChance = 1 - ( 2 * unitStats[0].agility / (unitStats[0].agility + this.stats.agility))// decimal fraction between 0 and 1 
            if (this.class == "Rider" || this.passive[0] == "All Classes Proficiency") {
                missChance += 0.1
            }

            //ability check
            if (this.passive[0] == "Mind's Eye" || this.passive[0] == "Instinct") {
                missChance += 0.3
            } else if (this.passive[0] == "Crest of the Star"){
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
        if (unitStats[0].passive[0] == "Hawk Eye" || unitStats[0].passive[0] == "Clairvoyance"){
            hit = 1
        }
        
        //crit formula
        let crit = 1
        if (unitStats[0].luck <= this.stats.luck) {
            let critChance = 0
            if (unitStats.class == "Assassin" || unitStats[0].passive[0] == "All Classes Proficiency"){
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Clairvoyance" || unitStats[0].passive[0] == "Pioneer of the Stars") {
                critChance += 0.05
            }
            if (unitStats[0].passive[0] == "Demonic Habituation") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Supernatural Power (JK)" || unitStats[0].passive[0] == "Evaporation of Sanity" || unitStats[0].passive[0] == "Adverse Resolve" || unitStats[0].passive[0] == "Summer Breaker!") {
                critChance += 0.3
            }
            if (unitStats[0].passive[0] == "Merciless" && (this.status.burn.active === true || this.status.curse.active === true || this.status.confusion.active === true || this.status.freeze.active === true || this.status.stun.active === true || this.status.npSeal.active === true || this.status.fear.active === true || this.status.poison.active === true)) {
                critChance = 1
            }
            if (this.class == "Saber" && unitStats[0].passive[0] == "Galaxy Meteor Sword XEX") {
                critChance = 1
            }
            if (unitStats[0].currentHp < unitStats[0].maxHp / 4 && unitStats[0].passive[0] == "Nanaya Arts"){
                critChance = 1
            }
            // console.log(`chance for crit ${critChance}`)
            const criticalHit = chancify(() => {
                crit = unitStats[0].critStr;
                unitStats[1].channel.send('Critical hit!');
                if (unitStats[0].passive[0] == "Knowledge of the Future" && unitStats[0].evade > 0) {
                    crit = crit * 2
                };
                this.gotCrit = true
            }, critChance)
            criticalHit();
        } else {
            let critChance = 1 - (2 * this.stats.luck / (this.stats.luck + unitStats[0].luck))
            if (unitStats.class == "Assassin" || unitStats[0].passive[0] == "All Classes Proficiency"){
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Clairvoyance" || unitStats[0].passive[0] == "Pioneer of the Stars") {
                critChance += 0.05
            }
            if (unitStats[0].passive[0] == "Demonic Habituation") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Supernatural Power (JK)" || unitStats[0].passive[0] == "Evaporation of Sanity" || unitStats[0].passive[0] == "Adverse Resolve" || unitStats[0].passive[0] == "Summer Breaker!") {
                critChance += 0.3
            }
            if (unitStats[0].passive[0] == "Merciless" && (this.status.burn.active === true || this.status.curse.active === true || this.status.confusion.active === true || this.status.freeze.active === true || this.status.stun.active === true || this.status.npSeal.active === true || this.status.fear.active === true || this.status.poison.active === true)) {
                critChance = 1
            }
            if (this.class == "Saber" && unitStats[0].passive[0] == "Galaxy Meteor Sword XEX") {
                critChance = 1
            }
            if (unitStats[0].currentHp < unitStats[0].maxHp / 4 && unitStats[0].passive[0] == "Nanaya Arts") {
                critChance = 1
            }
            // console.log(`chance for crit ${critChance}`)
            const criticalHit = chancify(() => { 
                crit = unitStats[0].critStr; 
                unitStats[1].channel.send('Critical hit!')
                if (unitStats[0].passive[0] == "Knowledge of the Future" && unitStats[0].evade > 0) {
                    crit = crit * 2
                };
                this.gotCrit = true
            }, critChance)
            criticalHit();
        }
        
        //dmg formula
        if (unitStats[0].damageBasedOnMagic == false && unitStats[2] == false){// normal attacks
            let dmg = 0 
            if (unitStats[0].passive[0] == "Taijutsu"){
                dmg = (unitStats[0].strength + unitStats[0].endurance) * crit * hit
            } else {
                dmg = unitStats[0].strength * crit * hit
            }
            if (crit == 1 || this.takenDmg > 1 ){
                if (unitStats[0].passive[0] == "Infiltrator" && this.takenDmg < 1){

                }else {
                    dmg = dmg * this.takenDmg
                }
            }
            if (unitStats.class == "Berserker" || unitStats[0].passive[0] == "All Classes Proficiency"){
                dmg = 1.2 * dmg
            } else if (unitStats.class == "Alter Ego") {
                dmg =  1.05 * dmg
            }
            
            if (this.class == "Shielder") {
                dmg = 0.75 * dmg
            } else if (this.class == "Alter Ego") {
                dmg = 0.95 * dmg
            }
            //abilities check

            if (unitStats[0].passive[0] == "Lightning Conqueror" && unitStats[0].turn == 1) {
                dmg = dmg * 5
            }else if (unitStats[0].passive[0] == "Numeral of the Saint" && unitStats[0].turn % 3 == 0){
                dmg = dmg * 3
            } else if (unitStats[0].passive[0] == "Close Range" && this.class == "Lancer"){
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Mind over Matter" && this.class == "Berserker") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Mystic Eyes of Death Perception" || unitStats[0].passive[0] == "At the Boundary"){
                this.instaKill(0.01)  
            } else if (this.passive[0] == "Andreias Amarantos" && this.revealed === false && unitStats[0].traits.includes("divine") === false) {
                dmg = 0
            } else if (unitStats[0].passive[0] == "Presence Detection" && this.class == "Assassin") {
                dmg += dmg / 2
            } else if (this.passive[0] == "Masochist") {
                this.buffStrength(dmg * 0.2)
            } else if (unitStats[0].passive[0] == "Dragon Slayer" && this.traits.includes("dragon")) {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Scorching Flames") {
                this.burn(2)
            } else if (unitStats[0].passive[0] == "Pride") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2){
                    dmg = dmg * 2
                } else {
                    dmg = dmg / 2
                }
            } else if (unitStats[0].passive[0] == "Self-conscious") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                    dmg = dmg / 2
                } else {
                    dmg = dmg * 2
                }
            } else if (unitStats[0].passive[0] == "Mana Burst (Flame)") {
                if (unitStats[0].status.burn.active === true) {
                    dmg = dmg * 2
                } 
                if (unitStats[0].status.freeze.active === true) {
                    dmg = dmg / 2
                }
            }
            else if (unitStats[0].passive[0] == "Long Reach" && this.class == "Archer") {
                dmg += dmg / 2
            }
            else if (this.passive[0] == "Electromagnetic Barrier" && unitStats[0].class == "Archer") {
                dmg = dmg / 2
            } else if (unitStats[0].passive[0] == "Half-Cold Half-Hot") {
                const halfCold = chancify(() => {
                    this.freezee(3)
                }, 0.1);
                halfCold();

                const halfHot = chancify(() => {
                    this.burn(3)
                }, 0.1);
                halfHot();
            } else if (unitStats[0].passive[0] == "Manipulating Darkness") {
                const mDarkness = chancify(() => {
                    this.fear(3)
                }, 0.1);
                mDarkness();
            } else if (unitStats[0].passive[0] == "Lair of the Beast King") {
                const chaos = chancify(() => {
                    this.fear(3)
                }, 0.2);
                chaos();
            } else if (unitStats[0].passive[0] == "Maple") {
                 const maple2 = chancify(() => {
                    this.stun(1)
                }, 0.05);
                maple2();
            } else if (unitStats[0].passive[0] == "Nega Saver" && this.class == "Ruler") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Flow of Ki Control") {
                dmg += dmg * (unitStats[0].currentHp / unitStats[0].maxHp)
            } else if (unitStats[0].passive[0] == "Reloaded" && unitStats[0].agility > this.stats.agility) {
                dmg += dmg / 4
            }



            if(this.passive[0] == "Maple"){
                this.buffEndurance(1)
            }

            dmg = Math.round(dmg)
            // console.log(`DMG: ${dmg}`)
            if (this.currentHp < dmg){
                this.currentHp = 0
            } else{
                this.currentHp -= dmg
            }
            return dmg

        } else if (unitStats[2] === true){
            // np dmg
            let dmg = 0
            if (unitStats[0].ID == 167) {
                dmg = ((unitStats[0].strength * 1.5) + (unitStats[0].npPower * unitStats[0].NPLevel)) * crit
            } else{
                dmg = ((unitStats[0].magic * 1.5) + (unitStats[0].npPower * unitStats[0].NPLevel)) * crit * hit
            }
            if (crit == 1 || this.takenDmg > 1) {
                if (unitStats[0].passive[0] == "Infiltrator" && this.takenDmg < 1) {

                } else {
                    dmg = dmg * this.takenDmg
                }
            }
            if (this.class == "Foreigner"){
                dmg = 0.75 * dmg
            } else if (this.class == "Alter Ego") {
                dmg = 0.95 * dmg
            }
            //abilities check

            if (unitStats[0].passive[0] == "Lightning Conqueror" && unitStats[0].turn == 1) {
                dmg = dmg * 5
            }else if (unitStats[0].passive[0] == "Numeral of the Saint" && unitStats[0].turn % 3 == 0) {
                dmg = dmg * 3
            } else if (unitStats[0].passive[0] == "Close Range" && this.class == "Lancer") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Mind over Matter" && this.class == "Berserker") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Presence Detection" && this.class == "Assassin") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Dragon Slayer" && this.traits.includes("dragon")) {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Pride") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                    dmg = dmg * 2
                } else {
                    dmg = dmg / 2
                }
            } else if (unitStats[0].passive[0] == "Self-conscious") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                    dmg = dmg / 2
                } else {
                    dmg = dmg * 2
                }
            } else if (unitStats[0].passive[0] == "Mana Burst (Flame)") {
                if (unitStats[0].status.burn.active === true) {
                    dmg = dmg * 2
                }
                if (unitStats[0].status.freeze.active === true) {
                    dmg = dmg / 2
                }
            }
            else if (unitStats[0].passive[0] == "Long Reach" && this.class == "Archer") {
                dmg += dmg / 2
            }
            else if (this.passive[0] == "Electromagnetic Barrier" && unitStats[0].class == "Archer") {
                dmg = dmg / 2
            }
            else if (unitStats[0].passive[0] == "Nega Saver" && this.class == "Ruler") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Reloaded" && unitStats[0].agility > this.stats.agility) {
                dmg += dmg / 4
            }



            // console.log(`magic: ${unitStats[0].magic}\nnpPower: ${unitStats[0].npPower * unitStats[0].NPLevel}\ncrit: ${crit} hit: ${hit}`)
            // console.log(`NP DMG: ${dmg}`)
            dmg = Math.round(dmg)
            if (this.currentHp < dmg ) {
                this.currentHp = 0
            } else {
                this.currentHp -= dmg
            }
            return dmg


        } else{// normal attacks based on magic
            let dmg = unitStats[0].magic * crit * hit
            if (crit == 1 || this.takenDmg > 1) {
                if (unitStats[0].passive[0] == "Infiltrator" && this.takenDmg < 1) {

                } else {
                    dmg = dmg * this.takenDmg
                }
            }
            if (unitStats.class == "Berserker" || unitStats[0].passive[0] == "All Classes Proficiency") {
                dmg = 1.2 * dmg
            } else if (unitStats.class == "Alter Ego") {
                dmg = 1.05 * dmg
            }

            if (this.class == "Shielder") {
                dmg = 0.75 * dmg
            } else if (this.class == "Alter Ego") {
                dmg = 0.9 * dmg
            }

            // abilities check
            if (unitStats[0].passive[0] == "Lightning Conqueror" && unitStats[0].turn == 1) {
                dmg = dmg * 5
            }else if (unitStats[0].passive[0] == "Numeral of the Saint" && unitStats[0].turn % 3 == 0) {
                dmg = dmg * 3
            } else if (unitStats[0].passive[0] == "Close Range" && this.class == "Lancer") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Mind over Matter" && this.class == "Berserker") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Mystic Eyes of Death Perception" || unitStats[0].passive[0] == "At the Boundary") {
                this.instaKill(0.01)
            } else if (this.passive[0] == "Andreias Amarantos" && this.revealed === false && unitStats[0].traits.includes("divine") === false) {
                dmg = 0
            } else if (unitStats[0].passive[0] == "Presence Detection" && this.class == "Assassin") {
                dmg += dmg / 2
            } else if (this.passive[0] == "Masochist") {
                this.buffStrength(dmg * 0.2)
            } else if (unitStats[0].passive[0] == "Dragon Slayer" && this.traits.includes("dragon")) {
                dmg += dmg / 2
            }
            else if (unitStats[0].passive[0] == "Scorching Flames") {
                this.burn(2)
            } else if (unitStats[0].passive[0] == "Pride") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                    dmg = dmg * 2
                } else {
                    dmg = dmg / 2
                }
            } else if (unitStats[0].passive[0] == "Self-conscious") {
                if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                    dmg = dmg / 2
                } else {
                    dmg = dmg * 2
                }
            } else if (unitStats[0].passive[0] == "Mana Burst (Flame)") {
                if (unitStats[0].status.burn.active === true) {
                    dmg = dmg * 2
                }
                if (unitStats[0].status.freeze.active === true) {
                    dmg = dmg / 2
                }
            }
            else if (unitStats[0].passive[0] == "Long Reach" && this.class == "Archer") {
                dmg += dmg / 2
            }
            else if (this.passive[0] == "Electromagnetic Barrier" && unitStats[0].class == "Archer") {
                dmg = dmg / 2
            } else if (unitStats[0].passive[0] == "Half-Cold Half-Hot") {
                const halfCold = chancify(() => {
                    this.freezee(3)
                }, 0.1);
                halfCold();

                const halfHot = chancify(() => {
                    this.burn(3)
                }, 0.1);
                halfHot();
            } else if (unitStats[0].passive[0] == "Manipulating Darkness") {
                const mDarkness = chancify(() => {
                    this.fear(3)
                }, 0.1);
                mDarkness();
            } else if (unitStats[0].passive[0] == "Lair of the Beast King") {
                const chaos = chancify(() => {
                    this.fear(3)
                }, 0.2);
                chaos();
            } else if (unitStats[0].passive[0] == "Maple") {
                const maple2 = chancify(() => {
                    this.stun(1)
                }, 0.05);
                maple2();

            } else if (unitStats[0].passive[0] == "Nega Saver" && this.class == "Ruler") {
                dmg += dmg / 2
            } else if (unitStats[0].passive[0] == "Sovereign of Magical Wands") {
            dmg = dmg * 1.5
            } else if (unitStats[0].passive[0] == "Reloaded" && unitStats[0].agility > this.stats.agility) {
                dmg += dmg / 4
            }




            if (this.passive[0] == "Maple") {
                this.buffEndurance(1)
            }

            dmg = Math.round(dmg)
            if (this.currentHp < dmg ) {
                this.currentHp = 0
            } else {
                this.currentHp -= dmg
            }

            return dmg
        }
        
        
    }


    /**
    *
    * @param {Array} unitStats//unitStats[1] == message unitStats[2] == np(true/false)
    */
    takeSureHitNP(unitStats){
        //crit formula
        let crit = 1
        if (unitStats[0].luck <= this.stats.luck) {
            let critChance = 0
            if (unitStats.class == "Assassin" || unitStats[0].passive[0] == "All Classes Proficiency") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Clairvoyance" || unitStats[0].passive[0] == "Pioneer of the Stars") {
                critChance += 0.05
            }
            if (unitStats[0].passive[0] == "Demonic Habituation") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Supernatural Power (JK)" || unitStats[0].passive[0] == "Evaporation of Sanity" || unitStats[0].passive[0] == "Adverse Resolve" || unitStats[0].passive[0] == "Summer Breaker!") {
                critChance += 0.3
            }
            if (unitStats[0].passive[0] == "Merciless" && (this.status.burn.active === true || this.status.curse.active === true || this.status.confusion.active === true || this.status.freeze.active === true || this.status.stun.active === true || this.status.npSeal.active === true || this.status.fear.active === true || this.status.poison.active === true)) {
                critChance = 1
            }
            if (this.class == "Saber" && unitStats[0].passive[0] == "Galaxy Meteor Sword XEX") {
                critChance = 1
            }
            if (unitStats[0].currentHp < unitStats[0].maxHp / 4 && unitStats[0].passive[0] == "Nanaya Arts") {
                critChance = 1
            }
            // console.log(`chance for crit ${critChance}`)
            const criticalHit = chancify(() => {
                crit = unitStats[0].critStr;
                unitStats[1].channel.send('Critical hit!');
                if (unitStats[0].passive[0] == "Knowledge of the Future" && unitStats[0].evade > 0) {
                    crit = crit * 2
                };
                this.gotCrit = true
            }, critChance)
            criticalHit();
        } else {
            let critChance = 1 - (2 * this.stats.luck / (this.stats.luck + unitStats[0].luck))
            if (unitStats.class == "Assassin" || unitStats[0].passive[0] == "All Classes Proficiency") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Clairvoyance" || unitStats[0].passive[0] == "Pioneer of the Stars") {
                critChance += 0.05
            }
            if (unitStats[0].passive[0] == "Demonic Habituation") {
                critChance += 0.1
            }
            if (unitStats[0].passive[0] == "Supernatural Power (JK)" || unitStats[0].passive[0] == "Evaporation of Sanity" || unitStats[0].passive[0] == "Adverse Resolve" || unitStats[0].passive[0] == "Summer Breaker!") {
                critChance += 0.3
            }
            if (unitStats[0].passive[0] == "Merciless" && (this.status.burn.active === true || this.status.curse.active === true || this.status.confusion.active === true || this.status.freeze.active === true || this.status.stun.active === true || this.status.npSeal.active === true || this.status.fear.active === true || this.status.poison.active === true)) {
                critChance = 1
            }
            if (this.class == "Saber" && unitStats[0].passive[0] == "Galaxy Meteor Sword XEX") {
                critChance = 1
            }
            if (unitStats[0].currentHp < unitStats[0].maxHp / 4 && unitStats[0].passive[0] == "Nanaya Arts") {
                critChance = 1
            }
            // console.log(`chance for crit ${critChance}`)
            const criticalHit = chancify(() => {
                crit = unitStats[0].critStr;
                unitStats[1].channel.send('Critical hit!')
                if (unitStats[0].passive[0] == "Knowledge of the Future" && unitStats[0].evade > 0) {
                    crit = crit * 2
                };
                this.gotCrit = true
            }, critChance)
            criticalHit();
        }

        let dmg = 0
        if (unitStats[0].ID == 103) {
            dmg = ((unitStats[0].agility * 1.5) + (unitStats[0].npPower * unitStats[0].NPLevel)) * crit
        } else{
            dmg = ((unitStats[0].magic * 1.5) + (unitStats[0].npPower * unitStats[0].NPLevel)) * crit
        }
        if (crit == 1 || this.takenDmg > 1) {
            if (unitStats[0].passive[0] == "Infiltrator" && this.takenDmg < 1) {

            } else {
                dmg = dmg * this.takenDmg
            }
        }
        if (this.class == "Foreigner") {
            dmg = 0.75 * dmg
        } else if (this.class == "Alter Ego") {
            dmg = 0.95 * dmg
        }
        //abilities check

        if (unitStats[0].passive[0] == "Lightning Conqueror" && unitStats[0].turn == 1) {
            dmg = dmg * 5
        } else if (unitStats[0].passive[0] == "Numeral of the Saint" && unitStats[0].turn % 3 == 0) {
            dmg = dmg * 3
        } else if (unitStats[0].passive[0] == "Close Range" && this.class == "Lancer") {
            dmg += dmg / 2
        } else if (unitStats[0].passive[0] == "Mind over Matter" && this.class == "Berserker") {
            dmg += dmg / 2
        } else if (unitStats[0].passive[0] == "Presence Detection" && this.class == "Assassin") {
            dmg += dmg / 2
        } else if (unitStats[0].passive[0] == "Dragon Slayer" && this.traits.includes("dragon")) {
            dmg += dmg / 2
        } else if (unitStats[0].passive[0] == "Pride") {
            if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                dmg = dmg * 2
            } else {
                dmg = dmg / 2
            }
        } else if (unitStats[0].passive[0] == "Self-conscious") {
            if (unitStats[0].currentHp > unitStats[0].maxHp / 2) {
                dmg = dmg / 2
            } else {
                dmg = dmg * 2
            }
        } else if (unitStats[0].passive[0] == "Mana Burst (Flame)") {
            if (unitStats[0].status.burn.active === true) {
                dmg = dmg * 2
            }
            if (unitStats[0].status.freeze.active === true) {
                dmg = dmg / 2
            }
        }
        else if (unitStats[0].passive[0] == "Long Reach" && this.class == "Archer") {
            dmg += dmg / 2
        }
        else if (this.passive[0] == "Electromagnetic Barrier" && unitStats[0].class == "Archer") {
            dmg = dmg / 2
        }
        else if (unitStats[0].passive[0] == "Nega Saver" && this.class == "Ruler") {
            dmg += dmg / 2
        } else if (unitStats[0].passive[0] == "Reloaded" && unitStats[0].agility > this.stats.agility) {
            dmg += dmg / 4
        }



        // console.log(`magic: ${unitStats[0].magic}\nnpPower: ${unitStats[0].npPower * unitStats[0].NPLevel}\ncrit: ${crit} hit: ${hit}`)
        // console.log(`NP DMG: ${dmg}`)
        dmg = Math.round(dmg)
        if (this.currentHp < dmg) {
            this.currentHp = 0
        } else {
            this.currentHp -= dmg
        }

        if (this.evade > 0) {
            this.evade -= 1
        }
        return dmg
    }

    takeDammageFlat(number) {
        if (this.currentHp < number) {
            this.currentHp = 0
        } else {
            this.currentHp -= number
        }
    }

    heal(number) {
        if (this.traits.includes("Black Blessing")){
            number = number / 2
        }
        if (this.passive[0] == "Human Anatomy Understanding"){
            number = number * 2
        }
        if (this.passive[0] == "∞ Chestnut Paste") {
            number += number / 2
        }
        if (this.currentHp + number > this.maxHp) {
            this.currentHp = this.maxHp
        } else {
            this.currentHp += number
        }
    }


    burn(duration) {
        //ability check
        if (this.passive[0] == "Surfing") {

        } else {
            this.status.burn.active = true;
            this.status.burn.duration += duration
        }
    }

    curse(duration){
        //ability check
        if (this.passive[0] == "Purity" || this.passive[0] == "Manipulating Darkness"){

        }else{
            this.status.curse.active = true;
            this.status.curse.duration += duration
        }  
    }

    stun(duration) {
        //ability check
        if (this.passive[0] == "Restless Soul" || this.passive[0] == "Electromagnetic Barrier" || this.passive[0] == "Maple") {

        } else if (this.passive[0] == "Unique Electric-type Sensory Perception"){
            this.evade += duration
        }else {
            this.status.stun.active = true;
            this.status.stun.duration += duration
        }
    }

    freezee(duration) {
        //ability check
        if (this.passive[0] == "Manipulating Cold" || this.passive[0] == "Warm Clothes") {

        } else {
            this.status.freeze.active = true;
            this.status.freeze.duration += duration
        }
    }

    npSeal(duration) {
        //ability check
        if (this.passive[0] == "Unstable Mind" || this.passive[0] == "Broken Seal" || this.passive[0] == "Disciplined") {

        } else {
            this.status.npSeal.active = true;
            this.status.npSeal.duration += duration
        }
    }

    confuse(duration) {
        //ability check
        if (this.passive[0] == "Mental Pollution" || this.passive[0] == "Eternal Arms Mastery" || this.passive[0] == "All-Seeing Eyes of the Gods" || this.passive[0] == "Calm and Collected" || this.passive[0] == "Electromagnetic Barrier") {

        } else if (this.passive[0] == "Unstable Mind"){
            this.status.confusion.active = true;
            this.status.confusion.duration += duration * 2
        } else {
            this.status.confusion.active = true;
            this.status.confusion.duration += duration
        }
    }

    fear(duration) {
        //ability check
        if (this.passive[0] == "Fearless" || this.passive[0] == "Manipulating Darkness") {

        } else {
            this.status.fear.active = true;
            this.status.fear.duration += duration
        }
    }

    poison(duration) {
        //ability check
        if (this.passive[0] == "Purity" || this.passive[0] == "Mechanical Body" || this.passive[0] == "Poison Resistance" || this.passive[0] == "Maple") {

        } else {
            this.status.poison.active = true;
            this.status.poison.duration += duration
        }
    }

    instaKill(chance){
        if (this.passive[0] == "At the Boundary"){

        }else{
            const iKill = chancify(() => { this.currentHp = 0 }, chance);
            iKill();
        }
    }

    cureBurn() {
        this.status.burn.active = false;
        this.status.burn.duration = 0
    }

    cureCurse() {
        this.status.curse.active = false;
        this.status.curse.duration = 0
    }

    cureStun() {
        this.status.stun.active = false;
        this.status.stun.duration = 0
    }

    cureFreeze() {
        this.status.freeze.active = false;
        this.status.freeze.duration = 0
    }

    cureNpSeal() {
        this.status.npSeal.active = false;
        this.status.npSeal.duration = 0
    }

    cureConfusion() {
        this.status.confusion.active = false;
        this.status.confusion.duration = 0
    }

    cureFear() {
        this.status.fear.active = false;
        this.status.fear.duration = 0
    }

    curePoison() {
        this.status.poison.active = false;
        this.status.poison.duration = 0
    }


    buffEndurance(power){
        let p = Math.round(power)
        if (p < 1){
            p = 1
        }
        this.currentHp += p * 10
        this.maxHp += p * 10
        this.stats.endurance += p
    }

    buffStrength(power) {
        let p = Math.round(power)
        if (p < 1){
            p = 1
        }
        this.stats.strength += p
    }

    buffAgility(power) {
        let p = Math.round(power)
        if (p < 1) {
            p = 1
        }
        this.stats.agility += p
    }

    buffMagic(power) {
        let p = Math.round(power)
        if (p < 1) {
            p = 1
        }
        if (this.passive[0] == "Perfect Warrior") {
            this.stats.strength += p
        } else{
            this.stats.magic += p
        }
    }

    buffLuck(power) {
        let p = Math.round(power)
        if (p < 1) {
            p = 1
        }
        this.stats.luck += p
    }

    buffDefence(power) {
        if (this.takenDmg == 0.001){

        } else if (power > 600) {
            const p = 600
            this.takenDmg -= this.takenDmg * (p / 1000)
            if (this.takenDmg <= 0.001) {
                this.takenDmg = 0.001
            } else {
                power = power - p
                this.buffDefence(power)
            }
        } else {
            this.takenDmg -= this.takenDmg * (power / 1000)
            if (this.stats.takenDmg <= 0.001) {
                this.stats.takenDmg = 0.001
            }
        }
    }

    buffCriticalStrength(power) {
        this.critStr += this.critStr * (power / 1000)
    }


    debuffEndurance(power) {
        let enduranceDebuff = 0
        if (this.stats.endurance == 1 || this.passive[0] == "Self-aware") {

        } else if (power > 600) {
            const p = 600
            enduranceDebuff = Math.round(this.stats.endurance * (p / 1000))
            this.stats.endurance -= enduranceDebuff
            this.currentHp -= enduranceDebuff * 10
            this.maxHp -= enduranceDebuff * 10
            if(this.currentHp <= 1){
                this.currentHp = 1
            }
            if (this.stats.endurance <= 1) {
                this.stats.endurance = 1
                this.maxHp = 10
            } else {
                power = power - p
                this.debuffEndurance(power)
            }
        } else {
            enduranceDebuff = Math.round(this.stats.endurance * (power / 1000))
            this.stats.endurance -= enduranceDebuff
            this.currentHp -= enduranceDebuff * 10
            this.maxHp -= enduranceDebuff * 10
            if (this.stats.endurance <= 1) {
                this.stats.endurance = 1
                this.maxHp = 10
            }
            if (this.currentHp <= 1) {
                this.currentHp = 1
            }
        }
    }

    debuffStrength(power){
        if (this.stats.strength == 1 || this.passive[0] == "Self-aware"){
            // here will go message can not lower stat any more
        } else if (power > 600) {
            const p = 600
            this.stats.strength -= Math.round(this.stats.strength * (p / 1000))
            if(this.stats.strength <= 1){
                this.stats.strength = 1
            }else{
                power = power - p
                this.debuffStrength(power)
            }
        }else{
            this.stats.strength -= Math.round(this.stats.strength * (power / 1000))
            if (this.stats.strength <= 1) {
                this.stats.strength = 1
            }
        } 
    }

    debuffAgility(power) {
        if (this.stats.agility == 1 || this.passive[0] == "Knowledge of the Sowa" || this.passive[0] == "Self-aware" || this.passive[0] == "Gravity Watch" || this.passive[0] == "Time Manipulation") {

        } else if (power > 600) {
            const p = 600
            this.stats.agility -= Math.round(this.stats.agility * (p / 1000))
            if (this.stats.agility <= 1) {
                this.stats.agility = 1
            } else {
                power = power - p
                this.debuffAgility(power)
            }
        } else {
            this.stats.agility -= Math.round(this.stats.agility * (power / 1000))
            if (this.stats.agility <= 1) {
                this.stats.agility = 1
            }
        }
    }

    debuffMagic(power) {
        if (this.stats.magic == 1 || this.passive[0] == "Infinite Mana Supply" || this.passive[0] == "Self-aware") {

        } else if (power > 600) {
            const p = 600
            this.stats.magic -= Math.round(this.stats.magic * (p / 1000))
            if (this.stats.magic <= 1) {
                this.stats.magic = 1
            } else {
                power = power - p
                this.debuffMagic(power)
            }
        } else {
            this.stats.magic -= Math.round(this.stats.magic * (power / 1000))
            if (this.stats.magic <= 1) {
                this.stats.magic = 1
            }
        }
    }

    debuffLuck(power) {
        if (this.stats.luck == 1 || this.passive[0] == "Self-aware") {

        } else if (power > 600) {
            const p = 600
            this.stats.luck -= Math.round(this.stats.luck * (p / 1000))
            if (this.stats.luck <= 1) {
                this.stats.luck = 1
            } else {
                power = power - p
                this.debuffLuck(power)
            }
        } else {
            this.stats.luck -= Math.round(this.stats.luck * (power / 1000))
            if (this.stats.luck <= 1) {
                this.stats.luck = 1
            }
        }
    }

    debuffDefence(power) {
        this.takenDmg += this.takenDmg * (power / 1000)
    }



    set takeSpellEffect(spellData){
        switch(spellData.spellType){
            case 'damage':
                let dmg = spellData.power 
                if (this.passive[0] == "All Classes Proficiency") {
                    dmg = dmg / 8
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer"){
                    dmg = dmg / 2
                }
                this.takeDammageFlat(dmg)
                break;

            case 'heal':
                this.heal(spellData.power)
                break;
            
            case 'buffStrength':
                this.buffStrength(this.stats.strength * (spellData.power / 1000))
                break;

            case 'buffDefence':
                this.buffDefence(spellData.power)
                break;

            case 'buffAgility':
                this.buffAgility(this.stats.agility * (spellData.power / 1000))
                break;

            case 'buffMagic':
                this.buffMagic(this.stats.magic * (spellData.power / 1000))
                break;
            
            case 'buffLuck':
                this.buffLuck(this.stats.luck * (spellData.power / 1000))
                break;

            case 'debuffStrength':
                if (this.passive[0] == "All Classes Proficiency"){
                    this.debuffStrength(spellData.power / 8)
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer") {
                    this.debuffStrength(spellData.power/2)
                } else{
                    this.debuffStrength(spellData.power)
                }
                break;

            case 'debuffDefence': 
                if (this.passive[0] == "All Classes Proficiency") {
                    this.debuffDefence(spellData.power / 8)
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer") {
                    this.debuffDefence(spellData.power/2)
                } else {
                    this.debuffDefence(spellData.power)
                }
                break;

            case 'debuffAgility':
                if (this.passive[0] == "All Classes Proficiency") {
                    this.debuffAgility(spellData.power / 8)
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer") {
                    this.debuffAgility(spellData.power/2)
                } else {
                    this.debuffAgility(spellData.power)
                }
                break;

            case 'debuffMagic':
                if (this.passive[0] == "All Classes Proficiency") {
                    this.debuffMagic(spellData.power / 8)
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer") {
                    this.debuffMagic(spellData.power/2)
                } else {
                    this.debuffMagic(spellData.power)
                }
                break;

            case 'debuffLuck':
                if (this.passive[0] == "All Classes Proficiency") {
                    this.debuffLuck(spellData.power / 8)
                } else if (this.class == "Saber" || this.class == "Archer" || this.class == "Lancer") {
                    this.debuffLuck(spellData.power/2)
                } else {
                    this.debuffLuck(spellData.power)
                }
                break;

            case 'cureBurn':
                this.cureBurn()
                break;

            case 'cureCurse':
                this.cureCurse()
                break;

            case 'cureStun':
                this.cureStun()
                break;
            
            case 'cureFreeze':
                this.cureFreeze()
                break;

            case 'cureNpSeal':
                this.cureNpSeal()
                break;

            case 'cureConfusion':
                this.cureConfusion()
                break;

            case 'cureFear':
                this.cureFear()
                break;
            
            case 'curePoison':
                this.curePoison()
                break;
            
            case 'inflictBurn':
                this.burn(spellData.spellDuration)
                break;

            case 'inflictCurse':
                this.curse(spellData.spellDuration)
                break;

            case 'inflictStun':
                this.stun(spellData.spellDuration)
                break;

            case 'inflictFreeze':
                this.freezee(spellData.spellDuration)
                break;

            case 'inflictNpSeal':
                this.npSeal(spellData.spellDuration)
                break;

            case 'inflictConfusion':
                this.confuse(spellData.spellDuration)
                break;

            case 'inflictFear':
                this.fear(spellData.spellDuration)
                break;

            case 'inflictPoison':
                this.poison(spellData.spellDuration)
                break;
        }
    }

    
    get inflictDammage(){
        //stats needed for calculation
        const unitStats = {
            ID: this.id,
            endurance: this.stats.endurance,
            strength: this.stats.strength,
            agility: this.stats.agility,
            luck: this.stats.luck,
            magic: this.stats.magic,
            damageBasedOnMagic: this.damageBasedOnMagic,
            npPower: this.noblePhantasm.power,
            NPLevel: this.NPLevel,
            class: this.class,
            critStr: this.critStr,
            passive: this.passive,
            turn: this.turn,
            evade: this.evade,
            traits: this.traits,
            currentHp: this.currentHp,
            maxHp: this.maxHp,
            status: this.status
        }
        return unitStats;
    }

    get np(){
        return this.noblePhantasm;
    }
}


module.exports = {
    BattleUnit: BattleUnit
};