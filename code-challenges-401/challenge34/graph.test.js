let { Graph ,Vertex} = require('./graph.js');

describe("Graph Moule", () => {
    it("The proper size is returned, representing the number of nodes in the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(50);
        graph.addVertexNode(30);
        graph.addDirectedEdge(50, 30);
        expect(graph.size()).toEqual(2)
    })
    it("An empty graph properly returns null", () => {
        let graph = new Graph();
        expect(graph.isEmpty()).toBeTruthy;
    })
    it("successfully added the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(50);
        expect(graph.included(50)).toBeTruthy();
    })
    it("successfully added the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(40);
        graph.addVertexNode(30);
        graph.addDirectedEdge(40, 30);
        expect(graph.included(30)).toBeTruthy()
    })
    it(" appropriate neighbors can be retrieved from graph", () => {
        let graph = new Graph();
        const two = new Vertex(20);
        const three = new Vertex(30);
        graph.addVertexNode(two);
        graph.addVertexNode(three);
        graph.addDirectedEdge(two, three, 2);
        expect(graph.getNeighbours(two)).toEqual([{"vertex": {"value": 30}, "weight": 2}]);
    })
})
