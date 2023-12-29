let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let combinedArray = [];

for (let i = 0; i < arr1.length; i++) {
  combinedArray.push(arr1[i]);
  combinedArray.push(arr2[i]);
}

combinedArray.sort((a, b) => a - b);

let median = function(arr) {
  let length = arr.length;
  let mid = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};

let result = median(combinedArray);
console.log("Median of the combined sorted arrays:", result);
