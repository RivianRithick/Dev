let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];

let uniqueArray = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(arrayWithDuplicates);

console.log(uniqueArray);
