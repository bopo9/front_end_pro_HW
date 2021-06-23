function calc(firstOperand = 1){
    let res;
    return {
        add: function (secondOperand) {
            res = firstOperand + secondOperand;
        },
        sub: function (secondOperand) {
            res = firstOperand - secondOperand;
        },
        div: function (secondOperand) {
            res = firstOperand / secondOperand;
        },
        mult: function (secondOperand) {
            res = firstOperand * secondOperand;
        },
        getResult: function (){
            console.log(res);
        },
    }
}

