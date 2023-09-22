// Extenting from event emitter using Inheritance concepts
const PizzaShop =  require('./pizza-shop');
const DrinkMachine = require ('./DrinkMachine')
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "Paneer");