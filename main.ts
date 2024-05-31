#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
        name:"pin",
        message:"Enter your pin number",
        type:"number",
    }
    ]
);
if (pinAnswer.pin === myPin){
    console.log("Correct pin code!");

let operationAns = await inquirer.prompt(
        [
            {
              name:"operation",
              message:"Please select an option",
              type:"list",
              choices:["WithDraw","Check Balance"]
            }
        ]
    );

    
    if(operationAns.operation === "WithDraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter your amount",
                    type:"number"
                }
            ]
        );
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance)
    }else if(operationAns.operation === "Check Balance"){
        console.log("Your balance is:" + myBalance)
    }
}
else{
    console.log("Incorrect pin number")
}