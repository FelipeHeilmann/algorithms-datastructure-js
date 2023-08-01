/* ------------------------------ Arrays ------------------------------  */


/*Declarin an array*/ 
const array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


/*Consoling the elements of the array*/
for(let i = 0; i < array.length; i++){
   //console.log(array[i])
}

/* ------------------------------------------------------------------------ */

/*Using an array to store the 20 elements of fibonacci sequence*/
const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

for(let i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] 
}
for(let i = 0; i < fibonacci.length; i++){
    //console.log(fibonacci[i])
}


/* ------------------------------ Array methods ------------------------------  */


const numbers = [0,1,2,3,4,5,6,7,8,9]

/*Adding element(s) to the end of the array*/
numbers.push(10, 11)



/*Shifiting elements to the right to put an element in the first position*/ 
for(let i = numbers.length; i > 0; i--){
    numbers[i] = numbers[i - 1]
}
/*Adding element to the front of the array*/
numbers[0] = -1
/*The unshif() function insert elements to the front of the array like above*/


/*Removing elements from the end of the array*/
numbers.pop()


/*Shifiting elements to the left to put an element in the first position*/
for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i + 1]
}
/*Removing element from the first position*/
/*The shif() function remove element from the front of the array like above*/



