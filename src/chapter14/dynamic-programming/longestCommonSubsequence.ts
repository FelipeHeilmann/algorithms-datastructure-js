function printSolution(solution: Array<Array<string>>, wordX: string, m: number, n: number) {
    let a = m
    let b = n
    let x = solution[a][b]
    let answer = ''
  
    while (x !== '0') {
      if (solution[a][b] === 'diagonal') {
        answer = wordX[a - 1] + answer
        a-
        b--
      } else if (solution[a][b] === 'left') {
        b--
      } else if (solution[a][b] === 'top') {
        a--
      }
      x = solution[a][b]
    }
  
    return answer
  }



export function lcs(wordX: string, wordY: string){
    const l: number[][] = []
    for(let i = 0; i <= wordX.length; i++){
        l[i] = []
        for(let j = 0; j <= wordY.length; j++){
            l[i][j] = 0
        }
    }
    for(let i = 0; i <= wordX.length; i++){
        for(let j = 0; j <= wordY.length; j++){
            if(i === 0 || j === 0){
                l[i][j] = 0
            } else if (wordX[i - 1] === wordY[j - 1]){
                l[i][j] = l[i - 1][j - 1] + 1
            } else {
                const a = l[i - 1][j]
                const b = l[i][j - 1]
                l[i][j] = a > b ? a : b
            }
        }
    }

    return l[wordX.length][wordY.length]
}

const wordX = 'acbaed'
const wordY = 'abcadf'

console.log(lcs(wordX, wordY))