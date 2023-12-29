let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];

let uniqueArray = arrayWithDuplicates.filter(function(value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);
