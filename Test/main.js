const anagram = function(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
     
     if (arr1.length !== arr2.length)
        {
            return false;
        }

        for(let i = 0; i < arr1.length; i++){

            let correctIndex = arr1[i];
            if(correctIndex === -1) 
            {
                return false;
            }
            if(arr2.includes(correctIndex))
            {
                return true;
            }
          
            console.log(arr2);
            arr2.splice(correctIndex,1)
        }

        return true;
}

console.log(anagram("hello", "hello"));

