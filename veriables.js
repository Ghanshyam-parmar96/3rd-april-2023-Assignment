// Variables declared with let, var, and const
{
  console.log(a); // Output: undefined
  console.log(b); // Output: ReferenceError
  console.log(c); // Output: ReferenceError

  var a = 5;
  let b = 10;
  const c = 15;

  console.log(a); // Output: 5
  console.log(b); // Output: 10
  console.log(c); // Output: 15
}
