function findValues(n: number, capacity: number, kS: Array<Array<number>>, weights: number[], values: number[]): void {
    let i = n
    let k = capacity
  
    while (i > 0 && k > 0) {
      if (kS[i][k] !== kS[i - 1][k]) {
        console.log(
            'item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
          );
        i--
        k = k - kS[i][k]
      } else {
        i--
      }
    }
}



export function knapSack(capacity: number, weights: number[], values: number[], n: number): number{
    const kS: Array<Array<number>> = []

  for (let i = 0; i <= n; i++) {
    kS[i] = []
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]]
        const b = kS[i - 1][w]
        kS[i][w] = a > b ? a : b
        console.log(a + ' can be part of the solution')
      } else {
        kS[i][w] = kS[i - 1][w]
      }
    }
    console.log(kS[i].join())
  }

  findValues(n, capacity, kS, weights, values)

  return kS[n][capacity]
}

const values = [3, 4, 5]
const weights = [2, 3, 4]
const capacity = 5
const n = values.length
knapSack(capacity, weights, values, n)