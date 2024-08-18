//write a Javascript program to extract the first half of a string of even length

function extractString(str) {
  let myString = str.split('').slice(0, str.length / 2).join('')
  return myString
}

console.log(extractString('javascript'))