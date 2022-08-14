const double = (x) => x * 2;

const doubleMonad = (x) => {
  return [x * 2];
};

console.log([1, 2, 3].map(doubleMonad));
console.log([1, 2, 3].flatMap(doubleMonad));
