// Writing Factorial Iteratively:
function factorial(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}
console.log(factorial(3));

// Writing Factorial Recursively:

function factorial(num) {
    if (num <= 1) return num;

    return num * factorial(num - 1);
}
/*
factorial(4)
            4 * factorial(3)
                            3 * factorial(2)
                                            2 * factorial(1)
                                            2
                            6
            24
*/

console.log(factorial(4));