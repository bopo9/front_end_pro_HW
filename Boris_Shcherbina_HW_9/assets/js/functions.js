const addItemBtnEl = document.getElementById('actions-form-btn');
const valueItemInput = document.getElementById('item-content-input');
const listEl = document.getElementById('todo-list');

const onAddItemClick = () => {
    const inputContent = valueItemInput.value;

    if (!inputContent) return;

    const liEl = document.createElement('li');
    liEl.innerText = inputContent;

    listEl.append(liEl);
    valueItemInput.value = '';
}

addItemBtnEl.addEventListener('click', onAddItemClick);