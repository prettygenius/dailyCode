//Javascript string methods

//?-------------------------------------

//+ chartAt
//*What it does: Takes in index Returns the character at the specified index (position) in a string

//*How it works: checks the index and returns the character at that index

//*Examples:
 
let text1 = "Hello";
console.log(text1.charAt(0));//first character H
console.log(text1.charAt(text1.length - 1));//last character o
//using a for loop
const str = 'JavaScript';
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}


//?-------------------------------------
//+ charCodeAt
//*What it does: Takes in index Returns the character code at the specified index (position) in a string

//*How it works: checks the index matches the index within the string and returns the character code(utf) integer value at that index. If the integer value is larger than 655536, then charCodeAt(i+1) should be used to get the other half of the value

//*Examples:
 
let text2 = "Hello";
console.log(text2.charCodeAt(0));//97
console.log(text2.charCodeAt(text2.length - 1));//111