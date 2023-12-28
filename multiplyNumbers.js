// Function expression called before declaration (hoisting)
multiplyNumbers(3, 4);

var multiplyNumbers = function(a, b) {
  return a * b;
};
