export function minCoinChange(coins: number[], amount: number): number[] {
    const change: number[] = []
    let total = 0
    for(let i = 0; i < coins.length; i++){
        if(coins[i] + total <= amount){ 
            change.push(coins[i])
            total += coins[i]
        }
    }

    return change
}