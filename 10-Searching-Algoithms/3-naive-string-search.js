// How many times does a substring appear in a string?
function naiveStringSearch(str, substr) {
	let windowStart = 0;
	let windowEnd = substr.length - 1;
	let count = 0;
    // Loop until the windowEnd reaches the end of the main string
	while (windowEnd < str.length) {
		// Extract the current window substring from the main string
		let windowStr = str.slice(windowStart, windowEnd + 1);
        // Inner loop to compare the window substring with the target substring
		while (true) {
			// Initialize a flag to track if the strings match
			let stringsMatch = true;
            // Iterate through each character in the window substring
			for (let i = 0; i < windowStr.length; i++) {
				// If the corresponding characters don't match, set the flag to false and break the loop
				if (windowStr[i] !== substr[i]) {
					stringsMatch = false;
					break;
				}
			}
        // If all characters match, increment the count of matches
			if (stringsMatch) {
				count++;
			}
              // Break out of the inner loop, as we only need to check once per window
			break;
		}
        // Move the window by incrementing both the start and end indices
		windowStart++;
		windowEnd++;
	}
  // Return the count of matches found
	return count;
}

// Refactored - Colt's Version
function naiveStringSearch(long, short) {
	let count = 0;
    // Outer loop iterates through each character of the long string
	for (let i = 0; i < long.length; i++) {
        // Inner loop iterates through each character of the short string
		for (let j = 0; j < short.length; j++) {
			// Check if the characters at the current positions of short and long strings match
			if (short[j] !== long[i+j])
				// If they don't match, break out of the inner loop and continue with the next character in the long string
				break;
			// If all characters match up to the end of the short string
			if (j === short.length - 1)
				// Increment the count of occurrences
				count++;
		}

	}
   // Return the total count of occurrences found
	return count;
}

console.log(naiveStringSearch("wowomgzomg", "abc"));  // 0
console.log(naiveStringSearch("lorie loled", "lol"));  // 1
console.log(naiveStringSearch("harold said haha in hamburg", "haha"));  // 1
console.log(naiveStringSearch("wowomgzomg", "omg"));  // 2