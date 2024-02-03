//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// Original Solution
function binarySearch(arr, elem) {
    // Initialize variables for the start, end, and middle indices of the array
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    // Perform binary search using a while loop
    while(arr[middle] !== elem && start <= end) {
    // If the element is less than the middle element, update the end index
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
    // If the element is greater than the middle element, update the start index

            start = middle + 1;
        }
        // Recalculate the middle index
        middle = Math.floor((start + end) / 2);
    }
    // Check if the element was found
    if(arr[middle] === elem){
        // Return the index of the element
        return middle;
    }
    // If the element is not found, return -1
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)