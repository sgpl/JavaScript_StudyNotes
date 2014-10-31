// set one
var foo = 2 + 3; // 5
foo = foo + 1; // 6
foo = foo * 8; // 48


// set two 
var bar = 3 + 3; // 6
bar = bar + 1; // 7
bar = bar * 8; // 56

// function 
// can enter parameters within the paranthesis if we want. 
// will help us pass data to the function 

// function doSomething(paramOne) {
// 	paramOne = paramOne + 3; 
// 	paramOne = paramOne + 1;
// 	paramOne = paramOne * 8;
// 	// paramOne = (paramOne + 3 + 1) * 8; 
// 	// returns undefined as doSomething currently doesn't return stuff
// 	return paramOne;
// }

// var foo1 = doSomething(2);
// var bar1 = doSomething(3);
// // alert("foo is" + foo1 " and bar is " + bar1);
// alert("foo1 is " + foo1);

// ----------------

function doSomething(paramOne, paramTwo) {
	paramOne = paramOne + 3; 
	paramOne = paramOne + 1;
	paramOne = paramOne * 8;
	// paramOne = (paramOne + 3 + 1) * 8; 
	// returns undefined as doSomething currently doesn't return stuff
	return paramOne * paramTwo;
}

var foo1 = doSomething(2, 2);
var bar1 = doSomething(3, 2);
// alert("foo is" + foo1 " and bar is " + bar1);
alert("foo1 is " + foo1 + " and bar1 is " + bar1);


// can create functions and assign them to variables in javascript: 
