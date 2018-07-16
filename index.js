// Code your solutions in this file
//const employees = ['Ada', 'Brendan', 'Ali'];

function printBadges (employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }

  return employees;
}


function tailsNeverFails() {
  let tails = 0

  function maybeTrue () {
    return Math.random() >= 0.5;
  }

  while (maybeTrue()) {
    tails++
  }

  return `You got ${tails} tails in a row!`;
}
