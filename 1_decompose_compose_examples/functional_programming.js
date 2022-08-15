const eat = (energy) => {
  return energy + 10;
};
const drink = (energy) => {
  return energy + 5;
};
const walk = (energy) => {
  return energy - 5;
};

const run = (speed, energy) => {
  return energy - speed * 10;
};

const v1 = eat(10);
const v2 = drink(v1);
const v3 = walk(v2);
console.log(v3);

// console.log(walk(drink(eat(10))));
// console.log(walk(drink(eat(10))));
// console.log(walk(drink(eat(10))));

module.exports = {
  eat,
  drink,
  walk,
  run
};
