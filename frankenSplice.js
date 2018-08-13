// 1. slice 0th index to nth index and store in first arr
// 2. slice nth index and store in second arr
// 3. join all arrays with contact

function frankenSplice(arr1, arr2, n) {
  let myArr = arr2.slice(0,n);
  let myOtherArr = arr2.slice(n);
  // console.log(myArr, myOtherArr);
  return myArr.concat(arr1).concat(myOtherArr);
  // return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
