// compose :: [fn] -> c -> fn(c)
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

// compose :: [fn] -> c -> fn(c)
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

module.exports = {
  compose,
  pipe
};
