let words = ["level", "hello", "radar", "good", "noon"];

let palindromes = (function(arr) {
  return arr.filter(function(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  });
})(words);

console.log("Palindromes in the array:", palindromes);
