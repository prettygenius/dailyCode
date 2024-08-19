//write a javascript program to concatenate two strings except their first character.

function concatTwoString(str1,str2) {
  let myStrings = str1.slice(1) + str2.slice(1) 
  return myStrings

}

console.log(concatTwoString('hello','world'))