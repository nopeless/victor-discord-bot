const {reactions, modifyEthics, modifyMorality} = require('./module');
const churchEventsDialogues = require("../dialogues/churchEventsDialogues");
const libraryEventsDialogues = require('../dialogues/libraryEventsDialogues');
const nurseEventsDialogues = require('../dialogues/nurseEventsDialogues');
const alchemyEventsDialogues = require('../dialogues/alchemyEventsDialogues');
const marketEventsDialogues = require('../dialogues/marketEventsDialogues');
const undergroundsEventsDialogues = require('../dialogues/undergroundsEventsDialogues');
const cityEventsDialogues = require('../dialogues/cityEventsDialogues');
const arenaEventsDialogues = require('../dialogues/arenaEventsDialogues');

const churchEvents = (message, client)=>{

    const textfile = churchEventsDialogues
    const values = [
        [1, 0, -1, 0, 0, 1, 0, 0],
        [1, 0, -1, 0, 0, 0, 0, -1]
    ] 
    const index = Math.floor(Math.random() * churchEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}


const libraryEvents = (message, client) => {

    const textfile = libraryEventsDialogues
    const values = [
        [1, 1, 0, -1, -1, -1, 0, 0],
        [1, 0, -1, 0, -1, -1, 0, 0]
    ]
    const index = Math.floor(Math.random() * libraryEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}


const nurseEvents = (message, client) => {

    const textfile = nurseEventsDialogues
    const values = [
        [1, 0, -1, 0, 0, 1, 0, 0],
        [1, 0, -1, 0, 1, -1, 0, 0],
        [1, 0, -1, 0, 0, -1, 0, 0]
    ]
    const index = Math.floor(Math.random() * nurseEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}


const alchemyEvents = (message, client) => {

    const textfile = alchemyEventsDialogues
    const values = [
        [1, 1, 1, 0, -1, 0, 0, 0],
        [1, 0, -1, 1, -1, -1, 0, 0]
    ]
    const index = Math.floor(Math.random() * alchemyEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}

const marketEvents = (message, client) => {

    const textfile = marketEventsDialogues
    const values = [
        [-1, -1, 1, 0, -1, 1, 0, 0],
        [1, 0, -1, 0, 1, 1, 0, 0],
        [1, 1, 1, 0, -1, 0, 0, 0],
        [1, 0, -1, 0, 1, 1, 0, 0]

    ]
    const index = Math.floor(Math.random() * marketEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}

const undergroundsEvents = (message, client) => {

    const textfile = undergroundsEventsDialogues
    const values = [
        [1, 0, -1, 0, -1, -1, 0, 0]

    ]
    const index = Math.floor(Math.random() * undergroundsEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}

const cityEvents = (message, client) => {

    const textfile = cityEventsDialogues
    const values = [
        [1, 1, 1, -1, -1, -1, 0, 0],
        [0, -1, 0, 1, 0, -1, 1, 1],
        [1, -1, -1, -1, 1, 1, -1, 0]
    ]
    const index = Math.floor(Math.random() * cityEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}

const arenaEvents = (message, client) => {

    const textfile = arenaEventsDialogues
    const values = [
        [1, 0, 1, 1, -1, 0, 0, 0],
        [1, 0, -1, 0, 0, 1, 0, 0]
    ]
    const index = Math.floor(Math.random() * arenaEventsDialogues.length)

    reactions(textfile, message, client, index,
        function () { modifyMorality(message, values[index][0]); modifyEthics(message, values[index][1]); },
        function () { modifyMorality(message, values[index][2]); modifyEthics(message, values[index][3]); },
        function () { modifyMorality(message, values[index][4]); modifyEthics(message, values[index][5]); },
        function () { modifyMorality(message, values[index][6]); modifyEthics(message, values[index][7]); }
    )
}



module.exports = {
    churchEvents: churchEvents,
    libraryEvents: libraryEvents,
    nurseEvents: nurseEvents,
    alchemyEvents: alchemyEvents,
    marketEvents: marketEvents,
    undergroundsEvents: undergroundsEvents,
    cityEvents: cityEvents,
    arenaEvents: arenaEvents
}