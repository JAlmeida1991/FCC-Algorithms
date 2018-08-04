// Declare empty string variable then add to it num times

function repeatStringNumTimes(str, num) {
  let myStr = "";
  for(let i = 0; i < num; i++){
    myStr += str;
  }
  return myStr;
}

repeatStringNumTimes("abc", 3);
