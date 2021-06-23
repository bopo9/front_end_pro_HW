function inputValidationNumbers(message){
    let num;
    do {
        num = +prompt(message);
    }while (Number.isNaN(num));
    return num;
}

function fillArray(length, message){
   let array = [];
   for (let i = 0; i < length; i++){
       array[i] = inputValidationNumbers(message + `${i}`);
   }
   return array;
}

function sortArray(array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j + 1]){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}