// A variable pali is given. Return true if it is a palindrome. Otherwise false. A palindrome is a word that is read forward and backward, resulting in the same word.
// Example:
// racecar

function palindrome(pali) {
    const reversed = pali.split('').reverse().join('');
    return pali === reversed;
  }