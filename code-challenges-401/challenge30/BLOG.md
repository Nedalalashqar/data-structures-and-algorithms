



![](https://i.ibb.co/87QdyFD/code23.png)


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
        this.size = 0;
    }
    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }
        let cur = this.head;
        this.size++;
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
        this.sizeTow = 0;
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 1000 % this.size;
    }
    add(key, val) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: val }
        this.map[hash].append(entry);
        this.sizeTow++;
        return hash
    }
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
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
    repeatedword(word) {
        let repeatedWord = word.split(' ');
        let arr = [];
        for (let i = 0; i < repeatedWord.length; i++) {
            let hashvalue = hashmap.add(repeatedWord[i], repeatedWord[i]);
            arr.push(hashvalue);
            for (let i = 0; i < arr.length; i++) {
                if (hashmap.map[arr[i]].size > 1)
                    return hashmap.map[arr[i]].head.val;

            }
        }
    }
}
const hashmap = new Hashmap(1024);
// console.log(hashmap.repeatedword('Once upon a time, there was a brave princess who...'.toLowerCase()));
// console.log(hashmap.repeatedword('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'.toLowerCase()));
// console.log(hashmap.repeatedword('It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'.toLowerCase()));

module.exports = Hashmap;