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

/*
The splice() method can delete elements from any position in the array.
splice(arg1, arg2)
arg1 =  the index you want to start
agr2 = how many elements do you want to remove
*/
numbers.splice(5,3)

/*
splice() method also can insert elements in any position from the array 
splice(arg1, arg2, args3....)
arg1 =  the index you want to start
agr2 = how many elements do you want to remove
agrs3... = the elements you want to insert
*/
numbers.splice(5, 0, 2, 3, 4)
/*Use 0 because we dont want to delete any element*/

/* ------------------------------ Bidemensional and Multidemensional Arrays ------------------------------  */

/*
Using bidimensional array to store the average time, 
where each column  will represent the day and the column the hourly average
*/

let averageTemp = []

averageTemp[0] = [72,75,79,79,81,81]
averageTemp[1] = [81,79,75,75,73,73]

/*This is also called matrix*/

/*Consoling the elements of matrix*/
for(let i = 0; i < averageTemp.length; i++){
    for(let j = 0; j < averageTemp[i].length; j++){
        //console.log(averageTemp[i][j])
    }
}
//console.table(averageTemp)

/*Multidimensional array*/
const matrix3x3x3: number[][][] = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

/*For how many dimensionals you have, you need to use a loop to run through it*/

const isEven = (number: number) => number % 2 === 0

let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15]

/*every() interates through every element of the array, until it returns false*/
newNumbers.every(isEven)

/*some()  interates through every element of the array, until it returns true*/
newNumbers.some(isEven)

/*forEach() interates through every element of the array, like the for loop */
newNumbers.forEach(number => console.log(number % 2 === 0))

/*map() creates an array from the result of a function which elements match the condition */
newNumbers.map(isEven)

/*filter() cretes an array with elements that returned true of the function*/
newNumbers.filter(isEven)

/*reduce() returna value that could be add to a acumulator*/
console.log(newNumbers.reduce((accumulator, current) => accumulator += current))








