alert('Hello!!');

(function main(oldArray) {
    let userArray, userMenuResult, sortedArray, oldUserArray;

    const menuMessage = `
        Choose an action:
        1 - sort array
        2 - odd/even
        3 - sum, avg
    `;

    if (!oldArray){
        userArray = getArrayFromUser('Please, insert numbers separated by space');
    }

    userMenuResult = getMenuResult(menuMessage, 1, 3);

    sortedArray = processUserChoice(userMenuResult, userArray || oldArray);

    alert(sortedArray);
    console.log(sortedArray);

    oldUserArray = getUserRepeatOperation(userArray || oldArray);

    (oldUserArray)? main(oldUserArray) : main();
})();