// Code your solutions in this file


function printBadges (arg) {
  for (let i=0; i < arg.length; i++ ){
    console.log(`Welcome ${arg[i]}! You are employee #${i + 1}.`)
  }
  return arg
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
