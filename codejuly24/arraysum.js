// Write a function arraySum that takes an array of numbers and console.logs the sum of the numbers. 
//Example: arraySum([1, 2, 3]); = 6 and arraySum([5, -2, 7, 0]); = 10
function arraySum(sum) {
  let total = 0;
 sum.forEach(element => {
  total += element
 });
console.log(total)
 }

 arraySum([2,3,4,5])
 arraySum([5,6,7,8])