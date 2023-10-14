// 1:
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        // it's not the same letters
        if (!lookup[letter]) {
            return false;
        } else {
            // if we find the same letter we decrement by -1
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

//2:
function validAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    const obj = {};

    for (const char of word1) {
        obj[char] = ++obj[char] || 1;
    }

    for (const char of word2) {
        if (obj[char]) obj[char]--;
        else return false;
    }

    return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false