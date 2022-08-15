// then :: (a -> b) -> Promise a -> Promise b (like a functor)
Promise.resolve(1)
  .then((e) => e * 2)
  .then(console.log);

// then :: Promise a -> (a -> Promise b) -> Promise b (like a monad)
Promise.resolve(1)
  .then((e) => Promise.resolve(e * 2))
  .then(console.log);
