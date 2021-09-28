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
let cities = ["Rome", "Lviv", "Warsaw"]; 
let newCities = cities.join('*');
console.log(newCities);

// task5
const isAdult = promt ("Ви досягли повнолітнього віку?", "0");
if (isAdult > 0 && isAdult < 18) {
    console.log ("Ви не досягли повнолітнього віку");
} else if (isAdult >= 18) {
    console.log ("Ви досягли повнолітнього віку");
} else console.log ("Ви ввели не коректні данні");

// task6
const sideA = promt ("Введіть сторону А трикутника", "3");
const sideB = promt ("Введіть сторону А трикутника", "4");
const sideC = promt ("Введіть сторону А трикутника", "5");
const perim = (sideA + sideB + sideC) * (1 / 2);
const triangleSquare = (perim * (perim - sideA) * (perim - sideB) * (perim - sideC)) ** (1 / 2);
const triangleSquareRight = sideA * sideB  * (1 / 2);

if ( ((sideA + sideB) < sideC) || ((sideA + sideC) < sideB) || ((sideB + sideC) < sideA) || (sideA < 0) || (sideB < 0) || (sideC < 0)) {
    alert("Incorrect data");
};
if (triangleSquare === triangleSquareRight) {
    console.log("Трикутник є прямокутним");
};
if (sideC ** 2 === sideA ** 2 + sideB ** 2) {
    console.log("Трикутник є прямокутним");
};

console.log(triangleSquare.toFixed(3));

// task7
let time = new Date();
let hour = time.getHours();

if (hour > 22 && hour < 5) {
    console.log("Доброї ночі");
} else if (hour >= 5 && hour <= 11) {
    console.log("Доброго ранку");
} else if (hour > 11 && hour <= 17) {
    console.log("Доброго дня");
} else {
    console.log("Доброго вечора");
};

let hours = time.getHours();
switch (true) {
     case (hours >= 23 || hours <= 5):
        console.log("Доброї ночі");
        break;
    case (hours > 5 || hours < 11):
        console.log("Доброго ранку");
        break;
    case (hours > 11 || hours < 17):
        console.log("Доброго дня");
        break;
    default:
        console.log("Доброго вечора");
};
