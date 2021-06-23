alert('Hello!!');

do {
   let result,switchInput,arrayLength,userInputArray,newArray ;

   do {
      switchInput = inputValidationNumbers(
          `Which function will you choose ? 
            1)Cycle Factorial 
             2)Recursion Factorial 
             3)Array`,
            'Example: 1'
      );
   }while (switchInput < 1 || switchInput > 3);

   switch (switchInput){
      case 1:
         result = factorialCycle('Enter number');
         alert(result);
         break;
      case 2:
         result = recursionFactorial(inputValidationNumbers('Enter factorials'));
         alert(result);
         break
      case 3:
         arrayLength = inputValidationNumbers('How many elements will the array have?');
         userInputArray = fillArray(arrayLength, 'Enter a value for the element # ');
         newArray = cleverPush(userInputArray, inputValidationNumbers('Enter new num'));
         alert(newArray);
         break
   }

}while (confirm('Do you want to repeat the operation ?'));