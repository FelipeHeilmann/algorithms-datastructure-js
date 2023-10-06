function isSafe(maze: Array<Array<number>>, x: number, y: number): boolean {
    if (x >= 0 && y >= 0 && x < maze.length && y < maze.length && maze[x][y] !== 0) {
        return true
    }

    return false
}

function findPath(maze: Array<Array<number>>, x: number, y: number, solution: Array<Array<number>>): boolean {
    if (x === maze.length - 1 && y === maze.length - 1) {
        solution[x][y] = 1
        return true
    }

    if (isSafe(maze, x, y) === true) {
        solution[x][y] = 1
        if (findPath(maze, x + 1, y, solution)) {
            return true
        }
        if (findPath(maze, x, y + 1, solution)) {
            return true
        }
        solution[x][y] = 0
        return false
    }

    return false
}

export function ratInMaze(maze: Array<Array<number>>): Array<Array<number>> | string {
    const solution: Array<Array<number>> = []
    for (let i = 0; i < maze.length; i++) {
        solution[i] = []
        for (let j = 0; j < maze[i].length; j++) {
            solution[i][j] = 0
        }
    }
    if (findPath(maze, 0, 0, solution) === true) {
        return solution
    }

    return 'NO SOLUTION EXISTS'
}

const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
]

console.log(ratInMaze(maze))