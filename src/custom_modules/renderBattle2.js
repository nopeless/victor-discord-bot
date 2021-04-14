const sharp = require('sharp');

const renderBattle = async (message, first, second, background, isMob) => {
        // servant in database doesn't have code
     // servant pictures
    // console.log(first.name[0])
    // console.log(first.id)
    // console.log(`./src/images/sprites/${first.id}_2.png`)
    let s1 = ''
    if (first.currentHp <= 0){
        s1 = './src/images/empty.png'
    } else{
        if(first.transformed === true){
            s1 = `./src/images/sprites/${first.id}_4.png`
        } else{
            s1 = `./src/images/sprites/${first.id}_2.png`
        }
    }

    let s2 = ''
    if(isMob === true){
        // console.log(second.name[0])
        // console.log(second.id)
        // console.log(`./src/images/sprites/M${second.id}_1.png`)
        
        if (second.currentHp <= 0) {
            s2 = './src/images/empty.png'
        } else {
            if (second.transformed === true) {
                s2 = `./src/images/sprites/M${second.id}_3.png`
            } else {
                s2 = `./src/images/sprites/M${second.id}_1.png`
            }
        }
    }else{
        // console.log(second.name[0])
        // console.log(second.id)
        // console.log(`./src/images/sprites/${second.id}_1.png`)
        if (second.currentHp <= 0) {
            s2 = './src/images/empty.png'
        } else {
            if (second.transformed === true) {
                s2 = `./src/images/sprites/${second.id}_3.png`
            } else {
                s2 = `./src/images/sprites/${second.id}_1.png`
            }
        }
    }
    
   
    //HP bars
    let leftHpBar = './src/images/backgrounds/emptybar.png'
    let hp = './src/images/empty.png'
    let rightHpBar = './src/images/backgrounds/rightemptybar.png'
    let righthp = './src/images/empty.png'
    //HP
    
    
    let crop1 = ''
    if (first.currentHp <= first.maxHp / 2 && first.currentHp > first.maxHp / 4) {
        hp = ('./src/images/backgrounds/hpyellow.png')
        crop1 = Math.floor(((Math.floor((first.currentHp * 100) / first.maxHp)) / 100) * 626)
    } else if (first.currentHp <= first.maxHp / 4 && first.currentHp > 0) {
        hp = ('./src/images/backgrounds/hpred.png')
        crop1 = Math.floor(((Math.floor((first.currentHp * 100) / first.maxHp)) / 100) * 626)
        if (crop1 < 1) {
            crop1 = 1
        }
    } else if (first.currentHp <= 0){
        hp = './src/images/empty.png'
        crop1 = 1
    } else{
        hp = ('./src/images/backgrounds/hp.png')
        crop1 = Math.floor(((Math.floor((first.currentHp * 100) / first.maxHp)) / 100) * 626)
    }
        
    
    let crop2 = ''
    if (second.currentHp <= second.maxHp / 2 && second.currentHp > second.maxHp / 4) {
        righthp = ('./src/images/backgrounds/righthpyellow.png')
        crop2 = Math.floor(((Math.floor((second.currentHp * 100) / second.maxHp)) / 100) * 626)
    } else if (second.currentHp <= second.maxHp / 4 && second.currentHp > 0) {
        righthp = ('./src/images/backgrounds/righthpred.png')
        crop2 = Math.floor(((Math.floor((second.currentHp * 100) / second.maxHp)) / 100) * 626)
        if(crop2 < 1){
            crop2 = 1
        }
    } else if (second.currentHp <= 0) {
        righthp = './src/images/empty.png'
        crop2 = 1
    }else{
        righthp = ('./src/images/backgrounds/righthp.png')
        crop2 = Math.floor(((Math.floor((second.currentHp * 100) / second.maxHp)) / 100) * 626)

    }

    // console.log(crop1)
    // console.log(crop2)
    // composite
    
       
    // composite players
    let s1Position = 0
    if (first.currentHp > 0 && second.currentHp === 0) {
        s1Position = 1030
    } else if (first.currentHp > 0) {
        s1Position = 30
    }

    let s2Position = 0
    if (second.currentHp > 0 && first.currentHp === 0) {
        s2Position = 300
    } else if (second.currentHp > 0) {
        s2Position = 1300
    }


    // status icons
    let burn = './src/images/empty.png'
    let curse = './src/images/empty.png'
    let stun = './src/images/empty.png'
    let freeze = './src/images/empty.png'
    let npSeal = './src/images/empty.png'
    let confusion = './src/images/empty.png'
    let fear = './src/images/empty.png'
    let poison = './src/images/empty.png'
    let guts = './src/images/empty.png'
    let evade = './src/images/empty.png'
    if (first.status.burn.active === true) {
        burn = ('./src/images/backgrounds/burn.png')
    }
    if (first.status.curse.active === true) {
        curse = ('./src/images/backgrounds/curse.png')
    }
    if (first.status.stun.active === true) {
        stun = ('./src/images/backgrounds/stun.png')
    }
    if (first.status.freeze.active === true) {
        freeze = ('./src/images/backgrounds/freeze.png')
    }
    if (first.status.npSeal.active === true) {
        npSeal = ('./src/images/backgrounds/npSeal.png')
    }
    if (first.status.confusion.active === true) {
        confusion = ('./src/images/backgrounds/confusion.png')
    }
    if (first.status.fear.active === true) {
        fear = ('./src/images/backgrounds/fear.png')
    }
    if (first.status.poison.active === true) {
        poison = ('./src/images/backgrounds/poison.png')
    }
    if (first.guts === true) {
        guts = ('./src/images/backgrounds/revive.png')
    }
    if (first.evade > 0) {
        evade = ('./src/images/backgrounds/evade.png')
    }

    //2nd player
    let burn2 ='./src/images/empty.png'
    let curse2 = './src/images/empty.png'
    let stun2 = './src/images/empty.png'
    let freeze2 ='./src/images/empty.png'
    let npSeal2 = './src/images/empty.png'
    let confusion2 = './src/images/empty.png'
    let fear2 = './src/images/empty.png'
    let poison2 = './src/images/empty.png'
    let guts2 = './src/images/empty.png'
    let evade2 = './src/images/empty.png'
    if (second.status.burn.active === true) {
        burn2 = ('./src/images/backgrounds/burn.png')
    }
    if (second.status.curse.active === true) {
        curse2 = ('./src/images/backgrounds/curse.png')
    }
    if (second.status.stun.active === true) {
        stun2 = ('./src/images/backgrounds/stun.png')
    }
    if (second.status.freeze.active === true) {
        freeze2 = ('./src/images/backgrounds/freeze.png')
    }
    if (second.status.npSeal.active === true) {
        npSeal2 = ('./src/images/backgrounds/npSeal.png')
    }
    if (second.status.confusion.active === true) {
        confusion2 = ('./src/images/backgrounds/confusion.png')
    }
    if (second.status.fear.active === true) {
        fear2 = ('./src/images/backgrounds/fear.png')
    }
    if (second.status.poison.active === true) {
        poison2 = ('./src/images/backgrounds/poison.png')
    }
    if (second.guts === true) {
        guts2 = ('./src/images/backgrounds/revive.png')
    }
    if (second.evade > 0) {
        evade2 = ('./src/images/backgrounds/evade.png')
    }

    // NP charge bar P1
    let firstCircle = './src/images/empty.png'
    if (first.charge <= 0) {
        firstCircle = ('./src/images/backgrounds/circle0.png')      
    } else if (first.charge === 1) {
        firstCircle = ('./src/images/backgrounds/circle1.png')       
    } else if (first.charge === 2) {
        firstCircle = ('./src/images/backgrounds/circle2.png')
    } else if (first.charge === 3) {
        firstCircle = ('./src/images/backgrounds/circle3.png')
    } else if (first.charge === 4) {
        firstCircle = ('./src/images/backgrounds/circle4.png')
    } else if (first.charge === 5) {
        firstCircle = ('./src/images/backgrounds/circle5.png')
    } else if (first.charge === 6) {
        firstCircle = ('./src/images/backgrounds/circle6.png')
    } else if (first.charge === 7) {
        firstCircle = ('./src/images/backgrounds/circle.png')
    }

    // NP charge bar P2
    let secondCircle = './src/images/empty.png'
    if (second.charge <= 0) {
        secondCircle = ('./src/images/backgrounds/circle0.png')  
    } else if (second.charge === 1) {
        secondCircle = ('./src/images/backgrounds/circle1.png')
    } else if (second.charge === 2) {
        secondCircle = ('./src/images/backgrounds/circle2.png')
    } else if (second.charge === 3) {
        secondCircle = ('./src/images/backgrounds/circle3.png')
    } else if (second.charge === 4) {
        secondCircle = ('./src/images/backgrounds/circle4.png')
    } else if (second.charge === 5) {
        secondCircle = ('./src/images/backgrounds/circle5.png')
    } else if (second.charge === 6) {
        secondCircle = ('./src/images/backgrounds/circle6.png')
    } else if (second.charge === 7) {
        secondCircle = ('./src/images/backgrounds/circle.png')
    }

    await sharp(hp).resize(crop1, 42).toBuffer().then(async(newhp) => {
        await sharp(righthp).resize(crop2, 42).toBuffer().then(async(newrighthp) => {  
            sharp(`./src/images/backgrounds/${background}`)
                .composite([
                    { input: poison2, left: 1820, top: 155 },
                    { input: fear2, left: 1750, top: 155 },
                    { input: confusion2, left: 1680, top: 155 },
                    { input: npSeal2, left: 1610, top: 155 },
                    { input: freeze2, left: 1540, top: 155 },
                    { input: stun2, left: 1470, top: 155 },
                    { input: curse2, left: 1400, top: 155 },
                    { input: burn2, left: 1330, top: 155 },
                    { input: guts2, left: 1890, top: 155 },
                    { input: evade2, left: 1960, top: 155 },
                    { input: poison, left: 520, top: 155 },
                    { input: fear, left: 450, top: 155 },
                    { input: confusion, left: 380, top: 155 },
                    { input: npSeal, left: 310, top: 155 },
                    { input: freeze, left: 240, top: 155 },
                    { input: stun, left: 170, top: 155 },
                    { input: curse, left: 100, top: 155 },
                    { input: burn, left: 30, top: 155 },
                    { input: guts, left: 590, top: 155 },
                    { input: evade, left: 660, top: 155 },
                    { input: s1, left: s1Position, top: 775 },
                    { input: s2, left: s2Position, top: 775 },
                    { input: leftHpBar, left: 30, top: 50 },
                    { input: newhp, left: 209, top: 81 },
                    { input: rightHpBar, left: 1330, top: 50 },
                    { input: newrighthp, left: 1355 + (626 - crop2), top: 81 },
                    { input: firstCircle, left: 96, top: 51 },
                    { input: secondCircle, left: 1995, top: 51 }
                ])
                .toBuffer(async (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        await message.channel.send(" ", { files: [data] })
                    }
                })
        })
         })

    
}


module.exports = renderBattle;