let Graph = require('./graph.js');
describe("breadth-first traversal", () => {
    it("Implement a breadth-first traversal on a graph.", () => {
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
        expect(graph.breadthFirst("Pandora")).toEqual([ 'Pandora',
        'Arendelle',
        'Metroville',
        'Monstropolis',
        'Narnia',
        'Naboo' ]
      );
    })

})
