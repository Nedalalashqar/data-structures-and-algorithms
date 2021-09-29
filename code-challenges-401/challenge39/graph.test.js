const { printGraph, addEdge } = require('./graph');

describe("return the odjacency list representation.", () => {
    it(" return the adjacency ", () => {
        let V = 5;
        let odj = [];
        for (let z = 0; z < V; z++)
            odj.push([]);
        addEdge(odj, 0, 1);
        addEdge(odj, 0, 4);
        addEdge(odj, 1, 2);
        addEdge(odj, 1, 3);
        addEdge(odj, 1, 4);
        addEdge(odj, 2, 3);
        addEdge(odj, 3, 4);
        expect(printGraph(odj)).toEqual("0 | 1 -> 4\n1 | 0 -> 2 -> 3 -> 4\n2 | 1 -> 3\n3 | 1 -> 2 -> 4\n4 | 0 -> 1 -> 3\n"
        );
    })
})
