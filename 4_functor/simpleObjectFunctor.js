const obj = { value: 10 };

// mapObject :: (a -> b) -> {a} -> {b}
const mapObject = (fn) => (obj) => {
  return { value: fn(obj.value) };
};

const eat = (x) => {
  return x + 10;
};

console.log(mapObject(eat)(obj));
