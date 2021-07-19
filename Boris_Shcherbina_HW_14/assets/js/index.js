import Burger from "./components/Burger/Burger.js";
import BossBurger from "./components/BossBurger.js";
import Cart from "./components/Cart.js";

const burger = new BossBurger(Burger.SIZES.medium);
const bigBoss = new BossBurger(Burger.SIZES.extra);

let toppings = [
    Burger.TOPPINGS.cheese,
    Burger.TOPPINGS.condiment,
    Burger.TOPPINGS.mayonnaise,
    Burger.TOPPINGS.potato,
    Burger.TOPPINGS.salad
];

burger.addTopping(toppings);
bigBoss.addTopping(toppings);

console.log(burger.getPrice());
console.log(bigBoss.getPrice());

let prices = [
    burger.getPrice(),
    bigBoss.getPrice(),
];


const cart = new Cart(prices);
console.log(cart.getTotalPrice());
