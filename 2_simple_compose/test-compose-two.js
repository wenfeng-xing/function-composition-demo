const { composeTwo, pipeTwo } = require("./compose-two");
const R = require("ramda");
const {
  eat,
  drink,
  walk,
  run
} = require("../1_decompose_compose_examples/functional_programming");

const eatDrink = composeTwo(drink, eat);

const eatDrinkWalk = pipeTwo(eatDrink, walk);

console.log(eatDrinkWalk(10));

const runFaster = R.curry(run)(2);
const eatDrinkWalkRun = pipeTwo(eatDrinkWalk, runFaster);

console.log(eatDrinkWalkRun(10));
