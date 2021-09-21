'use strict'

const { leftJoin, Hashmap } = require('../leftjoin')
describe('leftJoin Hashmap table ', () => {
    it('Left Join happy path', () => {

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
        console.log('testtt',joined);
        expect(joined.data[588]).toEqual([ 'nedal', 'radwan', 'alashqar' ]);
        expect(joined.data[949]).toEqual([ 'qasem', 'radwan', 'soud' ]);
        expect(joined.data[763]).toEqual([ 'shatha', 'mostafa', 'jweed' ]);
        expect(joined.data[736]).toEqual([ 'lara', 'hashem', null ]);
        expect(joined.data[413]).toEqual([ 'alaa', 'mohammad', 'zoubi' ]);
    })
})
