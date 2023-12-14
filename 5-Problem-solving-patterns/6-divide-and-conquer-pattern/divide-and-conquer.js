function search(array, val){
    let min = 0;
    let max = array.length - 1;
    // Looping until the minimum index is less than or equal to the maximum index
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val){
             // If yes, update the minimum index to search the right half of the array
            min = middle + 1;
        } else if(array[middle] > val){
            // If yes, update the maximum index to search the left half of the array
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}