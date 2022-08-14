const { compose } = require("../2_simple_compose/compose");
const {
  eat,
  walk
} = require("../1_decompose_compose_examples/functional_programming");

const walkWalk = compose(walk, walk);
const eatWalkWalk = compose(walkWalk, eat);

console.log(eatWalkWalk(10));

const eatWalk = compose(walk, eat);
const eatWalkWalk1 = compose(walk, eatWalk);
console.log(eatWalkWalk1(10));

console.log(10 + 10 - (5 - 5));
console.log(10 + 10 - 5 - 5);
