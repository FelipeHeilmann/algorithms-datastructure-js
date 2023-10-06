import { Stack } from "../chapter04/Stack"
import { Graph } from "./Graph"
import { BFS, breadthFirstSearch } from "./breadthFirstSearch"
import { DFS, depthFirstSearch } from "./depthFirstSearch"

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
    for (let vertice: string | number | null = toVertice; vertice !== fromVertex; vertice = shortedPathA.predecessors[vertice!]) {
        path.push(vertice!)
    }

    path.push(fromVertex)
    let string = path.pop()
    while (!path.isEmpty()) {
        string += ` -  ${path.pop()}`
    }

    console.log(string)
}

depthFirstSearch(graph, (vertice) => {
    console.log(`Visited vertex:  ${vertice}`)
})

const grap2 = new Graph(true)
const myVertices2 = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < myVertices2.length; i++) {
    grap2.addVertex(myVertices2[i])
}

grap2.addEdge('A', 'C')
grap2.addEdge('A', 'D')
grap2.addEdge('B', 'D')
grap2.addEdge('B', 'E')
grap2.addEdge('C', 'F')
grap2.addEdge('F', 'E')

const result = DFS(grap2)

const fTimes = result.finished;
let s = ''
for (let count = 0; count < myVertices2.length; count++) {
    let max = 0
    let maxName = null
    for (let i = 0; i < myVertices2.length; i++) {
        if (Number(fTimes[myVertices2[i]]) > max) {
            max = Number(fTimes[myVertices2[i]])
            maxName = myVertices2[i]
        }
    }
    s += maxName;
    if (count < myVertices2.length - 1) {
        s += ' - '
    }
    delete fTimes[maxName!]
}
console.log(s)


