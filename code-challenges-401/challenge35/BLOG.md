



![](https://i.ibb.co/jg8NzP1/code24.png)


# Pseudocode

'use inspect'

class Hashmap {
    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }
    hashs(key) {
        const sumChar = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumChar * 19) % this.size;
        return hashKey;
    }
    add(key, val) {
        const hashs = this.hashs(key);
        console.log('hashs  ',hashs);
        if (!this.data[hashs]) {
            const obj = { [key]: [val] };
            this.data[hashs] = obj;
        } else {
            let entries = Object.entries(this.data[hashs])[0];
            entries[1].push(val);
        }
    }
    addHashs(hashs, val) {
        let arr = [];
        let key = Object.keys(this.data[hashs])[0];
        arr.push(key);
        let existingValues = Object.values(this.data[hashs])[0];
        for (let i = 0; i < existingValues.length; i++) {
            arr.push(existingValues[i]);
        }
        if (val) {
            let newValues = Object.values(val)[0];
            for (let i = 0; i < newValues.length; i++) {
                arr.push(newValues[i]);
            }
        } else {
            arr.push(null);
        }
        this.data[hashs] = arr;
    }
}
function leftJoin(map1, map2) {
    if (map1.data.length > 1) {
        for (let i = 0; i < map1.data.length; i++) {
            if (map1.data[i]) {
                map1.addHashs(i, map2.data[i]);
            }
        }
    }
    return map1;
}

module.exports = {leftJoin ,Hashmap }
const Hashmap1 = new Hashmap(1024);
Hashmap1.add('nedal', 'radwan');
Hashmap1.add('qasem', 'radwan');
Hashmap1.add('shatha', 'mostafa');
Hashmap1.add('lara', 'hashem');
Hashmap1.add('alaa', 'mohammad');
const Hashmap2 = new Hashmap(1024);
Hashmap2.add('nedal', 'alashqar');
Hashmap2.add('qasem', 'soud');
Hashmap2.add('shatha', 'jweed');
Hashmap2.add('alaa', 'zoubi');
Hashmap2.add('ibrahim', 'noor');
let joined = leftJoin(Hashmap1, Hashmap2);
console.log('--------',joined);
