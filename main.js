#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
async function welcome() {
    let title = chalkanimation.rainbow("\t\t\t\tWelcome to Console Cashier!");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
}
await welcome();
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: (chalk.yellowBright("Enter your pin number")),
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("Correct pin code!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.cyanBright("Please select an option")),
            type: "list",
            choices: ["WithDraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "WithDraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: (chalk.yellow("Enter your amount")),
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(chalk.green("Your remaining balance is:" + myBalance));
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.green("Your balance is:" + myBalance));
    }
}
else {
    console.log(chalk.red("Incorrect pin number"));
}
