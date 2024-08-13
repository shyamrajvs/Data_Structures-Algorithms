//The reverse method in JavaScript is used to reverse the elements of an array in place. This method modifies the original array and returns the reversed array.

//Syntax:

array.reverse()

//1.Reversing an Array

let numbers = [1, 2, 3, 4, 5];

numbers.reverse();      //The reverse method reverses the order of elements in the numbers array.

console.log(numbers); // Output: [5, 4, 3, 2, 1]

//2.Reversing a String Array

let words = ['apple', 'banana', 'cherry'];

words.reverse();    //The reverse method reverses the order of elements in the words array.

console.log(words); // Output: ['cherry', 'banana', 'apple']

//3.Reversing an Array of Arrays

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

arrayOfArrays.reverse();        //The reverse method reverses the order of sub-arrays in the arrayOfArrays.

console.log(arrayOfArrays); // Output: [[5, 6], [3, 4], [1, 2]]

/*Notes:

The reverse method modifies the original array. If you need a reversed copy of the array without altering the original, you should first create a copy of the array using methods like slice or the spread operator and then reverse the copy.

let originalArray = [1, 2, 3, 4, 5];

let reversedArray = [...originalArray].reverse();

console.log(originalArray); // Output: [1, 2, 3, 4, 5]

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

The reverse method is in-place, meaning it directly changes the order of elements in the array it is called on, rather than returning a new array. */