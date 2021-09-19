'use strict'
const Hashmap = require('../hashmap')

describe('Hashmap ', () => {
    it('Return 1', () => {
        let newHash = new Hashmap(1024);
        let repeatedvalue = newHash.repeatedword('Once upon a time, there was a brave princess who...'.toLowerCase());
        expect(repeatedvalue).toEqual({"a": "a"});
    })
})

