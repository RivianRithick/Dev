let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function to filter prime numbers in the array
let primeNumbers = numbers.filter(function(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});

console.log("Prime numbers in the array:", primeNumbers);
