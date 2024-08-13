//The concat method in JavaScript is used to merge two or more arrays into a new array. It does not modify the original arrays but returns a new array containing the combined elements.

//Syntax:

array.concat(array1, array2, ...)

//array1, array2, ...: The arrays and/or values to be concatenated to the original array.

//1.Concatenating Two Arrays

let fruits = ['apple', 'banana'];

let vegetables = ['carrot', 'broccoli'];

let food = fruits.concat(vegetables);

console.log(food);       // Output: ['apple', 'banana', 'carrot', 'broccoli']

console.log(fruits);     // Output: ['apple', 'banana']

console.log(vegetables); // Output: ['carrot', 'broccoli']

//2.Concatenating Multiple Arrays

let arr1 = [1, 2];

let arr2 = [3, 4];

let arr3 = [5, 6];

let combined = arr1.concat(arr2, arr3);         //concat(arr2, arr3) merges arr1, arr2, and arr3 into a single array.

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//3.Concatenating Values with Arrays

let numbers = [1, 2, 3];

let newArray = numbers.concat(4, 5, [6, 7]);  //concat(4, 5, [6, 7]) adds 4, 5, and the elements of [6, 7] to the numbers array.

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7]

//4.Concatenating Nested Arrays

let nestedArray = [1, [2, 3]];

let expanded = nestedArray.concat([4, [5, 6]]);     //concat([4, [5, 6]]) merges nestedArray with [4, [5, 6]].

console.log(expanded); // Output: [1, [2, 3], 4, [5, 6]]

/*Notes:

The concat method creates a new array and does not modify the original arrays.

You can concatenate arrays with other arrays or individual values.

The concat method performs a shallow copy of the arrays, meaning that nested arrays or objects are not deeply cloned. */