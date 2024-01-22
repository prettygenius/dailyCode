// Write a function that takes an array (a) as argument
// Return the number of elements in a
// function myFunction(a){


// }
// Test Cases:
// myFunction([1,2,2,4])
// Expected
// 4
// myFunction([9,9,9])
// Expected
// 3
// myFunction([4,3,2,1,0])
// Expected
// 5

function myFunction(a) {
  // Return the number of elements in the array
  return a.length;
}

// Test Cases:
console.log(myFunction([1, 2, 2, 4])); // Expected output: 4
console.log(myFunction([9, 9, 9]));    // Expected output: 3
console.log(myFunction([4, 3, 2, 1, 0]));// Expected output: 5