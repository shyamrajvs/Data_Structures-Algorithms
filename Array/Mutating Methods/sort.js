//he sort method in JavaScript is used to sort the elements of an array in place and return the sorted array. By default, sort converts elements to strings and sorts them in ascending order. You can also provide a compareFunction to sort elements according to specific criteria.

//Syntax:

array.sort(compareFunction)

//compareFunction (optional): A function that defines the sort order. If omitted, the array elements are sorted in ascending order by their string representations.

//Default Behavior:

//Without a compareFunction, sort converts elements to strings and sorts them lexicographically (alphabetically). This may not always produce numerical sorting.

let numbers = [10, 5, 100, 1];

numbers.sort();

console.log(numbers); // Output: [1, 10, 100, 5]

/*Using compareFunction:

To sort numbers or other types of data correctly, provide a compareFunction that defines the sort order. The compareFunction takes two arguments and returns a value that determines their relative order:

If the return value is negative: a is sorted before b.

If the return value is zero: a and b remain unchanged relative to each other.

If the return value is positive: a is sorted after b.*/

//Sorting Numbers in Ascending Order:

let numbers1 = [10, 5, 100, 1];

numbers1.sort((a, b) => a - b);   //The compareFunction (a, b) => a - b sorts the numbers in ascending order.

console.log(numbers1); // Output: [1, 5, 10, 100]

//Sorting Numbers in Descending Order:

let numbers2 = [10, 5, 100, 1];

numbers2.sort((a, b) => b - a);    //The compareFunction (a, b) => b - a sorts the numbers in descending order.

console.log(numbers2); // Output: [100, 10, 5, 1]

//Sorting Strings by Length:

let words = ['apple', 'banana', 'kiwi', 'cherry'];

words.sort((a, b) => a.length - b.length);      //The compareFunction (a, b) => a.length - b.length sorts the words by their length in ascending order.

console.log(words); // Output: ['kiwi', 'apple', 'banana', 'cherry']

/*Notes:

The sort method modifies the original array.

The compareFunction should return numbers, not booleans, to ensure consistent sorting.

The sort method is stable as of ECMAScript 2019, meaning that elements with equal sort order remain in their original relative order. */
