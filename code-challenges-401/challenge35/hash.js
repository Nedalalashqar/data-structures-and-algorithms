'use strict'
const Hashmap =require ('./hashclass')

function uniqueCharacters(string) {
    const Hashmap1 = new Hashmap(1024);
    const array = string.split("");
    let key;
    let hash;
    for (let x = 0; x < array.length; x++) {
        if (array[x] !== " ") {
            key = array[x].toLowerCase();
            Hashmap1.add(key, "noValue");
            hash = Hashmap1.hash(key);
            if (Hashmap1.storage[hash].head.next) {
                return false;
            }
        }
    }
    return true;
}

module.exports =uniqueCharacters






























