//Homatask 01


// Переменные. Задачи (var)

// 1. Названия для переменных:
let price;
const max = 99999;
const userName = 'Sasha';
let userInfo;


//2. Что будет в консоли:

console.log(test);
var test = 'string';
//undefined

const x = 'string';
// x = 'string #2';
console.log(x);
//Assignment to constant variable(ошибка переприсвоения константе)

let someVariable = 15;
// let someVariable = 10;
console.log(someVariable);
//has already been declarated(ошибка. такая переменна уже объявлена)


//3. Строки. Задачи

let string = 'some test string';
// 1.
let strChars01 = string[0]+string[string.length -1];

// 2.
let strChars02 = strChars01.toUpperCase();
//или
console.log( (string[0]+string[string.length -1]).toUpperCase() );

// 3.
let strChars03 = string.indexOf('string');

// 4.
let strChars04 = string.indexOf(' ', string.indexOf(' ') + 1);
// ищем ВТОРОЙ пробел, метод lastIndexOf() не годится(это первый с конца, т.е. не по условию

// 5.
let strChars05 = string.substr(5, 4); //5 символ - пробел, его индекс 4, но по логике так

// 6.
let strChars06_1 = string.slice(5, 9);
let strChars06_2 = string.substring(5,9);

// 7.
let strChars07 = string.slice(0, -6);

// 8.
let a = 20;
let b = 16;
let strChars08 = `${a}${b}`;
//переменная string занята, чтоб не ломать, использовал let strChars08
console.log(strChars08);


//4. Числа. Задачи

//1.
console.log(Math.round(Math.PI*100)/100);
console.log(Math.PI.toFixed(2));

//2.
console.log(Math.max(5, 11, 16, 12, 51, 12, 13, 51));

//3.a
let random = Math.random().toFixed(2);
console.log(random);
//3.b
let y=4; //x уже обьявлена на стр 19
// y = +prompt('введите y')
let random2 = Math.ceil(Math.random()*y);
console.log(random2);

//4.
console.log(0.6+0.7);
console.log((0.6+0.7).toFixed(1));

//5.
console.log(parseInt('100$'));


//5. Объект. Задачи

//1.
let obj = {
    product: 'iphone',
};

//2.
obj.price = 1000;
obj.currency = 'dollar';

//3.
obj.details = {
    model: '6s',
    color: 'silver'
};

console.log(obj);






