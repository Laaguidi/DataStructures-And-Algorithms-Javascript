//1:
function sumZero(arr){
    for (let i = 0; i < arr.length; i++){
       for(let j = i + 1; j < arr.length; j++){
           if(arr[i] + arr[j] === 0){
               return [arr[i], arr[j]];
           }
       }
    }
}

console.log(sumZero([2, 4, -5, 9, -7, 5]));

//2:
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
            //Si le sumn'est pas nul, la fonction vérifie s'il est supérieur à zéro. Si tel est le cas, cela signifie que la paire de nombres actuelle est trop grande et que le rightpointeur est décrémenté de un pour passer à une valeur plus petite.
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

