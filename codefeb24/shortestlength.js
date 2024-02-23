// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str){
    const words = str.split(' ');
    const shortestLength = Math.min(...words.map(word => word.length));
    return shortestLength;
  }
  