//The join method in JavaScript is used to join all elements of an array into a single string, with each element separated by a specified separator. It does not modify the original array but returns a new string.

//Syntax:

array.join(separator)

//separator (optional): A string to separate each element in the resulting string. If omitted, a comma (,) is used as the default separator.

//1.Joining Array Elements with a Comma (Default Separator)

let fruits = ['apple', 'banana', 'cherry'];

let result = fruits.join();     //join() uses the default comma separator.

console.log(result); // Output: 'apple,banana,cherry'

//2.Joining Array Elements with a Custom Separator

let numbers = [1, 2, 3, 4, 5];

let result1 = numbers.join(' - ');      //join(' - ') uses ' - ' as the separator.

console.log(result1); // Output: '1 - 2 - 3 - 4 - 5'

//3.Joining Array Elements with No Separator

let chars = ['a', 'b', 'c'];

let result2 = chars.join('');       //join('') uses an empty string as the separator.

console.log(result2); // Output: 'abc'

//4.Joining Array Elements with a Space Separator

let words = ['hello', 'world'];

let result3 = words.join(' ');      //join(' ') uses a space as the separator.

console.log(result3); // Output: 'hello world'

//5.Joining Array with Nested Arrays

let nestedArray = [1, [2, 3], 4];

let result4 = nestedArray.join('-');        //join('-') joins elements with '-' as the separator.

console.log(result4); // Output: '1-2,3-4'

/*Notes:

The join method does not modify the original array; it returns a new string.

If an element of the array is an object, it is converted to a string using its toString method.

If separator is an empty string, the elements are concatenated without any separation.*/