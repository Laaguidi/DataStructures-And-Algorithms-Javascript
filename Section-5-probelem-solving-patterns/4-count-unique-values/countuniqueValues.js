// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    //This variable will be used to keep track of the index where unique values are stored in the array.
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        //Inside the loop, there is an if statement that compares the value at index i with the value at index j. If these values are not equal, it means a new unique value has been found.
        if (arr[i] !== arr[j]) {
            //This moves the pointer to the next position where the next unique value will be stored.
            i++;
            arr[i] = arr[j];
        }
        console.log(arr[i]);
    }
    //Once the loop finishes, the function returns i + 1, which represents the count of unique values in the array.
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4])); // 7

//2 Exemple:
function countUniqueValues(arr){

    let newObj = {};                  //created new empty object to hold integer values.

    for (let i=0; i<arr.length; i++){ //iterate over the array


        let char = arr[i];

        if ( newObj[char] > 0 ) {     //if the item is already in newObj
            newObj[char]++            //increment its value by 1
        } else {
            newObj[char] = 1          //if the integer is not already in newObj put it there with a value of 1
        }

    }
    return Object.keys(newObj).length;   //return length of array returned by Object.keys(newObj)
}