//Write a JavaScript program to get the current date
//expected output mm-dd-yyyy, mm/dd/yyyy

const date = new Date()
const day = date.getDate() 
const month = date.getMonth() + 1
const year = date.getFullYear()
console.log(`today is ${month}/${day}/${year}`)
console.log(`today is ${month}-${day}-${year}`)