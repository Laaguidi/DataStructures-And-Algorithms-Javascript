//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!


function stringifyNumbers(obj) {
    // Create a new empty object to store the results
    var newObj = {};
    // Iterate over each key in the input object
    for (var key in obj) {
        // Check if the value associated with the current key is a number
        if (typeof obj[key] === 'number') {
            // If it's a number, convert it to a string and store in the new object
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            // If it's an object (but not an array), recursively call stringifyNumbers
            // to process the nested object and store the result in the new object
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            // If it's neither a number or a non-array object, keep the original value
            //if the value is not a number and is also not an object (or an array), then the original value is retained in the new object (newObj).
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/