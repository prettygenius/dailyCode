//Given an Integer, return a integer that is the reverse order of numbers

function reverse(num) {
  let reversed = ''

  for(let nums of num) {
    reversed = nums + parseInt(reversed)
  }
  return reversed * Math.sign(num)
}

console.log(reverse('53'))