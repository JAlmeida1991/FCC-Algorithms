function getIndexToIns(arr, num) {
  // Optional, if do not want to mutate original array
  const myArr = [].concat(arr);
  // 1. Push num into array
  myArr.push(num);
  // 2. Sort array from smaller to greater.
  // 3. Call findIndex to find the index of num
  return myArr.sort((a,b) => a - b).findIndex( x => x === num)
}

getIndexToIns([40, 60], 50);
