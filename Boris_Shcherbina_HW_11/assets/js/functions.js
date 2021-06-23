function getValueFromInputs(){
    return[
        document.getElementById('actions-form-btn'),
        document.getElementById('item-title-input'),
        document.getElementById('item-description-input'),
        document.getElementById('todo-list'),
        document.getElementById('item-template').innerHTML
    ]
}

function TodoList(addItemBtnEl,valueItemTitle,valueItemDescription,listEl,template) {
    this.addItemBtnEl = addItemBtnEl;
    this.valueItemTitle = valueItemTitle;
    this.valueItemDescription = valueItemDescription;
    this.listEl = listEl;
    this.template = template;
    this.crossOut = onClickItemCrossOut;

    this.addNewitem = addNewItem;
    this.onClickItemDelete = onClickItemDelete;
    this.onClickItemCopy = onClickItemCopy;

    this._render = (template, dataObject) => Object
        .keys(dataObject)
        .reduce((acc, key) => {
            return acc.replaceAll(`{{${key}}}`, dataObject[key]);
        }, this.template);


    this.addItemBtnEl.addEventListener('click', this.addNewitem.bind(this));
    this.listEl.addEventListener('click', this.onClickItemDelete.bind(this));
    this.listEl.addEventListener('click', this.onClickItemCopy.bind(this));
    this.listEl.addEventListener('click', this.crossOut.bind(this));

}

function addNewItem(itemTitle, itemDesc) {
    if (!itemTitle || !itemDesc) {
        itemTitle = false;
        itemDesc = false;
    }
    if (!this.valueItemTitle.value && !this.valueItemDescription.value && !itemTitle && !itemDesc) return;

    const date = new Date();

    const liEl = document.createElement('li');
    liEl.innerHTML = this._render(this.template, {
        label: (itemTitle) ? itemTitle : this.valueItemTitle.value,
        description: (itemDesc) ? itemDesc : this.valueItemDescription.value,
        date: `${date.getFullYear()} ${date.getMonth()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    });
    this.listEl.append(liEl);


    this.valueItemTitle.value = '';

    this.valueItemDescription.value = '';
}

function onClickItemDelete(evt){
    if (evt.target.dataset['action'] === 'delete'){
        evt.target.parentElement.remove();
    }
}

function onClickItemCopy(evt){
    let dataArr = [];
    if (evt.target.dataset['action'] === 'copy'){
        Array.prototype.forEach.call(evt.target.parentElement.children, function (value, index){
            dataArr.push(value.textContent)
        });
        this.addNewitem(dataArr[0],dataArr[1]);
    }
}

function onClickItemCrossOut(evt){
    if (evt.target.dataset['action'] === 'cross-out'){
        if (evt.target.checked){
            evt.target.parentElement.classList.add('line-through');
        }else{
            evt.target.parentElement.classList.remove('line-through')
        }
    }
}

const Todo = new TodoList(...getValueFromInputs());


