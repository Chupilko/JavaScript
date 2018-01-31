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
    let reverseStr='';
    if (typeof(str) === "string"){
        for (let i = (str.length - 1); i >= 0; i--){
            reverseStr += str[i]
        }
    } else{
        reverseStr = 'Argument is not a String'
    }
    return reverseStr
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