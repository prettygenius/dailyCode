 /*Write a javascript program to create a new string adding "New!" in front of a given string*/

 function addNewString(str) {
  let arr = ["New!", str];
 let newString = arr.join(" ");
  return newString;
}

console.log(addNewString("Hello World"))