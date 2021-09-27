



![](https://i.ibb.co/W5yz8Wk/code27.png)


# Pseudocode

class Graph{
    constructor(){
        this.listaDjacency = {};
    }
    vertexAdd(vertex){
        if(!this.listaDjacency[vertex]) this.listaDjacency[vertex] = [];
    }
    edgeAdd(v1,v2){
        this.listaDjacency[v1].push(v2);
        this.listaDjacency[v2].push(v1);
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.listaDjacency[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
let graph = new Graph();
graph.vertexAdd("Pandora")
graph.vertexAdd("Arendelle")
graph.vertexAdd("Metroville")
graph.vertexAdd("Monstropolis")
graph.vertexAdd("Narnia")
graph.vertexAdd("Naboo")

graph.edgeAdd("Pandora", "Arendelle")
graph.edgeAdd("Arendelle","Metroville")
graph.edgeAdd("Arendelle","Monstropolis")
graph.edgeAdd("Metroville","Monstropolis")
graph.edgeAdd("Metroville","Narnia")
graph.edgeAdd("Metroville","Naboo")
console.log(graph.breadthFirst("Pandora"))
module.exports= Graph;
