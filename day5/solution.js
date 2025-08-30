// Day 5 - Loop Challenge
// factorial calculation using function and loop

// with for
function factorial(n) {
  if (n < 0) console.log("Number must be non-negative.")
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i

  }
  console.log(result)
}
factorial(0)

//with while
function factorial1(n) {
  if (n < 0) console.log("Number must be non-negative.")
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++
  }
  console.log(result)
}
factorial1(3)