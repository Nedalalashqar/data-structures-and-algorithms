



![](https://i.ibb.co/XLy3jcr/code29.png)


# Pseudocode

function addEdge(odj,u,val)
{
    odj[u].push(val);
    odj[val].push(u);
}

function printGraph(odj)
{
    let rus =[];
    for (let z = 0; z < odj.length; z++) {
        rus.push(z ,' | ' )
            for (let j = 0; j < odj[z].length; j++) {
               rus.push(odj[z][j]," -> ")      
            }
        rus.pop()
           rus.push("\n")
        }
        return rus.join('');
}

        let val = 5;
        let odj= [];
           
        for (let z = 0; z < val; z++)
            odj.push([]);

        addEdge(odj, 0, 1);
        addEdge(odj, 0, 4);
        addEdge(odj, 1, 2);
        addEdge(odj, 1, 3);
        addEdge(odj, 1, 4);
        addEdge(odj, 2, 3);
        addEdge(odj, 3, 4);
           console.log(printGraph(odj));
        
module.exports = {printGraph,addEdge}
