//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum (obj, sum=0) {
    // Iterate over all the properties of the object using a for...in loop
    for (var key in obj) {
        // Check if the current property value is an object
        if (typeof obj[key] === 'object'){
            // If it's an object, recursively call nestedEvenSum with the current object and add the result to the sum
            sum += nestedEvenSum(obj[key]);
        }
        //This line checks if the value associated with the current property key is a number and whether it's an even number. If both conditions are true, it means that the property is an even number, and it adds that number to the sum.
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var exampleObject = {
    a: 2,
    b: {
        c: 4,
        d: {
            e: 6,
            f: {
                g: 8
            }
        }
    },
    h: {
        i: 10,
        j: {
            k: 12
        }
    }
};

// Call the nestedEvenSum function with the example object
var result = nestedEvenSum(exampleObject);

// Display the result
console.log(result); // Output: 42 (2 + 4 + 6 + 8 + 10 + 12)