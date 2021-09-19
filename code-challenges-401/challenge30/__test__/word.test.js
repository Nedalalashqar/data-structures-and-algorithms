'use strict'
const Hashmap = require('../hashmap')

describe('Hashmap ', () => {

    it('Return 3', () => {
        let newHash = new Hashmap(1024);
        let repeatedvalue = newHash.repeatedword('It was a queer, sultry summer ,the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'.toLowerCase()); 
        expect(repeatedvalue).toEqual({"summer": "summer"}); 
    })
})

