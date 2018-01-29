//1. Присваивание задачи.
////1.
// a += 10;
// b *= 18;
// c -= 10;
// x += a;
// y *= z;
//i *= 5 * y;

// sqr = Math.pow(sqr,2); //квадрат числа
//или
// sqr *= sqr;


//2. Арифметические опреторы. Задачи

////1.
// let a = 5;
// console.log(a++); //5 скначала вывод, потом арифметика
// console.log(++a); //6 скначала арифметика, потом вывод

////2.
// let intNumber = 4;
// if ((intNumber % 2) === 0){
//     console.log('четное');
// } else if (intNumber % 2 === 1){
//     console.log('нечетное');
// }
// else {
//     console.log('не целое или не число');
// }


//Условные операторы. Задачи

////1.1
// let variable = '';
//
// if (variable === 'hidden'){
//     variable = 'visible'
// } else{
//     variable = 'hidden'
// }

////1.2
// variable === 'hidden' ? variable = 'visible' : variable = 'hidden';


////2.1. else if
// let variable = 2;
// if (variable === 0){
//     variable = 1
// } else if (variable < 0){
//     variable = 'less than zero'
// } else if (variable > 0){
//     variable *= 10
// }

//тернарный оператор
// variable === 0 ? variable = 1 : variable < 0 ? variable = 'less than zero' : variable > 0 ? variable *= 10 : console.log('variable is not a number');


//Конструкция switch. Задача
// let a = 'inline';
// switch (a){
//     case 'block': console.log(a);
//         break;
//     case 'none': console.log(a);
//         break;
//     case 'inline': console.log(a);
//         break;
//     default: console.log('other')
// }

//Преоюразование типов. Задачи
//let a = 0 || 'string'; // 'string' - первое тру, т.к. 0 == фалш
//let a = 1 && 'string'; // 'string' - все тру, выводит последнее
//let a = null || 25; // 25 - выводит первое тру, т.к. нулл == фалш
//let a = null && 25; // null - первое фалш.
//let a = null || 0 || 35; // 35 - первое тру, т.к. 0 == фалш и нул == фалш
//let a = null && 0 && 35; // null - первое фалш

// console.log(12 + 14 + '12'); // '26' + '12' =>  '2612'
// console.log(3 + 2 - '1'); //4 преображает все в числа
// console.log('3' + 2 - 1); //'32' - 1 => 31
// console.log(true + 2); //1 + 2 => 3
// console.log(+'10' + 1); // 10 + 1 => 11
// console.log(undefined + 2); //NaN + 2 => NaN
// console.log(null + 5); // 0 + 5 => 5
// console.log(true + undefined); // 1 + NaN => NaN
//Задачи на циклы

// //1.
// let str = 'i am in the easycode';
// let strUpper = ''; //с большой буквы
// for ( let i = 0; i < str.length; i++){
//     if ((str[i-1] === ' ') || (str[i-1] === undefined)){
//         strUpper += str.charAt(i).toUpperCase();
//     } else{
//         strUpper += str.charAt(i);
//     }
// }
// console.log(strUpper);

////2.
// let str = 'tseb eht ma i';
// let strFromEnd = '';
// let i = str.length - 1;
// while (i >= 0){
//     strFromEnd += str.charAt(i);
//     --i;
// }
// console.log(strFromEnd);

////3.
// let n = 10;
// let nFactorial = 1;
// for(let i = n; i > 0; i--){
//     nFactorial *= i;
// }
// console.log(`${n}! = ${nFactorial}`);

////4.
// let n = 10;
// let nCount = `Считаем до ${n}и:`;
// console.log(nCount);
// for (let i = 1; i < n; i++){
//     nCount += ` ${i},`;
// }
// nCount += ` ${n}`;
// console.log(nCount);

////5.
// let str = 'JavaScript is a pretty good language';
// let strUpper = ''; //с большой буквы
// for ( let i = 0; i < str.length; i++){
//     if (str[i] === ' '){
//         continue;
//     } else if ((str[i-1] === ' ') || (str[i-1] === undefined)){
//         strUpper += str.charAt(i).toUpperCase();
//     } else{
//         strUpper += str.charAt(i);
//     }
// }
// console.log(strUpper);

////6.
// for (let i=1; i<=15; i++){
//     if (i%2 != 0){
//         console.log(i);
//     }
// }

