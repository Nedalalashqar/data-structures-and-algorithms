'use strict';

let arr=[a,b,c,d,e]
let revArr=(array)=>{
let arrNew=[];
for(let i =(array.length-1); i>=0; i--){
    arrNew.push(array[i]);
    }
    return(arrNew)
};
console.log(revArr(arr))

