/*
Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree (MST) of a connected, undirected graph. A minimum spanning tree is a subset of the edges of the original graph that connects all vertices together with the minimum possible total edge weight. Kruskal's algorithm starts with an empty set of edges and repeatedly adds the edge with the smallest weight that does not form a cycle in the current set until all vertices are included in the MST.

Here's how Kruskal's algorithm works:

Initialize an empty set of edges (the MST).
Sort all edges in the graph by their weights in non-decreasing order.
Initialize a data structure (usually a disjoint-set data structure) to keep track of connected components (subtrees) of the graph.
Iterate through the sorted edges:
For each edge, if adding it to the MST does not create a cycle (i.e., the edge connects two different connected components), add it to the MST and merge the two connected components.
If adding the edge would create a cycle, skip it.
Continue this process until the MST contains all vertices.
The key characteristics of Kruskal's algorithm are:

It ensures that the MST includes all vertices and has the minimum possible total edge weight.
It does not require the graph to be connected initially, and it can work with disconnected components.
It is often used in network design, such as designing efficient computer networks, power distribution systems, and more.
Kruskal's algorithm systematically builds the minimum spanning tree by selecting edges with the smallest weights that do not form cycles, resulting in an optimal tree that spans all vertices while minimizing the total edge weight.
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

const initializeCost = (graph: number[][]) => {
    const cost: number[][] = []
    const length = graph.length
    for (let i = 0; i < length; i++) {
        cost[i] = []
        for (let j = 0; j < length; j++) {
            if (graph[i][j] === 0) {
                cost[i][j] = INF_CONST
            } else {
                cost[i][j] = graph[i][j]
            }
        }
    }
    return cost
}

const find = (i: number, parent: number[]) => {
    while (parent[i]) {
        i = parent[i]
    }
    return i
};

const union = (i: number, j: number, parent: number[]) => {
    if (i !== j) {
        parent[j] = i
        return true
    }
    return false
};


const kruskal = (graph: number[][]) => {
    const length = graph.length
    const parent: number[] = []
    let ne = 0
    let a
    let b
    let u
    let v

    const cost = initializeCost(graph);

    while (ne < length - 1) {
        for (let i = 0, min = INF_CONST; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j]
                    a = u = i
                    b = v = j
                }
            }
        }

        u = find(u!, parent)
        v = find(v!, parent)

        if (union(u, v, parent)) {
            ne++
        }

        cost[a!][b!] = cost[b!][a!] = INF_CONST
    }

    return parent
}


console.log(kruskal(graph))
