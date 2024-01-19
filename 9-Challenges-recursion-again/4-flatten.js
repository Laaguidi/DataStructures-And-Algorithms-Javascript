//Write a recursive function called flatten which accepts an
// array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(oldArr){
    var newArr = []
    //This line starts a for loop that iterates through each element of the input array (oldArr).
    for(var i = 0; i < oldArr.length; i++){
        //This line checks if the current element at index i in the input array is an array.
        //method checks if the provided value is an array. It returns true if the value is an array and false otherwise.
        if(Array.isArray(oldArr[i])){
            //If the current element is an array, it calls the flatten function recursively on that array (oldArr[i]) and concatenates the result to the newArr. This step is crucial for flattening nested arrays.
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            //It pushes the non-array element to the newArr. This is how the function accumulates non-array elements during the recursion.
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}
//[2, 4, [[5]