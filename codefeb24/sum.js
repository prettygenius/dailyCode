// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.



function sumArray(array) {
    if (array === null || array.length <= 2) {
      return 0; 
    }
   
    const sortedArr = array.sort((a, b) => a - b).slice(1, array.length - 1);
  
    const sum = sortedArr.reduce((total, num) => total + num, 0);
  
    return sum;
  }