function fib(n){
    //It first checks if n is less than or equal to 2. If it is, it returns 1. This is because in the Fibonacci sequence, the first two numbers (at positions 1 and 2) are both 1.
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//If n is greater than 2, it recursively calls the fib function twice: fib(n - 1) and fib(n - 2).
// It calculates the Fibonacci number for position n by summing the results of the two preceding positions (n - 1 and n - 2).

// Calculating fib(5)
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// At this point, we start reaching the base cases:

// fib(2) = 1 (base case)
// fib(1) = 1 (base case)

// Now we start returning values back up the recursive calls:
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5

// Therefore, fib(5) = 5