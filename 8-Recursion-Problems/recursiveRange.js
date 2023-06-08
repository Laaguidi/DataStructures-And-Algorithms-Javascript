// recursiveRange(6) // 21
// recursiveRange(10) // 55

// Add up all numbers from 0 to num
function recursiveRange(num) {
    if (num <= 1) return num;
    return num + recursiveRange(num - 1);
}
6 + 5
6 + 4
6 +3
6 + 2
6 + 1


function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
}