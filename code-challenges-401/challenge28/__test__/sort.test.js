'use strict';

const mergeSort= require('../index');
describe('Merge ', ()=>{
    it('Send arr to merge', ()=> {   
        let arr = [8,4,23,42,16,15];
        let res = [ 4, 8, 15, 16, 23, 42 ];
        expect(mergeSort(arr)).toEqual(res);
    });
});