alert('Hello!');
do {
    const operation = prompt('Select operation\nYou can choose:\n  + ,  - ,  * ,  /  \n or \n  cos \',  sin \', pow ');

    let firstOperand;

    do {
        firstOperand = +prompt('Insert the first operand: ');
    }while (Number.isNaN(firstOperand));

    let secondOperand, result;

    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
        case 'pow':
            do {
                secondOperand = +prompt('Enter second operand')
            }while (Number.isNaN(secondOperand));
            break;
    }

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case 'cos':
            result = Math.cos(firstOperand);
            break;
        case 'sin':
            result = Math.sin(firstOperand);
            break;
        case 'pow':
            result = Math.pow(firstOperand, secondOperand);
            break;
    }

    const operationFormedResult = `Result of operation \'${operation}\' is ${result}`;

    alert(operationFormedResult);
}while (confirm('Do you want to repeat the operation again?'));
