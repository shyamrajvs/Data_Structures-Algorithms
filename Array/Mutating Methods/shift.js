//The shift method in JavaScript is used to remove the first element from an array and return that element

//Syntax:

array.shift()

//1.Removing the First Element

let fruits = ['apple', 'banana', 'orange'];

let firstFruit = fruits.shift();

console.log(fruits);      // Output: ['banana', 'orange']

console.log(firstFruit); // Output: 'apple'

//2.Using shift on an Empty Array

let emptyArray = [];

let removedElement = emptyArray.shift();

console.log(emptyArray);     // Output: []

console.log(removedElement); // Output: undefined

//3.Using shift with Non-Primitive Elements

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

let firstArray = arrayOfArrays.shift();

console.log(arrayOfArrays); // Output: [[3, 4], [5, 6]]

console.log(firstArray);    // Output: [1, 2]

/*Notes:

The shift method always removes the first element of the array. If the array is empty, it returns undefined.

It directly modifies the original array and shifts all subsequent elements one position to the left. */