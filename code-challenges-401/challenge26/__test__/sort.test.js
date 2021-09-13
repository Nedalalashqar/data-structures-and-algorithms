  'use strict';

const {inserationSort,ReverseSorted} = require('../index');
describe('Sort', ()=>{
    it('Insertion Sort from smallest argest ', ()=> {   
        let array = [ 1, 2, 4, 5, 7, 8 ]
        expect(inserationSort([5, 4, 2, 1, 7, 8])).toEqual(array);
    });
    it('Sort from largest smallest', ()=> {   
        let array = [ 8, 7, 5, 4, 2, 1 ]
        expect(ReverseSorted([5, 4, 2, 1, 7, 8])).toEqual(array);
    });
    });
    