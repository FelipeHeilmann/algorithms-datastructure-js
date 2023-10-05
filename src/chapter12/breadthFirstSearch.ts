/*
A breadth-first search (BFS) algorithm is used to explore and traverse a graph or tree in a breadthward motion, starting from a specific source vertex. It systematically explores all the vertices at the current level before moving on to the vertices at the next level, effectively covering the graph or tree layer by layer.

Here's how BFS works:

Start from a specified source vertex.
Enqueue the source vertex into a queue data structure.
Mark the source vertex as visited.
While the queue is not empty:
Dequeue a vertex from the front of the queue (let's call it the current vertex).
Explore all unvisited neighbors of the current vertex.
Enqueue each unvisited neighbor into the queue.
Mark each visited neighbor as visited to avoid revisiting it.
Continue this process until the queue is empty, which indicates that all reachable vertices have been visited.
The key characteristics of BFS are:

It guarantees that the shortest path to each visited vertex from the source vertex is found first, making it suitable for finding shortest paths in unweighted graphs.
It is implemented using a queue data structure to keep track of the vertices to be visited.
It is used in various applications, such as finding connected components, solving puzzles, and network routing.

*/


import { Queue } from "../chapter05/queue/Queue"
import { Graph } from "./Graph"
import { Colors, initializeColors } from "../utils"

export const breadthFirstSearch = (
    graph: Graph,
    startVertex: string | number,
    callback?: (element: string | number) => void
) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColors(vertices)
    const queue = new Queue<string | number>()
    queue.enqueue(startVertex)

    while (!queue.isEmpty()) {
        const vertice: string | number = queue.dequeue()!
        const neighbors = adjList.get(vertice)
        color[vertice] = Colors.GREY
        for (let i = 0; i < neighbors!.length; i++) {
            if (color[neighbors![i]] === Colors.WHITE) {
                color[neighbors![i]] = Colors.GREY
                queue.enqueue(neighbors![i])
            }
        }

        color[vertice] = Colors.BLACK
        if (callback) {
            callback(vertice)
        }
    }
}

export const BFS = (graph: Graph, startVertex: string | number) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColors(vertices)
    const queue = new Queue<string | number>()
    const distance: { [key: string | number]: number } = {}
    const predecessors: { [key: string | number]: string | number | null } = {}
    queue.enqueue(startVertex)
    for (let i = 0; i < vertices.length; i++) {
        distance[vertices[i]] = 0
        predecessors[vertices[i]] = null
    }
    while (!queue.isEmpty()) {
        const vertice = queue.dequeue()
        const neighbors = adjList.get(vertice!)
        color[vertice!] = Colors.GREY
        for (let i = 0; i < neighbors!.length; i++) {
            if (color[neighbors![i]] === Colors.WHITE) {
                color[neighbors![i]] = Colors.GREY
                distance[neighbors![i]] = distance[vertice!] + 1
                predecessors[neighbors![i]] = vertice!
                queue.enqueue(neighbors![i])
            }
        }

        color[vertice!] = Colors.BLACK
    }

    return {
        distance,
        predecessors
    }
}
