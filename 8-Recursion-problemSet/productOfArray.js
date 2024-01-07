function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

//It first checks if the exponent exp is 0. If it is, it returns 1 because any number raised to the power of 0 is 1.
// If the exponent is not 0, it recursively calls the power function, reducing the exponent by 1 each time, and multiplies the base by the result of power(base, exp - 1).