const R = require("ramda");
const {
  eat,
  drink,
  walk,
  run
} = require("../1_decompose_compose_examples/functional_programming");
// add :: T -> T -> T
const add = (x) => (y) => x + y;

// inc :: T -> T
const inc = add(10);

const sum3 = (x, y, z) => x + y + z;
const sum3Curried = R.curry(sum3);

console.log(sum3Curried(1)(1)(1));

console.log(run(2));
console.log(run(2, 10));

const runCurried = R.curry(run);
const runFaster = runCurried(2);

console.log(runFaster(10));

// eat -> drink -> walk -> runFaster -> energy
console.log(runFaster(walk(drink(eat(10)))));
