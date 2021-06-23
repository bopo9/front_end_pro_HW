function inputValidationNumbers(message, messageDefault){
    let num;
    do {
        num = +prompt(message, messageDefault);
    }while (Number.isNaN(num));
    return num;
}

function factorialCycle(message, messageDefault) {
    let factorial = inputValidationNumbers(message,messageDefault);
    let newFactorial = factorial;
    while (factorial > 1) {
        factorial--;
        newFactorial *= factorial;
    }
    return newFactorial;
}

function recursionFactorial(factorial){
    return factorial ? factorial * recursionFactorial(factorial - 1) : 1;
}

function compareArrayWithNumber(array, num){
    for (let i = 0; i < array.length; i++){
        if (num > array[i]) return true;
    }
    return false;
}

function cleverPush(array, num){
    if (compareArrayWithNumber(array, num)){
        array.shift();
        array.push(num);
    }else{
        array.pop();
        array.unshift(num);
    }
    return array;
}

function fillArray(length, message){
    let array = [];
    for (let i = 0; i < length; i++){
        array[i] = inputValidationNumbers(message + `${i}`);
    }
    return array;
}
