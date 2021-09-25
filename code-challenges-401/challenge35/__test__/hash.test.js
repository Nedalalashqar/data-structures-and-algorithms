'use strict'
const uniqueCharacters = require('../hash')
describe('string is full of unique characters ', () => {
    it('string is full of unique characters with true value', () => {
        expect(uniqueCharacters('I love cats')).toBeTruthy();   
    })
    it('string is full of unique characters with false value', () => {
        expect(uniqueCharacters('Donald the duck')).toBeFalsy();   
    })
    it('string is full of unique characters with false value', () => {
        expect(uniqueCharacters('quick brown fox jumps over the lazy dog')).toBeFalsy();   
    })
})

