const  { Graph, businessTrip} = require('./bussnisTrip');

describe("the trip is possible with direct flights, and how much it would cost", () => {

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

    it("['Naboo', 'Pandora']", () => {
        expect(businessTrip(graph ,['Naboo', 'Pandora'])).toEqual('False, $0');
    })
    it("[Narnia, Arendelle, Naboo]", () => {
        expect(businessTrip(graph ,['Narnia', 'Arendelle', 'Naboo'])).toEqual('False, $0');
    })
    it("[Metroville, Pandora, ]", () => {
        expect(businessTrip(graph ,['Metroville', 'Pandora' ])).toEqual('True, $82');
    })
    it("[Arendelle, New Monstropolis, Naboo]", () => {
        expect(businessTrip(graph ,['Arendelle','Monstropolis', 'Naboo'])).toEqual('True, $115');
    })
})
