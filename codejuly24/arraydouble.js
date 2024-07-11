// Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.

// Example: arrayDouble(['bark', 'meow']); will console.log(['bark', 'bark', 'meow', 'meow'])

function arrayDouble(arr) {
  let doubleArray = [];
  arr.forEach(item => doubleArray.push(item,item))
  console.log(doubleArray)
 }
 
 arrayDouble(['bark','meow'])