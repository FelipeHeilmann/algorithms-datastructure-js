/*
Dijkstra's algorithm is a graph traversal and shortest path-finding algorithm that operates by iteratively selecting the vertex with the shortest known distance from the source vertex and relaxing (updating) the distances to its neighboring vertices. It is widely used for finding the shortest path between a source vertex and all other vertices in a weighted graph.

Here's how Dijkstra's algorithm works:

Initialize a list of distances for each vertex, setting the distance to the source vertex as 0 and all other distances as infinity.
Create a priority queue (min-heap) to keep track of vertices with the smallest tentative distance.
Start with the source vertex and add it to the priority queue with a distance of 0.
While the priority queue is not empty:
Extract the vertex with the smallest distance from the priority queue (let's call it the current vertex).
For each neighboring vertex that is not yet visited:
Calculate the tentative distance from the source to this neighboring vertex through the current vertex.
If this tentative distance is shorter than the current known distance to the neighboring vertex, update the distance.
Add the neighboring vertex to the priority queue with its updated distance.
Repeat step 4 until all vertices have been processed.
The key characteristics of Dijkstra's algorithm are:

It guarantees that the shortest path from the source vertex to all other vertices is found.
It relies on a priority queue (min-heap) to efficiently select the vertex with the smallest distance.
It is used in various applications, including network routing, navigation systems, and critical path analysis in project management.
Dijkstra's algorithm is a fundamental tool for solving shortest path problems in graphs with weighted edges, ensuring that the shortest path distances are accurately computed.
*/



var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]

export const INF = Number.MAX_SAFE_INTEGER
const dijkstra = (graph: number[][], src: number) => {
    const dist = []
    const visited = []

    for (let i = 0; i < graph.length; i++) {
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i < graph.length - 1; i++) {
        const u = minDistance(dist, visited)
        visited[u] = true
        for (let j = 0; j < graph.length; j++) {
            if (!visited[j] &&
                graph[u][j] !== 0 &&
                dist[u] !== INF &&
                dist[u] + graph[u][j] < dist[j]
            ) {
                dist[j] = dist[u] + graph[u][j]
            }
        }
    }

    return dist
}

const minDistance = (dist: number[], visited: boolean[]) => {
    let min = INF
    let minIndex = -1
    for (let i = 0; i < dist.length; i++) {
        if (visited[i] === false && dist[i] <= min) {
            min = dist[i]
            minIndex = i
        }
    }
    return minIndex
}

console.log(dijkstra(graph, 0))