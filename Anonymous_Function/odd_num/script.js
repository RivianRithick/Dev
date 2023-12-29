let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd_num = numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    console.log(number);
  }
});
