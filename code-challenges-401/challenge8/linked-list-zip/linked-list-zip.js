'use strict';
const LinkedList = require('../LinkedList');

const zipList=(linkedlist1, linkedlist2) =>{
  if (linkedlist1.length === 0 || linkedlist2.length === 0 ) {
    return 'Exception';
  }
  let cur1 = linkedlist1.head;
  let cur2 = linkedlist2.head;

  let linkedlist1Length = linkedlist1.length;
  let linkedlist2Length = linkedlist2.length;

  while (cur1 && cur2.next){
    linkedlist1.insertAfter(cur1.value,cur2.value);

    cur1 = cur1.next.next;
    cur2 = cur2.next;
  }
  if (linkedlist1Length === linkedlist2Length){
    linkedlist1.append (cur2.value);
  } else if (linkedlist1Length < linkedlist2Length){
    linkedlist1.append(cur2.value);
  } else if (linkedlist1Length > linkedlist2Length){
    linkedlist1.insertAfter (cur1.value,cur2.value);
  }
  return linkedlist1;
}

module.exports = zipList;
