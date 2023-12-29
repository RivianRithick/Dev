let arrayToRotate = [1, 2, 3, 4, 5];
let k = 3;

let rotatedArray = (function(arr, k) {
  let len = arr.length;
  k = k % len; 

  let rotatedPart = arr.slice(len - k);
  let remainingPart = arr.slice(0, len - k);
  return rotatedPart.concat(remainingPart);
})(arrayToRotate, k);

console.log(`Original Array: ${arrayToRotate}`);
console.log(`Array after rotating ${k} times: ${rotatedArray}`);
