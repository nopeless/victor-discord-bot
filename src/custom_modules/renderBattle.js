// const jimp = require('jimp');

// const renderBattle = async (message, first, second, background)=>{
//     await jimp.read(`./src/images/backgrounds/${background}`)
//         .then ( async (bridge) => {
//             // servant pictures
//             let firstPic = first.pictures[2]
//             if(first.transformed === true){
//                 firstPic = first.pictures[4]
//             }
//             let secondPic = second.pictures[1]
//             if (second.transformed === true) {
//                 secondPic = second.pictures[3]
//             }
//             const s1 = await jimp.read(firstPic)
//                 .catch(err => {
//                     console.log(err)// Handle an exception.
//                 });
//             const s2 = await jimp.read(secondPic)
//                 .catch(err => {
//                     console.log(err)// Handle an exception.
//                 });


//             // HP handling
//             let leftHpBar = await jimp.read('./src/images/backgrounds/emptybar.png')
//             let hp = await jimp.read('./src/images/backgrounds/hp.png')
//             let rightHpBar = await jimp.read('./src/images/backgrounds/rightemptybar.png')
//             let righthp = await jimp.read('./src/images/backgrounds/righthp.png')

//             if (first.currentHp <= first.maxHp / 2 && first.currentHp > first.maxHp / 4){
//                  hp = await jimp.read('./src/images/backgrounds/hpyellow.png')
//             } else if (first.currentHp <= first.maxHp / 4){
//                 hp = await jimp.read('./src/images/backgrounds/hpred.png')
//             }

//             if (second.currentHp <= second.maxHp / 2 && second.currentHp > second.maxHp / 4) {
//                 righthp = await jimp.read('./src/images/backgrounds/righthpyellow.png')
//             } else if (second.currentHp <= second.maxHp / 4) {
//                 righthp = await jimp.read('./src/images/backgrounds/righthpred.png')
//             }

//             const crop1 = ((Math.floor((first.currentHp * 100) / first.maxHp))/100) * 626
//             const crop2 = ((Math.floor((second.currentHp * 100) / second.maxHp)) / 100) * 626
//             // console.log(`crop1 ${crop1}`)
//             // console.log(`crop2 ${crop2}`)
//             hp.crop(0, 0, crop1, 41);
//             righthp.crop(0, 0, crop2, 41);

           
            


//             // compose image
//             let newBridge = bridge.clone();
//             newBridge
//                 .composite(leftHpBar, 30, 50)
//                 .composite(hp, 209, 81)
//                 .composite(rightHpBar, 1330, 50)
//                 .composite(righthp, 1355 + (626 - crop2), 81)
                
//                 .quality(60) // set JPEG quality
//             // .write('./src/images/backgrounds/newbridge.png'); // save

//             if(first.currentHp > 0 && second.currentHp === 0){
//                 newBridge.composite(s1, 1030, 775)
//             } else if (first.currentHp > 0){
//                 newBridge.composite(s1, 30, 775) 
//             }

//             if (second.currentHp > 0 && first.currentHp === 0) {
//                 newBridge.composite(s2, 300, 775)
//             } else if (second.currentHp > 0) {
//                 newBridge.composite(s2, 1300, 775)
//             }

//             // status icons
//             if(first.status.burn.active === true){
//                 let burn = await jimp.read('./src/images/backgrounds/burn.png')
//                 newBridge.composite(burn, 30, 155);
//             }
//             if (first.status.curse.active === true) {
//                 let curse = await jimp.read('./src/images/backgrounds/curse.png')
//                 newBridge.composite(curse, 100, 155);
//             }
//             if (first.status.stun.active === true) {
//                 let stun = await jimp.read('./src/images/backgrounds/stun.png')
//                 newBridge.composite(stun, 170, 155);
//             }
//             if (first.status.freeze.active === true) {
//                 let freeze = await jimp.read('./src/images/backgrounds/freeze.png')
//                 newBridge.composite(freeze, 240, 155);
//             }
//             if (first.status.npSeal.active === true) {
//                 let npSeal = await jimp.read('./src/images/backgrounds/npSeal.png')
//                 newBridge.composite(npSeal, 310, 155);
//             }
//             if (first.status.confusion.active === true) {
//                 let confusion = await jimp.read('./src/images/backgrounds/confusion.png')
//                 newBridge.composite(confusion, 380, 155);
//             }
//             if (first.status.fear.active === true) {
//                 let fear = await jimp.read('./src/images/backgrounds/fear.png')
//                 newBridge.composite(fear, 450, 155);
//             }
//             if (first.status.poison.active === true) {
//                 let poison = await jimp.read('./src/images/backgrounds/poison.png')
//                 newBridge.composite(poison, 520, 155);
//             }

//             //2nd player
//             if (second.status.burn.active === true) {
//                 let burn2 = await jimp.read('./src/images/backgrounds/burn.png')
//                 newBridge.composite(burn2, 1330, 155);
//             }
//             if (second.status.curse.active === true) {
//                 let curse2 = await jimp.read('./src/images/backgrounds/curse.png')
//                 newBridge.composite(curse2, 1400, 155);
//             }
//             if (second.status.stun.active === true) {
//                 let stun2 = await jimp.read('./src/images/backgrounds/stun.png')
//                 newBridge.composite(stun2, 1470, 155);
//             }
//             if (second.status.freeze.active === true) {
//                 let freeze2 = await jimp.read('./src/images/backgrounds/freeze.png')
//                 newBridge.composite(freeze2, 1540, 155);
//             }
//             if (second.status.npSeal.active === true) {
//                 let npSeal2 = await jimp.read('./src/images/backgrounds/npSeal.png')
//                 newBridge.composite(npSeal2, 1610, 155);
//             }
//             if (second.status.confusion.active === true) {
//                 let confusion2 = await jimp.read('./src/images/backgrounds/confusion.png')
//                 newBridge.composite(confusion2, 1680, 155);
//             }
//             if (second.status.fear.active === true) {
//                 let fear2 = await jimp.read('./src/images/backgrounds/fear.png')
//                 newBridge.composite(fear2, 1750, 155);
//             }
//             if (second.status.poison.active === true) {
//                 let poison2 = await jimp.read('./src/images/backgrounds/poison.png')
//                 newBridge.composite(poison2, 1820, 155);
//             }
            

//             // NP charge bar P1
//             if (first.charge === 0) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle0.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 1) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle1.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 2) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle2.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 3) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle3.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 4) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle4.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 5) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle5.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 6) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle6.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             } else if (first.charge === 7) {
//                 let firstCircle = await jimp.read('./src/images/backgrounds/circle.png')
//                 newBridge.composite(firstCircle, 96, 51);
//             }

//             // NP charge bar P2
//             if (second.charge === 0) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle0.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 1) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle1.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 2) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle2.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 3) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle3.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 4) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle4.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 5) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle5.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 6) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle6.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             } else if (second.charge === 7) {
//                 let secondCircle = await jimp.read('./src/images/backgrounds/circle.png')
//                 newBridge.composite(secondCircle, 1995, 51);
//             }

//             const buffer1 = await newBridge.getBufferAsync(jimp.MIME_PNG);
//             message.channel.send(" ", { files: [buffer1] })
            

//         // 
//         // message.channel.send("My Bot's message", { files: [image] });
//         })
//         .catch(err => {
//             console.error(err);
//         });
    
// }

// module.exports = renderBattle;