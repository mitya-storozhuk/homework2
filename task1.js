// task1
let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = !!x + "" + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = !!x;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Math.sqrt(-x);
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task2
const number = promt ("Enter a number", "0");
const even = 0;
const multipleSeven = 0;
if (even === number % 2) {
   console.log("number is even"); 
} else if (multipleSeven === number % 7) {
    console.log("number is multiple of seven");
} else {
    console.log("number is not even and multiple of seven");
}

// task3
let arr = [];
arr[0] = 8;
arr[1] = 'hello';
arr[2] = true;
arr[3] = null;
console.log(arr.length);
const value = promt ("Enter an anything", "0");
arr[4] = value;
console.log(arr[4]);
const first = arr.shift();
console.log(arr);

// task4


// task5
const isAdult = promt ("Ви досягли повнолітнього віку?", "0");
if (isAdult > 0 && isAdult < 18) {
    console.log ("Ви не досягли повнолітнього віку");
} else if (isAdult >= 18) {
    console.log ("Ви досягли повнолітнього віку");
} else console.log ("Ви ввели не коректні данні");
