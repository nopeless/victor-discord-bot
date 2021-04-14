
class Player {
    constructor(object) {

        this.playerID = object.message.author.id
        // name: message.author.username, //
        // avatar: message.author.avatar, // both not necessary u can get them directly from DSC
        this.ethics = 50
        this.morality = 50
        this.wish = ""
        this.money = 0
        this.currentAp = 3
        this.maxAp = 3
        this.level = 1
        this.exp = 0
        this.servantsLimit = 1
        this.stats = {
            strength: 10,
            endurance: 10,
            agility: 10,
            magic: 10,
            luck: 10
        }
        this.currentMana = 100
        this.maxMana = this.stats.magic * 10
        this.statsPoints = 0
        this.wishesGranted = []
        this.goldenCoins = 0
        this.holyGrails = 0
        this.commandsLeft = 3
        this.commandId = object.command_id
        this.points = 0
        this.weeklyBP = 0
        this.isFighting = false
        this.test = 0
        this.daily = 0
        this.spells = []
        this.servants = []
        this.iventory = []
    }

}

module.exports = Player;