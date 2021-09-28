const  { Graph,dfs} = require('./dfsgraph');

describe("first preorder traversal on a graph", () => {

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
    
    it("Input [Metroville, Pandora, ]", () => {
 
        expect(dfs(graph ,'A')).toEqual([ 'A', 'B', 'C', 'G', 'D', 'E', 'H', 'F' ]);
    })
  

})
