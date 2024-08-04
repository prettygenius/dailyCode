//Write a Javascript program to get the extension of a filename

function getFile(str) {
 return str.slice(str.lastIndexOf('.'));
}

console.log(getFile('reverse.js'))