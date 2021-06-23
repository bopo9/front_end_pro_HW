const MENU_CHOICE_SORT = 1,
    MENU_CHOICE_ODD_EVEN = 2,
    MENU_CHOICE_SUM = 3,
    SORT_CHOICE_DESCENDING = 1,
    SORT_CHOICE_ASCENDING = 2,
    DISPLAY_SORT_EVEN = 1,
    DISPLAY_SORT_ODD = 2,
    SUM_USER_ARRAY = 1,
    ARITHMETIC_USER_ARRAY = 2,
    MIN_MAX_ARRAY_NUMBER = 3;

function inputValidationNumbers(message, messageDefault) {
    let num;
    do {
        num = +prompt(message, messageDefault);
    } while (Number.isNaN(num));

    return num;
}

function getMenuResult(message, minElements, maxElements) {
    let userChoice;
    do {
        userChoice = inputValidationNumbers(message);
    } while (userChoice > maxElements || userChoice < minElements);

    return userChoice;
}

function processUserChoice(choice, userArray) {
    switch (choice) {
        case MENU_CHOICE_SORT:
            return sortUserArray(userArray);
        case MENU_CHOICE_ODD_EVEN:
            return getArrayOddEven(userArray);
        case MENU_CHOICE_SUM:
            return processArray(userArray);
    }
}

function getArrayFromUser(message, separator = ' ', minElements = 3) {
    let result;
    do {
        result = prompt(message)
            .trim()
            .split(separator)
            .map(e => +e)
            .filter(e => !Number.isNaN(e));
    } while (result.length < minElements);
    return result;
}

function sortUserArray(userArray) {
    const menu = `Choose an action
        1 - Sort by Descending
        2- Sort by Ascending
    `;
    let userChoice = getMenuResult(menu, 1, 2);

    switch (userChoice) {
        case SORT_CHOICE_ASCENDING:
            userArray.sort(function (a, b) {
                return a - b
            });
            break;
        case SORT_CHOICE_DESCENDING:
            userArray.sort(function (a, b) {
                return b - a
            });
            break;
    }
    return userArray;
}

function getArrayOddEven(userArray) {
    const menu = `Choose an action
        1 - Display all even
        2- Display all Odd
    `;
    let userChoice = getMenuResult(menu, 1, 2);

    switch (userChoice) {
        case DISPLAY_SORT_EVEN:
            return userArray.filter((num) => num % 2 === 0);
        case DISPLAY_SORT_ODD:
            return userArray.filter((num) => num % 2 === 1);
    }
}

function processArray(userArray, userChoice = null) {
    const menu = `Choose an action
        1 - Display the sum of all numbers 
        2- Mean arithmetic number
        3 - Min and Max number
    `;
    if (!userChoice) {
        userChoice = getMenuResult(menu, 1, 3);
    }

    switch (userChoice) {
        case SUM_USER_ARRAY:
            return userArray.reduce(function (a, b) {
                return a + b;
            });
        case ARITHMETIC_USER_ARRAY:
            return processArray(userArray, SUM_USER_ARRAY) / userArray.length;
        case MIN_MAX_ARRAY_NUMBER:
            return `Result is:
                    Min: ${Math.min.apply(null, userArray)}
                    Max: ${Math.max.apply(null, userArray)}`;
    }
}

function getUserRepeatOperation(userArray) {
    if (confirm('Do you want to repeat the operation??')) {
        if (confirm('Repeat the operation with the old array?')) {
            return userArray;
        }
    }
}

