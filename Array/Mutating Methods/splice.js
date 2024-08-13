//The splice method in JavaScript is a versatile tool for modifying arrays. It can add, remove, and replace elements in an array at a specified position.

//Syntax:

array.splice(start, deleteCount, item1, item2, ...)

/*start: The index at which to start changing the array. If negative, it counts from the end of the array.

deleteCount: The number of elements to remove from the array. If omitted, it removes all elements from start to the end.

item1, item2, ...: The elements to add to the array, starting at the start index. If no elements are provided, splice only removes elements.*/

//1.Removing Elements

let fruits = ['apple', 'banana', 'orange', 'mango'];

let removed = fruits.splice(1, 2);  //splice(1, 2) starts at index 1 and removes 2 elements.

console.log(fruits);      // Output: ['apple', 'mango']

console.log(removed);     // Output: ['banana', 'orange']

//2.Adding Elements

let numbers = [1, 4, 5];

numbers.splice(1, 0, 2, 3);   //splice(1, 0, 2, 3) starts at index 1, removes 0 elements, and adds 2 and 3.

console.log(numbers); // Output: [1, 2, 3, 4, 5]

//3.Replacing Elements

let colors = ['red', 'green', 'blue', 'yellow'];

let replaced = colors.splice(2, 1, 'purple', 'orange');     //splice(2, 1, 'purple', 'orange') starts at index 2, removes 1 element ('blue'), and adds 'purple' and 'orange'.

console.log(colors);   // Output: ['red', 'green', 'purple', 'orange', 'yellow']

console.log(replaced); // Output: ['blue']

//4.Using Negative Index

let items = ['a', 'b', 'c', 'd'];

items.splice(-2, 1, 'x', 'y');      //splice(-2, 1, 'x', 'y') starts at the second-to-last index ('c'), removes 1 element, and adds 'x' and 'y'.

console.log(items); // Output: ['a', 'b', 'x', 'y', 'd']

/*Notes:

The splice method modifies the original array and returns an array containing the removed elements (if any).

It can perform all three operations (addition, removal, replacement) in a single call.

The deleteCount can be 0 to only add elements without removing any. */