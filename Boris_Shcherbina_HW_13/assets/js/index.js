function Accordion(element){
    this.element = element;

    this.init = accordionInit;
    this.toggle = toggleItem;
    this.addBlock = addBlock;
    this.openAll = openAll;
    this.closeAll = closeAll;

    this._getOpenIndexes = function(){
        let indexesArr = [];
        Array.prototype.forEach.call(this.element.children, function(value, index){
            if (value.classList.contains('extended')) {
               indexesArr.push(index);
            }
        });
        return indexesArr;
    }

    this._onItemClick = function(evtObj){
        evtObj.target.parentElement.classList.toggle('extended');
    }

    this.element.addEventListener('click', this._onItemClick.bind(this));
    this.element.addEventListener('click', this._getOpenIndexes.bind(this));
}

function accordionInit(){
    Array.prototype.forEach.call(this.element.children, e => {
       e.classList.add('accordion-item');
       if (e.children.length >= 2){
           e.children[0].classList.add('title');
           e.children[1].classList.add('content');
       }else{
           throw new Error('Invalid accordion item');
       }
    });
}

function toggleItem(index){
    if (Array.isArray(index)){
        index.map((value) => {
            this.element.children[value].classList.toggle('extended');
        });
    }else{
        this.element.children[index].classList.toggle('extended');
    }
}

function addBlock(title, description){
    this.element.insertAdjacentHTML('beforeend', `<div class="accordion-item">
        <div class="title">${title}</div>
        <div class="content">${description}</div>
    </div>`);
}

function openAll(){
    Array.prototype.map.call(this.element.children, e => {
        e.classList.toggle('extended', true);
    });
}

function closeAll(){
    Array.prototype.map.call(this.element.children, e => {
        e.classList.toggle('extended', false);
    });
}

const mainAccordion = new Accordion(document.getElementById('accordion'));

mainAccordion.init();

mainAccordion.toggle([0,1,2]);

// mainAccordion.openAll();

mainAccordion.closeAll();