> Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

£Here are the steps Merge Sort takes:

* Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
* Continue dividing the subarrays in the same manner until you are left with only single element arrays.
* Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
* Repeat step 3 unit with end up with a single sorted array.

![](https://i.ibb.co/Wg6gxgJ/code21.png)


# Pseudocode

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