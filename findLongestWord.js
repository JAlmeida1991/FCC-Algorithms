// Method chaining is fun:

function findLongestWordLength(str) {
// SPLIT STR TO ARRAY IN ORDER TO USE ARRAY METHODS
let myArr = str.split(" ")
    return myArr
          .sort((a,b) => a.length - b.length)
          .filter((a,i) => i === myArr.length - 1)
// MUST CHANGE BACK TO STRING IN ORDER TO FIND LETTERS IN ACTUAL WORD          
          .join("")
          .length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
