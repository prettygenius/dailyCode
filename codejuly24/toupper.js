// Write a function toUpper that takes 1 parameter, an array of strings, and console.logs a new array with all the strings capitalized.


function upperCase(str) {
  let myArray = str.map((i => {
   return i.toUpperCase()
  }))
  console.log(myArray)
 }
 upperCase(['Hello','World!'])