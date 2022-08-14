// composeTwo :: (B -> C) -> (A -> B) -> A -> (A -> C)
const composeTwo = (g, f) => (value) => {
  return g(f(value));
};

// pipe :: (A -> B) -> (B -> C) -> A -> (A -> C)
const pipeTwo = (g, f) => (value) => {
  return f(g(value));
};

module.exports = {
  composeTwo,
  pipeTwo
};
