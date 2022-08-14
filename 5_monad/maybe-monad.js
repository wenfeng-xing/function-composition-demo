class Maybe {
  static of(value) {
    return new Maybe(value);
  }
  constructor(value) {
    this._value = value;
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  map(f) {
    // f :: (a -> b) -> f a -> f b
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value));
  }

  join(f) {
    // f :: m a -> (a -> m b) -> m b
    return this.isNothing() ? this : f(this._value);
  }

  unwrap() {
    return this._value;
  }
}

Maybe.of(10)
  .join((x) => Maybe.of(x * 2))
  .join((x) => Maybe.of(x * 10))
  .join(console.log);

Maybe.of(null)
  .join((x) => Maybe.of(x * 2))
  .join(console.log);
