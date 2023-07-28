// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. Play again

// Declare a variable to for prompt using npm package promt-sync
const prompt = require('prompt-sync')();

// 1. Create function for Deposit
const deposit = () => {
    
    while (true) {
        // Get the user input using the prompt var
        const despositAmount = prompt('Enter the deposit amount: ');

        // Convert the string to a number
        const numberDepositAmount = parseFloat(despositAmount);

        // Check if deposit amount is not null or not a negative amount
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Invalid deposit amount, try again.');
        } else {
            return numberDepositAmount;
        }
    }
}

// 2. Determine number of lines to bet
const getNumberofLines = () => {

    while (true) {
        // Get the user input using the prompt var
        const lines = prompt('Enter the number of lines to bet on (1-3): ');

        // Convert the string to a number
        const numberofLines = parseFloat(lines);

        // Check if deposit amount is not null or not a negative amount
        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
            console.log('Invalid number of lines, try again.');
        } else {
            return numberofLines;
        }
    }
}

// 3. Collect bet amount based on the balance of the user
const getBetAmount = (balance, lines) => {

    while (true) {
        // Get the user input using the prompt var
        const bet = prompt('Enter the bet amount per line: ');

        // Convert the string to a number
        const numberBet = parseFloat(bet);

        // Check if the bet amount is not null or not a negative
        if (isNaN(numberBet) || numberBet <= 0 || numberofLines > (balance / lines)) {
            console.log('Invalid bet, try again.');
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberofLines = getNumberofLines();
const bet = getBetAmount(balance, numberofLines);