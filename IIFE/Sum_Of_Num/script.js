let numbers = [1, 2, 3, 4, 5];

let sum = (function(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
})(numbers);

console.log("The sum of numbers is:", sum);
