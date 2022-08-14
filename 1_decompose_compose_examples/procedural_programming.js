let energy = 10;

const eat = () => (energy += 10);
const drink = () => (energy += 5);

const walk = () => (energy -= 5);

eat();
drink();
walk();

console.log(energy);

eat();
drink();
walk();

console.log(energy);
