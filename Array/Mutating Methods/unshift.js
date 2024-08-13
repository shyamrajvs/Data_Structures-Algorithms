//The unshift method in JavaScript is used to add one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array by shifting existing elements to higher indexes to accommodate the new elements.

//Syntax:

array.unshift(element1, element2, ...)

//element1, element2, ...: The elements to be added to the beginning of the array.

//1.Adding Single Element

let fruits = ['banana', 'orange'];

let newLength = fruits.unshift('apple');

console.log(fruits);      // Output: ['apple', 'banana', 'orange']

console.log(newLength);  // Output: 3

//2.Adding Multiple Elements

let numbers = [3, 4, 5];

let newLength1 = numbers.unshift(1, 2);

console.log(numbers);    // Output: [1, 2, 3, 4, 5]

console.log(newLength1);  // Output: 5

//3.Using unshift with Non-Primitive Elements

let arrayOfArrays = [[3, 4], [5, 6]];

let newLength3 = arrayOfArrays.unshift([1, 2]);

console.log(arrayOfArrays); // Output: [[1, 2], [3, 4], [5, 6]]

console.log(newLength3);     // Output: 3

/*Notes:

The unshift method modifies the original array by adding the new elements to the beginning.

It shifts existing elements to the right (higher index) to accommodate the new elements.

The method returns the new length of the array after the elements are added. */