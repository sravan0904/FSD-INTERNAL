// prime.js
const num = parseInt(process.argv[2]);

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

if (isPrime(num)) {
  console.log(`${num} is a Prime Number`);
} else {
  console.log(`${num} is Not a Prime Number`);
}
