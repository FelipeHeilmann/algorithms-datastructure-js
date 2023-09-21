import { Stack } from "../chapter4/Stack";
import { Graph } from "./Graph";
import { BFS, breadthFirstSearch } from "./utils";

const graph = new Graph(false)
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

breadthFirstSearch(graph, myVertices[0], (vertice) => {
    console.log(`Visited vertex ${vertice}`)
})

const shortedPathA = BFS(graph, myVertices[0])

const fromVertex = myVertices[0]
for (let i = 1; i < myVertices.length; i++) {
    const toVertice = myVertices[i]
    const path = new Stack<string | number>()
    for (let vertice: string | number | null = toVertice; vertice !== fromVertex; vertice = shortedPathA.prodecessors[vertice!]) {
        path.push(vertice!)
    }

    path.push(fromVertex)
    let string = path.pop()
    while (!path.isEmpty()) {
        string += ` -  ${path.pop()}`
    }

    console.log(string)
}


