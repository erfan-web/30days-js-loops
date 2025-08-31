// Day 6 - Loop Challenge
// factorial calculation using function and loop

// with for
for (let i = 2; i <= 100; i++) {
  let isPrime = true
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      break;
    }
  }
  isPrime && console.log(i)
}
//with while
let i = 2;
while (i <= 100) {
  let counter = 0;
  let j = 1;
  while (j <= i) {
    if (i % j === 0) counter++;
    j++;
  }
  counter === 2 && console.log(i)
  i++
}