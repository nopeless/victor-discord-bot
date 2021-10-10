const chooseHighestStat = (stats) => {

    class BinaryMaxHeap {
        constructor() {
            this.values = [];
        }

        add(element) {
            this.values.push(element);
            let index = this.values.length - 1;
            const current = this.values[index];

            while (index > 0) {
                let parentIndex = Math.floor(index - 1);
                let parent = this.values[parentIndex];

                if (parent[0] < current[0]) {
                    this.values[parentIndex] = current;
                    this.values[index] = parent;
                    index = parentIndex;
                } else if (parent[0] == current[0]){
                    let rnd = Math.round(Math.random())
                    if(rnd == 0){
                        this.values[parentIndex] = current;
                        this.values[index] = parent;
                        index = parentIndex;
                    } else{
                        break;
                    }
                }else break;
            }
        }
    }

    const bmh = new BinaryMaxHeap
    bmh.add([stats.strength, "strength"])
    bmh.add([stats.endurance, "endurance"])
    bmh.add([stats.magic, "magic"])
    bmh.add([stats.agility, "agility"])
    bmh.add([stats.luck, "luck"])
    
    return bmh.values[0]
}

module.exports = chooseHighestStat;