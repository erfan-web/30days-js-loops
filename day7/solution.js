function fibonacci(n) {
  let fib = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  if (n === 1) return [0];

  return fib.slice(0, n);
}

console.log(fibonacci(10)); 