//The slice method in JavaScript is used to create a shallow copy of a portion of an array into a new array object. It does not modify the original array but returns a new array containing the selected elements.

//Syntax:

array.slice(start, end)

/*start: The index at which to begin extraction. If negative, it counts from the end of the array.

end (optional): The index at which to end extraction (not included). If omitted, it extracts to the end of the array. If negative, it counts from the end of the array. */

//1.Basic Usage

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let selectedFruits = fruits.slice(1, 3);        //slice(1, 3) extracts elements starting at index 1 up to (but not including) index 3.

console.log(selectedFruits); // Output: ['banana', 'cherry']

//2.Omitting end

let numbers = [1, 2, 3, 4, 5];

let slicedNumbers = numbers.slice(2);       //slice(2) extracts elements starting at index 2 to the end of the array.

console.log(slicedNumbers); // Output: [3, 4, 5]

//3.Using Negative Indices

let array = [10, 20, 30, 40, 50];

let partArray = array.slice(-4, -1);        //slice(-4, -1) extracts elements starting from the fourth-to-last element up to (but not including) the last element.

console.log(partArray); // Output: [20, 30, 40]

//4.Copying the Entire Array

let original = [1, 2, 3, 4, 5];

let copy = original.slice();        //slice() without arguments creates a shallow copy of the entire original array.

console.log(copy); // Output: [1, 2, 3, 4, 5]

/*Notes:

The slice method returns a new array and does not modify the original array.

The start index is inclusive, while the end index is exclusive.

Negative indices count backwards from the end of the array. */