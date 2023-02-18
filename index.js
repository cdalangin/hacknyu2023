//get user input: total cost, tips, # of people
let bill = 400;
let tips = 40;
let numOfPeople = 4;
const names = [];
const orders = [];
const phoneNumbers = [];


function getNamesAndNumbers(numOfPeople, phoneNumbers, names){
    for (i = 0; i < numOfPeople; i++){
        let name = prompt('Enter the name for person ' + numOfPeople[i] + ":");
        names.push(name);

        let phoneNumber = prompt('Enter your phone number: ');
        phoneNumbers.push(phoneNumber);
    }
}

function splitEvenly(bill, tips){
    let totalCost = bill + tips;
    let equalSplit = totalCost / numOfPeople;

    return totalCost, equalSplit;
}

function addExactAmounts(){ // makes an array for each item name and amount
    for (i = 0; i < names.length; i++){ //for each person
        let orderTotal = 0;
        let itemName = [];
        let itemAmount = [];
        let orders = [];

        while (True){ // each person enters item name and item amount
            let item = prompt('Enter your item name: ');
            itemName.push(item);
            
            let amount = prompt('Enter your item amount: ');
            orderTotal += amount;
            itemAmount.push(amount);
        }
        
        orders.push(orderTotal);
    }
}


//send text messages

