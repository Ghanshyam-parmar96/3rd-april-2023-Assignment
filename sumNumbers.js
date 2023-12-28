// Variable declared with var hoisted, but not assigned yet
function sumNumbers(x, y) {
  console.log(result); // Output: undefined
  var result = x + y;
  console.log(result); // Output: sum of x and y
}

sumNumbers(10, 15);
