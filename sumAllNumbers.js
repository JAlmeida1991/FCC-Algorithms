function sumAll(arr) {
 // 1. init sum at 0
  let sum = 0;
 // 2. Need to sort from least to greatest since larger number can either be first or second argument
  const myArr = [...arr].sort((a,b) => a - b);
 // 3. init i as value of larger number in array and decrement it until its value matches the smaller number
  for(let i = myArr[myArr.length -1]; i >= myArr[0]; i--){
  // 4. increment sum for each iteration
    sum+=i;
  }
  return sum;
}

sumAll([32, 1]);
