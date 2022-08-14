class Person {
  constructor() {
    this.energy = 10;
  }

  eat() {
    this.energy += 10;
  }

  drink() {
    this.energy += 5;
  }

  walk() {
    this.energy -= 5;
  }
}

const p = new Person();

p.eat();
p.drink();
p.walk();
console.log(p.energy);
