//Initializing max to -Infinity is a common technique used in algorithms that involve finding the maximum value. The reason behind this initialization is to ensure that the comparison logic works correctly regardless of the values within the array.

//By setting max to -Infinity, any value in the array will be greater than -Infinity. This guarantees that the comparison if (temp > max) will hold true for the first valid sum encountered in the array. If the array only contains negative values, the max variable will be updated with the highest negative value initially, and as the function iterates through and encounters more positive values, max will be updated accordingly.

//This approach ensures that the comparison logic within the loop properly evaluates the sums encountered and updates max with the highest sum found among the subarrays, regardless of the values within the array. It's a way to initialize max such that it doesn't accidentally filter out valid maximum sums due to a starting value that could be greater than any sum found in the array.

function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    //Adjust number of digits in array with the num param
    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// Refactor
function maxSubarraySum(arr, num) {
    // Check if the length of the array is less than `num`.
    if (arr.length < num) return null;

    // Initialize two variables: `maxSum` to keep track of the maximum sum found,
    // and `tempSum` to keep track of the sum of the current subarray.
    let maxSum = 0;
    let tempSum = 0;

    // Calculate the initial sum of the first `num` elements in the array.
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // Set `tempSum` to the initial value of `maxSum`.
    tempSum = maxSum;

    // Start a loop from index `num` to the end of the array.
    for (let i = num; i < arr.length; i++) {
        // Update `tempSum` by subtracting the element that is no longer in the window (arr[i - num])
        // and adding the current element (arr[i]).
        tempSum = tempSum - arr[i - num] + arr[i];

        // Update `maxSum` with the maximum value between the current `maxSum` and `tempSum`.
        maxSum = Math.max(maxSum, tempSum);
    }

    // Return the maximum sum found.
    return maxSum;
}

maxSubarraySum([1,2,5,2,8,1,5,9,3],3)

//3 soluton:
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    let maxSum = tempSum;

    for (let i = 0; i < arr.length - num; i++) {
        tempSum = tempSum - arr[i] + arr[i + num];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}