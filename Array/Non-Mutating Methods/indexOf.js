//The indexOf method in JavaScript is used to find the index of the first occurrence of a specified element in an array. It returns -1 if the element is not found. You can also specify a starting index to begin the search.

//Syntax:

array.indexOf(searchElement, fromIndex)

/*searchElement: The element you want to find in the array.

fromIndex (optional): The index at which to start the search. If omitted, the search starts from index 0. If negative, it is treated as array.length + fromIndex. */


//1.Finding the Index of an Element

let fruits = ['apple', 'banana', 'cherry'];

let index = fruits.indexOf('banana');       //indexOf('banana') finds the index of the first occurrence of 'banana' in the fruits 

console.log(index); // Output: 1

//2.Starting the Search from a Specific Index

let numbers = [1, 2, 3, 4, 2, 5];

let index1 = numbers.indexOf(2, 2);     //indexOf(2, 2) starts searching for 2 from index 2.

console.log(index1); // Output: 4

//3.Handling Negative Indices

let array = ['a', 'b', 'c', 'a', 'b'];

let index2 = array.indexOf('a', -3);        //indexOf('a', -3) starts searching from the third-to-last element.

console.log(index2); // Output: 3

//4.Element Not Found

let letters = ['x', 'y', 'z'];

let index3 = letters.indexOf('a');       //indexOf('a') searches for 'a', which is not in the letters array.

console.log(index3); // Output: -1

/*Notes:

The indexOf method performs a strict equality (===) comparison. It does not use type coercion, so 1 is not equal to '1'.

If the fromIndex is greater than or equal to the length of the array, the method will return -1 as the element cannot be found.

The search is case-sensitive. For example, 'A' is different from 'a'. */