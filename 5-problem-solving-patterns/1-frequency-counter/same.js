// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}
console.log(same1([1,2,3,2], [9,1,4,4]))


function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //2- verifie s'il existe dans l'objet et donne soit valeur de 0 ou bien 1s'il existe
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // see key in arr1 repetition {2: 2}
    // it means that we must have 4 two times {4: 2}
    //check the key squared **
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //check the value squared:
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


function sameFrequency(num1, num2) {
    const str1 = `${num1}`;
    const str2 = `${num2}`;

    if (str1.length !== str2.length) return false;
    //Créez un objet vide objpour stocker la fréquence des chiffres dans str1.
    const obj = {};
    //Boucle sur chaque caractère (chiffre) dans str1 :
    // Pour chaque caractère, augmentez le nombre dans l' obj. Si le caractère n'existe pas dans obj, initialisez son compte à 1.
    for (const char of str1) {
        obj[char] = ++obj[char] || 1;
    }
    ////Boucle sur chaque caractère (chiffre) dans str1 :
    //Vérifiez si le caractère existe dans l' obj. Sinon, cela signifie str2 qu'il a un chiffre qui n'existe pas dans str1, donc les deux nombres ne peuvent pas avoir la même fréquence de chiffres. Dans ce cas, la fonction renvoie false.
    for (const char of str2) {
        if (!obj[char]) return false;
        //Si le caractère existe dans obj, décrémentez son compte.
        obj[char]--;
    }

    return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true