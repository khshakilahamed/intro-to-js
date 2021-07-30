var firstName = "Kh. ";
var lastName = "Shakil";

// var fullName = firstName + lastName;
var fullName = firstName + " X " + lastName;

// console.log(fullName);


// integer 
var sunglass = 3;

// float 
var price = 99.99;


var onionPrice = '42';
var eggPrice = '41.5';
// var totolPrice = onionPrice + eggPrice;
// console.log(totolPrice);


// ------ converted to Integer ------
var oninonPriceNumber = parseInt(onionPrice);
console.log("Onion price: ", oninonPriceNumber);


// --------- converted to Float ---------
var eggPriceNumber = parseFloat(eggPrice);
console.log("Egg price: ", eggPriceNumber);

console.log("Total Price", oninonPriceNumber + eggPriceNumber);