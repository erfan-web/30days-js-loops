// Day 4 - Loop Challenge
// Power calculation using function and loop

// with for
function powerWithFor(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

let baseNumber=10;
let exponentNumber=2;

console.log(`${baseNumber} ^ ${exponentNumber} = ${powerWithFor(baseNumber, exponentNumber)}`)

// with while
function powerWithWhile(base, exponent) {
  let result =1;
  let i=0;
  while (i<exponent) {
    result*=base
    i++
  }
  return result;
}
console.log(`5 ^ 2 = ${powerWithWhile(5, 2)}`)
