//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (array) {
    // Base Case: If the array has only one element
    if (array.length === 1) {
        // Capitalize the first letter and return a new array
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    // Recursive Case: Call capitalizeFirst on the array without the last element
    const res = capitalizeFirst(array.slice(0, -1));
    // Modify the last element by capitalizing its first letter
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    // Add the modified string to the result array
    res.push(string);
    return res;
}

//array[0][0]: This further accesses the first character of the string obtained from array[0]. Strings in JavaScript are zero-indexed, so array[0][0] refers to the first character of the first string in the array.

//array.slice(array.length - 1): This extracts the last element of the array and returns it as a new array (though with only one element).
//
// [0][0]: This accesses the first character of the string obtained from the last element. It's equivalent to getting the first character of the last string in the original array.
//
// .toUpperCase(): This capitalizes the first character.
//
// + array.slice(array.length-1)[0].substr(1): This appends the rest of the string (from the second character onwards) to the capitalized first character.
//
// The result is a modified string where the first letter is capitalized.