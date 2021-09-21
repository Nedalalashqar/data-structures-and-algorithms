'use strict'
const { BinaryTree, tree_intersection } = require('../BSThashmap')

describe('tree_intersection ', () => {

    it('tree_intersection happy path', () => {
        const treeOne = new BinaryTree();
        treeOne.add(150);
        treeOne.add(100);
        treeOne.add(250);
        treeOne.add(75);
        treeOne.add(160);
        treeOne.add(125);
        treeOne.add(175);
        treeOne.add(200);
        treeOne.add(350);
        treeOne.add(300);
        treeOne.add(500);
        const treeTow = new BinaryTree();
        treeTow.add(42);
        treeTow.add(100);
        treeTow.add(600);
        treeTow.add(15);
        treeTow.add(160);
        treeTow.add(200);
        treeTow.add(350);
        treeTow.add(125);
        treeTow.add(175);
        treeTow.add(4);
        treeTow.add(500);
        let tree= tree_intersection(treeOne, treeTow);
        expect(tree).toEqual([ [ '100' ],
        [ '125' ],
        [ '160' ],
        [ '175' ],
        [ '200' ],
        [ '350' ],
        [ '500' ] 
        ]);

    })
    it('tree_intersection bad path', () => {
        const treeOne = new BinaryTree();
        treeOne.add(150);
        treeOne.add(100);
        treeOne.add(250);
        treeOne.add(75);
        treeOne.add(160);
        treeOne.add(125);
        treeOne.add(175);
        treeOne.add(200);
        treeOne.add(350);
        treeOne.add(300);
        treeOne.add(500);
        const treeTow = new BinaryTree();
        let tree= tree_intersection(treeOne, treeTow);
        expect(tree).toEqual('Exception');
    })
})