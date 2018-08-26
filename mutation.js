// 1. store the two strings from the array in variables
// 2. loop over second strings length and return false if first string does not have a character from the second string
// 3. return otherwise

function mutation(arr) {
  const [arrOne, arrTwo] = arr;
  for(let i = 0; i < arrTwo.length; i++){
  // need to call toLowerCase method on both strings since: 'A' === 'a', etc...
    if(arrOne.toLowerCase().indexOf(arrTwo[i].toLowerCase()) === -1){
      return false;
    } 
  }
  return true;
}

mutation(["hello", "hey"]);
