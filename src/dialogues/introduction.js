let introduction = [
    {
        name: "Kirei Kotomine",
        picture: "https://i.imgur.com/6tAw2Cl.png",
        content:
            [
                `Rejoice new master,`, //${message.author.username},
                "because the wish you have yearned so much for will soon come true.", 
                "But if you really want to rarticipate in The Anime Holly Grail War, ", 
                "you must summon yourself a servant first."
                
            ]
    },

    {
        name: "Kirei Kotomine",
        picture: "https://i.imgur.com/6tAw2Cl.png",
        content:
            [
                `You do not strike me as a proper master`,// ${message.author.username}`,
                "You probably don't even have a catalyst for the summoning ritual, am I right?",
                "Do not worry as for now you still should be able to perform a summoning",
                "even without a catalyst. Hovewer in that case the summoned servant will be choosen based on",
                "your personality. So please could you answer a few simple questions for me?",
                "I am just curious what kind of person you are. ",
                "(Use command **f/test** to begin the alignment test.)"
            ]
    }
]

postIntroduction = [
    {
        name: "Kirei Kotomine",
        picture: "https://i.imgur.com/6tAw2Cl.png",
        content:
            [   "The last one was a joke, I'm sorry I got carried away.",
                `Hmmm... I see now, so you are that kind of person...`,
                `Now, let's proceed with the summoning ritual.`,// ${message.author.username}`,
                "When you will be ready please use **f/action** command and meet me at the church.",
                
            ]
    }
]


module.exports = {
    introduction: introduction,
    postIntroduction: postIntroduction
}