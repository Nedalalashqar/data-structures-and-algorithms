'use strict';

let chaArr = [a,b,d,e]

function testArr(chaArr,val){
    let newChaArr=[];
    let midChaArr = Math.round(chaArr.length/2);
    chaArr.forEach((el,idx)=>{
        if(idx!== midChaArr){
            newChaArr.push(el)
        }else{
            newChaArr.push(val)
            newChaArr.push(el)
        }
    })
    return newChaArr
}
console.log(testArr(chaArr,c));