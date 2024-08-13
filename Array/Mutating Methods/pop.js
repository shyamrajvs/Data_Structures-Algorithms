//The pop method in JavaScript is used to remove the last element from an array and return that element

//Syntax:

array.pop()


//1.Removing the Last Element

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits);                // Output: ['apple', 'banana','orange']

let lastFruit = fruits.pop();

console.log(fruits);                // Output: ['apple', 'banana']

console.log(lastFruit);             // Output: 'orange'

//2.Using pop on an Empty Array

let emptyArray = [];

let removedElement = emptyArray.pop();

console.log(emptyArray);            // Output: []

console.log(removedElement);        // Output: undefined

//3.Using pop with Non-Primitive Elements

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

let lastArray = arrayOfArrays.pop();

console.log(arrayOfArrays); // Output: [[1, 2], [3, 4]]

console.log(lastArray);     // Output: [5, 6]

/*Notes:

The pop method always removes the last element of the array. If the array is empty, it returns undefined.

It directly modifies the original array. */