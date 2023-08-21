/*
    Recursion is a function that calls itself.
    it uses divide and conquer to solve problems. 
    it is based on call stack, each return of the function is stored in a stack.
    You need to set a base case or stack overflow exception will be throw
*/

function factorialRecursive(num: number): number{ 
    if(num === 1 || num ===0){
        return 1
    }
    return num * (factorialRecursive(num - 1))
}

console.log(factorialRecursive(5))

function fibonacciRecursive(num : number): number{
    if(num < 1){
        return 0
    }
    if(num <= 2){
        return 1
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
}

/*
    The difference between fibonacciRecursive and fibonacciMemoization is that on fibonacciRecursive
    the function executes more than one time with the same parameter, so the fibonacciMemoization stores the
    results that were calculated, optimizing time.
*/

function fibonacciMemoization(n: number) {
    if (n < 1) { return 0; }
    const memo = [0, 1]
    const fibonacciMem = (num: number): number => {
      if (memo[num] != null) { return memo[num];}
      return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2))
    }
    return fibonacciMem(n)
  }

for(let i = 0; i < 10; i++){
    console.log(fibonacciMemoization(i))
}