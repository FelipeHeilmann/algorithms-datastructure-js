/*
Prim's algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a connected, undirected graph. A minimum spanning tree is a subset of the edges of the original graph that connects all vertices together with the minimum possible total edge weight. Prim's algorithm starts with an arbitrary vertex and repeatedly adds the edge with the smallest weight that connects a vertex in the MST to a vertex outside the MST until all vertices are included in the MST.

Here's how Prim's algorithm works:

Start with an arbitrary vertex as the initial MST (the minimum spanning tree).
Create a set to keep track of the vertices included in the MST, initially empty.
Initialize a priority queue (min-heap) with all edges connected to the initial MST, where the priority is the weight of the edge.
While the MST does not contain all vertices:
Extract the edge with the smallest weight from the priority queue.
If neither of the edge's vertices is in the MST, discard the edge (it would create a cycle).
Otherwise, add the edge to the MST, and mark the edge's unvisited vertex as visited.
Add all edges connected to the newly added vertex to the priority queue.
Repeat step 4 until all vertices are included in the MST.
The key characteristics of Prim's algorithm are:

It ensures that the MST includes all vertices and has the minimum possible total edge weight.
It uses a priority queue (min-heap) to efficiently select the edge with the smallest weight.
It is often used in network design, such as designing efficient computer networks or power distribution systems.
Prim's algorithm systematically builds the minimum spanning tree by selecting edges with the smallest weights, resulting in an optimal tree that spans all vertices while minimizing the total edge weight.
*/

import { INF_CONST } from "../utils"

var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]

const minKey = (graph: number[][], key: number[], visited: boolean[]) => {
    let min = INF_CONST
    let minIndex = 0

    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v]
            minIndex = v
        }
    }

    return minIndex
}
const prim = (graph: number[][]) => {
    const parent = []
    const key = []
    const visited = []
    for (let i = 0; i < graph.length; i++) {
        key[i] = INF_CONST
        visited[i] = false
    }
    key[0] = 0
    parent[0] = -1
    for (let i = 0; i < graph.length - 1; i++) {
        const u = minKey(graph, key, visited)
        visited[u] = true
        for (let j = 0; j < graph.length; j++) {
            if (graph[u][j] && !visited[j] && graph[u][j] < key[j]) {
                parent[j] = u
                key[j] = graph[u][j]
            }
        }
    }
    return parent
}

console.log(prim(graph))

