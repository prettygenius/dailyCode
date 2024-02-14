// Given is a string hangmanString. Replace every second letter with an underscore and return the result as a string. The first character must be an underscore.


function hangman(hangmanString) {
    return hangmanString
      .split('')
      .slice(1, hangmanString.length)
      .reduce((acc, char, index) => {
        if (index % 2 === 0) {
          acc.push(char);
        } else {
          acc.push('_');
        }
        return acc;
      }, ['_'])
      .join('');
  }
  