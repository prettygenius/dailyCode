const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed:  1543},
  { first: "Max", last: "Planck", year: 1858, passed: 1947},
];


//filter the list of inventors to those who were born in the 1500's

const years = inventors.filter((inventor) => {
  if(inventor.year >= 1500 && inventor.year <= 1599 ) {
    return true
  }
})

console.log(years)