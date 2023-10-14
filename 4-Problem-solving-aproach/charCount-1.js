function charCount(str){
    //make object to return at end:
    var result = {};
    //loop over string, foreach character...
    for (var i = 0; i < str.length; i++){
        //index caracter in the string
        var char = str[i];
        //if the char is number/letter and is a key of object add 1 to count:
        //if it is already in there:
        //It checks if the character char already exists as a key in the result object. If it does, it increments the count associated with that character by 1.
        if (result[char] > 0) {
            result[char]++;
        }
        //if the char is not a number/letter and object, add it to object and set value to 1:
        else {
            result[char] = 1;
        };
        //if the character is something else (space, period, ect..) don't do anything:
    }

    return result;// return object at end:
}
charCount("hello world")

//////////////////////////////
/*Then, it loops through each character in the input string using a for loop, starting with the first character at index 0 and ending with the last character at index str.length - 1.
Inside the loop, it converts each character to lowercase using the toLowerCase() method, and stores it in the char variable.
    The function then checks if the current character is a letter or digit using a regular expression /[a-z0-9]/.test(char). If it is not a letter or digit, it skips to the next character in the loop.
    If the current character is a letter or digit, it checks if the character already exists in the obj object. If it does, it increments its count by 1. If it doesn't, it initializes its count to 1.
*/

function charCount1(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        //.test(char) is a method called on the regular expression object. The .test() method is used to check whether a given string (in this case, the value of the char variable) matches the pattern defined by the regular expression. It returns true if there's a match and false if there isn't.
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

/////////////////
function charCount2(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
///////////////////////////
function charCount3(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
///////////////////////:
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if ( !(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}