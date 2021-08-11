'use strict';
const binary = require('./challenge2');
const arrayOne = [a,b,c,d,e];
const arrayTwo = [w,a,s,r,f,v,s];
const arrayThree = [a,c,d,e,f];
describe('Testing binary search in a sorted array', () => {
    test('Finds index of searchKey using binary search', () => {
        expect(binary(arrayOne, c)).toEqual(2);
        expect(binary(arrayTwo, z)).toEqual(-1);
        expect(binary(arrayThree, b)).toEqual(-1);
    });
});
