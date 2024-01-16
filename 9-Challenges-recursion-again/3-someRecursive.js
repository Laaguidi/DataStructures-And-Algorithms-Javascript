
//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. otherwise it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
    // Base case: If the array is empty, return false
    if (array.length === 0)
        return false;
    // Check if the callback returns true for the first element of the array
    //callback is function that checks for even numbers:
    if (callback(array[0])) return true;
    // Recursively call someRecursive with the rest of the array and the same callback

    return someRecursive(array.slice(1),callback);
}

//other exemple:
function isEven(number) {
    return number % 2 === 0;
}

const array = [1, 3, 5, 8, 9];

console.log(someRecursive(array, isEven)); // Output: true