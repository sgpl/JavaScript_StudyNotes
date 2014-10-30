var sum = 4 + 5; // 9 

// + is an operator that adds two operands together. 
// = is an assignment operator 
// this whole thing is an expression that needs to be evaluated. 
// multiline comment starts with /* ends with */

var difference = 4 - 5; // -1

// js engine can evaluate / execute one statement faster than two statements. 
// so we can do: (white space doesnt matter in javascript)

var sum1 = 4 + 5, 
	dif1 = 4 - 5, 
	mult = 4 * 5, 
	divi = 4 / 5;

var foo = 4 * (5 - 34) + 34 / 4; 
// math is like real math, can use parenthesis to do ^

var bar = foo + 1;

var nString = "Hello " + "World!"; // Hello World!
// string contatnation 

var sum2 = 4 + 5  + "7"; // evaluates left to right, so 9, then 97
var sum3 = "6" + 5; //65
var sum4 = "4" + 5  + 7; // 457

var fooo = parseInt("34", 10); //fooo is 34
var fooo = parseInt("34s57", 10); //fooo is 34 still as it hit a non numeric value
var fooo = parseInt("3.14", 10); //fooo is 3
var fooo = parseFloat("3.14", 10); //fooo is 3.14