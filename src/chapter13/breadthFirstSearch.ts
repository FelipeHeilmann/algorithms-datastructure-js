import { Queue } from "../chapter05/queue/Queue"
import { Graph } from "./Graph"
import { Colors, initializeColors } from "./utils"

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