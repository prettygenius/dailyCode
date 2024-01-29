// Code a for loop that runs through all numbers from 0-99 and append all numbers divisible by seven into a string. Return this string.

function easyLoop( ) {
    let result = "";
      for ( let i = 0; i <= 99; i++ ) {
        if (i % 7 === 0) {
          // Check if the number is divisible by 7
          result += i;
      }
    }
      return result
    }
    