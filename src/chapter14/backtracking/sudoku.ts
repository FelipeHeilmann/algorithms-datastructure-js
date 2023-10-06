const UNASSIGNED = 0

function usedInRow(grid: Array<Array<number>>, row: number, num: number) {
    for (let col = 0; col < grid.length; col++) {
        if (grid[row][col] === num) {
            return true
        }
    }
    return false
}

function usedInCol(grid: Array<Array<number>>, col: number, num: number) {
    for (let row = 0; row < grid.length; row++) {
        if (grid[row][col] === num) {
            return true
        }
    }
    return false
}

function usedInBox(
    grid: Array<Array<number>>,
    boxStartRow: number,
    boxStartCol: number,
    num: number
) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row + boxStartRow][col + boxStartCol] === num) {
                return true
            }
        }
    }
    return false
}

function isSafe(matrix: Array<Array<number>>, row: number, col: number, num: number): boolean {
    return (
        !usedInRow(matrix, row, num) &&
        !usedInCol(matrix, col, num) &&
        !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
    )
}
function solveSudoku(matrix: Array<Array<number>>): boolean {
    let row = 0
    let col = 0
    let checkBlankSpaces = false
    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === UNASSIGNED) {
                checkBlankSpaces = true
                break
            }
        }
        if (checkBlankSpaces === true) {
            break
        }
    }
    if (checkBlankSpaces === false) {
        return true
    }
    for (let i = 1; i <= 9; i++) {
        if (isSafe(matrix, row, col, i)) {
            matrix[row][col] = i
            if (solveSudoku(matrix)) {
                return true
            }
            matrix[row][col] = UNASSIGNED
        }
    }

    return false
}

export function suduku(matrix: Array<Array<number>>): Array<Array<number>> | string {
    if (solveSudoku(matrix) === true) {
        return matrix
    }

    return 'NO SOLUTION EXISTS'
}

const grid = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
]

console.log(suduku(grid))