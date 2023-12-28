// Attempting to log the value of a variable declared with let before assignment (Temporal Dead Zone)
{
  console.log(x); // Output: ReferenceError
  let x = 20;
  console.log(x); // Output: 20
}
