// Write your solution in this file!

// Declare a variable in global scope called customerName using the var keyword.
var customerName = "John";

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Write a function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "still not bob";
}

// Declare a constant in global scope called leastFavoriteCustomer with an initial value.
const leastFavoriteCustomer = "Alice";

// Write a function that attempts to change the constant leastFavoriteCustomer.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Eve"; 
}

// Test the functions
console.log(customerName); 
upperCaseCustomerName();
console.log(customerName); 

setBestCustomer();
console.log(bestCustomer); 

overwriteBestCustomer();
console.log(bestCustomer);

console.log(leastFavoriteCustomer); 
changeLeastFavoriteCustomer(); 