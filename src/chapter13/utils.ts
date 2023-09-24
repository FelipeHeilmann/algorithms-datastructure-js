import { Queue } from "../chapter05/queue/Queue";
import { Dictionary } from "../chapter08/Dictionary/Dictionary";
import { Graph } from "./Graph";

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

const initializeColors = (vertices: (string | number)[]) => {
    const color: { [key: string | number]: string | number } = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }

    return color
}

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