'use strict'

function merge(left, right) {
    let sortArr = []; 
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortArr.push(left.shift());
      } else {
        sortArr.push(right.shift());
      }
    }
    return [...sortArr, ...left, ...right];
  } 

function mergeSort(array) {
    const half =Math.ceil(array.length / 2) ;
    console.log('half',half);
    if (array.length <= 1) {
      return array;
    }
  
    const left = array.splice(0, half);
    console.log('splice',left);
    const right = array;
    console.log('righrt',right );
    return merge(mergeSort(left), mergeSort(right));
  }
  console.log('mergeSort',mergeSort([5,2,4,3,1]));
  
module.exports = mergeSort;