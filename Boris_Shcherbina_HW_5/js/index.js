alert('Hello!!');

do {
    let elementsArray, generatedArray;

    do {
        elementsArray = inputValidationNumbers('How many elements should there be in the array? \n Min: 5 | Max: 20');
    }while (elementsArray < 5 || elementsArray > 20);

    generatedArray = sortArray(fillArray(elementsArray, 'Enter a value for the element # '));

    alert(`[${generatedArray}]`);
}while (confirm('Do you want to repeat the operation ?'));