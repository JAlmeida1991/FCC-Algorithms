function diffArray(arr1, arr2) {
  // 1. Declare empty array
  const myArr = [];
  // 2. Check first array if does not contain element
  arr1.forEach(el => {
    if (!arr2.includes(el)) myArr.push(el)
  });
  // 3. Check second array if does not contain element
    arr2.forEach(el => {
    if (!arr1.includes(el)) myArr.push(el)
  });
  // 4. Return myArray;
  return myArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
