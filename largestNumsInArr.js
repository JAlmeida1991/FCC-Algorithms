// Using forEach with destructuring:

function largestOfFour(arr) {
  let myArr = [];
  arr.forEach(function(nums){
 // DESTRUCTURING MAKES IT POSSIBLE TO SPLIT THE SUB ARRAYS INTO INDIVIDUAL PARAMETERS FOR MATH.MAX 
    myArr.push(Math.max(...nums));
  });
  return myArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Using regular for loop with sort method:

function largestOfFour(arr) {
	let myArr = [];
	for (let i = 0; i < arr.length; i++) {
		myArr.push(arr[i].sort((a, b) => a - b)[3]);
	}
	return myArr;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);
