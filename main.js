const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }

  if (wolf.strength > wolf.strength) {
    return wolf.howl();
  }

  return "Tiger is as strong as Wolf!";
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);
console.log(result);

module.exports = { fight, myTiger, myWolf };
