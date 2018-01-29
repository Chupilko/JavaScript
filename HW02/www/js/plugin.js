//1. Задачи на циклы

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

