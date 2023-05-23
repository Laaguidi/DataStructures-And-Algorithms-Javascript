// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has
// it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        // loop through second array using indexOf to see if index ** 2 exists
        //it's a second for loop:
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //if the index doesn’t exist in the second array, return false and stop
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // if the index does exist, clean the array 2 (splice) until the array length is 0
        arr2.splice(correctIndex,1)
    }
    return true;
}
console.log(same1([1,2,3,2], [9,1,4,4]))


//Refactored 2 seperate loops is better than inner loops:

function same2(arr1, arr2){
    // like before, don’t continue further logic is array lengths do not match
    if(arr1.length !== arr2.length){
        return false;
    }
    // to count the frequency of each character in each array, declare two objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop through array1 and set key and values for each character
    for(let val of arr1){
        //renvois le nombre de fois que la valeur est repeter
        //Si val existe déjà, l'opérateur OR est ignoré et 1 est ajouté à val.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        //Next, the function iterates over the keys in frequencyCounter1 using a for...in loop. For each key, it checks if the square of that key exists as a key in frequencyCounter2. If it doesn't, it means there is no corresponding squared value for the key in arr2, and the function returns false.
        //check if key is squered in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //If the squared key does exist in frequencyCounter2, the function compares the frequencies of the corresponding keys in frequencyCounter1 and frequencyCounter2. If they are not equal, it means the frequencies differ, and the function returns false.
        //If the values correspond, if there is 2 = 2
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same2([1,2,3,4], [1, 4, 6, 8]))
 //explained:
// frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
 //l fait une paire de valeurs clés, donc disons pour la première itération, il fait prendre 1 comme clé puis (frequencyCounter1[val] || 0) +1 comme valeur, maintenant cette valeur représente le nombre de fois un nombre apparaît dans le tableau, donc si 1 apparaît 10 fois, il aura une paire clé-valeur 1:10


// L'idée est que si frequencyCounter1[val]c'est undefinedpar défaut 0. undefined + 1renvoie NaNet cela ne fonctionnerait pas comme prévu par le programmeur, il utilise donc ||pour contourner ce problème sans avoir à écrire des lignes de code supplémentaires.
//
// En JavaScript, l'opérateur ||ne renvoie pas trueou, falsecomme vous vous en doutez, il renvoie soit le premier élément qui serait évalué comme trues'il avait été converti en booléen, soit le dernier élément par défaut si aucun n'est trouvé.
//
// Par exemple, (null || "" || undefined || false || NaN || "test" || 2)reviendra"test"



