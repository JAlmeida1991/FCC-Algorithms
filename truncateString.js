// IF NUM GREATER THAN OR EQUAL FUNCTION WILL SHORT CURCUIT AND GIVE BACK ORGINAL STR
// ELSE ADD INDEX OF STR TO NEWSTR AND RETURN NEWSTR WITH ... ONCE LOOP ENDS

function truncateString(str, num) {
  if (num >= str.length) return str;
  let myStr = '';
  for (let i = 0; i < num; i++){
    myStr += str[i];
  }
  return myStr + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
