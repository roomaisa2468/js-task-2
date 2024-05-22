///////////////////// chatpter-3 ///////////////////
/////////////// ques-1 ////////////////
// Declare a variable called age and assign it your age
let age = 15;

// Display your age in an alert box
alert("I'm 15 years old");

//////////////// ques-2 /////////////
var visit = 14;
alert("you have visited this site " + visit + " time");
 
////////////// ques-3 //////////////
var birthYear = 1990;
        
var message = "My birth year is " + birthYear + "<br>Data type of my declared variable is " + typeof birthYear;

document.write(message);
/////////////////// ques-4 ///////////////////
// Visitor's name
var visitorName = "John Doe";

// Product title
var productTitle = "T-shirt";

// Quantity of products
var quantity = 5;

// Construct the message
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";

// Display the message in an alert box
alert(message);



////////////// chapter 4 //////////////////////////
/////////////// ques-1 ///////////////////
var variable1, variable2, variable3;
//////////////// ques-2 ////////////////////

 //Legal variables names
 var  firstName
 var myVariable
var num10
 var _counter
 var $price


 //Illegal variables names
//   var 123variable
//  var my variable 
// var (Reserved keyword)
// var my-variable 
//  var alert (Reserved keyword)

///////////////////////////// chap-5 ///////////////////////////////////////////

//////////////////////////// ques-1 ////////////////
let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");


let sum = num1 + num2;

console.log(sum);



let num3 = +prompt("Enter the first number:");
let num4 = +prompt("Enter the second number:");


let sum2 = num3 - num4;

console.log(sum2);


let num5 = +prompt("Enter the first number:");
let num6 = +prompt("Enter the second number:");


let sum3 = num5 * num6;

console.log(sum3);

let num7 = +prompt("Enter the first number:");
let num8 = +prompt("Enter the second number:");


let sum4 = num7 % num8;

console.log(sum4);




var variable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + variable + "<br>");

// c. Initialize the variable with some number.
variable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + variable + "<br>");

// e. Increment the variable.
variable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + variable + "<br>");

// g. Add 7 to the variable.
variable += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + variable + "<br>");

// i. Decrement the variable.
variable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + variable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = variable % 3;

// l. Output: “The remainder is : 0”.
document.write("The remainder is: " + remainder);

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////


var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

// Display the cost in the browser

document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");

//////////////////////////////////////////////////////
function displayMultiplicationTable(number) {
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
}

// Call the function to display the multiplication table of 4
displayMultiplicationTable(4);

////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
function calculateTotalCost() {
    // Store the prices and quantities of items
    var priceItem1 = 650; // Price of item 1
    var priceItem2 = 100; // Price of item 2
    var quantityItem1 = 3; // Ordered quantity of item 1
    var quantityItem2 = 7; // Ordered quantity of item 2
    var shippingCharges = 100; // Shipping charges

    // Calculate the total cost
    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

    // Display the receipt in the browser
    document.write("<h2>Receipt</h2>");
    document.write("<p>The price of item 1 is: " + priceItem1 + " PKR</p>");
    document.write("<p>The quantity of item 1 is: " + quantityItem1 + "</p>");
    document.write("<p>The price of item 2 is: " + priceItem2 + " PKR</p>");
    document.write("<p>The quantity of item 2 is: " + quantityItem2 + "</p>");
    document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
    document.write("<p><strong>Total cost of your order is: " + totalCost + " PKR</strong></p>");
}

// Call the function after the document is loaded
calculateTotalCost();
///////////////////////////////////////////////////////////            


///////////////////////////////////////////////////////////            

function calculateTotalCost() {
    // Store the prices and quantities of items
    var priceItem1 = 650; // Price of item 1
    var priceItem2 = 100; // Price of item 2
    var quantityItem1 = 3; // Ordered quantity of item 1
    var quantityItem2 = 7; // Ordered quantity of item 2
    var shippingCharges = 100; // Shipping charges

    // Calculate the total cost
    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

    // Display the receipt in the browser
    document.write("<h2>Receipt</h2>");
    document.write("<p>The price of item 1 is: " + priceItem1 + " PKR</p>");
    document.write("<p>The quantity of item 1 is: " + quantityItem1 + "</p>");
    document.write("<p>The price of item 2 is: " + priceItem2 + " PKR</p>");
    document.write("<p>The quantity of item 2 is: " + quantityItem2 + "</p>");
    document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
    document.write("<p><strong>Total cost of your order is: " + totalCost + " PKR</strong></p>");
}

// Call the function after the document is loaded
calculateTotalCost();
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Store total marks and marks obtained by the student
var totalMarks = 980;
var marksObtained = 804;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Store the amount in US dollars and Saudi Riyals

var usDollars = 10;
var saudiRiyals = 25;

// Define exchange rates
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;

// Convert the total currency to Pakistani Rupees in a single expression
var totalCurrencyInPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// Display the result in the browser
document.write("Total currency in PKR: " + totalCurrencyInPKR);

/////////////////////// ques-10 ////////////////////////
//  Initialize the variable with some number
number = 42

//  Perform all calculations in a single expression
result = ((number + 5) * 10) / 2

// Print the result
console.log("The result of the arithmetic operations is:", result)
/////////////////////////// ques-11 ///////////////////////
// Store the current year and birth year in variables
var currentYear = 2016;
var birthYear = 1992;

// Calculate the two possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the result to the screen
document.write("They are either " + age1 + " or " + age2 + " years old.");
////////////////////////// ques-12 ///////////////////////
 // Store the radius of the circle in a variable
 var radius = 20;
    
 // Define the value of π (pi)
 var pi = 3.142;
 
 // Calculate the circumference
 var circumference = 2 * pi * radius;
 
 // Calculate the area
 var area = pi * radius * radius;
 
 // Output the results to the screen
 document.write("The radius of the circle is " + radius + "<br>");
 document.write("The circumference is " + circumference.toFixed(3) + "<br>");
 document.write("The area is " + area.toFixed(1));

//////////////////////////////// ques-13 /////////////////////////////////////
// Store your favorite snack into a variable
var favoriteSnack = "chocolate chip";
    
// Store your current age into a variable
var currentAge = 15;

// Store a maximum age into a variable
var maxAge = 65;

// Store an estimated amount per day (as a number)
var amountPerDay = 3;

// Calculate the total amount of snacks for the rest of your life
var yearsRemaining = maxAge - currentAge;
var totalAmount = yearsRemaining * 365 * amountPerDay;

// Output the result to the screen
// document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");