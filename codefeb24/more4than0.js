// Given is an array n with integers. Return true if it contains more four than zero.


function more4than0(n) {
    const countFours = n.filter(num => num === 4).length;
    const countZeros = n.filter(num => num === 0).length;
    return countFours > countZeros;
  }
  