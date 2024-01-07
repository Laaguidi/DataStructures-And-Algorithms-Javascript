// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    // If the exponent is 0, return 1 (base case)
    if(exponent === 0) return 1;
    // Otherwise, multiply the base by power(base, exp - 1) recursively
    return base * power(base,exponent-1);
}