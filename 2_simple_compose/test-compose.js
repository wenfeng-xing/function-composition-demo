const R = require("ramda");
const {
  eat,
  drink,
  walk,
  run
} = require("../1_decompose_compose_examples/functional_programming");
const { compose, pipe } = require("./compose");
const { watch } = require("./watch");
const runFaster = R.curry(run)(2);
const eatDrinkWalkRun = compose(
  runFaster,
  walk,
  watch("after drink: "),
  drink,
  eat
);
console.log(eatDrinkWalkRun(10));

const eatDrinkWalkRun1 = pipe(
  eat,
  drink,
  watch("after drink: "),
  walk,
  runFaster
);
console.log(eatDrinkWalkRun1(10));

const walkDrinkEatRunFaster = pipe(
  walk,
  drink,
  watch("after drink: "),
  eat,
  runFaster
);
console.log(walkDrinkEatRunFaster(10));
