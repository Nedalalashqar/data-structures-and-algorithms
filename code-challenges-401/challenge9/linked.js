'use strict';

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tai = null;
    this.length = 0;
  }
  insert(val) {
    let nodeNew = new Node(val);
    if (!this.head) {
      this.head = nodeNew;
      this.tai = this.head;
    } else {
      this.tai = nodeNew;
      this.tai.next = nodeNew;
    }
    this.length++;
    return this.head;
  }
  append(val) {
    let nodeNew = new Node(val);
    if (!this.head) {
      this.head = nodeNew;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = nodeNew;
      this.length++;
    }
  }
  insertBefore(val, newVal) {
    let nodeNew = new Node(newVal);
    let curr = this.head;
    if (curr.val === val) {
      nodeNew.next = curr;
      this.head = nodeNew;
    }
    while (curr.next) {
      if (curr.next.val == val) {
        nodeNew.next = curr.next;
        curr.next = nodeNew;
        break;
      }
      curr = curr.next;
    }
  }
  insertAfter(val, newVal) {
    let nodeNew = new Node(newVal);
    let curr = this.head;
    while (curr) {
      if (curr.val == val) {
        nodeNew.next = curr.next;
        curr.next = nodeNew;
        break;
      }
      curr = curr.next;
    }
  }
  includes(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        console.log(`${val} found in list`);
        return true;
      }
      curr = curr.next;
    }
    console.log(`${val} not found in list`);
    return false;
  }
  kthFromEnd(k) {
    let newLinkedList = [];
    let curr = this.head;
    while (curr) {
      newLinkedList.push(curr.val);
      curr = curr.next;
    }
    newLinkedList.reverse();

    if (k >= newLinkedList.length || k < 0) {
      return "error";
    } else {
      return newLinkedList[k];
    }
  }
  linkedListZip(l1, l2) {
    let l3 = new LinkedList();
    if (!l1.head) {
      return l2;
    }
    if (!l2.head) {
      return l1;
    }
    l3.insert(l1.head.val);
    l3.append(l2.head.val);

    let currentL1 = l1.head;
    let currentL2 = l2.head;
    while (currentL1.next || currentL2.next) {
      if (currentL1.next) {
        l3.append(currentL1.next.val);
        currentL1 = currentL1.next;
      }
      if (currentL2.next) {
        l3.append(currentL2.next.val);
        currentL2 = currentL2.next;
      }
    }
    return l3;
  }
  palindrome() {
    let link1 = this.head;
    let link2 = this.head;
    let newArr = [];
    if (!link1) {
      return false;
    }
    while (link2.next != null && link2.next.next != null) {
      link2 = link2.next.next;
      newArr.push(link1.val);
      link1 = link1.next;
    }
    if (link2.next != null) {
      newArr.push(link1.val);
    }
    while (link1.next) {
      link1 = link1.next;
      if (newArr.pop() !== link1.val) {
        return false;
      }
    }
    return true;
  }
  toString() {
    let curr = this.head;
    if (!curr) {
      throw new Error("linked does not exisit");
    }
    let format = "";
    while (curr) {
      format += `{${curr.val}}->`;
      curr = curr.next;
    }
    return (format += "NULL");
  }
}

let list = new LinkedList();
list.insert("h");
list.append("o");
list.append("u");
list.append("s");
list.append("e");
let list2 = new LinkedList();
list2.insert("m");
list2.append("o");
list2.append("o");
list2.append("m");
let list3 = new LinkedList();
list3.insert("t");
list3.append("a");
list3.append("c");
list3.append("o");
list3.append("c");
list3.append("a");
list3.append("t");
console.log(list.palindrome());
console.log(list2.palindrome());
console.log(list3.palindrome());
let l1 = new LinkedList();
l1.insert(1);
l1.append(3);
l1.append(2);
l1.append(7);
l1.append(11);
let l2 = new LinkedList();
l2.insert(5);
l2.append(9);
l2.append(4);

module.exports = LinkedList;