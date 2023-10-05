/*
A depth-first search (DFS) algorithm is used to explore and traverse a graph or tree by going as deeply as possible along each branch before backtracking. It starts from a specific source vertex and explores as far as possible along each branch before moving to an unvisited branch.

Here's how DFS works:

Start from a specified source vertex.
Mark the source vertex as visited.
Explore an unvisited neighbor of the current vertex.
If an unvisited neighbor is found, repeat steps 2 and 3 for that neighbor. This means going deeper into the graph along that branch.
If there are no unvisited neighbors, backtrack to the previous vertex and repeat step 3 for another unvisited neighbor, if available. This process continues until all paths have been explored.
Continue this process until all vertices have been visited.
The key characteristics of DFS are:

It explores as deeply as possible along each branch before backtracking, which makes it well-suited for tasks such as searching for paths, cycle detection, and topological sorting.
It can be implemented using recursion or a stack data structure to keep track of the vertices to be visited.
The order in which vertices are visited depends on the choice of the starting vertex and the structure of the graph.
*/



import { Dictionary } from "../chapter08/Dictionary/Dictionary"
import { Graph } from "./Graph"
import { Colors, initializeColors } from "./utils"

export const depthFirstSearch = (graph: Graph, callback?: (element: any) => void) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColors(vertices)
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearcVisit(vertices[i], color, adjList, callback)
        }
    }
}

const depthFirstSearcVisit = (
    vertice: (string | number),
    color: { [key: string | number]: string | number },
    adjList: Dictionary<string | number, (string | number)[]>,
    callback?: (element: any) => void
) => {
    color[vertice] = Colors.GREY
    if (callback) {
        callback(vertice)
    }
    const neighbors = adjList.get(vertice)
    for (let i = 0; i < neighbors!.length; i++) {
        if (color[neighbors![i]] === Colors.WHITE) {
            depthFirstSearcVisit(neighbors![i], color, adjList, callback)
        }
    }

    color[vertice] = Colors.BLACK
}

export const DFS = (graph: Graph) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColors(vertices)
    const discovery: { [key: string | number]: string | number } = {}
    const finished: { [key: string | number]: string | number } = {}
    const predecessors: { [key: string | number]: string | number | null } = {}
    const time: { count: number } = { count: 0 }
    for (let i = 0; i < vertices.length; i++) {
        finished[vertices[i]] = 0
        discovery[vertices[i]] = 0
        predecessors[vertices[i]] = null
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, discovery, finished, predecessors, time, adjList)
        }
    }

    return {
        discovery,
        finished,
        predecessors
    }
}

const DFSVisit = (
    vertice: string | number,
    color: { [key: string | number]: string | number },
    discovery: { [key: string | number]: string | number },
    finished: { [key: string | number]: string | number },
    predecessors: { [key: string | number]: string | number | null },
    time: { count: number } = { count: 0 },
    adjList: Dictionary<string | number, (string | number)[]>
) => {
    color[vertice] = Colors.GREY
    discovery[vertice] = ++time.count
    const neighbors = adjList.get(vertice)!
    for (let i = 0; i < neighbors.length; i++) {
        if (color[neighbors[i]] === Colors.WHITE) {
            predecessors[neighbors[i]] = vertice
            DFSVisit(neighbors[i], color, discovery, finished, predecessors, time, adjList)
        }
    }
    color[vertice] = Colors.BLACK
    finished[vertice] = ++time.count
}

