// fmap :: (a -> b) -> f a -> f b
[1, 2, 3].map((x) => x * 2).map(console.log);

// map :: (a -> b) -> [a] -> [b]
[1]
  .map((x) => x * 2)
  .map(Math.sqrt)
  .map(console.log);

const mapArray = (fn) => (array) => {
  return array.map(fn);
};

console.log(mapArray((x) => x * 2)([1, 2, 3]));
