//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//Your solution MUST have the following complexities:
//Time: O(N)
//Sample Input:
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  /*
  this means evaluate to the value on the left if it is truthy (if converted to a boolean, it would be true), otherwise evaluate to the value on the right.
    In this specific case, this is saying "evaluate to the value in object fq1 at key val, however if it's undefined (not in the object yet) then use 0 as a default value"
  */ 
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true */ 
//Frequency Counter
function areThereDuplicates() {
  let collection = {}
  // Loop through all the arguments passed to the function
  for(let val in arguments){
    // Count the frequency of each argument value
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    // If any argument occurs more than once, return true
    if(collection[key] > 1) return true
  }
  // If there are no duplicates, return false
  return false;
}
//[1, 2, 3, 4]

//Multiple Pointers
function areThereDuplicates(...args) {
    // Sort the arguments in ascending order
    /*
    This comparison logic ensures that when sort() completes, the array args will be sorted in ascending order. This is essential for subsequent steps in the function where adjacent elements are compared to identify duplicates. Sorting allows for an efficient comparison of adjacent elements to find duplicates easily.
     */
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
 // Initialize pointers for comparison
  let start = 0;
  let next = 1;
  // Loop through the sorted array to check for duplicates
  //while (next < args.length) { ... }: Initiates a while loop that iterates through the sorted array until the next pointer reaches the end of the array.
  while (next < args.length) {
        // If adjacent elements are equal, return true (indicating duplicates)
    //if (args[start] === args[next]) { return true; }: Checks if the elements at the start and next positions are equal. If they are, it means duplicates are found, and the function immediately returns true.
    if (args[start] === args[next]) {
      return true;
    }// Move the pointers to compare the next set of elements
    //start++; next++;: Increments the pointers to move to the next set of elements in the array for comparison.
    start++;
    next++;
  }
  //If the loop completes without finding any duplicates, the function returns false, indicating that there are no duplicates among the arguments.
  return false;
}
//[1, 2, 3, 4]


function areThereDuplicates() {
     // If the size of the Set is not equal to the number of arguments,
     // it means there were duplicates
  return new Set(arguments).size !== arguments.length;
}
//[1, 2, 3, 4]