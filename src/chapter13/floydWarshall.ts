/*
The Floyd-Warshall algorithm is a dynamic programming technique used to find the shortest paths between all pairs of vertices in a weighted, directed graph. Unlike Dijkstra's algorithm, which finds the shortest paths from one source vertex to all other vertices, Floyd-Warshall finds the shortest paths between every pair of vertices in the graph.

Here's how the Floyd-Warshall algorithm works:

Initialize a two-dimensional array called dist with the same number of rows and columns as the number of vertices in the graph.

dist[i][j] represents the shortest distance from vertex i to vertex j.
Initialize dist[i][j] to a very large value (indicating infinity) for all pairs (i, j) where i is not equal to j, and initialize dist[i][i] to 0 for all vertices.
For each vertex k, iterate through all pairs of vertices (i, j) and check if the path from i to j through vertex k is shorter than the current known path from i to j. If it is, update dist[i][j] to the new shorter distance.

Repeat step 2 for all vertices as the intermediate vertex (k). After iterating through all vertices, the dist matrix will contain the shortest distances between all pairs of vertices.

The key characteristics of the Floyd-Warshall algorithm are:

It is efficient for finding the shortest paths between all pairs of vertices in a dense graph with both positive and negative edge weights.
It can detect negative weight cycles in the graph. If there is a negative weight cycle reachable from any vertex, the dist matrix will contain negative values along its diagonal.
Floyd-Warshall is often used in scenarios where you need to compute the shortest distances between all pairs of locations in a network, such as in transportation and communication networks.
*/

var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]

const floydWarshall = (graph: number[][]) => {
    const dist: number[][] = []
    for (let i = 0; i < graph.length; i++) {
        dist[i] = []
        for (let j = 0; j < graph.length; j++) {
            if (i === j) {
                dist[i][j] = 0
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity
            } else {
                dist[i][j] = graph[i][j]
            }
        }
    }
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            for (let z = 0; z < graph.length; z++) {
                if (dist[j][z] + dist[i][z] < dist[j][z]) {
                    dist[j][z] = dist[j][i] + dist[i][z]
                }
            }
        }
    }

    return dist
}

console.log(floydWarshall(graph))