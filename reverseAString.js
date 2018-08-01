// Functional programing with method chaining:
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// verbose version:

function reverseString(str) {
  let myStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    myStr += str[i];
  }
  return myStr;
}

reverseString("hello");
