// Code your solutions in this file
function printBadges(employeeArray) {
  for (let i = 0; i < employeeArray.length; i++) {
    console.log(`Welcome ${employeeArray[i]}! You are employee #${i+1}.`);
  }
  return employeeArray;
}

function tailsNeverFails() {
  let result = Math.random()
  let tailsCounter = 0
  while (result >= 0.5) {
    tailsCounter++
    result = Math.random()
  }
  return `You got ${tailsCounter} tails in a row!`
}
