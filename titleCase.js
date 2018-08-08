// 1. Split string into an array in order to loop through it with forEach and create myStr variable
// 2. For each iteration capitalize the first letter and add to myStr variable. Every other letter is lower case
// 3. Add an empty string at the end of each word unless it is the final word

function titleCase(str) {
  let myArr = str.toLowerCase().split(" ");
  let myStr = '';
  myArr.forEach(function(word, index){
    myStr += word[0].toUpperCase();
    myStr += word.slice(1);
    if(index !== myArr.length - 1){
    myStr +=  ' ';
    }  
});
  return myStr;
}

titleCase("I'm a little tea pot");
