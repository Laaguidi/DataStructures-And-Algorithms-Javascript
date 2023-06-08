function recursiveRange(num) {
   if (num <= 1) {

      return num;
   }
   console.log(num)
   return num + recursiveRange(num - 1);

}

console.log(recursiveRange(6));