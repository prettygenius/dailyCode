//Given is an array numbers. Return the number of odd numbers.

function countOdds(numbers) {
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        count++;
      }
    }
  
    return count;
  }
  