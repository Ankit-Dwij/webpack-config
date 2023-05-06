const pizzaRecipe = {
  crust: "extra-thin",
  topping: ["cheese", "mushrooms", "corn"],
  extra_cheese: true,
};
const pizza = { ...pizzaRecipe, size: "large" };

console.log(pizzaRecipe);
console.log(pizza);
console.log("hey");
