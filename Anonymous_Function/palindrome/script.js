let words = ["level", "hello", "radar", "good", "noon"];

let palindromes = words.filter(function(word) {
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
});

console.log("Palindromes in the array:", palindromes);
