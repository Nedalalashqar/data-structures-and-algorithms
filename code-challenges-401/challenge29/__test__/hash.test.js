'use strict'
const Hashmap = require('../hashmap')

describe('Hashmap ', () => {
    it('Add key to the hash table', () => {

        let newHash = new Hashmap(1024);
        newHash.add('name', 'Samah');
        const get = newHash.get('name');
        expect(get).toEqual({ name: 'Samah' })
    })
    it('Add key', () => {
        let newHash = new Hashmap(1024);
        newHash.add('name', 'Samah');
        newHash.add('age', '23');
        expect( newHash.map[232].head.value).toEqual({ name: 'Samah' })
        expect( newHash.map[968].head.value).toEqual({ age: '23' })
    })

    it('Check if the key into a hash table , happy path', () => {
        let newHash = new Hashmap(1024);
        newHash.add('name', 'Samah');
        const get = newHash.contains('name');
        expect(get).toEqual(true)
       
    })
    it('Add key to the hash table , bad path', () => {

        let newHash = new Hashmap(1024);
        newHash.add('name', 'Samah');
        const get = newHash.get('namee');
        expect(get).toEqual('Exeption')
    })
    it('Check if the key into a hash table , bad path', () => {
        let newHash = new Hashmap(1024);
        newHash.add('name', 'Samah');
        const get = newHash.contains('namee');
        expect(get).toEqual(false)
       
    })
})

