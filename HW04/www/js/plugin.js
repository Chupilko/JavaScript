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
    newArr = [];
    for (var i = 0; i < arguments.length; i++) {
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