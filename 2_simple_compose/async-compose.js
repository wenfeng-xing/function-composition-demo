// asyncPipe :: ([fn]) -> x -> async fn(x)
const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, f) => f(await y), x);

// asyncPipe :: ([fn]) -> x -> async fn(x)
const asyncCompose =
  (...fns) =>
  (x) =>
    fns.reduceRight(async (y, f) => f(await y), x);

module.exports = {
  asyncPipe,
  asyncCompose
};
