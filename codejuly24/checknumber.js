/* 
Write a Javascript program to check two numbers and return true if one of the numbers is 100 or if their sum of two numbers is 100.
*/

function myFunction(a,b) {
  let sum = a + b
  if (a === 100 || sum === 100 || b === 100) {
    return true;
  } else {
    return false
  }
}

console.log(myFunction())

