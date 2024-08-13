//The fill method in JavaScript is used to change all elements in an array to a static value from a start index to an end index. It modifies the original array and returns the modified array.

//Syntax:

array.fill(value, start, end)

/*value: The value to fill the array with.

start (optional): The index at which to start filling. Default is 0.

end (optional): The index at which to stop filling. The element at this index is not included. Default is the length of the array. */

//1.Filling a Portion of the Array

let numbers = [1, 2, 3, 4, 5];

numbers.fill(0, 2, 4);   //fill(0, 2, 4) starts at index 2 and fills up to (but not including) index 4 with 0.

console.log(numbers); // Output: [1, 2, 0, 0, 5]

//2.Filling the Entire Array

let array = [1, 2, 3, 4, 5];

array.fill(7);    //fill(7) fills the entire array with 7.

console.log(array); // Output: [7, 7, 7, 7, 7]

//3.Using Negative Indices

let array1 = [1, 2, 3, 4, 5];

array.fill('x', -3, -1);    //fill('x', -3, -1) starts filling from the third-to-last element (-3 refers to index 2 from the end) up to but not including the last element (-1 refers to index 4 from the end).

console.log(array1); // Output: [1, 2, 'x', 'x', 5]

/* Notes:

The fill method changes all elements in the specified range to the given value, including the start index but excluding the end index.

If start or end are negative, they are treated as offset from the end of the array.

If end is omitted, fill will continue to the end of the array */