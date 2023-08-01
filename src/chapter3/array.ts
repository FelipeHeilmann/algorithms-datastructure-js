/* ------------------------------ Arrays ------------------------------ */

/* Declaring an array */
const array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/* Logging the elements of the array */
for (let i = 0; i < array.length; i++) {
   // console.log(array[i])
}

/* ------------------------------------------------------------------------ */

/* Using an array to store the first 20 elements of the Fibonacci sequence */
const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
for (let i = 0; i < fibonacci.length; i++) {
    // console.log(fibonacci[i])
}

/* ------------------------------ Array methods ------------------------------ */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/* Adding element(s) to the end of the array */
numbers.push(10, 11)

/* Shifting elements to the right to put an element in the first position */
for (let i = numbers.length; i > 0; i--) {
    numbers[i] = numbers[i - 1]
}
/* Adding an element to the front of the array */
numbers[0] = -1
/* The unshift() function inserts elements at the front of the array like above */

/* Removing elements from the end of the array */
numbers.pop()

/* Shifting elements to the left to put an element in the first position */
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
}
numbers.length = numbers.length - 1
/* Removing an element from the first position */
/* The shift() function removes an element from the front of the array like above */

/*
The splice() method can delete elements from any position in the array.
splice(arg1, arg2)
arg1 = the index you want to start
arg2 = how many elements do you want to remove
*/
numbers.splice(5, 3)

/*
The splice() method can also insert elements at any position in the array.
splice(arg1, arg2, args3....)
arg1 = the index you want to start
arg2 = how many elements do you want to remove
args3... = the elements you want to insert
*/
numbers.splice(5, 0, 2, 3, 4)
/* Use 0 because we don't want to delete any element */

/* ------------------------------ Bidimensional and Multidimensional Arrays ------------------------------ */

/*
Using a bidimensional array to store the average time,
where each row represents a day and each column represents the hourly average.
*/

let averageTemp = []

averageTemp[0] = [72, 75, 79, 79, 81, 81]
averageTemp[1] = [81, 79, 75, 75, 73, 73]

/* This is also called a matrix */

/* Logging the elements of the matrix */
for (let i = 0; i < averageTemp.length; i++) {
    for (let j = 0; j < averageTemp[i].length; j++) {
        // console.log(averageTemp[i][j])
    }
}
// console.table(averageTemp)

/* Multidimensional array */
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

/* For as many dimensions as you have, you need to use a loop to iterate through it */

const isEven = (number: number) => number % 2 === 0

let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/* every() iterates through every element of the array until it returns false */
newNumbers.every(isEven)

/* some() iterates through every element of the array until it returns true */
newNumbers.some(isEven)

/* forEach() iterates through every element of the array, similar to the for loop */
//newNumbers.forEach(number => console.log(number % 2 === 0))

/* map() creates an array from the result of a function that filters elements based on the condition */
newNumbers.map(isEven)

/* filter() creates an array with elements that returned true from the function */
newNumbers.filter(isEven)

/* reduce() returns a value that can be added to an accumulator */
newNumbers.reduce((accumulator, current) => accumulator += current)

newNumbers.reverse()

/*sort() sorts the array*/
newNumbers.sort()
/*however, it sorts in a lexicographical way, assuming the elements are strings*/


newNumbers.sort((a:number,b:number) =>  a - b)
/*This callback function sort the array in this way:
    function(a, b){
        if(a < b){
            return -1
        }
        if(a > b){
            return 1
        }
        return 0
    }
*/

const names = ['Ana', 'ana', 'John', 'john']
names.sort()
/*however, it sorts using the ASCII values for de letters*/

names.sort((a:string, b:string) => a.localeCompare(b))
/*This callback function sort the array in this way:
    function(a, b){
        if(a.toLowerCase() < b.toLowerCase()){
            return -1
        }
        if(a.toLowerCase() > b.toLowerCase()){
            return 1
        }
        return 0
    }
*/

/*Returns the first index of target in the array, but it was not fount, returns -1 */
numbers.indexOf(10)

/*Returns the last index of target in the array, but it was not fount, returns -1 */
numbers.lastIndexOf(10)

/*Returns the first index of target in the array, but it was not fount, returns undefined*/
numbers.find(number=> number > 5)

/*Returns true if the array contains the target*/
numbers.includes(1)







