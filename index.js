// Code your solutions in this file
function printBadges(names) {

  for (let i=0; i < names.length; i++){

    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function flip() {
  return Math.random() >= 0.5;
}



function tailsNeverFails() {

  let i = 0;
  let tails = 0;

  while (flip()) {
    tails += 1;
    i++;
  }
  return `You got ${i} tails in a row!`
}
