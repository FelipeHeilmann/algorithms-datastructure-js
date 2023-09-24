var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]

const INF = Number.MAX_SAFE_INTEGER
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