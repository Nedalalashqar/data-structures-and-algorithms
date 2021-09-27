'use strict';

class Edge {
    constructor(ver, wei) {
        this.ver = ver;
        this.wei = wei;
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(ver) {
        this.adjacencyList.set(ver, []);
    }
    addEdge(start, end, wei) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, wei));
    }
    getNeighbours(ver) {
        if (!this.adjacencyList.has(ver)) {
            return;
        }
        return this.adjacencyList.get(ver);
    }
}
function businessTrip(graph, arrCity) {
    let totalCost = 0;
    let check = false;
    for (let i = 0; i < arrCity.length - 1; i++) {
        let neighbors = graph.getNeighbours(arrCity[i]);
        console.log('neighbors',neighbors);
        for (let j = 0; j <= neighbors.length - 1; j++) {
            if (arrCity[i + 1] === neighbors[j].ver) {
                totalCost += neighbors[j].wei;
                check = true;
            }
        }
        if (check === false) {
            totalCost = 0;
            check = false;
            return `False, $${totalCost}`;
        }
    }
    return `True, $${totalCost}`;
}
let graph = new Graph();
graph.addVertex("Pandora")
graph.addVertex("Arendelle")
graph.addVertex("Metroville")
graph.addVertex("Monstropolis")
graph.addVertex("Narnia")
graph.addVertex("Naboo")

graph.addEdge("Pandora", "Arendelle" ,150)
graph.addEdge("Metroville","Pandora" ,82)
graph.addEdge("Arendelle","Metroville",99)
graph.addEdge("Arendelle","Monstropolis",42)
graph.addEdge("Metroville","Monstropolis",150)
graph.addEdge("Metroville","Narnia",37)
graph.addEdge("Metroville","Naboo",26)
graph.addEdge("Monstropolis","Naboo",73)
graph.addEdge("Narnia","Naboo",250)

console.log(businessTrip( graph ,['Metroville', 'Pandora' ]));
console.log(businessTrip(graph,['Arendelle','Monstropolis', 'Naboo']));
console.log(businessTrip(graph,['Naboo', 'Pandora']));
console.log(businessTrip(graph,['Narnia', 'Arendelle', 'Naboo']));

module.exports = { Graph, businessTrip};
