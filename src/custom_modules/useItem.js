

const useItem = (servant, enemy, player, message, input) => {
    let item = player.inventory[input]
    switch(item.id){
        case 50://hp potion
            servant.heal(300)
            message.channel.send('Hp restored +300')
            if (servant.passive[0] == "Transport Card"){

            }else if (item.quantity === 1) {
                player.inventory.splice(input, 1)
            } else {
                item.quantity -= 1
            }
            break;
        case 70://mp potion

            if (player.currentMana + 200 > player.maxMana) {
                player.currentMana = player.maxMana
            } else {
                player.currentMana += 200
            }
            message.channel.send('Mp restored +200')
            if (servant.passive[0] == "Transport Card") {

            }else if (item.quantity === 1) {
                player.inventory.splice(input, 1)
            } else {
                item.quantity -= 1
            }
            break;
    }

   

}

module.exports = useItem;