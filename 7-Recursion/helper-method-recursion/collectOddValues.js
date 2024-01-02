// Let's try to collect all of the odd values in an array!

function collectOddValues(arr){

    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        // Call the helper function recursively with a sliced array (removing the first element)
        // After pushing the first element to result, we remove it from the given array:
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}

function collectOddValues(arr) {
    let oddsArr = [];

    if (arr.length === 0) return oddsArr;
    if (arr[0] % 2 !== 0) oddsArr.push(arr[0]);

    oddsArr = oddsArr.concat(collectOddValues(arr.slice(1)));

    return oddsArr;
}
/*
	[1]
*/

/*
collectOddValues([1,2,3,4,5])
[1].concat([2,3,4,5])
										 [].concat([3,4,5])
																				[3].concat([4,5])
																												 [].concat([5])
																																				 [5].concat([])
																												 [5]
																				[3, 5]
[1, 3, 5]
*/