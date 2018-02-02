////1.
function multiply(){
    let mult = 1;
    if (arguments.length) {
        for (let i = 0; i < arguments.length; i++) {
            mult *= arguments[i]
        }
    } else {
        mult = 0
    }
    return mult
}
console.log(multiply(1,2,3));
console.log(multiply());


////3.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('test'));


//4.
function getCodeStringFromText(str){
    let strCode = '';
    for (let i = 0; i < str.length; i++){
        strCode += str.charCodeAt(i) + ' '
    }
    return strCode
}
console.log(getCodeStringFromText('hello'));


//6.
//Функция высшего порядка. Одна на всех
function transformArray(arrayIn, transformFunc) {
    for (let i = 0; i < arrayIn.length; i++) {
        arrayIn[i] = transformFunc(arrayIn[i]);
    }
    return 'New value: ' + arrayIn.join('');
}

//Функции второго порядка

//6.1.
function toUppercase(element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
}
console.log(transformArray(['my', 'name', 'is', 'Trinity'], toUppercase));

//6.2
function multiplyTo10(element) {
    return element * 10 + ', ';
}
console.log(transformArray([10, 20, 30], multiplyTo10));

//6.3
function concatObject(element) {
    return element.name + ' is ' + element.age + ', ';
}
console.log(transformArray([{age: 45, name: 'John'},{age: 20, name: 'Aaron'}], concatObject));

//6.4
function toInvert(element) {
    return element.split('').reverse().join('') + ', ';
}
console.log(transformArray(['abc', '123'], toInvert));

//6.5
function addTo5(element) {
    return element + 5 + ', ';
}
console.log(transformArray([1,2,3], addTo5));


//every

function every(arrArg, handlerEvery) {
    for ( let i = 0; i < arrArg.length; i++ ){
        if (!handlerEvery(arrArg[i])) return false;
    }
    return true;
}

function handlerEvery(element){
    return typeof element === 'string';
}

console.log(every(['q','w',3], handlerEvery));
console.log(every(['q','w','e'], handlerEvery));