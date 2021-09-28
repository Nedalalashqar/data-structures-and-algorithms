'use strict';
class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    vertexAdd(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    edgeAdd(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }
    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        return this.adjacencyList.get(vertex);
    }
}




function dfs(graph, vertex) {
    const visitedVertices = new Set();
    visitedVertices.add(vertex);
    const traverse = (current, visited) => {
        visited.add(current);
        const neighbors = graph.getNeighbours(current);
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                traverse(neighbor.vertex, visited);
            }
        }
    };
    traverse(vertex, visitedVertices);
    return Array.from(visitedVertices);
}




let graph = new Graph();
graph.vertexAdd("A")
graph.vertexAdd("B")
graph.vertexAdd("C")
graph.vertexAdd("D")
graph.vertexAdd("F")
graph.vertexAdd("E")
graph.vertexAdd("H")
graph.vertexAdd("G")

graph.edgeAdd("A", "B" )
graph.edgeAdd("A","D" )
graph.edgeAdd("B","C")
graph.edgeAdd("B","D")
graph.edgeAdd("D","E")
graph.edgeAdd("D","H")
graph.edgeAdd("F","H")
graph.edgeAdd("C","G")
graph.edgeAdd("D","F")


module.exports = { Graph,dfs};
