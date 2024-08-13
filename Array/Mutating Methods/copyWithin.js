//The copyWithin method in JavaScript is used to copy a portion of an array to another location within the same array, without modifying its length. This method can be useful for shifting elements or duplicating parts of an array.

//Syntax:

array.copyWithin(target, start, end)

/*target: The index at which to start copying the elements to. If negative, it counts from the end of the array.

start: The index at which to start copying elements from. If negative, it counts from the end of the array.

end (optional): The index at which to stop copying elements (not included). If omitted, it copies to the end of the array. If negative, it counts from the end of the array. */

//1.Basic Usage

let array = [1, 2, 3, 4, 5];

array.copyWithin(0, 3, 5);      //copyWithin(0, 3, 5) copies elements from index 3 to 5 (excluding 5) and places them starting at index 0.

console.log(array); // Output: [4, 5, 3, 4, 5]

//2.Using Negative Indices

let array1 = [1, 2, 3, 4, 5];

array1.copyWithin(-3, -2);      //copyWithin(-3, -2) copies elements from index -2 (second-to-last element) to the end, and places them starting at index -3 (third-to-last element).

console.log(array1); // Output: [1, 2, 4, 5, 5]

//3.Copying Elements with Omitted end

let array2 = [1, 2, 3, 4, 5];

array2.copyWithin(2, 0);        //copyWithin(2, 0) copies elements from index 0 to the end and places them starting at index 2.

console.log(array2); // Output: [1, 2, 1, 2, 3]

/*Notes:

The copyWithin method modifies the original array in place.

The start index is inclusive, while the end index is exclusive.

If target, start, or end are negative, they are treated as offsets from the end of the array.

If target is greater than or equal to the array length, the elements are not copied. */
