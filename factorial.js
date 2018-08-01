// Recursive way:

function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}

factorialize(5);

// Non recursion version:

function factorialize(num) {
  if (num === 0) return 1;
  let factorial = 1;
  for(let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

factorialize(5);
