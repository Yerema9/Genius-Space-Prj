////***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

let name = "Іван";
let city = "Kyiv";
city = name;
console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1 
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // 

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

console.log(typeof Number(a)); // number
console.log(typeof parseInt(b)); // number
console.log(typeof parseFloat(c)); // number

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
console.log ((0.1 *10 + 0.2 *10)/10) //0.3

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

console.log(Math.max(20, 10, 50, 40)); //50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

const message = "Welcome to Bahamas!";
console.log(message.length);
//***8**
//вивести в консоль message  великими літерами

console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

let person = {};
person.name = "Іван";
person.age = 30;
person.city = "Kyiv";
console.log(person);      
delete person.city;
person["like flowers"] = true;
console.log(person);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

 // Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let variable = 1; // змініть це значення для перевірки
if (variable > 0) {
    console.log(true);
} else {
    console.log(false);
}
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let str = "test"; // змініть це значення для перевірки
if (str === "test") {
    console.log(true);
} else {
    console.log(false);
}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let num = 13; // змініть це значення для перевірки
if (num > 10) {
    console.log(num - 5);
} else {
    console.log(num + 5);
}
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let monthNumber = 5; // змініть це значення для перевірки
let monthName = "";

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
let threeDigitNumber = 345; // змініть це значення для перевірки
let sum = 0;
let strNumber = threeDigitNumber.toString();    

// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = "JavaScript is awesome!";

// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm

// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no?");
// console.log(test);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

// const number = prompt("Please enter number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// ---Number--- //

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty");
// console.log(test);
// console.log(typeof value);

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN));
// console.log(Boolean(null));

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// == приведення до типу

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6);

//   -----not (!) ------ //

// console.log(!false);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні
// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// }

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// if (5 + 5 === 10) {
//   console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
//   console.log("2+2 ===4");
// } else {
//   console.log("no");
// }

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок");
// } else if (leng === "en") {
//   console.log("Monday");
// } else {
//   console.log("Reset");
// }

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
// }

// console.log(cost);

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("ВВедіть іншу цифру");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "груша":
//     cost = 15;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "кавун":
//     cost = 50;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "вишня":
//     cost = 70;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;

//   default:
//     alert(`Товару ${value} немає в наявності`);
// }

// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);//