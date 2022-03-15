"use strict";
let arr = [13, 62, -15, 35, 18, 1337, 778, 256];
for (let i = 0; i < arr.length; i++) {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let c;
      c = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = c;
    }
  }
}
console.log(arr);
