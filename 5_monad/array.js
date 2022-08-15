const double = (x) => x * 2;

const doubleMonad = (x) => {
  return [x * 2];
};

console.log([1, 2, 3].map(doubleMonad));
console.log([1, 2, 3].flatMap(doubleMonad));

const replicateThree = (x) => {
  return [x, x * 2, x * 3];
};

console.log([1, 2, 3].map(replicateThree));
console.log([1, 2, 3].flatMap(replicateThree));
