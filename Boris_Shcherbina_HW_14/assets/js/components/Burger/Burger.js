export default class Burger {
    #toppings = [];

    constructor(size) {
        this.size = size;
        this.properties = {
            [Burger.SIZES.small]: {
                price: 50,
                ccal: 150
            },
            [Burger.SIZES.medium]: {
                price: 75,
                ccal: 200
            },
            [Burger.SIZES.extra]: {
                price: 90,
                ccal: 400
            }
        };

        this.init();
    }

    static SIZES = {
        small: 'small',
        medium: 'medium',
        extra: 'extra'
    }

    static TOPPINGS = {
        cheese: { price: 10, ccal: 20 },
        salad: { price: 20, ccal: 5 },
        potato: { price: 15, ccal: 10 },
        condiment: { price: 15, ccal: 0 },
        mayonnaise: { price: 20, ccal: 5 },
    }

    get toppings() {
        return this.#toppings;
    }

    set toppings(value) {
        this.#toppings = value;
    }

    init() {
        const sizeProp = this.properties[this.size];
        this.price = sizeProp ? sizeProp.price : 0;
        this.ccal = sizeProp ? sizeProp.ccal : 0;
    }

    getPrice() {
        let toppingsPrice = 0;
        this.#toppings.forEach(e => {
            toppingsPrice += e.price;
        });
        return this.price + toppingsPrice;
    }

    getCal() {
        console.log(this.#toppings);
        return this.ccal + this.#toppings.reduce((acc, e) => acc + e.ccal, 0);
    }

    addTopping(topping) {
        this.#toppings = topping;
        // topping.forEach(e => {
        //     this.#toppings.push(e);
        // });
    }
}
