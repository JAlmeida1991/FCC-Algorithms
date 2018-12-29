const steamrollArray = arr => {
  
  // 1. Declare intial starting array
  const myArr = [];
  
  // 2. Make recursive function that will terminate if value is not an array
  const roller = arr => {
    for (const val of arr) {
    Array.isArray(val) ? roller(val) : myArr.push(val)
    }
  }
  
  // 3. Call recurive function
  roller(arr)
  
  // 4. return initial array
  return myArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
