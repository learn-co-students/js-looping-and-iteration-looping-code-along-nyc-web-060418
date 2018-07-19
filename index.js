// Code your solutions in this file

//will accept one arg, an array of employees
//EACH LOOP
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    //have to wrap the string in backticks
    console.log(`Welcome ${employees[i]}! You are employee #${[i + 1]}.`);
  }
  return employees;
}


function tailsNeverFails() {
  //let i start at 0
  let i = 0;

  while ((Math.random() >= 0.5)) {
    ++i;
  };

  return `You got ${i} tails in a row!`;}


// function neverFails() {

//   function flipCoin() {
//     return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
//   }

//   while (flipCoin()) {
//     console.log(`You got ${flipCoin()} tails in a row!`)
//   }

// }
