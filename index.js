//get user input: total cost, tips, # of people
let bill = 400;
let tips = 40;
let numOfPeople = 4;
const names = [];
const phoneNumbers = [];


function getNamesAndNumbers{
    for (i = 0; i < numOfPeople; i++){
        let name = prompt('Enter the name for person ' + numOfPeople[i] + ":");
        phoneNumbers.push(name);

        let phoneNumber = prompt('Enter your phone number: ');
        phoneNumbers.push(phoneNumber);
    }
}

//do calculations with bill (split evenly or exact amounts)
let totalCost = bill + tips;
let equalSplit = totalCost / numOfPeople;

//send text messages
