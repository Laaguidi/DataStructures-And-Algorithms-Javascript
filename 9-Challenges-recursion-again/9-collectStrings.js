//Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    // Create an empty array to store the strings found in the object.
    var stringsArr = [];
    // Internal helper function: gatherStrings recursively explores the object to find strings and adds them to the stringsArr.
    function gatherStrings(o) {
        // Iterate through each key in the object.
        for(var key in o) {
            // Check if the value associated with the current key is a string.
            if(typeof o[key] === 'string') {
                // If it's a string, add it to the stringsArr.
                stringsArr.push(o[key]);
            }
            // If the value is an object, recursively call gatherStrings to explore its properties.
            else if(typeof o[key] === 'object') {
                // The return statement ensures that the recursion is properly handled.
                return gatherStrings(o[key]);
            }
        }
    }
    // Call the gatherStrings function starting with the input object.
    gatherStrings(obj);
    // Return the array containing all the strings found in the object.
    return stringsArr;
}