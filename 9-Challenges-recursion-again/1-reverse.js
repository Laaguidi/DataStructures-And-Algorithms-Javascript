function reverse(str){
    // Check if the length of the string is less than or equal to 1
    if(str.length <= 1)
        // If the length of the string is greater than 1, the function continues here
        return str;

    // Call the reverse function recursively with the string excluding the first character
    // and concatenate the first character at the end
    return reverse(str.slice(1)) + str[0];
}
//hello