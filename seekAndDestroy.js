function destroyer(arr) {
  // 1. Declare inital array to filter over:
  const firstArr = arguments[0];
  // 2. Declare second array to filter from. Since second array can have any length, slice 1 onwards:
  const secondArray = Array.from(arguments).slice(1);
  // 3. This function will check if item is included... 
  // If it is true, flip it false. It it is false, flip it true.
  const compareItems = (el, arr) => !arr.includes(el);
  // [].filter will filter anything that returns true
  return firstArr.filter(el => compareItems(el, secondArray));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
