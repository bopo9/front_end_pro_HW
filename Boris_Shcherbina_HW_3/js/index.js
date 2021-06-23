alert('Hello!');
let answer = prompt('Select operation\nYou can shoose:\n  + ,  - ,  * ,  /  \n or \n  cos \',  sin \', pow ');

switch (answer){
    case '+':
        let sumFirstOperand = +prompt('Enter first operand');
        let sumSecondNumOperand = +prompt('Enter second operand');

        alert(`Result: ${sumFirstOperand + sumSecondNumOperand}`);
        break;
    case '-':
        let diffFirstOperand = +prompt('Enter first operand');
        let diffSecondOperand = +prompt('Enter second operand');

        alert(`Result: ${diffFirstOperand - diffSecondOperand}`);
        break;
    case '*':
        let multFirstOperand = +prompt('Enter first operand');
        let multSecondOperand = +prompt('Enter second operand');

        alert(`Result: ${multFirstOperand * multSecondOperand}`);
        break;
    case '/':
        let divFirstOperand = +prompt('Enter first operand');
        let divSecondOperand = +prompt('Enter second operand');

        alert(`Result: ${divFirstOperand / divSecondOperand}`);
        break;
    case 'cos':
        let cosOperand = +prompt('Enter operand');

        alert(Math.cos(cosOperand));
        break;
    case 'sin':
        let sinOperand = +prompt('Enter operand');

        alert(Math.sin(sinOperand));
        break;
    case 'pow':
        let powFirstOperand = +prompt('Enter first operand');
        let powSecondOperand = +prompt('Enter second operand');

        alert(Math.pow(powFirstOperand, powSecondOperand));
        break;
}