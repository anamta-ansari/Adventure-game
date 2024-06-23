// usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//classes for player and opponent
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease = () => {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  };
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease = () => {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  };
}
//enter name and select opponent
let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Enter your name",
  },
]);

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select your Opponent",
    choices: ["skeleton", "Zombie", "Dragon"],
  },
]);
//gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

do {
  if (opponent.select === "skeleton") {
    let ask = await inquirer.prompt([
        {
          name: "option",
          type: "list",
          message: "What would you like to do",
          choices: ["Attack", "Drink portion", "Run for your life"],
        },
      ]);
    if (ask.option === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option === "Drink portion") {
      p1.fuelIncrease();
      console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
    }
    if (ask.option === "Run for your life") {
      console.log("You Loose, Better Luck Next Time");
      process.exit();
    }
  }

  if (opponent.select === "Zombie") {
    let ask = await inquirer.prompt([
        {
          name: "option",
          type: "list",
          message: "What would you like to do",
          choices: ["Attack", "Drink portion", "Run for your life"],
        },
      ]);
    if (ask.option === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option === "Drink portion") {
      p1.fuelIncrease();
      console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
    }
    if (ask.option === "Run for your life") {
      console.log("You Loose, Better Luck Next Time");
      process.exit();
    }
  }

  if (opponent.select === "Dragon") {
    let ask = await inquirer.prompt([
        {
          name: "option",
          type: "list",
          message: "What would you like to do",
          choices: ["Attack", "Drink portion", "Run for your life"],
        },
      ]);
    if (ask.option === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.option === "Drink portion") {
      p1.fuelIncrease();
      console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
    }
    if (ask.option === "Run for your life") {
      console.log("You Loose, Better Luck Next Time");
      process.exit();
    }
  }
} while (true);
