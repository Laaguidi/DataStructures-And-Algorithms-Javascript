// Define a function named bubbleSort which takes an array as input
function bubbleSort(arr){

  // Initialize a variable to keep track of whether any swaps have been made in a pass
  let noSwaps;

  // Outer loop to iterate through the array from the end to the beginning
  for(let i = arr.length; i > 0; i--){

    // Assume no swaps have been made at the start of each pass
    noSwaps = true;

    // Inner loop to perform the comparisons and swaps within the current pass
      //j < i - 1: This condition checks if the index j is less than the index of the last element in the unsorted part of the array. If it is true, it means j is within the range of the unsorted part of the array, and the loop should continue iterating.
    for(let j = 0; j < i - 1; j++){
       console.log(arr, arr[i], arr[j+1])
      // Compare adjacent elements and swap them if necessary
      if(arr[j] > arr[j+1]){
         // Store the value of arr[j] in a temporary variable
          let temp = arr[j];
          // Assign the value of arr[j+1] to arr[j]
          arr[j] = arr[j+1];
          // Assign the value of the temporary variable (which holds the original value of arr[j]) to arr[j+1]
          arr[j+1] = temp;

        // If a swap is made, set noSwaps to false to indicate that a swap occurred
        noSwaps = false;
      }
    }

    // If no swaps were made in the current pass, the array is sorted, so break out of the outer loop
    if(noSwaps) break;
  }

  // Return the sorted array
  return arr;
}

// Test the function with an example array
console.log(bubbleSort([8,1,2,3,4,5,6,7]))