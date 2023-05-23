// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// A naive solution
// Time Complexity - O(N^2)

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
// Time Complexity - O(N)
// colt's solution
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        //the tempSum is updated by subtracting the element that is no longer in the window (arr[i - num]) and adding the current element (arr[i]).
        //delete first element in the array and add one:
        //So tempsum = tempsum - arr[i-num] + arr[i], for num = 3 and i = num means tempsum = tempsum - arr[0] + arr[3]. Which is what you're expecting.
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
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