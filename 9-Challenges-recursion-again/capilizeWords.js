//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

//// let words = ['i', 'am', 'learning', 'recursion'];
// // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


function capitalizeWords (array) {
    // Check if the array has only one element
    if (array.length === 1) {
        // If it does, return an array containing the uppercase version of the only element
        return [array[0].toUpperCase()];
    }
    // If the array has more than one element
    // Call the capitalizeWords function recursively with the array excluding the last element
    let res = capitalizeWords(array.slice(0, -1));
    // Push the uppercase version of the last element to the result array
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

}
//["hello"]
//O

//array.length-1 gives the index of the last element in the array.
//array.slice(array.length-1) creates a new array containing only the last
//element of the original array. This is done using slice, which takes a portion of an array.

//[0]:
// The result of array.slice(array.length-1) is an array containing the last element.

//res.push(...):
// res.push(...) adds the result of the entire expression to the res array. This expression is the last element of the original array converted to uppercase.