// "use strict";
// const pi = 3.14;
// let D = 26;
// let C = (pi * D ** 2) / 4;
// console.log(C);
// скрипт находит длину окружности
let string = "999";
let x = string.split(""); //x = [ '9', '9', '9' ]
let num;
let sum = 0; 
console.log(typeof x[0]);
for (let i = 0; i < x.length; i++) {
  num = Number(x[i]);
  console.log(typeof num);
  x[i] = num;
  sum = sum + x[i];
}
console.log(sum);

