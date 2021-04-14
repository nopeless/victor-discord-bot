const { MessageEmbed } = require('discord.js');

const synthesisGuide = [
    "**Synthesis:**",
    "hibiscus + water bottle = health potion",
    "herb + water bottle = mana potion",
    "herb + paper = cigarette",
    "grapes + water bottle = wine",
    "wine + mushroom = poison",
    "bread + sugar = donut",
    "battery + light bulb = flashlight",
    "magnifying glass + flashlight = microscope",
    "hammer + iron = shield",
    "hammer + wheat = flour",
    "hammer + hot iron = sword",
    "hammer + link = hook",
    "hammer + rock = sand",
    "hammer + sword = broken sword",
    "hammer + glass = dust",
    "iron + iron = wrench",
    "iron + wheel = gear",
    "iron + thread = link",
    "link + link = chain",
    "battery + hot iron = magnet",
    "test tube + bacteria = medicine",
    "microscope + rock = bacteria",
    "microscope + milk = bacteria",
    "cigarette + match/lighter = dust",
    "wood + wood = chair",
    "wood + coal = match",
    "wood + match/lighter = dust",
    "wood + iron = hammer",
    "wood + rope = bow",
    "wood + knife = spear",
    "wood + hammer = wheel",
    "wood + mana potion = magic wand",
    "chair + wheel = wheelchair",
    "sugar + sugar = candy",
    "coffee + sugar = energy drink",
    "sand + glass = hourglass",
    "petrol + iron = lighter",
    "mercury + glass = thermometer",
    "match/lighter + glass = test tube",
    "match/lighter + iron ore = iron",
    "match/lighter + iron = hot iron",
    "match/lighter + dust = gun powder",
    "match/lighter + flour = bread",
    "match/lighter + sand = glass",
    "match/lighter + paper = dust",
    "match/lighter + notebook = dust",
    "match/lighter + coal = dust",
    "match + lighter = burnt match",
    "burnt match + lighter = dust",
    "iron + dust = trash can",
    "iron + rock = knife",
    "glass + link = glasses",
    "thread + thread = rope",
    "thread + hook = fishing rod",
    "hook + bow = fishing rod",
    "coffee beans + water = coffee",
    "gun powder + iron = gun",
    "teabag + water bottle = teacup",
    "water bottle + instant ramen = ramen",
    "sugarcane + sugarcane = paper",
    "paper + paper = notebook",
    "knife + knife = scissors",
    "magnifying glass + magnifying glass = telescope",
    "glass + mana potion = crystal ball",
    "copper + glass = light bulb",
    "milk + bacteria = cheese",
    "bread + cheese = pizza",
    "gun powder + thread = tnt",
    "fossil + hourglass = petrol",
    "water + sand = mud",
    "mud + match/lighter = brick",
    "glass + iron = magnifying glass"
]

const dismantleGuide = [
    "**Dismantle:**",
    "spider web => thread",
    "hourglass => sand",
    "notebook => paper",
    "honey pot => sugar",
    "any fruit => beverage box",
    "thermometer => mercury",
    "flashlight => battery",
    "shield => iron",
    "gear => iron",
    "chain => link",
    "telescope => magnifying glass",
    "microscope => magnifying glass",
    "coconut => milk",
    "chair => wood",
    "candy => sugar",
    "fishing rod => thread",
    "burnt match => dust",
    "instant ramen => noodles",
    "sugarcane => sugar",
    "wheelchair => wheel",
    "magnifying glass => glass"
]

const craftingGuide = async (message)=>{
    const embed = new MessageEmbed()
        .setColor('#800b03')
        .setDescription(synthesisGuide)
    await message.channel.send(embed);

    const embed2 = new MessageEmbed()
        .setColor('#800b03')
        .setDescription(dismantleGuide)
    await message.channel.send(embed2);
}

module.exports = craftingGuide