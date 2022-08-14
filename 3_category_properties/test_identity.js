const { identity } = require("../2_simple_compose/identity");
const {
  eat
} = require("../1_decompose_compose_examples/functional_programming");

console.log(identity(eat(10)) === eat(identity(10)));
console.log(identity(eat(10)));
console.log(eat(identity(10)));
