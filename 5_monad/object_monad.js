const map = (fn) => (obj) => {
  return { value: fn(obj.value) };
};
const flatmap = (fn) => (obj) => fn(obj.value);

const fn = (x) => x;
const fnMonad = (x) => {
  return { value: x };
};

console.log(map(fn)({ value: 10 }));

console.log(flatmap(fnMonad)({ value: 10 }));
