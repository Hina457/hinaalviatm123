import inquirer from "inquirer";
console.log("Wellcome to My ATM Machine!");
let mybalance = 20000; //Dollar
let mypin = 11223;
let userID = "hinaalvi123";
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.Q1 === mypin)
    console.log("Correct pin code!!!");
let userIDAns = await inquirer.prompt([
    {
        type: "input",
        name: "Q2",
        message: "Enter User ID"
    }
]);
if (userIDAns.Q2 === userID)
    console.log("correct user id");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    if (amountAns.amount < mybalance) {
        mybalance -= amountAns.amount;
        console.log("your remaining balance is: " + mybalance);
    }
    else {
        console.log("Insufficient funds");
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is :" + mybalance);
}
if (operationAns.operation === "fast cash") {
    let cashAns = await inquirer.prompt([
        {
            name: "fastcash",
            message: "Select amount you want to fast cash",
            type: "list",
            choices: [2000, 3000, 5000, 1000]
        }
    ]);
}
console.log("Thank you!");
