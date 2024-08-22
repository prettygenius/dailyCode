const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed:  1543},
  { first: "Max", last: "Planck", year: 1858, passed: 1947},
];


//sort the inventors by birthdate oldest to youngest 

const orderOfBirth = inventors.sort((a,b) => {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1
  }
})

console.log(orderOfBirth)


