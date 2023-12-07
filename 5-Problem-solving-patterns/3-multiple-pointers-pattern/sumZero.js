//Creating pointers or values that corresponding to an index or position and move towards the beginning, end or middle based on a certain condition.
//Very efficient for solving problems with minimal space complexity as well.
//1: naive solution:
function sumZero(arr){
    for (let i = 0; i < arr.length; i++){
       for(let j = i + 1; j < arr.length; j++){
           if(arr[i] + arr[j] === 0){
               return [arr[i], arr[j]];
           }
       }
    }
}

console.log(sumZero([2, 4, -5, 9, -7, 5]));



//2 refactor solution:
function sumZero(arr){
    // Initialize two pointers, 'left' starting from the beginning of the array,
    // and 'right' starting from the end of the array.
    let left = 0;
    let right = arr.length - 1;
    // Loop until 'left' is less than 'right'.
    while(left < right){
        // Calculate the sum of the current elements pointed by 'left' and 'right'.
        let sum = arr[left] + arr[right];
         // If the sum is zero, return an array containing the pair of elements.
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
             // If the sum is greater than zero, decrement 'right' to move towards smaller numbers.
            right--;
        } else {
            // If the sum is less than zero, increment 'left' to move towards larger numbers.
            left++;
        }
    }
     // If no pair with a sum of zero is found, return undefined (implicitly).
}



