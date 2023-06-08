function factorial(num) {
    //Once the condition is met, the function stops calling itself. This is called a base condition.
    if (num <= 1) return num;
    //When the number reaches 0, the base condition is met, and the function is not called anymore.

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