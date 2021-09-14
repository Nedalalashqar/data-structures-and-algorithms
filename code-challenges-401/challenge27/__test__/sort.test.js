'use strict';

const quickSort= require('../index');
describe('Quick Sort', ()=>{
    it('send arr to quick', ()=> {   
        let arr = [8,4,23,42,16,15];
        let res = [ 4, 8, 15, 16, 23, 42 ];
        expect(quickSort(arr, 0, arr.length - 1)).toEqual(res);
    });
});

