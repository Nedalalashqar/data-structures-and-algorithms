> Hash - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.



![](https://i.ibb.co/X5d6pLL/code22.png)


# Pseudocode

'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 1000 % this.size;
    }
    add(key, val) {
        let hash = this.hash(key);
        console.log(hash);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: val }
        this.map[hash].append(entry);
    }
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]){

            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.val) == key)
                    return cur.val
                cur = cur.next
    
            }
        }
        return 'Exeption'
    }
    contains(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.val) == key)
                    return true
                cur = cur.next
            }
        }
        return false
    }
}
const hashmap = new Hashmap(1024);
hashmap.add('name', 'Nedal');
hashmap.add('nama', 'Qasem');
hashmap.add('age', 27);
hashmap.add('cat', 'Kitty');
hashmap.add('act', 'Jonny Depp');
console.log(hashmap.map[232].head.val);
console.log(hashmap.map[328]);
console.log('get=====>', hashmap.get('name'));
console.log('contains', hashmap.contains('name'));
 
module.exports = Hashmap;