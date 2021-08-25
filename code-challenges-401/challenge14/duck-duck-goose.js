'use strict';

const Queue = require ('./queue');
let myQueue = new Queue();
let deqValue = '';

function duckDuckGoose (listOfStr , k){
  if (listOfStr.length !== 0){
    for (let x=0; x<listOfStr.length; x++){
      myQueue.enqueue (listOfStr[x]);
    }
  }else {
    return 'Unexpected Without Values';
  }
  while (myQueue.size() !== 1 ){
    for (let y =0 ; y< k-1; y++){
      deqValue = myQueue.dequeue();
      myQueue.enqueue(deqValue.val);
    }
    myQueue.dequeue();
  }
  return `last Person : ${myQueue.dequeue().val} `;
}

module.exports = duckDuckGoose;