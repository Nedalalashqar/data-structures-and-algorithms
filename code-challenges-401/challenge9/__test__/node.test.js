"use strict";

const Node = require("../node");
describe("Node", () => {
  it("constructor()", () => {
    let val = 5;
    let nodeNew = new Node(val);
    expect(nodeNew.val).toEqual(val);
    expect(nodeNew.next).toBeNull();
  });
});
