const displayEl = document.getElementById('display')

let arr = ['Bill', 'Joe', 'Bob', 'Jim']
const timeBetween = 1000

const printName = () => {
  // Display the array elements
  displayEl.innerHTML = arr

  // Pick a random number in the array
  const rnd = Math.floor(Math.random() * arr.length)

  // Remove random element from array
  arr.splice(rnd, 1)

  // if array length is 0 return
  if (arr.length === 0) {
    displayEl.innerHTML = 'No more'
    return
  } else {
    // Some logic here
    setTimeout(() => {
      // if not do it all again
      printName()
    }, timeBetween)
  }
}

printName()
