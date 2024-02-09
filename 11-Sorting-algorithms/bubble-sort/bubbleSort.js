

function bubbleSort(arr) {
    // Outer loop to iterate through each element of the array
  for (let i = 0; i < arr.length; i++) {
      // Inner loop to compare adjacent elements and swap them if necessary
    for (let j = 0; j < arr.length - 1; j++) {
        // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j+1]) swap(arr, i, j);
    }
  }
}
//[4,5,3,1,2]



function swap(arr, i, j) {
      // Store the value of the element at index j+1 in a temporary variable
  let temp = arr[j+1];
    // Assign the value of the element at index j to the element at index j+1
  arr[j+1] = arr[j];
    // Assign the value of the temporary variable (which holds the original value of arr[j+1]) to the element at index j
  arr[j] = temp;
}

let arr = [4,5,3,1,2];
bubbleSort(arr);
console.log(arr);