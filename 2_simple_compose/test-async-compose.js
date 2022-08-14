const { compose, pipe } = require("./compose");
const { asyncPipe, asyncCompose } = require("./async-compose");

const eatAsync = async (energy) => energy + 10;
const drinkAsync = async (energy) => energy + 5;
const walkAsync = async (energy) => energy - 5;

const eatDrinkWalk = compose(walkAsync, drinkAsync, eatAsync);
console.log(eatDrinkWalk(10));
// console.log(eatDrinkWalk(10).then(console.log));

const eatDrinkWalkAsync = asyncCompose(walkAsync, drinkAsync, eatAsync);
eatDrinkWalkAsync(10).then(console.log);
