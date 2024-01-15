//isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). otherwise it returns false.


function isPalindrome(str){
    // Check if the length of the string is 1, meaning it's a palindrome.
    if(str.length === 1)
        return true;
    // Check if the length of the string is 2, and if the characters at indices 0 and 1 are equal.
    if(str.length === 2)
        return str[0] === str[1];
    // Check if the first and last characters of the string are equal.
    // If true, recursively call the function with the substring excluding the first and last characters.
    if(str[0] === str.slice(-1))
        return isPalindrome(str.slice(1,-1))
    // If none of the above conditions are met, the string is not a palindrome.

    return false;
}

//The second if statement checks if the length of the string is 2. If true, it checks whether the characters at indices 0 and 1 are equal. If they are, the function returns true, indicating a palindrome.

//The third if statement checks if the first and last characters of the string are equal. If true, it recursively calls the isPalindrome function with the substring excluding the first and last characters (using str.slice(1, -1)). This recursion continues until a base case is met.