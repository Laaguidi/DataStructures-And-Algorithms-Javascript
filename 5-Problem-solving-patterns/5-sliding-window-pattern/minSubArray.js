

function minSubArrayLen(arr, num) {
    let tempLen = 0;
    let sum = 0;
    // This while loop finds the smallest subarray length whose sum is greater than or equal to `num`.
    while (sum < num && tempLen < arr.length) {
        sum += arr[tempLen];
        tempLen++;
    }

    if (sum < num) return 0;

    let minLen = tempLen;
    let i = 0;
    // This while loop further optimizes to find the minimum length subarray that satisfies the condition.
    while (i + tempLen - 1 < arr.length) {
        if (sum >= num) {
            minLen = Math.min(minLen, tempLen);
            // Move the subarray window to the right by decrementing `tempLen` and adjusting `sum`.
            sum -= arr[i];
            i++;
            tempLen--;
        } else {
             // Extend the subarray by increasing `tempLen` and adding the next element to `sum`.
            sum += arr[i + tempLen];
            tempLen++;
        }
    }

    return minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
