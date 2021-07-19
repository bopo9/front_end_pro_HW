import Burger from "./Burger/Burger.js";
export default class CheeseBurger extends Burger {
    constructor(size) {
        super();
        this.size = size;

        this.properties = {
            [Burger.SIZES.small]: {
                price: 50,
                ccal: 20
            },
            [Burger.SIZES.medium]: {
                price: 75,
                ccal: 30
            },
            [Burger.SIZES.extra]: {
                price: 100,
                ccal: 40
            }
        };

        this.init();
    }

    addTopping(topping) {
        super.addTopping(topping);
    }
}