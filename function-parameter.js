function tax(Euro) {
console.log("Per year my car tax is ", Euro);
console.log('Must I have to pay tax every year for my car');
var oneYear = 365;
var perdayTaxQuantity = Euro/oneYear;

return perdayTaxQuantity;



}

var amountOfTax = 520;
var perdayTax = tax(amountOfTax);

console.log('per day tax', perdayTax.toFixed(3) )

