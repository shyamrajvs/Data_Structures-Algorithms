//The push method in JavaScript is used to add one or more elements to the end of an array returns the new length of the array.

//Syntax:

array.push(element1, element2, ..., elementN)

//1.Adding Single Element

let fruits = ['apple','banana','orange'];

console.log(fruits);                        // Output: ['apple', 'banana', 'orange']

let newLength = fruits.push('grape');

console.log(fruits);                        // Output: ['apple', 'banana', 'orange', 'grape']

console.log(newLength);                     // Output: 4

//2.Adding Multiple Elements

let numbers = [1, 2, 3];

let newLength1 = numbers.push(4, 5, 6);

console.log(numbers);                       // Output: [1, 2, 3, 4, 5, 6]

console.log(newLength1);                     // Output: 6

//3.Using push with Non-Primitive Elements

let arrayOfArrays = [[1, 2], [3, 4]];

let newLength3 = arrayOfArrays.push([5, 6]);

console.log(arrayOfArrays);  // Output: [[1, 2], [3, 4], [5, 6]]

console.log(newLength3);      // Output: 3

/*Notes:

The push method modifies the original array and does not create a new array.

It can take any number of arguments, so you can add multiple elements in one call. */