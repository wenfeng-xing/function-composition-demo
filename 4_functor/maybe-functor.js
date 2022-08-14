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

  // map :: (a -> b) -> Maybe a -> Maybe b
  map(f) {
    return this.isNothing() ? new Maybe(null) : new Maybe(f(this._value));
  }

  unwrap() {
    return this._value;
  }
}

Maybe.of(10)
  .map((x) => 10 * 2)
  .map(console.log);
Maybe.of(null)
  .map((x) => 10 * 2)
  .map(console.log);
