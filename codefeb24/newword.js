// Given is a word word. Run through the word and merge every second letter into a new word.



function strangeWord(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i += 2) {
      newWord += word[i];
    }
    return newWord;
  }
  
