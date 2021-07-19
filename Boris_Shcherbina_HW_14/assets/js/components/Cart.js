export default class Cart {
    #price = [];
    constructor(price, name) {
        this.#price = price;
        this.name = name;
    }

    get price(){
        return this.#price;
    }

    getTotalPrice(){
        let cartPrice = 0;
        this.#price.forEach(e => {
            cartPrice += e;
        })
        return 'Total price: ' + cartPrice;
    }
}