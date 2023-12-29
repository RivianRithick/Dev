const strings = ["hello", "world", "how", "are", "you"];

const titleCaseStrings = (function(arr) {
  return arr.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
})(strings);

console.log(titleCaseStrings);
