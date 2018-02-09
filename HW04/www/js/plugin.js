//1.

function doubleArray(arr){
    if (!Array.isArray(arr)) {
        console.log('argument is not an array');
        return;
    }

    let newArr = [];
    for (let i = 0; i < 2; i++){
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(doubleArray([1,2,3]));

//2
function lastElement(arr){
    if (!Array.isArray(arr)) {
        console.log('argument is not an array');
        return;
    }
    return arr[arr.length-1];
}
let array02 = ['first','middle1','middle2','last'];
console.log(lastElement(array02));

//3
function getArray(n){
    if (Math.round(n) !== n) {
        console.log('argument is not an integer');
        return;
    }
    let newArr = [];
    for (let i = 1; i <= n; i++){
        newArr.push(i);
    }
    return newArr;
}
console.log(getArray(10));

//4
function changeCollection(arr){
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!Array.isArray(arr)) {
            console.log('one of arguments is not an array');
            return;
        }

        newArr[i] = arguments[i].slice(1);
    }
    return newArr;
}

console.log(changeCollection([1,2,3],['a','b','c']));
console.log(changeCollection([1,2,3]));

////Массивы. Задачи.
//1
function strSortInvert(str) {
    if (typeof(str) !== "string"){
        console.log('argument is not a string');
        return;
}
    let newArr = str.split('');
    return newArr.sort().reverse().join('');
}
console.log(strSortInvert("bcdaeflmjgkhi"));

//2
function arrSortInvert(arr) {
    if (!Array.isArray(arr)) {
        console.log('argument is not an array');
        return;
    }

    return arr.sort((a,b) => {return b - a});
}
console.log(arrSortInvert([2,4,7,1,-2,10,-9]));

//3
function getNewArray(arr, a1, a2) {
    if (!Array.isArray(arr)) {
        console.log('argument01 is not an array');
        return;
    } else if ((Math.round(a1) !== a1) || (Math.round(a2) !== a2)){
        console.log('argument02 or argument03 is not an integer');
        return;
    }
    return arr.slice(a1, a2 + 1);
}
console.log(getNewArray(['a','b','c','d','e','f'],2,4));

//4
let array04 = ['one',2,'three',4];
array04 = (array04.join(',') + ',' + array04.join(',')).split(',');
console.log(array04);

//5
let array05 = [1,2,3,4,5];
array05.splice(2,2);
console.log(array05);

//6
let array06 = [1,2,3,4,5];
array06.splice(2,2,'three','four');
console.log(array06);

//7
let array07 = ['I','am','an','array'];
array07.splice(3,0,'awesome');
console.log(array07);

//08
let array08 = [[14,45],[1],['a','c','d']];
array08 = array08.sort((a, b) => {return (a.length - b.length)});
console.log(array08);

//09
let array09 = [1,2,3];
let array09_1 = array09.concat();
let array09_2 = array09.slice();
console.log(array09);
console.log(array09_1);
console.log(array09_2);

//10
let array10 = [ {cpu:'intel',info:{cores:2,cache:3}},
                {cpu:'intel',info:{cores:4,cache:4}},
                {cpu:'amd',info:{cores:1,cache:1}},
                {cpu:'intel',info:{cores:3,cache:2}},
                {cpu:'amd',info:{cores:4,cache:2}} ];

array10.sort((a,b) => {return a.info.cores - b.info.cores});
console.log(array10);

//11
const products = [  {title:'prod01',price:5.2},
                    {title:'prod02',price:0.18},
                    {title:'prod03',price:15},
                    {title:'prod04',price:25},
                    {title:'prod05',price:18.9},
                    {title:'prod06',price:8},
                    {title:'prod07',price:19},
                    {title:'prod08',price:63}];

function filterCollection(arr, min, max){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if ((arr[i].price >= min) && (arr[i].price <= max)){
            newArr.push(arr[i]);
        }
    }
    return newArr.sort((a, b) => {return a.price - b.price});
}
console.log(filterCollection(products, 15, 30));