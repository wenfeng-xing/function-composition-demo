const composePromise =
  (...functions) =>
  (initialValue) =>
    functions.reduceRight(
      (sum, fn) => Promise.resolve(sum).then(fn),
      initialValue
    );

const {
  eat,
  drink,
  walk
} = require("../1_decompose_compose_examples/functional_programming");

const eatDrinkWalkPromise = composePromise(walk, drink, eat);

eatDrinkWalkPromise(10).then(console.log);
