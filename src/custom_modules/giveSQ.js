const User = require('../../src/models/user');

const giveSQ = (message)=>{
    const input = message.content.slice(4).trim().split(/ +/g)
    console.log(input)
    let sq = parseInt(input[1], 10);
    sq = Math.floor(sq)
    if(input.length === 2 && sq > 0){
        User.findOne({ userID: input[0] }, (err, user) => {
            if (err) {
                console.log(err);
            }
            else {
                if (user) {
                    user.VIPCoins += sq
                    user.save()
                    message.channel.send(`added ${sq}SQ`)
                } else {
                    message.channel.send('no user found')
                }
            }
        })
    }
}

module.exports = giveSQ;