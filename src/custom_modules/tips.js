const tips = [
"Commands seals can be restored by donating 10 000 QP to the Kirei's church.",
"Saber, Archer and Lancer class servants receive 50% less damage from damage inflicting spells due to their magic resistance.",
"Rider class servants have +10% to evasion rate.",
"Assassin class servants have +10% to crit chance. ",
"Caster class servants NP is 10% more effective",
"Berserker class servants deal 10% more damage by their normal attacks.",
"Shielder class servants receive 25% less damage from normal attacks.",
"If your servant belongs to the Ruler class, enemy's True Name will be revelated to you even if your guess will be wrong.",
"Avenger class servants negative status effects last shorter than normal. (8turns=>4 turns; 3=>2 ...).",
"Alter Ego class servants deal 5% more normal attack damage and receive 10% less damage from normal attacks.",
"Moon Cancer class servants gain 2 NP charge per turn instead of one.",
"Foreginer class servants take 25% less damage from enemy NP.",
"Actions in Gill's shop do not consume AP.",
"Not all items can be used as the catalysts.",
"You can obtain items either by buying them from the market, finding them in the treasure hunt or by crafting them in Alchemy Workshop.",
"Some spells can be learned only by certain aligments.",
"Your aligment can change depending on the choices you'll make during certain events. Sometimes you need to look around to find them.",
"Spells maximum level is 30.",
"Maximum level of a servant is 100.",
"You can restore mana by paying the nurse for performing mana transfer.",
"Master's stats carry on all of their servants.",
"The higher master's endurance - servant's endurance ratio is the more of servant's HP will be recovered after battle.",
"The higher master's magic stat is, the more mana they have.",
"Red potions can restore 300HP during battle.",
"Blue potions can restore 200MP during battle.",
"Servant can level up only once per action.",
"There are 28 spell types: damage,  heal, buffStrength, buffDefence, buffAgility, buffMagic, buffLuck, debuffStrength, debuffDefence, debuffAgility, debuffMagic, debuffLuck, cureBurn, cureCurse, cureStun, cureFreeze, cureNpSeal, cureConfusion, cureFear, curePoison, inflictBurn, inflictCurse, inflictStun, inflictFreeze, inflictNpSeal, inflictConfusion, inflictFear, inflictPoison",
"Status effect Burn: each turn decrease HP by 5% and Strength by 10%",
"Status effect Curse: each turn decrease HP by 5% and Luck by 10%",
"Status effect Stun: affected can not use normal attacks",
"Status effect Freeze: each turn decrease HP by 5% and Agility by 10%",
"Status effect NP Seal: affected can not use NP",
"Status effect Confusion: affected have 50% chance to hit themselves instead of the enemy (does not aply to NPs)",
"Status effect Fear: each turn decrease Magic by 20%",
"Status effect Poison: each turn decrease HP by 10%",
"You can earn 10x more Battle Points by fighting with other masters rather than mobs.",
"If you guess enemy True Name right, their current Strength and Magic stats will be reduced by 50%!",
"You can earn Golden Coins by placing top 3 in the Anime Holy Grail War.",
"The winner of the Anime Holy Grail War will receive The Holy Grail, 3 Golden coins and have their wish granted.",
"The only way to get rid of unwanted servant is to let them die in battle."
]

const displayTip = (message)=>{
    const length = tips.length
    let random = Math.floor(Math.random() * length)
    message.channel.send("```"
        + tips[random] +
        "```");
}
module.exports = displayTip;